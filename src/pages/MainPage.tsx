import { Grid } from '@mui/material';
import React from 'react';
import Sidebar from '../widgets/Sidebar';
import Main from './Main';

function MainPage() {
  return (
    <Grid container maxHeight="100vh" width="100vw" height="100vh">
      <Grid item lg={2} md={4} xs={6}>
        <Sidebar />
      </Grid>

      <Grid item lg={10} md={8} xs={8}>
        <Main />
      </Grid>
    </Grid>
  );
}

export default MainPage;
