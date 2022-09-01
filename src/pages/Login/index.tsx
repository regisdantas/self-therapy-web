import React from 'react';
import { NavLink } from 'react-router-dom';
import { Title, Form, Error, Input } from './styles';
import { isValidEmail } from '../../util';
import { backend } from '../../services/backend';
import { AxiosError } from 'axios';

interface IError {
  message: string;
  field: string;
}

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
  const [inputError, setInputError] = React.useState<IError | null>(null);
  async function handleSignIn(
    event: React.FormEvent<HTMLFormElement>,
  ): Promise<void> {
    event.preventDefault();
    if (!email || email === '') {
      setInputError({
        message: 'Email field must not be empty.',
        field: 'email',
      });
      return;
    }
    if (!password || password === '') {
      setInputError({
        message: 'Password field must not be empty.',
        field: 'password',
      });
      return;
    }
    if (!isValidEmail(email)) {
      setInputError({
        message: 'Enter a valid email address.',
        field: 'email',
      });
      return;
    }
    try {
      const response = await backend.post<IAuthResp>(`sessions`, {
        email: email,
        password: password,
      });
      console.log(response);
    } catch (error) {
      setInputError({
        message: 'Authentication failed.',
        field: 'email,password',
      });
      return;
    }
    setInputError(null);
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
      <NavLink to="/">
        <Title>Self Therapy</Title>
      </NavLink>
      <Form onSubmit={handleSignIn}>
        <Input
          hasError={Boolean(inputError?.field.includes('email'))}
          type="text"
          placeholder="email"
          onChange={handleChangeEmail}
        />
        <Input
          hasError={Boolean(inputError?.field.includes('password'))}
          type="password"
          placeholder="password"
          onChange={handleChangePassword}
        />
        <button type="submit">Sign in</button>
        {inputError && <Error>{inputError.message}</Error>}
        <NavLink to="/forgot-password">Forgot password</NavLink>
        <NavLink to="/create-account">Create Account</NavLink>
      </Form>
    </>
  );
};

export default Login;
