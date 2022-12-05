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
