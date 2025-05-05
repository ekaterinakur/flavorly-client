import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

axiosInstance.interceptors.request.use((config) => {
  const persistedAuthState = localStorage.getItem('persist:auth');
  let token = null;

  if (persistedAuthState) {
    const authState = JSON.parse(persistedAuthState);

    token = authState.token ? JSON.parse(authState.token) : null;
  }

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default axiosInstance;
