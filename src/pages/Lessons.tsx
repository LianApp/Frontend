import {
  Box, InputBase, Stack, Typography,
} from '@mui/material';
import React from 'react';
import LessonItem from '../shared/LessonItem/LessonItem';

function Lessons() {
  return (
    <Box mt={4} ml={5}>
      <Stack direction="row" justifyContent="space-between" width="90%">
        <Typography fontSize="46px">Мои Уроки</Typography>
        <InputBase
          sx={{
            boxShadow: '1px 4px 4px 2px rgba(131, 131, 131, 0.25)',
            borderRadius: '50px',
            paddingLeft: '20px',
            outline: '0',
            width: '30%',
            mt: '20px',
          }}
          placeholder="Поиск..."
        />
      </Stack>

      <Stack width="90%" height="100vh" mt={4} spacing={4}>
        <LessonItem color="#EDB72B" title="Алгоритмизация" />
        <LessonItem color="#51DA7F" title="Разработка веб-приложений" />
        <LessonItem color="#F8CEEE" title="Тестирование" />
      </Stack>

    </Box>
  );
}

export default Lessons;
