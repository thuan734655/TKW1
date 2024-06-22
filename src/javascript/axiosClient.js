import axios from 'axios';

const configAxios = {
  baseURL: "http://localhost:3000",
  headers: {
    "Content-Type": "application/json",
  },
};

const axiosClient = axios.create(configAxios);

axiosClient.interceptors.response.use(
  function (response) {
    return response.data;
  },
  function (error) {
    console.error('Request failed:', error);
    return Promise.reject(error);
  }
);

export default axiosClient;
