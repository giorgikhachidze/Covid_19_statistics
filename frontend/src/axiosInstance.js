import axios from 'axios';
import i18n from "i18next";

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BASE_BACKEND_URL,
  timeout: 15000,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Locale': i18n.language
  }
});

axiosInstance.interceptors.request.use( config =>  {
  const localStore = JSON.parse(localStorage.getItem('store'));
  if(localStore.auth.accessToken){
    config.headers.Authorization =  'Bearer ' + localStore.auth.accessToken;
  }
  config.headers.Locale = i18n.language
  return config;
});

// axiosInstance.interceptors.response.use(response => {
//     return response;
//   }, error => {
//     if(error.response.status === 401){
//         localStorage.removeItem('token');
//     }
//     return Promise.reject(error);
// });

export default axiosInstance;
