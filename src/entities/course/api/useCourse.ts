import { create } from 'zustand';
import { CourseType } from '../model/course.model';
import { persist } from 'zustand/middleware';

interface IUseCourse extends CourseType {
    setCourse:(course: CourseType) => void
}

//eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
const useCourse = create<IUseCourse>(persist((set) => ({
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
}), {
    name: 'course',
    version: 1
}))

export default useCourse;
