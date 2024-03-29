import * as React from 'react';
import { Container, Typography, Box, Grid, Link, TextField, CssBaseline, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Toast from 'shared/ui/Toast/Toast';
import Logo from 'shared/ui/Logo/Logo';
import useAuth from 'entities/user/api/lib/useAuth';
import { useMutation } from 'react-query';
import instance from 'shared/api/axiosConfig';

export default function Login() {
  const navigate = useNavigate()    
  const [open, setOpen] = React.useState(false)
  const setRole = useAuth(state => state.setUserRole)
  const setUserName = useAuth(state => state.setUserName)
  const setGroupId = useAuth(state => state.setGroupId)
  const setOrgId = useAuth(state => state.setOrgId)

  const mut = useMutation(newLogin => {
    return instance.post('/login', newLogin)
  })
  console.log(mut.isSuccess);
  
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); 
    const form = new FormData(event.currentTarget);
    const email = form.get('email')?.toString()
    const password = form.get('password')?.toString()
  
    try {
      const res = await mut.mutateAsync({ email, password } as never as void)
  
      if (res.data) {     
        localStorage.setItem('accessToken', res.data.accessToken)
        const me = instance.get('/me')    
        const {name, role, group_id } = (await me).data          
        setGroupId(group_id)
        setUserName(name)   
        setRole(role) 

        if((await me).data.organization_id) {
          setOrgId((await me).data.organization_id)
        }
        
        switch(role) {
          case 'TEACHER':
            navigate('/teacher');
            break;
          case 'STUDENT':
            navigate('/');
            break;
          case 'ORGANIZATOR':
            navigate('/dashboard');
            break;
        }    
      }
    } catch (error) {
      setOpen(true)
    }
  };

  return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            height: '100%'
          }}          
        >
          <Logo />
          <Typography component="h1" variant="h5">
            Войти
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Почта"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Пароль"
              type="password"
              id="password"
              autoComplete="current-password"
            />    
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Войти
            </Button>            
          </Box>
        </Box>
        {/* @ts-ignore */}
        <Toast open={open} setOpen={setOpen} msg={mut?.error?.response?.data?.message} variant='error' />
      </Container>
  );
} 