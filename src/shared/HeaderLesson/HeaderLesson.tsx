import { Stack, Typography, Breadcrumbs } from '@mui/material';
import React from 'react';

interface HeaderLessonProps {
    title: string
}

function HeaderLesson({ title }: HeaderLessonProps) {
  return (
    <Stack direction="row" justifyContent="space-between" width="90%" alignItems="center">
      <Typography fontSize="46px">
        Урок -
        {' '}
        {title}
      </Typography>
      <Breadcrumbs>
        <Typography fontSize="22px" color="text.primary">Презентация</Typography>
        <Typography fontSize="22px" color="text.primary">Лекция</Typography>
        <Typography fontSize="22px" color="text.primary">Тест</Typography>
      </Breadcrumbs>
    </Stack>
  );
}

export default HeaderLesson;
