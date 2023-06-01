import React from 'react';
import { ArrowForward } from '@mui/icons-material';
import {
  Box, Stack, Typography, IconButton, Icon,
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
  icon: string
  lessons: Lesson[]
}

export function LessonList({ color, title, lessons, icon }: LessonListProps) {
  return (
    <Box
      width="100%"
      height={['30%', '30%']}
      px={[1, 3]}
      py={[1, 3]}
      sx={{
        backgroundColor: color,
        border: '1.5px solid black',
        borderRadius: ['10px', '20px'],        
        flexDirection: ['column', 'row'],
      }}
    >
      <Stack
        direction={['column', 'row']}
        justifyContent="space-between"
        alignItems={['center', 'flex-start']}
        width="100%"
      >
        <Stack direction='row' alignItems='center'>
          <Typography fontFamily='Montserrat'  fontSize={['24px', '34px']}>{title}</Typography>
          <Icon sx={{ml: '10px', fontSize: '42px'}}>
            {icon}
          </Icon>
        </Stack>
        <IconButton>
          <ArrowForward />
        </IconButton>
      </Stack>
      {/* height={['auto', '100%']} */}
      <Stack direction={['column', 'row']} gap={4} mt={[2, 4]} width="100%" >
        {lessons.map(lesson => 
          <LessonItemCard 
            key={lesson.id} 
            title={lesson.title} 
            lecture_url={lesson.lecture_url} 
            presentation_url={lesson.presentation_url}/>
        )}
      </Stack>
    </Box>
  );  
}

