import React from 'react';
import '../styles/global.css';

import { VariationProvider } from '../context/variations';

export default function App({ Component, pageProps }) {
  return (
    <VariationProvider>
      <Component {...pageProps} />
    </VariationProvider>
  );
}
