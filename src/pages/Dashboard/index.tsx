import React from 'react';
import { NavLink } from 'react-router-dom';
import { api } from '../../services/api';
import { Form, Projects } from './styles';
import Header from '../../components/Header';
import MenuBar from '../../components/MenuBar';
import { FiTrash2 } from 'react-icons/fi';
import { logout } from '../../services/auth';
import { useStatus } from '../../hooks/useStatus';
import Status from '../../components/Status';

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

const Dashboard: React.FC = () => {
  const [projects, setProjects] = React.useState<IProject[]>([]);
  const [newProjectName, setNewProjectName] = React.useState('');
  const [inputStatus, setInputStatus] = useStatus(null);
  const inputRef = React.useRef<HTMLInputElement | null>(null);

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
      setInputStatus({
        type: 'error',
        fields: 'project',
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
    } catch (error: any) {
      setInputStatus({
        type: 'error',
        message: 'Request failed: ' + error.response.data.message,
        fields: 'project',
      });
      return;
    }
    if (inputRef.current) {
      inputRef.current.value = '';
    }
    setNewProjectName('');
    setInputStatus({
      type: 'success',
      fields: '',
      message: 'Project created successfully.',
    });
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
        setInputStatus({
          type: 'success',
          fields: '',
          message: 'Project deleted successfully.',
        });
      })
      .catch((error: any) => {
        setInputStatus({
          type: 'error',
          message: 'Request to delete project: ' + error.response.data.message,
          fields: '',
        });
      });
  }

  return (
    <>
      <Header title="Self Therapy" />
      <MenuBar backPath="" handleLogout={logout} />
      <Projects>
        <Form onSubmit={handleNewProject}>
          <input
            ref={inputRef}
            type="text"
            onChange={handleChangeProjectName}
          />
        </Form>
        <Status status={inputStatus} />
        {projects.map(project => (
          <div key={project.id}>
            <NavLink to="/project" state={{ project_id: project.id }}>
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
