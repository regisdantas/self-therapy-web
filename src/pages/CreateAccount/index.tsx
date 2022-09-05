import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header';
import api from '../../services/api';
import { isValidEmail } from '../../util';
import { Form, Input } from './styles';
import { useStatus } from '../../hooks/useStatus';
import Status from '../../components/Status';
interface IUserData {
  name: string;
  email: string;
  password: string;
  confpass: string;
}

interface ICreateResp {
  id: string;
  name: string;
  email: string;
  password: string;
  createdAt: string;
  updatedAt: string;
}

const CreateAccount: React.FC = () => {
  const [userData, setUserData] = React.useState<IUserData>({
    name: '',
    email: '',
    password: '',
    confpass: '',
  });
  const [inputStatus, setInputStatus] = useStatus(null);
  const navigate = useNavigate();

  function handleChange(key: string, value: string): void {
    setUserData(prevState => ({ ...prevState, [key]: value }));
  }

  async function handleCreateAccount(
    event: React.FormEvent<HTMLFormElement>,
  ): Promise<void> {
    event.preventDefault();
    if (userData.name === '') {
      setInputStatus({
        type: 'error',
        fields: 'name',
        message: 'Name cannot be empty.',
      });
      return;
    }
    if (userData.email === '') {
      setInputStatus({
        type: 'error',
        fields: 'email',
        message: 'Email cannot be empty.',
      });
      return;
    }
    if (!isValidEmail(userData.email)) {
      setInputStatus({
        type: 'error',
        fields: 'email',
        message: 'Enter a valid email address.',
      });
      return;
    }
    if (userData.password === '') {
      setInputStatus({
        type: 'error',
        fields: 'password',
        message: 'Password cannot be empty.',
      });
      return;
    }
    if (userData.password.length < 8) {
      setInputStatus({
        type: 'error',
        fields: 'password',
        message: 'Password must have at least 8 char long.',
      });
      return;
    }
    if (userData.confpass === '') {
      setInputStatus({
        type: 'error',
        fields: 'confpass',
        message: 'Confirm Password cannot be empty.',
      });
      return;
    }
    if (userData.password !== userData.confpass) {
      setInputStatus({
        type: 'error',
        fields: 'confpass',
        message: 'Confirm Password must match Password.',
      });
      return;
    }

    try {
      const response = await api.post<ICreateResp>(`users`, {
        name: userData.name,
        email: userData.email,
        password: userData.password,
      });
      setTimeout(() => navigate('/login'), 3000);
    } catch (error: any) {
      setInputStatus({
        type: 'error',
        message: 'Request failed: ' + error.response?.data?.message,
        fields: 'name,email,password,confpass',
      });
      return;
    }
    setInputStatus({
      type: 'success',
      fields: '',
      message: 'User created successfully.',
    });
  }

  return (
    <>
      <Header title="Self Therapy"></Header>
      <Form onSubmit={handleCreateAccount}>
        <Status status={inputStatus} />
        <Input
          hasError={Boolean(inputStatus?.fields.includes('name'))}
          type="text"
          placeholder="full name"
          onChange={e => handleChange('name', e.target.value)}
        />
        <Input
          hasError={Boolean(inputStatus?.fields.includes('email'))}
          type="email"
          placeholder="email"
          onChange={e => handleChange('email', e.target.value)}
        />
        <Input
          hasError={Boolean(inputStatus?.fields.includes('password'))}
          type="password"
          placeholder="password"
          onChange={e => handleChange('password', e.target.value)}
        />
        <Input
          hasError={Boolean(inputStatus?.fields.includes('confpass'))}
          type="password"
          placeholder="confirm password"
          onChange={e => handleChange('confpass', e.target.value)}
        />
        <button type="submit">Create Account</button>
      </Form>
    </>
  );
};

export default CreateAccount;
