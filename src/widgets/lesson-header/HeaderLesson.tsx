import { Stack, Typography, Breadcrumbs } from '@mui/material';
import useLesson from 'entities/lesson/api/useLesson';
import React from 'react';
import { Link } from 'react-router-dom';


function HeaderLesson() {
  const title = useLesson(state => state.title)
  return (
    <Stack direction="row" justifyContent="space-between" width="90%" alignItems="center">
      <Typography id="header_lesson" fontFamily='Montserrat' fontSize="46px">
        Урок -
        {' '}
        {title}
      </Typography>
      <Breadcrumbs>
        <Link id="link_presentation" style={{ fontSize: '22px', color: 'black' }} to="/lessons/1/pres">Презентация</Link>
        <Link id="link_lecture" style={{ fontSize: '22px', color: 'black' }} to="/lessons/1/lecture">Лекция</Link>
        <Link id="link_test" style={{ fontSize: '22px', color: 'black' }} to="/lessons/1/test">Тест</Link>
      </Breadcrumbs>
    </Stack>
  );
}

export default HeaderLesson;