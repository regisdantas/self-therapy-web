import axios from 'axios';
import { getToken } from './auth';

const server_url = process.env.REACT_APP_SERVER_URL || 'http://localhost';
const server_port = process.env.REACT_APP_SERVER_PORT || 3333;

export const api = axios.create({
  baseURL: `${server_url}:${server_port}`,
});

api.interceptors.request.use(async config => {
  const token = getToken();
  if (token && config.headers !== undefined) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
