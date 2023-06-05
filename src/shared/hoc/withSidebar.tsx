import { Grid } from '@mui/material';
import React from 'react';
import Sidebar from 'widgets/Sidebar/Sidebar';

function withSidebar(Component: React.ComponentType) {
  function WithSidebarComponent() {
    return (
      <Grid container maxHeight="100vh" sx={{ height: '100vh' }}>
        <Grid item lg={0.7}>
          <Sidebar />
        </Grid>

        <Grid item lg={11}>
          <Component />
        </Grid>
      </Grid>
    );
  } 

  return WithSidebarComponent;
}

export default withSidebar;
