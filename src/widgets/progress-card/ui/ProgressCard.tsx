import React from 'react';
import { Box, Typography, useMediaQuery, useTheme, Icon } from '@mui/material';

interface LessonCardProps {
  title: string;
  icon: string
}

export function ProgressCard({ title, icon }: LessonCardProps) {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const boxWidth = isSmallScreen ? '100%' : '240px';
  const boxHeight = isSmallScreen ? 'auto' : '260px';
  const fontSize = isSmallScreen ? '16px' : '20px';

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
      <Icon sx={{fontSize: "82px"}}>
        {icon}
      </Icon>
    </Box>
  );
}