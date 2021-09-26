import React from 'react';
import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';

import { theme } from '../config/themes/wt';
import { GlobalStyle } from '../components/styles/global-style';
import { useServiceWorker } from '../hooks/use-service-worker';

const Layout = ({ children }) => {
  useServiceWorker();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};

export { Layout };
