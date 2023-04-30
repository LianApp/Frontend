import { Box, Typography, CircularProgress } from '@mui/material';
import React from 'react';

interface LessonCardProps {
    title: string,
    progress: number
}

export function ProgressCard({ title, progress }: LessonCardProps) {
  return (
    <Box
      width="240px"
      height="260px"
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
      <Typography fontSize="20px">{title}</Typography>
      <CircularProgress size={120} sx={{ color: '#9D70FF' }} variant="determinate" value={progress} />
    </Box>
  );
}
