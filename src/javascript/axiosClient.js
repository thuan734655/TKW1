const { default: axios } = require("axios");

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
    return Promise.reject(error);
  }
);

module.exports = { axiosClient };
