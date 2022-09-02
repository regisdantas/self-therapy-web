import axios from 'axios';
import { getToken } from './auth';

const server_url = process.env.REACT_APP_SERVER_URL || 'http://localhost';

export const api = axios.create({
  baseURL:
    `${server_url}` + process.env.REACT_APP_SERVER_PORT
      ? `:${process.env.REACT_APP_SERVER_PORT}`
      : '',
});

api.interceptors.request.use(async config => {
  const token = getToken();
  if (token && config.headers !== undefined) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
