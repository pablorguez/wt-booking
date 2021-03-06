import React, { useEffect, useReducer } from 'react';
import { Box, Container } from '@mui/material';

import { Layout } from '../components/layout';
import Header from '../components/header';

const reducer = (state, { type, value }) => {
  let newState;

  switch (type) {
    case 'session':
      newState = value;
      break;

    default:
      newState = {
        ...state,
        [type]: value,
      };
  }

  window.sessionStorage.setItem('wt-form-data', JSON.stringify(newState));
  return newState;
};

const App = ({ Component, pageProps }) => {
  const [state, dispatch] = useReducer(reducer, {
    when: { from: '', to: '' },
    package: null,
    event: '',
  });

  useEffect(() => {
    const formData = JSON.parse(
      window.sessionStorage.getItem('wt-form-data') || 'null'
    );

    formData && dispatch({ type: 'session', value: formData });
  }, []);

  return (
    <Layout>
      <Header />
      <Container maxWidth="sm">
        <Box margin="0 auto">
          <Component {...pageProps} data={state} updateFormData={dispatch} />
        </Box>
      </Container>
    </Layout>
  );
};

export default App;
