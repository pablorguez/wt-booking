import React, { useState } from 'react';
import { Layout } from '../components/layout';
import Calendar from '../components/calendar';

const When = () => {
  const [range, setRange] = useState({ from: null, to: null });

  return (
    <Layout>
      <h3>When</h3>

      <Calendar value={range} onChange={setRange} />
    </Layout>
  );
};

export default When;
