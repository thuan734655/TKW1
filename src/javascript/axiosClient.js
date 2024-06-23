import axios from 'axios';  // import thu vien 

const configAxios = {
  baseURL: "https://servertkw-1.onrender.com",
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
