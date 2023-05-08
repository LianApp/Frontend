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
        boxShadow: '0px 4px 4px 4px rgba(74, 0, 233, 0.25)',
        borderRadius: '20px',
        width: '100%',
        cursor: 'pointer'
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
      <Typography fontSize="18px">{title}</Typography>
    </Box>
  );
}

export default ItemCard;
