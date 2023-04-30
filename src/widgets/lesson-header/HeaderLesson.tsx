import { Stack, Typography, Breadcrumbs } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

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
        <Link style={{ fontSize: '22px', color: 'black' }} to="/lessons/1/pres">Презентация</Link>
        <Link style={{ fontSize: '22px', color: 'black' }} to="/lessons/1/lecture">Лекция</Link>
        <Link style={{ fontSize: '22px', color: 'black' }} to="/lessons/1/test">Тест</Link>
      </Breadcrumbs>
    </Stack>
  );
}

export default HeaderLesson;
