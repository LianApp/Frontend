import React from 'react';
import { ArrowForward } from '@mui/icons-material';
import {
  Box, Stack, Typography, IconButton,
} from '@mui/material';
import LessonItemCard from 'entities/lesson/ui/LessonItemCard';

export interface Lesson {
  id?: number
  course_id?: number
  title: string
  lecture_url: string
  presentation_url: string
}

export interface LessonListProps {
  id?: number
  color: string;
  title: string;
  lessons: Lesson[]
}

export function LessonList({ color, title, lessons }: LessonListProps) {
  return (
    <Box
      width="100%"
      height={['30%', '30%']}
      px={[1, 3]}
      py={[1, 3]}
      sx={{
        backgroundColor: color,
        borderRadius: ['10px', '20px'],
        boxShadow: '8px 10px 0px -1px #000000',
        flexDirection: ['column', 'row'],
      }}
    >
      <Stack
        direction={['column', 'row']}
        justifyContent="space-between"
        alignItems={['center', 'flex-start']}
        width="100%"
      >
        <Typography fontSize={['24px', '34px']}>{title}</Typography>
        <IconButton>
          <ArrowForward />
        </IconButton>
      </Stack>

      <Stack direction={['column', 'row']} spacing={4} mt={[2, 4]} height={['auto', '100%']}>
        {lessons.map(lesson => <LessonItemCard key={lesson.id} progress={78} title={lesson.title} lecture_url={''} presentation_url={''}/>)}
      </Stack>
    </Box>
  );  
}

