import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://87.242.123.153:3000/api',
  responseType: 'json',
});

instance.interceptors.request.use(
  config => {
    config.headers['Authorization'] = `Bearer ${localStorage.getItem('accessToken')}`
    return config
  },
  error => {
      return Promise.reject(error);
  }
)

export default instance;
