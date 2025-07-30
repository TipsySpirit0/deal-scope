import axios from 'axios';

const API_URL = 'https://deal-scope-usf5.onrender.com/api';

export const signup = (username, password) => {
  return axios.post(`${API_URL}/register/`, { username, password });
};

export const login = async (username, password) => {
  const response = await axios.post(`${API_URL}/token/`, { username, password });
  const { access, refresh } = response.data;

  // Save tokens
  localStorage.setItem('access_token', access);
  localStorage.setItem('refresh_token', refresh);

  // Set token as default header
  axios.defaults.headers.common['Authorization'] = `Bearer ${access}`;

  return access;
};

export const logout = () => {
  localStorage.removeItem('access_token');
  localStorage.removeItem('refresh_token');
  delete axios.defaults.headers.common['Authorization'];
};