import { create } from 'zustand';
import { Lesson } from '../model/lesson.model';

interface IUseLesson extends Lesson {
    setLesson:(lesson: Lesson) => void
}

const useLesson = create<IUseLesson>((set) => ({
    title: '',
    lecture_url: '',
    presentation_url: '',
    setLesson: (lesson: Lesson) => set(() => ({
        title: lesson.title, 
        lecture_url: lesson.lecture_url,
        presentation_url: lesson.presentation_url
    }))
}))

export default useLesson;
