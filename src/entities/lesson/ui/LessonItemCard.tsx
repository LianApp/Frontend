import { Box, Typography } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Lesson } from 'widgets/lessons-list/ui/LessonList';
import useLesson from '../api/useLesson';


function LessonItemCard({ title, lecture_url, presentation_url }: Lesson) {
  const setLesson = useLesson((state) => state.setLesson);
  const lesson: Lesson = {
    title,
    lecture_url,
    presentation_url,
  };
  const navigate = useNavigate();

  return (
    <Box
      width="20%"
      height="60%"
      sx={{
        border: '1px solid black',
        backgroundColor: 'white',
        boxShadow: '8px 10px 0px -1px #000000',
        borderRadius: '20px',
        cursor: 'pointer',
        overflow: 'hidden',
      }}
      px={2}
      py={2}
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      onClick={() => {
        navigate('/lessons/1/pres');
        setLesson(lesson);
      }}
    >
      <Box>
        <Typography fontSize="22px" fontWeight="bold" sx={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
          {title}
        </Typography>
      </Box>
    </Box>
  );
}

export default LessonItemCard;
  