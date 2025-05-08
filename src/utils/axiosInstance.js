import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://flavorly-api-gpdc.onrender.com/api',
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

export default axiosInstance;
