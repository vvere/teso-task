import axios from 'axios';

export const BASE_URL = 'https://playground.tesonet.lt/v1/';

export interface UserCredentials {
  username: string;
  password: string;
}

export const getUserToken = async ({ username, password }: UserCredentials) =>
  await axios.post(
    `${BASE_URL}tokens`,
    { username, password },
    {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    }
  );

const instance = axios.create({
  baseURL: BASE_URL,
  timeout: 1000,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    Authorization: `Bearer ${localStorage.getItem('token')}`,
  },
});

instance.interceptors.request.use(
  config => {
    config.headers = {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
      Accept: 'application/json',
      'Content-Type': 'application/json',
    };
    return config;
  },
  error => {
    Promise.reject(error);
  }
);

instance.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    if (error.response.status === 401) {
      localStorage.removeItem('token');
    }
    return error;
  }
);

export const fetchServerList = async () => await instance.get('servers');
