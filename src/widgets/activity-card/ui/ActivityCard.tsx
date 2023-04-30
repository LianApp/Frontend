import React from 'react';
import {
  Box, Typography,
} from '@mui/material';
import { BorderLinearProgress, ProgressContainer } from '../lib/helper';

function ActivityCard() {
  return (
    <Box
      width={{ xs: '90%', sm: '450px' }}
      maxWidth="100%"
      height={{ xs: 'auto', sm: '260px', lg: '290px' }}
      sx={{
        boxShadow: '0px 4px 4px 4px rgba(74, 0, 233, 0.25)',
        borderRadius: '20px',
      }}
      display="flex"
      flexDirection="column"
      alignItems="center"
    >
      <Box py={{ xs: 1, sm: 2 }} px={{ xs: 2, sm: 4 }} width="100%">
        <Box>
          <Typography fontSize={{ xs: '28px', sm: '36px' }}>
            21/42
          </Typography>
          <Typography fontSize={{ xs: '16px', sm: '20px' }}>
            Выполненные уроки
          </Typography>
        </Box>
        <Box mt={{ xs: 1, sm: 2 }}>
          <Typography fontSize={{ xs: '28px', sm: '36px' }}>
            50
          </Typography>
          <Typography fontSize={{ xs: '16px', sm: '20px' }}>
            Выполнено в %
          </Typography>
        </Box>
        <ProgressContainer mt={{ xs: 1, sm: 2 }}>
          <BorderLinearProgress variant="determinate" value={50} colorBg="#9D70FF" />
        </ProgressContainer>
      </Box>
    </Box>
  );
}

export default ActivityCard;
