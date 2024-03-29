import { Box, Button, Stack, Typography } from '@mui/material';
import useCourse from 'entities/course/api/useCourse';
import { Lesson } from 'entities/lesson/model/lesson.model';
import LessonItemCard from 'entities/lesson/ui/LessonItemCard';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import withSidebar from 'shared/hoc/withSidebar';

function LessonsCourse() {
    const lessons = useCourse(state => state.lessons)
    const title = useCourse(state => state.title)
    
    const navigate = useNavigate()
    return (
        <Box ml={6} width="100%"> 
            <Stack mt={4} justifyContent='space-between' direction='row' width='80%'>
                <Typography fontSize="32px">Мои уроки по курсу {title}</Typography>
            </Stack>
            <Stack mt={4} direction='row' flexWrap='nowrap' spacing={2} width='70%'>
                {lessons.map((les: Lesson) => 
                    <LessonItemCard key={les.id} title={les.title} lecture_url={les.lecture_url} presentation_url={les.presentation_url}/>)
                }
            </Stack>    
        </Box>  
    )
}

export default withSidebar(LessonsCourse);