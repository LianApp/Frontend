import React from 'react';
import { ArrowForward } from '@mui/icons-material';
import {
  Box, Stack, Typography, IconButton, Icon,
} from '@mui/material';
import LessonItemCard from 'entities/lesson/ui/LessonItemCard';
import { CourseType } from 'entities/course/model/course.model';
import useCourse from 'entities/course/api/useCourse';
import { useNavigate } from 'react-router-dom'

export interface Lesson {
  id?: number
  course_id?: number
  title: string
  lecture_url: string
  presentation_url: string
}

export interface LessonListProps {
  id?: number
  title: string;
  icon: string
  lessons: Lesson[]
}

export function LessonList({ id, title, lessons, icon }: LessonListProps) {
  const setCourse = useCourse(state => state.setCourse)
  const navigate = useNavigate()
  const course = {
    id,
    title,
    lessons,
  }

  const goToCourse = (course: CourseType) => {
    setCourse(course)
    navigate("/course")
  }

  return (
    <Box
      id="lesson"
      width="100%"
      height={['30%', '30%']}
      px={[1, 3]}
      py={[1, 3]}
      sx={{     
        boxShadow: '0px 12px 32px -3px rgba(0, 0, 0, 0.1)',
        borderRadius: '27px'
      }}
    >
      <Stack
        direction={['column', 'row']}
        justifyContent="space-between"
        alignItems={['center', 'flex-start']}
        width="100%"
      >
        <Stack direction='row' alignItems='center'>
          <Typography  data-testid="lesson-title" fontFamily='Montserrat'  fontSize={['24px', '34px']}>{title} {icon}</Typography>
        </Stack>
        <Typography onClick={() => goToCourse(course)} fontSize='14px' sx={{cursor: 'pointer'}} color='#5D7CFB'>Смотреть все</Typography>

      </Stack>  
      <Stack direction={['column', 'row']} gap={4} mt={[2, 4]} width="100%" >
        {lessons.map(lesson => <LessonItemCard key={lesson.id} title={lesson.title} lecture_url={lesson.lecture_url} presentation_url={lesson.presentation_url}/>)}
      </Stack>
    </Box>
  );
}