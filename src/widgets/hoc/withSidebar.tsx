import { Grid } from '@mui/material';
import React from 'react';
import Sidebar from '../Sidebar';

function withSidebar(Component: React.ComponentType) {
  function WithSidebarComponent() {
    return (
      <Grid container maxHeight="100vh" width="100vw" height="100vh">
        <Grid item lg={2} md={2} xs={0}>
          <Sidebar />
        </Grid>

        <Grid item lg={10} md={6} xs={12}>
          <Component />
        </Grid>
      </Grid>
    );
  }

  return WithSidebarComponent;
}

export default withSidebar;
