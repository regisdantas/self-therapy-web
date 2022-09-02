import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../../components/Header';
import MenuBar from '../../components/MenuBar';
import { Steps } from './styles';
import { logout } from '../../services/auth';

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

const tests = [
  {
    id: '1',
    user_id: '1',
    project_id: '1',
    parent_id: '1',
    type: 'event',
    content: 'This happened.',
    createdAt: 'Data',
    upgatedAt: 'Data',
  },
  {
    id: '1',
    user_id: '1',
    project_id: '1',
    parent_id: '1',
    type: 'tought',
    content: 'I thought this.',
    createdAt: 'Data',
    upgatedAt: 'Data',
  },
  {
    id: '1',
    user_id: '1',
    project_id: '1',
    parent_id: '1',
    type: 'emotion',
    content: 'I felt this way.',
    createdAt: 'Data',
    upgatedAt: 'Data',
  },
];

const Project: React.FC = () => {
  const [steps, setSteps] = React.useState<IStep[]>(tests);
  const location = useLocation();
  const { project_id } = location.state as ILocationState;
  return (
    <>
      <Header title="Self Therapy" />
      <MenuBar backPath="/dashboard" handleLogout={logout} />
      <Steps>
        {steps.map(step => (
          <div key={step.id}>
            <strong>{step.type}</strong>
            <p>{step.content}</p>
          </div>
        ))}
      </Steps>
    </>
  );
};

export default Project;
