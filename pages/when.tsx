import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Box, Button, Typography } from '@material-ui/core';

import Calendar from '../components/calendar';

const When = ({ data, updateFormData }) => {
  const [range, setRange] = useState(data.when);
  const persist = () => {
    updateFormData({ type: 'when', value: range });
  };

  useEffect(() => {
    setRange(data.when);
  }, [data]);

  return (
    <Box>
      <Box marginY={4}>
        <Typography variant="h4">When</Typography>
      </Box>
      <Box marginBottom={4} margin="0 auto 32px" display="inline-block">
        <Calendar value={range} onChange={setRange} />
      </Box>
      <Link href="/package">
        <Button
          variant="contained"
          onClick={persist}
          color="primary"
          disabled={!range.from || !range.to}
          size="large"
          fullWidth
        >
          <Typography variant="h5">Continue</Typography>
        </Button>
      </Link>
    </Box>
  );
};

export default When;
