import React from 'react';
import { NavLink } from 'react-router-dom';
import { api } from '../../services/api';

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
  React.useEffect(() => {
    api
      .get(`users/projects`)
      .then(response => {
        response.data ? setProjects(response.data) : setProjects([]);
      })
      .catch(error => console.log(error));
  }, []);
  return (
    <>
      <img src="https://avatars.githubusercontent.com/u/18015288?s=96&v=4" />
      <h1>{}</h1>
      <ul>
        {projects.map(project => (
          <li key={project.id}>{project.name}</li>
        ))}
      </ul>
    </>
  );
};

export default Dashboard;
