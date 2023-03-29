import {
  List, ListItem, Stack, Typography, Box,
} from '@mui/material';
import React from 'react';
import logo from '../shared/imgs/logo.svg';

function Sidebar() {
  return (
    <Stack direction="column" borderRight={2} height="100vh" borderRadius={3} position="fixed" py={4} px={6}>
      <Box component="img" alt="logo" src={logo} width={130} height={100} mb={2} />
      <List>

        <ListItem>
          <Typography fontSize="22px">Главная</Typography>
        </ListItem>

        <ListItem>
          <List>
            <Typography fontSize="22px">Основное</Typography>
            <ListItem>
              <Typography fontSize="18px">Уроки</Typography>
            </ListItem>
            <ListItem>
              <Typography fontSize="18px">Тесты</Typography>
            </ListItem>
          </List>
        </ListItem>

        <ListItem>
          <List>
            <Typography fontSize="22px">Помощь</Typography>
            <ListItem>
              <Typography fontSize="18px">Документация</Typography>
            </ListItem>
          </List>
        </ListItem>
      </List>

    </Stack>
  );
}

export default Sidebar;
