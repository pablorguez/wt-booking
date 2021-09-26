import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import { InfoOutlined } from '@mui/icons-material';

import Package from '../components/package';

const Confirmation = ({ data }) => (
  <Box>
    <Box my={4}>
      <Typography variant="h4">Please, check everything is correct</Typography>
    </Box>
    <Box my={4}>
      <Typography variant="h4">When</Typography>
    </Box>
    <Box my={4}>
      <Typography variant="h4">Pack</Typography>
      <Box>
        <Package {...data.package} selected={true} />
      </Box>
    </Box>
    <Box marginTop={2}>
      <Box marginBottom={1}>
        <Typography variant="body2">
          <InfoOutlined fontSize="small" />
          You agree to pay a 30% deposit to secure the selected dates.
        </Typography>
      </Box>
      <Button
        variant="contained"
        onClick={() => {
          console.log('payment');
        }}
        color="primary"
        size="large"
        fullWidth
      >
        <Typography variant="h5">Secure the dates</Typography>
      </Button>
    </Box>
  </Box>
);

export default Confirmation;
