import React from 'react';
import {
  Box, Typography,
} from '@mui/material';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { styled } from '@mui/material/styles';

interface CardProps {
    variant: 'sm' | 'lg' | 'md'
}

// eslint-disable-next-line max-len
export const BorderLinearProgress = styled(LinearProgress)(({ theme, colorBg }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === 'light' ? colorBg : '#308fe8',
  },
}));

function CardBlock({ variant }: CardProps) {
  console.log(variant);
  return (
    <Box
      width="450px"
      height="260px"
      maxHeight="360px"
      sx={{
        boxShadow: '0px 4px 4px 4px rgba(74, 0, 233, 0.25)',
        borderRadius: '20px',
      }}
      display="flex"
      flexDirection="column"
      alignItems="center"
    >
      <Box py={2} px={4} width="90%">
        <Box>
          <Typography fontSize="36px">
            21/42
          </Typography>
          <Typography fontSize="20px">
            Выполненные уроки
          </Typography>
        </Box>
        <Box mt={2}>
          <Typography fontSize="36px">
            50
          </Typography>
          <Typography fontSize="20px">
            Выполнено в %
          </Typography>
        </Box>
        <Box mt={2}>
          <BorderLinearProgress variant="determinate" value={50} colorBg="#9D70FF" />
        </Box>
      </Box>
    </Box>
  );
}

export default CardBlock;
