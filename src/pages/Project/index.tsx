import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../../components/Header';
import MenuBar from '../../components/MenuBar';
import Card from '../../components/Card';
import { logout } from '../../services/auth';
import { api } from '../../services/api';
import Status from '../../components/Status';
import { useStatus } from '../../hooks/useStatus';
import SpeechRecognition, {
  useSpeechRecognition,
} from 'react-speech-recognition';
import { stringify } from 'querystring';

interface ILocationState {
  from: {
    pathname: string;
  };
  project_id: string;
}

interface IStep {
  id: string;
  user_id: string;
  project_id: string;
  parent_id: string;
  type: string;
  content: string;
  createdAt: string;
  upgatedAt: string;
}

interface ISpeechIf {
  onStartListening: any;
  onStopListening: any;
  isListening: any;
  getTranscript: any;
}

const Project: React.FC = () => {
  const [steps, setSteps] = React.useState<IStep[]>([]);
  const [inputStatus, setInputStatus] = useStatus(null);
  const location = useLocation();
  const { project_id } = location.state as ILocationState;
  const [listeningId, setListeningId] = React.useState('');
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    console.log('Speech Recognition not supported');
  }

  React.useEffect(() => {
    api
      .get(`users/projects/steps`, { params: { project_id } })
      .then(response => {
        response.data ? setSteps(response.data) : setSteps([]);
      })
      .catch(error => console.log(error));
    console.log('Request made to: users/projects/steps: ', project_id);
  }, [project_id]);

  function onNewCard(parent_id: string, type: string): void {
    api
      .post(`users/projects/steps`, { project_id, parent_id, type })
      .then(response => {
        response.data && setSteps([...steps, response.data]);
        setInputStatus({
          type: 'success',
          fields: '',
          message: 'New card created.',
        });
      })
      .catch((error: any) => {
        setInputStatus({
          type: 'error',
          message: 'Failed to create new card: ' + error.response.data.message,
          fields: '',
        });
      });
  }

  function onDeleteCard(step_id: string) {
    api
      .delete(`users/projects/steps`, { data: { step_id } })
      .then(() => {
        setSteps(prevState => prevState.filter(step => step.id !== step_id));
        setInputStatus({
          type: 'success',
          fields: '',
          message: 'Card deleted successfully.',
        });
      })
      .catch((error: any) => {
        setInputStatus({
          type: 'error',
          message:
            'Request to delete card failed: ' + error.response.data.message,
          fields: '',
        });
      });
  }

  function onChangeContent(id: string, content: string) {
    const step = steps.filter(step => step.id === id)[0];
    api
      .patch(`users/projects/steps`, { step_id: step.id, content })
      .then(response => {
        setInputStatus({
          type: 'success',
          fields: '',
          message: 'Changes saved.',
        });
      })
      .catch((error: any) => {
        console.log(error);
        setInputStatus({
          type: 'error',
          message: 'Failed to save changes: ' + error.response.data.message,
          fields: '',
        });
      });
  }

  function onStartListening(id: string) {
    if (listening) {
      SpeechRecognition.stopListening();
    }
    SpeechRecognition.startListening({ continuous: true });
    resetTranscript();
    setListeningId(id);
  }

  function onStopListening(id: string) {
    SpeechRecognition.stopListening();
    setListeningId('');
    resetTranscript();
  }

  function isListening(id: string) {
    return listeningId === id;
  }

  function getTranscript(id: string) {
    if (listeningId === id) return transcript;
    return '';
  }

  const speechIf: ISpeechIf = {
    onStartListening: onStartListening,
    onStopListening: onStopListening,
    isListening: isListening,
    getTranscript: getTranscript,
  };

  return (
    <>
      <Header title="Self Therapy" />
      <MenuBar backPath="/dashboard" handleLogout={logout} />
      <Status status={inputStatus} />
      {steps.map(step =>
        step.parent_id === '00000000-0000-0000-0000-000000000000' ? (
          <Card
            key={step.id}
            step={step}
            list={steps}
            onNewCard={onNewCard}
            onDeleteCard={onDeleteCard}
            onChangeContent={onChangeContent}
            speechIf={speechIf}
          />
        ) : (
          <></>
        ),
      )}
    </>
  );
};

export default Project;
