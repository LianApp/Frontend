import axios from 'axios';
import useAuth from 'entities/user/api/lib/useAuth';

const token = useAuth((state) => state.accesToken);

const instance = axios.create({
  baseURL: 'localhost:3000',
  responseType: 'json',
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

export default instance;
