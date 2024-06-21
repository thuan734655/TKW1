import axios from 'axios';

const configAxios = {
  baseURL: "https://server-m4fe9thu6-thuan734655s-projects.vercel.app",
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
    // Handle errors here, e.g., log them or perform specific actions
    console.error('Request failed:', error);
    return Promise.reject(error);
  }
);

export default axiosClient;
