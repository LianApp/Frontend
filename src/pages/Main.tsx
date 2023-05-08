import React, { useEffect } from 'react';
import { ArrowBack, ArrowForward } from '@mui/icons-material';
import {
  Box, Typography, Stack, IconButton, InputBase, Divider, Button,
} from '@mui/material';
import ActivityCard from 'widgets/activity-card/ui/ActivityCard';
import ItemCard from 'shared/ui/ItemCard/ItemCard';
import { ProgressCard } from 'widgets/progress-card/ui/ProgressCard';
import withSidebar from 'shared/hoc/withSidebar';
import useAuth from 'entities/user/api/lib/useAuth';
import axios from 'shared/api/axiosConfig'
import { useQuery } from 'react-query';
import { CourseType } from 'entities/course/model/course.model';
import { useNavigate } from 'react-router';

function Main() {
  const navigate = useNavigate()
  const userName = useAuth(state => state.userName)
  const courses = useQuery('courses', async () => {
    return await axios.get('/students/courses')
  })

  return (
    <Box mt={4} ml={5} width="100vw" height="100vh">
      <Typography fontSize="46px">Добро пожаловать, {userName}!</Typography>

      <Stack direction='column' mt={4} width="100%" maxHeight="100vh" height="45%" justifyContent='space-between'>
        <Typography fontSize="36px">Мои уроки</Typography>
        <InputBase  
          sx={{
            boxShadow: '1px 4px 4px 2px rgba(131, 131, 131, 0.25)',
            borderRadius: '50px',
            paddingLeft: '20px',
            outline: '0',
            width: '20%',
            mt: '20px',
          }}
          placeholder="Поиск..."
        />

        <Stack direction="row" spacing={8} height="100%" mt={6}>

          {courses.data?.data.map((course: CourseType) => (
            <Stack key={course.id} direction="column" width="20%">
              <Typography fontSize="20px">{course.title}</Typography>
              <Stack height="100%" spacing={8} mt={2}>
                {course.lessons.map(lesson => <ItemCard key={lesson.id} {...lesson} /> )}             
              </Stack>
            </Stack> 
          ))}
          <Divider sx={{ backgroundColor: 'black' }} orientation="vertical" flexItem />
         
        </Stack>

      </Stack>
      <Stack justifyContent='center' alignItems='center' width='70%' mt={16}>
        <Button onClick={() => navigate("/lessons")} variant="contained">Все уроки...</Button>
      </Stack>
    </Box>  
  );
}

export default withSidebar(Main);
