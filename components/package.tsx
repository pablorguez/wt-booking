import React from 'react';
import { Box, Paper, Typography } from '@material-ui/core';
import { CheckCircle } from '@material-ui/icons';

interface PackageItem {
  id: number;
  title: string;
  price: string;
  description: string;
  selected: boolean;
  onClick: () => void;
}

const Package = ({
  title,
  price,
  description,
  selected,
  onClick,
}: PackageItem) => (
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
