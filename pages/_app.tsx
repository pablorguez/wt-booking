import React from 'react';
import type { AppProps } from 'next/app';

import { Layout } from '~/components/layout';
import { Container } from '@material-ui/core';

const App = ({ Component, pageProps }: AppProps) => (
  <Layout>
    <Container>

      <Component {...pageProps} />
    </Container>
  </Layout>
);

export default App;
