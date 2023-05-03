import { Stack, Typography, Breadcrumbs } from '@mui/material';
import useLesson from 'entities/lesson/api/useLesson';
import React from 'react';
import { Link } from 'react-router-dom';


function HeaderLesson() {
  const title = useLesson(state => state.title)
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
