import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { Form, Input } from './styles';
import { isValidEmail } from '../../util';
import { api } from '../../services/api';
import { login } from '../../services/auth';
import Header from '../../components/Header';
import { useStatus } from '../../hooks/useStatus';
import Status from '../../components/Status';
interface IAuthResp {
  user: {
    id: string;
    name: string;
    email: string;
    password: string;
    createdAt: string;
    updatedAt: string;
  };
  token: string;
}

const Login: React.FC = () => {
  const [email, setEmail] = React.useState<string>('');
  const [password, setPassword] = React.useState<string>('');
  const [inputStatus, setInputStatus] = useStatus(null);
  const navigate = useNavigate();
  async function handleSignIn(
    event: React.FormEvent<HTMLFormElement>,
  ): Promise<void> {
    event.preventDefault();
    if (!email || email === '') {
      setInputStatus({
        type: 'error',
        message: 'Email field must not be empty.',
        fields: 'email',
      });
      return;
    }
    if (!password || password === '') {
      setInputStatus({
        type: 'error',
        message: 'Password field must not be empty.',
        fields: 'password',
      });
      return;
    }
    if (!isValidEmail(email)) {
      setInputStatus({
        type: 'error',
        message: 'Enter a valid email address.',
        fields: 'email',
      });
      return;
    }
    try {
      const response = await api.post<IAuthResp>(`sessions`, {
        email: email,
        password: password,
      });
      const token = response.data.token;
      const user = response.data.user;
      localStorage.setItem('token', token);
      login(token);
      navigate('/dashboard', { state: { user: user } });
    } catch (error) {
      setInputStatus({
        type: 'error',
        message: 'Authentication failed.',
        fields: 'email,password',
      });
      return;
    }
    setInputStatus(null);
  }

  function handleChangeEmail(event: React.ChangeEvent<HTMLInputElement>): void {
    setEmail(event.target.value);
  }

  function handleChangePassword(
    event: React.ChangeEvent<HTMLInputElement>,
  ): void {
    setPassword(event.target.value);
  }

  return (
    <>
      <Header title="Self Therapy"></Header>
      <Form onSubmit={handleSignIn}>
        <Status status={inputStatus} />
        <Input
          hasError={Boolean(inputStatus?.fields.includes('email'))}
          type="text"
          placeholder="email"
          onChange={handleChangeEmail}
        />
        <Input
          hasError={Boolean(inputStatus?.fields.includes('password'))}
          type="password"
          placeholder="password"
          onChange={handleChangePassword}
        />
        <button type="submit">Sign in</button>
        <NavLink to="/forgot-password">Forgot password</NavLink>
        <NavLink to="/create-account">Create Account</NavLink>
      </Form>
    </>
  );
};

export default Login;
