import axios from 'axios';
import { getToken } from './auth';
import dotenv from 'dotenv';

dotenv.config();

export const api = axios.create({
  baseURL: `${process.env.REACT_APP_SERVER_URL}:3333`,
});

api.interceptors.request.use(async config => {
  const token = getToken();
  if (token && config.headers !== undefined) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
