import { ArrowBack, ArrowForward } from '@mui/icons-material';
import {
  Box, Breadcrumbs, Button, IconButton, Stack, Typography,
} from '@mui/material';
import React from 'react';
import withSidebar from '../widgets/hoc/withSidebar';

function Lesson() {
  return (
    <Box mt={4} ml={5} width="100%" height="90%">

      <Stack direction="row" justifyContent="space-between" width="90%" alignItems="center">
        <Typography fontSize="46px">Урок - Алгоритмизация</Typography>
        <Breadcrumbs>
          <Typography fontSize="22px" color="text.primary">Презентация</Typography>
          <Typography fontSize="22px" color="text.primary">Лекция</Typography>
          <Typography fontSize="22px" color="text.primary">Тест</Typography>
        </Breadcrumbs>
      </Stack>

      <Stack direction="column" width="90%" height="70%" mt={6} alignItems="center">
        <Box
          sx={{
            border: '1px solid black',
          }}
          width="100%"
          height="100%"
        />
        <Box mt={4}>
          <IconButton>
            <ArrowBack />
          </IconButton>
          <IconButton>
            <ArrowForward />
          </IconButton>
        </Box>
      </Stack>

      <Stack alignItems="flex-end" width="90%" mt={6}>
        <Button
          sx={{
            boxShadow: '0px 4px 4px 4px rgba(0, 0, 0, 0.25)',
            borderRadius: '50px',
            color: 'black',
            px: '8px',
          }}
          size="small"
        >
          <Typography fontSize="12px">Перейти к лекции</Typography>
          <IconButton>
            <ArrowForward />
          </IconButton>
        </Button>
      </Stack>

    </Box>
  );
}

export default withSidebar(Lesson);
