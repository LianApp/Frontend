import {
  Box, InputBase, Stack, Typography,
} from '@mui/material';
import React from 'react';
import { LessonList } from 'widgets/lessons-list/ui/LessonList';
import withSidebar from 'shared/hoc/withSidebar';

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

      <Stack width="95%" height="100vh" mt={4} spacing={4}>
        <LessonList color="#EDB72B" title="Алгоритмизация" />
        <LessonList color="#51DA7F" title="Разработка веб-приложений" />
        <LessonList color="#F8CEEE" title="Тестирование" />
      </Stack>

    </Box>
  );
}

export default withSidebar(Lessons);
