import { Lesson } from "entities/lesson/model/lesson.model"

export interface CourseType {
    id?: number
    title: string
    lessons: Lesson[]
    subject_id?: number
    teacher_id?: number
    icon: string
}
