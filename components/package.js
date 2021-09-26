import React from 'react';
import { Box, Paper, Typography } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';

const Package = ({ title, price, description, selected, onClick }) => (
  <Paper elevation={2} onClick={onClick}>
    <Box p={2}>
      <Typography variant="h5">{title}</Typography>
      <Typography variant="h5">{price}</Typography>
      {selected && (
        <Box>
          <CheckCircle />
          <Typography variant="body1">{description}</Typography>
        </Box>
      )}
    </Box>
  </Paper>
);

export default Package;
