import {
  List, ListItem, Stack, Typography, Box, Avatar,
  IconButton, Drawer, Divider, Tooltip,
} from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import Logo from 'shared/ui/Logo/Logo';
import useAuth from 'entities/user/api/lib/useAuth';
import HomeIcon from './icons/Vector.svg';
import LessonsIcon from './icons/lessons.svg';
import LoginIcon from './icons/login.svg';
import LogoutIcon from './icons/logout.svg';
import { Role } from 'entities/user/model/user.model';

function Sidebar() {
  const navigate = useNavigate();
  const name = useAuth(state => state.userName)
  const role = useAuth(state => state.role)
  const [open, setOpen] = useState(false);
  const [activeButton, setActiveButton] = useState<string | null>(null);

  const roleNavigate = role === "STUDENT" ? "/lessons" : "/add-lesson"
  const lessonForRole = role === "STUDENT" ? "Уроки" : "Добавить урок"
  const homeNavigate = () => {
    switch (role) {
      case "STUDENT":
        navigate("/")
        break;
      case "ORGANIZATOR":
        navigate("/dashboard");
        break;
      default:
        navigate("/teacher");
    }

  }
  console.log(homeNavigate);
  

  const logout = () => {
    localStorage.clear()
    navigate("/login")
  }

  const handleButtonClick = (buttonName: string) => {
    setActiveButton(buttonName);
  };

  // eslint-disable-next-line no-unused-vars
  const toggleDrawer = (isOpen: boolean | ((prev: boolean) => boolean)) => {
    setOpen(isOpen);
  };

  const isActive = (buttonName: string) => {
    return activeButton === buttonName;
  };

  return (
    <Box  
      bgcolor='#5D7CFB' 
      height='100%' 
      px={2}
      position='fixed' 
      display='flex' 
      flexDirection='column' 
      alignItems='center' 
      justifyContent='space-between' 
    > 
      <Box py={2}> 
        <Typography color='white' fontSize='25px'>LIAN</Typography> 
        <Box 
          mt={4} 
          display='flex' 
          flexDirection='column' 
          alignItems='center' 
          gap={4} 
        > 
          <Box
            sx={{
              borderRadius: '50%',
              border: isActive('home') ? '1px solid white' : '',
            }}
          >
            <IconButton 
              onClick={() => {
                homeNavigate();
                handleButtonClick('home');
              }}
              sx={{                
                borderRadius: '50%',
              }}
            >
              <img src={HomeIcon}  />  
            </IconButton>
          </Box> 
          <Box
            sx={{
              borderRadius: '50%',
              border: isActive('lessons') ? '1px solid white' : '',
            }}
          >
            <IconButton 
              onClick={() => {
                navigate(roleNavigate);
                handleButtonClick('lessons');
              }}
              sx={{                
                borderRadius: '50%',
              }}
            >
              <img src={LessonsIcon} /> 
            </IconButton>
          </Box>             
        </Box> 
      </Box> 
      <Box 
        display='flex' 
        flexDirection='column' 
        alignItems='center' 
        gap={2} 
        mb={4} 
      > 
          <img src={LoginIcon} /> 
          <IconButton onClick={logout}>
            <img src={LogoutIcon}/> 
          </IconButton> 
      </Box> 
    </Box>     
  );
}

export default Sidebar;
