import React from 'react';
import { useLocation, NavLink } from 'react-router-dom';
import { api } from '../../services/api';
import { Form, Projects, Error } from './styles';
import Header from '../../components/Header';
import { FiTrash2 } from 'react-icons/fi';

interface IError {
  message: string;
  field: string;
}

interface IUser {
  id: string;
  name: string;
  email: string;
  password: string;
  createdAt: string;
  updatedAt: string;
}

interface IProject {
  id: string;
  user_id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
}

interface ILocationState {
  from: {
    pathname: string;
  };
  user: IUser;
}

const Dashboard: React.FC = () => {
  const [projects, setProjects] = React.useState<IProject[]>([]);
  const [newProjectName, setNewProjectName] = React.useState('');
  const [inputError, setInputError] = React.useState<IError | null>(null);
  const inputRef = React.useRef<HTMLInputElement | null>(null);
  const location = useLocation();
  // const { user } = location.state as ILocationState;
  React.useEffect(() => {
    api
      .get(`users/projects`)
      .then(response => {
        response.data ? setProjects(response.data) : setProjects([]);
      })
      .catch(error => console.log(error));
  }, []);

  async function handleNewProject(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (newProjectName === '') {
      setInputError({
        field: 'project',
        message: 'Project name must not be empty.',
      });
      return;
    }
    try {
      const response = await api.post<any>(`users/projects`, {
        name: newProjectName,
      });
      const newProject = response.data as IProject;
      setProjects(prevState => [...prevState, newProject]);
    } catch (error) {
      return;
    }
    if (inputRef.current) {
      inputRef.current.value = '';
    }
    setNewProjectName('');
    setInputError(null);
    return;
  }

  function handleChangeProjectName(
    event: React.ChangeEvent<HTMLInputElement>,
  ): void {
    setNewProjectName(event.target.value);
  }

  function handleDeleteProject(
    event: React.MouseEvent<SVGElement>,
    pid: string,
  ): void {
    api
      .delete(`users/projects/`, { data: { project_id: pid } })
      .then(() => {
        setProjects(prevState =>
          prevState.filter(project => project.id !== pid),
        );
      })
      .catch();
  }

  return (
    <>
      <Header title="Self Therapy" backPath="" />
      <Projects>
        <Form onSubmit={handleNewProject}>
          <input
            ref={inputRef}
            type="text"
            onChange={handleChangeProjectName}
          />
        </Form>
        {inputError && <Error>{inputError.message}</Error>}
        {projects.map(project => (
          <div key={project.id}>
            <NavLink to="/project">
              <strong>{project.name}</strong>
            </NavLink>
            <FiTrash2
              onClick={event => handleDeleteProject(event, project.id)}
              size={20}
            />
          </div>
        ))}
      </Projects>
    </>
  );
};

export default Dashboard;
