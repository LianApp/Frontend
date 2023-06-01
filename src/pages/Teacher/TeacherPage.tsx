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
    const groups = useQuery('groups', async () => {
        return await axios.get('/groups')
    })    
    
    return (
        <Stack width="100%" mt={5}> 
                <Typography fontSize="32px">Добро пожаловать, {userName}!</Typography>
            <Box mt={4}>
                <Typography data-testid="title-groups" fontSize="32px">Мои группы</Typography>
                <Stack mt={4} spacing={4}>
                    {groups.data?.data.map((g: Group) =>  
                        <GroupCard key={g.id} id={g.id} name={g.name}/>)   
                    }
                </Stack>  
            </Box>
            <Box mt={4}>
                <Typography data-testid="title-subjects" fontSize="32px">Мои предметы</Typography>
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