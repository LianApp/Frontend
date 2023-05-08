import { create } from 'zustand';

interface GroupState {
    groupId: number | undefined
    name: string
    setGroupId: (id: number) => void
    setGroupName: (name: string) => void
}

const useGroup = create<GroupState>((set) => ({ 
  groupId: undefined,
  name: '',
  setGroupId: (id: number) => set(() => ({ groupId: id })),
  setGroupName: (name: string) => set(() => ({ name }))
}));

export default useGroup;
