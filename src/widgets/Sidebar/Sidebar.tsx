  import {
    List, ListItem, Stack, Typography, Box, Avatar,
    IconButton, Drawer, Divider, Tooltip,
  } from '@mui/material';
  import React, { useState } from 'react';
  import { useNavigate } from 'react-router-dom';
  import MenuIcon from '@mui/icons-material/Menu';
  import Logo from 'shared/ui/Logo/Logo';
  import useAuth from 'entities/user/api/lib/useAuth';
  import LogoutIcon from '@mui/icons-material/Logout';

  function Sidebar() {
    const navigate = useNavigate();
    const name = useAuth(state => state.userName)
    const role = useAuth(state => state.role)
    const [open, setOpen] = useState(false);

    const roleNavigate = role === "STUDENT" ? "/lessons" : "/add-lesson"
    const lessonForRole = role === "STUDENT" ? "Уроки" : "Добавить урок"
    const homeNavigate = role === "STUDENT" ? "/" : "/teacher"

    const logout = () => {
      localStorage.clear()
      navigate("/login")
    }

    // eslint-disable-next-line no-unused-vars
    const toggleDrawer = (isOpen: boolean | ((prev: boolean) => boolean)) => {
      setOpen(isOpen);
    };

    const menuItems = (
      <Stack
        direction="column"
        borderRight={{ md: 1, xs: 0, lg: 1 }} 
        height="100vh"
        position="fixed"
        py={{ lg: 2, xs: 2 }}
        px={{ lg: 2, xs: 2 }}
        justifyContent="space-between"
        width={{ xs: '100%', md: '12%' }}
      >
        <List>
          <Logo />  
          <ListItem onClick={() => navigate(homeNavigate)}>
            <Typography fontFamily='Montserrat' sx={{ cursor: 'pointer' }} fontSize="22px">Главная</Typography>
          </ListItem>
          <Divider />
          <ListItem>
            <List>
              <Typography  fontFamily='Montserrat' fontSize="22px">Основное</Typography>
              {role === "TEACHER" && (
              <ListItem>
                <Typography fontFamily='Montserrat' fontSize="14px">Добавить курс</Typography>
              </ListItem>
              )}
              <ListItem onClick={() => navigate(roleNavigate)}>
                <Typography fontFamily='Montserrat' sx={{ cursor: 'pointer' }} fontSize="14px">{lessonForRole}</Typography>
              </ListItem>
              <ListItem>
                <Typography fontFamily='Montserrat' fontSize="14px">Тесты</Typography>
              </ListItem>              
            </List>
          </ListItem>
          <Divider />
          <ListItem>
            <List>
              <Typography fontFamily='Montserrat' fontSize="22px">Помощь</Typography>
              <ListItem>
                <Typography fontFamily='Montserrat' fontSize="14px">Документация</Typography>
              </ListItem>
            </List>
          </ListItem>
        </List>
        <Box display="flex" alignItems="center">
          <Avatar alt="User User">{name[0][0]}</Avatar>
          <Typography fontFamily='Montserrat' ml={2} fontSize={{md: "12px", xs: "10px"}}>{name}</Typography>
          <Box >
            <Tooltip title="Выйти">
              <IconButton onClick={logout}>
                <LogoutIcon />
              </IconButton>
            </Tooltip>
          </Box>
        </Box>
      </Stack>
    );

    return (
      <>
        <Box display={{ xs: 'block', md: 'none' }} >
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
      </>
    );
  }

  export default Sidebar;
