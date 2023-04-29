import { Grid } from '@mui/material';
import React from 'react';
import Sidebar from '../Sidebar';

function withSidebar(Component: React.ComponentType) {
  function WithSidebarComponent() {
    return (
      <Grid container maxHeight="100vh" sx={{ height: '100vh' }}>
        <Grid item xs={12} md={2} lg={2}>
          <Sidebar />
        </Grid>

        <Grid item xs={12} md={10} lg={10}>
          <Component />
        </Grid>
      </Grid>
    );
  }

  return WithSidebarComponent;
}

export default withSidebar;
