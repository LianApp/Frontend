import {
  List, ListItem, Stack, Typography, Box, Avatar,
  IconButton, Drawer, Divider,
} from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import Logo from 'shared/ui/Logo/Logo';
import useAuth from 'entities/user/api/lib/useAuth';

function Sidebar() {
  const navigate = useNavigate();
  const name = useAuth(state => state.userName)
  const [open, setOpen] = useState(false);

  // eslint-disable-next-line no-unused-vars
  const toggleDrawer = (isOpen: boolean | ((prev: boolean) => boolean)) => {
    setOpen(isOpen);
  };

  const menuItems = (
    <Box>
      <Logo />
      <List>
        <ListItem onClick={() => navigate('/')}>
          <Typography sx={{ cursor: 'pointer' }} fontSize="22px">Главная</Typography>
        </ListItem>
        <Divider />
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
        <Divider />
        <ListItem>
          <List>
            <Typography fontSize="22px">Помощь</Typography>
            <ListItem>
              <Typography fontSize="18px">Документация</Typography>
            </ListItem>
          </List>
        </ListItem>
      </List>
      <Box display="flex" alignItems="center">
        <Avatar alt="User User">{name[0][0]}</Avatar>
        <Typography ml={2}>{name}</Typography>
      </Box>
    </Box>
  );

  return (
    <Stack
      direction="column"
      borderRight={{ md: 2, xs: 0, lg: 2 }}
      borderRadius={{ md: 3, xs: 0, lg: 3 }}
      height="100vh"
      position="fixed"
      py={{ lg: 4, xs: 0 }}
      px={{ lg: 6, xs: 0 }}
      justifyContent="space-between"
    >
      <Box display={{ xs: 'block', md: 'none' }}>
        <IconButton onClick={() => toggleDrawer(true)}>
          <MenuIcon />
        </IconButton>
        <Drawer anchor="left" open={open} onClose={() => toggleDrawer(false)}>
          {menuItems}
        </Drawer>
      </Box>
      <Box display={{ xs: 'none', md: 'block' }}>
        {menuItems}
      </Box>       
    </Stack>
  );
}

export default Sidebar;
