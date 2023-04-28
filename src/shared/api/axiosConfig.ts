import axios from 'axios';
import useAuth from '../store/useAuth';

// eslint-disable-next-line react-hooks/rules-of-hooks
const token = useAuth((state) => state.accesToken);

const instance = axios.create({
  baseURL: 'localhost:3000',
  responseType: 'json',
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

export default instance;
