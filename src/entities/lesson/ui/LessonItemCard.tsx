import { Box, Typography } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BorderLinearProgress } from 'widgets/activity-card/lib/helper';

function LessonItemCard({ progress }: { progress: number }) {
  const navigate = useNavigate();
  return (
    <Box
      width="30%"
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
      onClick={() => navigate('/lessons/1/pres')}
    >
      <Box>
        <Typography fontSize="22px" fontWeight="bold" sx={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
          Алгоритмизация
        </Typography>
        <Typography fontSize="14px" fontWeight="bold" sx={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
          QuickSort / BubblySort
        </Typography>
      </Box>

      <Box display="flex" alignItems="center">
        <BorderLinearProgress variant="determinate" colorBg="green" value={progress} sx={{ width: '90%' }} />
        <Typography fontSize="16px" fontWeight="bold" ml={2}>
          {progress}
          %
        </Typography>
      </Box>
    </Box>
  );
}

export default LessonItemCard;
