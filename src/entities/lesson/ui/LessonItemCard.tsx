import { Box, Stack, Typography } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Lesson } from 'widgets/lessons-list/ui/LessonList';
import useLesson from '../api/useLesson';
import { ArrowForward } from '@mui/icons-material';


function LessonItemCard({ title, lecture_url, presentation_url }: Lesson) {
  const setLesson = useLesson((state) => state.setLesson);
  const lesson: Lesson = {
    title,
    lecture_url,
    presentation_url,
  };
  const navigate = useNavigate();

  return (
    <Stack      
      height="auto"
      width="20%"
      justifyContent="space-between"
      px={1}
      py={1}
      sx={{
        backgroundColor: 'white',
        boxShadow: '0px 12px 32px -3px rgba(0, 0, 0, 0.1)',
        borderRadius: '20px',        
        overflow: 'hidden',
      }}     
      
    > 
        <Typography fontSize={{xs: "12px", lg: "22px", md: "16px"}} sx={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
          {title}
        </Typography>
        <Stack alignItems="end" mt={5}>
          <Box
            onClick={() => {
              navigate('/lessons/1/pres');
              setLesson(lesson);
            }}
            sx={{               
              borderRadius: '20px',
              cursor: 'pointer',
              py: 1,
              px: 2,
            }}
            fontSize={{xs: "12px", lg: "14px", md: "10px"}}
            display="flex"
            alignItems="center"
          >
            К УРОКУ
            <ArrowForward sx={{ml: "6px"}} />
          </Box>
        </Stack>
    </Stack>
  );
}

export default LessonItemCard;
  