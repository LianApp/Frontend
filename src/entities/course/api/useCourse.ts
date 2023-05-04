import { create } from 'zustand';
import { CourseType } from '../model/course.model';

interface IUseCourse extends CourseType {
    setCourse:(course: CourseType) => void
}

const useCourse = create<IUseCourse>((set) => ({
    id: 0,
    title: '',
    lessons: [],
    teacher_id: 0,
    subject_id: 0,
    icon: '',
    setCourse: (course: CourseType) => set(() => ({
        id: course.id,
        title: course.title, 
        lessons: course.lessons,
        icon: course.icon
    }))
}))

export default useCourse;
