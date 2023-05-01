import { Role } from 'entities/user/model/user.model';
import { create } from 'zustand';

interface Auth {
    userName: string
    accesToken: string
    refreshToken: string
    role: Role | undefined,
    setUserRole: (role: Role) => void
}

const useAuth = create<Auth>()((set) => ({
  accesToken: '',
  refreshToken: '',
  userName: 'User User',
  role: undefined,
  setUserRole: (role: Role) => set(() => ({ role: role })),
  setAuthToken: (token: string) => set(() => ({ accesToken: token })),
}));

export default useAuth;
