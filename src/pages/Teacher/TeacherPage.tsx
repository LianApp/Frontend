import { Box, Container, Stack, Typography } from '@mui/material';
import { CourseType } from 'entities/course/model/course.model';
import CourseCard from 'entities/course/ui/CourseCard';
import React from 'react';
import { useQuery } from 'react-query';
import axios from 'shared/api/axiosConfig';
import withSidebar from 'shared/hoc/withSidebar';

function TeacherPage() {
    const courses = useQuery('teachersCourses', async () => {
        return await axios.get('/teacher/courses')
    })
    console.log(courses.data?.data);
    
    return (
        <Box ml={6} width="100%"> 
            <Box mt={4}>
                <Typography fontSize="32px">Мои курсы</Typography>
            </Box>
            <Stack mt={4}>
                {courses.data?.data.map((c: CourseType) => 
                    <CourseCard key={c.id} id={c.id} title={c.title} icon={c.icon} lessons={c.lessons}/>)
                }
            </Stack>    
        </Box>
    )
}

export default withSidebar(TeacherPage);