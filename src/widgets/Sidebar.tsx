import {
  List, ListItem, Stack, Typography, Box, Avatar,
} from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../shared/icons/logo.svg';

function Sidebar() {
  const navigate = useNavigate();
  return (
    <Stack direction="column" borderRight={2} height="100vh" borderRadius={3} position="fixed" py={4} px={6} justifyContent="space-between">
      <Box>
        <Box component="img" alt="logo" src={logo} width={130} height={100} mb={2} />
        <List>

          <ListItem onClick={() => navigate('/')}>
            <Typography sx={{ cursor: 'pointer' }} fontSize="22px">Главная</Typography>
          </ListItem>

          <ListItem>
            <List>
              <Typography fontSize="22px">Основное</Typography>
              <ListItem onClick={() => navigate('/lessons')}>
                <Typography sx={{ cursor: 'pointer' }} fontSize="18px">Уроки</Typography>
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
      </Box>
      <Box display="flex" alignItems="center">
        <Avatar alt="User User">U</Avatar>
        <Typography ml={2}>User User</Typography>
      </Box>
    </Stack>
  );
}

export default Sidebar;
