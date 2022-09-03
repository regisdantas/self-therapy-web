import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../../components/Header';
import MenuBar from '../../components/MenuBar';
import Card from '../../components/Card';
import { logout } from '../../services/auth';
import { api } from '../../services/api';
import { getPlaceholder } from '../../models/steps';
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

const Project: React.FC = () => {
  const [steps, setSteps] = React.useState<IStep[]>([]);
  const location = useLocation();
  const { project_id } = location.state as ILocationState;
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
      })
      .catch(error => console.log(error));
    console.log('Create ', parent_id, type);
  }

  function onDeleteCard() {
    console.log('Delete');
  }

  return (
    <>
      <Header title="Self Therapy" />
      <MenuBar backPath="/dashboard" handleLogout={logout} />
      {steps.map(step =>
        step.parent_id === '00000000-0000-0000-0000-000000000000' ? (
          <Card
            key={step.id}
            step={step}
            list={steps}
            onNewCard={onNewCard}
            onDeleteCard={onDeleteCard}
          />
        ) : (
          <></>
        ),
      )}
    </>
  );
};

export default Project;
