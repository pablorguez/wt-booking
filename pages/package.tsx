import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Box, Button, Paper, Typography } from '@material-ui/core';
import { CheckCircle } from '@material-ui/icons';

const packages = [
  {
    id: 0,
    title: 'Package 1',
    price: '299.90€',
    description: `Quisque vestibulum nisi at lobortis interdum. Vestibulum feugiat risus eget tellus porttitor pharetra. Phasellus lorem arcu, sollicitudin in enim a, ultrices malesuada libero. Praesent vehicula neque ante. Proin gravida quis diam eget fringilla. Duis eget urna magna. Praesent tellus mauris, faucibus in hendrerit id, semper ac elit. Curabitur ullamcorper, massa eget tincidunt convallis, purus turpis ullamcorper lectus, sed porttitor magna dolor placerat risus. Nullam rutrum euismod fermentum.`,
  },
];

const Package = ({ data, updateFormData }) => {
  const [expanded, setExpanded] = useState();
  const persist = () => {
    updateFormData({
      type: 'package',
      value: packages.filter(({ id }) => id === expanded)[0],
    });
  };

  useEffect(() => {
    data.package && setExpanded(data.package.id);
  }, [data]);

  return (
    <Box>
      <Box marginY={4}>
        <Typography variant="h4">Select a package</Typography>
      </Box>
      <Box>
        {packages.map(({ description, id, price, title }) => (
          <Paper key={id} elevation={2} onClick={() => setExpanded(id)}>
            <Typography variant="h5">{title}</Typography>
            <Typography variant="h5">{price}</Typography>
            {id === expanded && <CheckCircle />}
            {id === expanded && (
              <Typography variant="body1">{description}</Typography>
            )}
            {id === expanded && (
              <Link href="/confirmation">
                <Button variant="contained" onClick={persist} fullWidth>
                  <Typography variant="body1">
                    Continue with this package
                  </Typography>
                </Button>
              </Link>
            )}
          </Paper>
        ))}
      </Box>
    </Box>
  );
};

export default Package;
