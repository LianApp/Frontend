import { Role } from 'entities/user/model/user.model';
import { create } from 'zustand';
import { persist } from 'zustand/middleware'

interface Auth {
    groupId: number
    userName: string
    accesToken: string
    refreshToken: string
    role: Role | undefined
    setUserRole: (role: Role) => void
    setAuthToken: (token: string) => void
    setUserName: (name: string) => void
    setGroupId: (id: number) => void
}

//eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
const useAuth = create<Auth>(persist((set) => ({
  accesToken: '',
  refreshToken: '',
  userName: 'User User',
  role: undefined,  
  groupId: 2,
  setUserRole: (role: Role) => set(() => ({ role: role })),
  setAuthToken: (token: string) => set(() => ({ accesToken: token })),
  setUserName: (name: string) => set(() => ({ userName: name })),
  setGroupId: (id: number) => set(() => ({ groupId: id }))
}), {
    name: 'user',
    version: 1
}));

export default useAuth;
