import { Box, Typography } from '@mui/material';
import useLesson from 'entities/lesson/api/useLesson';
import { Lesson } from 'entities/lesson/model/lesson.model';
import React from 'react';
import { useNavigate } from 'react-router';


function ItemCard({ title, lecture_url, presentation_url }: Lesson) {
  const setLesson = useLesson(state => state.setLesson)
  const navigate = useNavigate()
  const lesson = {
    title,
    lecture_url,
    presentation_url
  }
  return (
    <Box
      sx={{
        border: '2px solid black',
        borderRadius: '20px',
        width: '100%',
        cursor: 'pointer',
        backgroundColor: '#F3C24F'
      }}
      width="10%"
      height="35%"
      py={2}
      px={2}
      onClick={() => {
        setLesson(lesson)
        navigate('/lessons/1/pres')
      }}
    >
      <Typography fontFamily='Montserrat' fontSize="18px">{title}</Typography>
    </Box>
  );
}

export default ItemCard;
