import { create } from 'zustand';

interface SubjectStore extends Subject {
    setSubject: (subject: Subject) => void
}

export interface Subject {
    id: number
    name: string
    organization_id: number
}

const useSubject = create<SubjectStore>((set) => ({
    id: 0,
    name: '',
    organization_id: 0,
    setSubject: (subject: Subject) => set(() => ({
        id: subject.id,
        name: subject.name,
        organization_id: subject.organization_id,
    }))
}))

export default useSubject;
