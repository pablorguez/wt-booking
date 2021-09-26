import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Box, Button, Paper, Typography } from '@mui/material';
import Package from '../components/package';

const packages = [
  {
    id: 0,
    title: 'Package 1',
    price: '299.90€',
    description: `Quisque vestibulum nisi at lobortis interdum. Vestibulum feugiat risus eget tellus porttitor pharetra. Phasellus lorem arcu, sollicitudin in enim a, ultrices malesuada libero. Praesent vehicula neque ante. Proin gravida quis diam eget fringilla. Duis eget urna magna. Praesent tellus mauris, faucibus in hendrerit id, semper ac elit. Curabitur ullamcorper, massa eget tincidunt convallis, purus turpis ullamcorper lectus, sed porttitor magna dolor placerat risus. Nullam rutrum euismod fermentum.`,
  },
];

const Packages = ({ data, updateFormData }) => {
  const [selectedPackage, setSelected] = useState();
  const persist = () => {
    updateFormData({
      type: 'package',
      value: selectedPackage,
    });
  };

  useEffect(() => {
    data.package && setSelected(data.package);
  }, [data]);

  return (
    <Box>
      <Box marginTop={4}>
        <Typography variant="h4">Select a package</Typography>
      </Box>
      <Box marginY={4}>
        {packages.map(pack => (
          <Package
            key={pack.id}
            {...pack}
            selected={pack.id === selectedPackage?.id}
            onClick={() => setSelected(pack)}
          />
        ))}
      </Box>
      <Box>
        <Link href="/confirmation">
          <Button
            color="primary"
            disabled={!selectedPackage}
            fullWidth
            onClick={persist}
            size="large"
            variant="contained"
          >
            <Typography variant="h5">Continue</Typography>
          </Button>
        </Link>
      </Box>
    </Box>
  );
};

export default Packages;
