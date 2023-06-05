import React, { useEffect } from 'react';
import { ArrowBack, ArrowForward } from '@mui/icons-material';
import {
  Box, Typography, Stack, IconButton, InputBase, Divider, Button, Input, List, ListItem,
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
import Slider from 'react-slick';
import { Lesson } from 'entities/lesson/model/lesson.model';

function Main() {
  const navigate = useNavigate()
  const userName = useAuth(state => state.userName)
  const courses = useQuery('courses', async () => {
    return await axios.get('/students/courses')
  })

  return (
    <Box mt={4} ml={5} width="100vw" height="100vh">
      <Typography variant='h1' id="welcometext" fontFamily='Montserrat' fontSize="46px">Добро пожаловать, {userName.split(' ')[0]}!</Typography>
{/* 
      <Stack direction='column' mt={4} width="100%" maxHeight="100vh" height="45%" justifyContent='space-between'>
        <Stack width='70%' direction={{lg: 'row', xs: 'column'}} justifyContent='space-between'>
          <Typography id="item_mylessons" fontFamily='Montserrat' fontSize="36px">Мои уроки</Typography>
          <Input
          
            sx={{
              boxShadow: '1px 4px 4px 2px rgba(131, 131, 131, 0.25)',
              borderRadius: '50px', 
              paddingLeft: '20px',
              outline: '0',
              width: '25%',
              mt: '20px',              
            }}
            placeholder="Поиск..."
          />
        </Stack>
        

        <Stack data-cy="courses-list" direction="row" spacing={8} height="100%" mt={6}>  
            {courses.data?.data.map((course: CourseType) => (
                <Stack data-cy="course-items" key={course.id} direction="column" width="20%">
                  <Box 
                    sx={{ 
                      border: '1px solid black',
                      borderRadius: '20px', 
                      cursor: 'pointer',                  
                      py: 1,
                      px: 2
                    }}  
                    width='auto'
                    fontFamily='Montserrat'
                    fontSize="20px">
                  {course.title}
                  </Box>
                  <Stack height="100%" spacing={6} mt={2}>
                    {course.lessons.slice(0, 3).map(lesson => <ItemCard key={lesson.id} {...lesson} /> )}             
                  </Stack>
                </Stack>  
            ))}  
        </Stack>

      </Stack>
      <Stack justifyContent='center' alignItems='center' width='70%'>
        <Box
        component="button"
        data-cy="button"
          sx={{ 
            border: '1px solid black',
            borderRadius: '20px',
            cursor: 'pointer',
            py: 1,
            px: 2
          }} 
          onClick={() => navigate("/lessons")}
          >Все уроки...</Box>
      </Stack> */}
      <Stack 
          mt={4}
          direction='column' 
        > 
          <Typography fontSize='20px' color='#6B7280'>Последние курсы</Typography> 
          <Stack 
            alignItems='flex-start' 
            gap='25px' 
            direction='row' 
            flexWrap='wrap'
            mt={6} 
          > 
          {courses.data?.data.map((course: CourseType) => (
              <Box 
                px={4} 
                py={2} 
                width='25%' 
                sx={{ 
                  boxShadow: '0px 12px 32px -3px rgba(0, 0, 0, 0.1)', 
                  borderRadius: '27px', 
                }} 
              > 
                <Typography fontSize='24px'>{course.title}</Typography> 
                <List> 
                  {course.lessons.map((l: Lesson) => (
                    <ListItem sx={{fontSize: '12px'}}>{l.title    }</ListItem> 
                  ))}                  
                </List> 
              </Box> 
            ))}
            
          </Stack> 
        </Stack> 
    </Box>  
  );
}

export default withSidebar(Main);