import { Box, Container, Stack, Typography } from '@mui/material';
import { CourseType } from 'entities/course/model/course.model';
import CourseCard from 'entities/course/ui/CourseCard';
import useAuth from 'entities/user/api/lib/useAuth';
import React from 'react';
import { useQuery } from 'react-query';
import axios from 'shared/api/axiosConfig';
import withSidebar from 'shared/hoc/withSidebar';
import GroupCard, { Group } from 'shared/ui/GroupCard/GroupCard';

function TeacherPage() {
    const userName = useAuth(state => state.userName)
    const courses = useQuery('teachersCourses', async () => {
        return await axios.get('/teacher/courses')
    })
    return (
        <Stack width="100%" mt={5}>        
            <Box>
                <Typography fontSize="32px">Выберите предмет для добавления урока</Typography>
                <Stack mt={4}>
                    {courses.data?.data.map((c: CourseType) =>  
                        <CourseCard key={c.id} id={c.id} title={c.title} icon={c.icon} lessons={c.lessons}/>)   
                    }
                </Stack>  
            </Box>
              
        </Stack>
    )
}

export default withSidebar(TeacherPage);