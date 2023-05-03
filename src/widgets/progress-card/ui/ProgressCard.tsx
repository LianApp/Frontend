import React from 'react';
import { Box, Typography, CircularProgress, useMediaQuery, useTheme } from '@mui/material';

interface LessonCardProps {
  title: string;
  progress: number;
}

export function ProgressCard({ title, progress }: LessonCardProps) {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const boxWidth = isSmallScreen ? '100%' : '240px';
  const boxHeight = isSmallScreen ? 'auto' : '260px';
  const fontSize = isSmallScreen ? '16px' : '20px';
  const progressSize = isSmallScreen ? 80 : 120;

  return (
    <Box
      width={boxWidth}
      height={boxHeight}
      sx={{
        boxShadow: '0px 4px 4px 4px rgba(74, 0, 233, 0.25)',
        borderRadius: '20px',
      }}
      display="flex"
      flexDirection="column"
      py="4"
      px="2"
      justifyContent="space-around"
      alignItems="center"
    >
      <Typography fontSize={fontSize}>{title}</Typography>
      <CircularProgress
        size={progressSize}
        sx={{ color: '#9D70FF' }}
        variant="determinate"
        value={progress}
      />
    </Box>
  );
}