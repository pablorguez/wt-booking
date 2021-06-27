import React from 'react';
import { AppBar, Box, Typography } from '@material-ui/core';

const Header = () => (
  <AppBar position="static" color="transparent">
    <Box marginY={2}>
      <Typography variant="h3" component="h1" align="center">
        WT Booking
      </Typography>
    </Box>
  </AppBar>
);

export default Header;
