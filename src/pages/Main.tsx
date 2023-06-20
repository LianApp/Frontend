import React, { useEffect } from 'react';
import { ArrowBack, ArrowForward } from '@mui/icons-material';
import {
  Box, Typography, Stack, IconButton, InputBase, Divider, Button, Input, List, ListItem,
} from '@mui/material';
import ActivityCard from 'widgets/activity-card/ui/ActivityCard';
import ItemCard from 'shared/ui/ItemCard/ItemCard';
import withSidebar from 'shared/hoc/withSidebar';
import useAuth from 'entities/user/api/lib/useAuth';
import axios from 'shared/api/axiosConfig'
import { useQuery } from 'react-query';
import { CourseType } from 'entities/course/model/course.model';
import { useNavigate } from 'react-router';
import { Lesson } from 'entities/lesson/model/lesson.model';
import Slide from 'shared/ui/Slider';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick"; 

const settings = {
  dots: true,
  speed: 800,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
};

function Main() {
  const navigate = useNavigate()
  const userName = useAuth(state => state.userName)
  const courses = useQuery('courses', async () => {
    return await axios.get('/students/courses')
  })
  console.log(courses.data?.data);
  
  return (
    <Box mt={4} ml={5} width="100vw" height="100vh">
      <Typography variant='h1' id="welcometext" fontFamily='Montserrat' fontSize="46px">Добро пожаловать, {userName.split(' ')[0]}!</Typography>
      <Stack 
          mt={4}
          direction='column' 
        > 
          <Typography fontSize='20px' color='#6B7280'>Последние курсы</Typography>           
          <Slider
                {...settings}
                variableWidth={false}
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
                    <ListItem sx={{fontSize: '12px'}}>{l.title}</ListItem> 
                  ))}                      
                </List> 
              </Box> 
            ))}
            {/* <Slide options={settings} items={courses.data?.data} />   */}
          </Slider>
        </Stack> 
    </Box>  
  );
}

export default withSidebar(Main);