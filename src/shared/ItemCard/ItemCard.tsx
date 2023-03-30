import { Box, Typography } from '@mui/material';
import React from 'react';

function ItemCard() {
  return (
    <Box
      sx={{
        boxShadow: '0px 4px 4px 4px rgba(74, 0, 233, 0.25)',
        borderRadius: '20px',
        width: '100%',
      }}
      height="25%"
      py={2}
      px={2}
    >
      <Typography fontSize="18px">Работа с сетью</Typography>
      <Typography fontSize="14px">TCP / IP</Typography>
    </Box>
  );
}

export default ItemCard;
