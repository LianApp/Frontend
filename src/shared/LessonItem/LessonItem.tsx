import React from 'react';
import { ArrowForward } from '@mui/icons-material';
import {
  Box, Stack, Typography, IconButton,
} from '@mui/material';
import LessonItemCard from './LessonItemCard/LessonItemCard';

interface LessonItemProps {
  color: string
  title: string
}

function LessonItem({ color, title }: LessonItemProps) {
  return (
    <Box
      width="100%"
      height="35%"
      px={3}
      py={3}
      sx={{
        backgroundColor: color,
        borderRadius: '20px',
        boxShadow: '8px 10px 0px -1px #000000',
      }}
    >
      <Stack direction="row" justifyContent="space-between">
        <Typography fontSize="34px">{title}</Typography>
        <IconButton>
          <ArrowForward width="30px" />
        </IconButton>
      </Stack>

      <Stack direction="row" spacing={6} mt={4} height="100%">
        <LessonItemCard progress={95} />
        <LessonItemCard progress={70} />
        <LessonItemCard progress={50} />
      </Stack>
    </Box>
  );
}

export default LessonItem;
