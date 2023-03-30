/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Grid } from '@mui/material';
import Sidebar from '../widgets/Sidebar';
import Lessons from '../pages/Lessons';

function App() {
  return (
    <Grid container maxHeight="100vh" width="100vw" height="100vh">
      <Grid item lg={2} md={4} xs={6}>
        <Sidebar />
      </Grid>

      <Grid item lg={10} md={8} xs={8}>
        <Lessons />
      </Grid>
    </Grid>
  );
}

export default App;
