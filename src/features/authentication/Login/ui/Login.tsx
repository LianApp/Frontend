import * as React from 'react';
import { Container, Typography, Box, Grid, Link, TextField, CssBaseline, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Toast from 'shared/ui/Toast/Toast';
import Logo from 'shared/ui/Logo/Logo';

const user = {
    email: 'feat@feat',
    password: '424242'
}

export default function Login() {
  const navigate = useNavigate()
  const [open, setOpen] = React.useState(false)
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const password = data.get('password')
    if(password === user.password) {
        navigate('/');
    } else {
        setOpen(true);
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
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Забыли пароль?
                </Link>
              </Grid>              
            </Grid>
          </Box>
        </Box>
        <Toast open={open} setOpen={setOpen} msg='Пароли не совпадают' variant='error' />
      </Container>
  );
}