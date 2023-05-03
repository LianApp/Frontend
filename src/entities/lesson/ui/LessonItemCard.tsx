import { Box, Typography } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BorderLinearProgress } from 'widgets/activity-card/lib/helper';
import { Lesson } from 'widgets/lessons-list/ui/LessonList';
import useLesson from '../api/useLesson';

interface LessonItemCardProps extends Lesson {
  progress: number;
}

function LessonItemCard({ progress, title, lecture_url, presentation_url }: LessonItemCardProps) {
  const setLesson = useLesson((state) => state.setLesson);
  const lesson: Lesson = {
    title,
    lecture_url,
    presentation_url,
  };
  const navigate = useNavigate();

  const [cardWidth, setCardWidth] = React.useState<number | undefined>(undefined);

  React.useEffect(() => {
    const handleResize = () => setCardWidth(getCardWidth());
    window.addEventListener('resize', handleResize);
    setCardWidth(getCardWidth());

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const getCardWidth = (): number =>
    window.innerWidth > 960 ? window.innerWidth / 4 - 32 : window.innerWidth - 32;

  return (
    <Box
      width={cardWidth}
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

      <Box display="flex" alignItems="center">
        <BorderLinearProgress variant="determinate" colorBg="green" value={progress} sx={{ width: '90%' }} />
        <Typography fontSize="16px" fontWeight="bold" ml={2}>
          {progress}%
        </Typography>
      </Box>
    </Box>
  );
}

export default LessonItemCard;
  