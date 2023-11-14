import axios from 'axios';
const BASE_URL = 'http://localhost:3002';

//http://localhost:3002
//https://api-snv-project-movies.ru

export const registr = async (name, email, password) => {
  console.log(name, password, email);
  const res = await axios.post(
    `${BASE_URL}/signup`,
    {
      name: name,
      email: email,
      password: password,
    },
    { withCredentials: true },
  );
  return res.data;
};

export const login = async (email, password) => {
  const res = await axios.post(
    `${BASE_URL}/signin`,
    {
      email: email,
      password: password,
    },
    { withCredentials: true },
  );
  return res.data;
};

export const validation = async () => {
  const res = await axios.get(`${BASE_URL}/users/me`, { withCredentials: true });
  return res.data;
};

export const logout = async () => {
  const res = await axios.get(`${BASE_URL}/signout`, { withCredentials: true });
  return res.data;
};
