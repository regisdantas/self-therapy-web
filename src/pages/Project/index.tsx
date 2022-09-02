import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../../components/Header';
import MenuBar from '../../components/MenuBar';
import Card from '../../components/Card';
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
    parent_id: '0',
    type: 'event',
    content:
      'Lorem ipsum dolor sit amet. Aut temporibus nihil nam maiores unde ex iure similique ut voluptatem dolorem qui iste soluta. In iure unde ea consequuntur voluptas qui voluptatem dolor est soluta eaque et deleniti quibusdam id dolorum saepe et voluptatem odio. Rem asperiores aliquam ut ratione repellendus id accusantium dolorem sit esse asperiores ad amet voluptatem.',
    createdAt: 'Data',
    upgatedAt: 'Data',
  },
  {
    id: '2',
    user_id: '1',
    project_id: '1',
    parent_id: '0',
    type: 'tought',
    content:
      'Ut consequatur animi et voluptas exercitationem sed odit et perferendis earum in blanditiis earum qui explicabo nulla qui omnis sapiente. Et dolores earum in animi labore et nesciunt modi et quia suscipit aut adipisci quia eum aliquid molestiae. Aut culpa repellendus sit autem cupiditate At distinctio corrupti et iure modi et voluptatibus maxime a assumenda optio? Eos harum voluptas ab voluptas sint est voluptatum nesciunt.',
    createdAt: 'Data',
    upgatedAt: 'Data',
  },
  {
    id: '3',
    user_id: '1',
    project_id: '1',
    parent_id: '0',
    type: 'emotion',
    content:
      'Reprehenderit totam qui assumenda voluptas ut libero nihil eos praesentium unde et autem distinctio. Ut perferendis illo non provident ipsa ea molestiae omnis. Sit voluptatem itaque ex accusamus voluptas et illum dolore.',
    createdAt: 'Data',
    upgatedAt: 'Data',
  },
  {
    id: '4',
    user_id: '1',
    project_id: '1',
    parent_id: '1',
    type: 'solution',
    content:
      'Reprehenderit totam qui assumenda voluptas ut libero nihil eos praesentium unde et autem distinctio. Ut perferendis illo non provident ipsa ea molestiae omnis. Sit voluptatem itaque ex accusamus voluptas et illum dolore.',
    createdAt: 'Data',
    upgatedAt: 'Data',
  },
  {
    id: '5',
    user_id: '1',
    project_id: '1',
    parent_id: '1',
    type: 'emotion',
    content:
      'Reprehenderit totam qui assumenda voluptas ut libero nihil eos praesentium unde et autem distinctio. Ut perferendis illo non provident ipsa ea molestiae omnis. Sit voluptatem itaque ex accusamus voluptas et illum dolore.',
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
        {steps.map(step =>
          step.parent_id === '0' ? (
            <Card
              key={step.id}
              id={step.id}
              title={step.type}
              content={step.content}
              steps={steps}
            />
          ) : (
            <></>
          ),
        )}
      </Steps>
    </>
  );
};

export default Project;
