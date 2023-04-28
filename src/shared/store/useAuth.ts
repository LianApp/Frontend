/* eslint-disable import/no-extraneous-dependencies */
// eslint-disable-next-line import/no-extraneous-dependencies
import { create } from 'zustand';

interface Auth {
    userName: string
    accesToken: string
    refreshToken: string
}

const useAuth = create<Auth>()((set) => ({
  accesToken: '',
  refreshToken: '',
  userName: 'User User',
  setAuthToken: (token: string) => set(() => ({ accesToken: token })),
}));

export default useAuth;
