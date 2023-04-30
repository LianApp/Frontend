import React from 'react';
import { ArrowBack, ArrowForward } from '@mui/icons-material';
import {
  Box, Typography, Stack, IconButton, InputBase, Divider,
} from '@mui/material';
import ActivityCard from 'widgets/activity-card/ui/ActivityCard';
import ItemCard from 'shared/ItemCard/ItemCard';
import { ProgressCard } from 'widgets/progress-card/ui/ProgressCard';
import withSidebar from 'shared/hoc/withSidebar';

function Main() {
  return (
    <Box mt={4} ml={5}>
      <Typography fontSize="46px">Добро пожаловать, User!</Typography>

      <Stack direction="column" width="100%" mt={6}>

        <Stack direction="row" justifyContent="space-between" width="85%">
          <Typography fontSize="36px">Мой прогресс</Typography>
          <Box>
            <IconButton>
              <ArrowBack />
            </IconButton>
            <IconButton>
              <ArrowForward />
            </IconButton>
          </Box>
        </Stack>

        <Stack direction="row" mt={3}>
          <ActivityCard />
          <Stack direction="row" spacing={3} ml={8}>
            <ProgressCard title="Компьютерные сети" progress={40} />
            <ProgressCard title="Алгоритмизация" progress={70} />
            <ProgressCard title="Операционные системы" progress={60} />
          </Stack>
        </Stack>

      </Stack>

      <Box mt={4} width="100%" maxHeight="600px" height="400px">
        <Typography fontSize="36px">Мои уроки</Typography>
        <InputBase
          sx={{
            boxShadow: '1px 4px 4px 2px rgba(131, 131, 131, 0.25)',
            borderRadius: '50px',
            paddingLeft: '20px',
            outline: '0',
            width: '20%',
            mt: '20px',
          }}
          placeholder="Поиск..."
        />

        <Stack direction="row" spacing={8} height="100%" mt={6}>

          <Stack direction="column" width="20%">
            <Typography fontSize="20px">Компьютерные сети</Typography>
            <Stack height="100%" spacing={4} mt={2}>
              <ItemCard />
              <ItemCard />
              <ItemCard />
            </Stack>
          </Stack>

          <Divider sx={{ backgroundColor: 'black' }} orientation="vertical" flexItem />

          <Stack direction="column" width="20%">
            <Typography fontSize="20px">Алгоритмизация</Typography>
            <Stack height="100%" spacing={4} mt={2}>
              <ItemCard />
              <ItemCard />
              <ItemCard />
            </Stack>
          </Stack>

          <Divider sx={{ backgroundColor: 'black' }} orientation="vertical" flexItem />

          <Stack direction="column" width="20%">
            <Typography fontSize="20px">Операционные системы</Typography>
            <Stack height="100%" spacing={4} mt={2}>
              <ItemCard />
              <ItemCard />
              <ItemCard />
            </Stack>
          </Stack>

        </Stack>

      </Box>

    </Box>
  );
}

export default withSidebar(Main);
