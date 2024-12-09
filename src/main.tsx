import { StrictMode } from 'react';

import { config } from 'config';
import { createRoot } from 'react-dom/client';

import App from './App';

import 'styles/index.css';

// eslint-disable-next-line no-console
console.log(
  `%cWELCOME TO REACT STARTER\n%cYou are running in ${config.mode} Mode`,
  'font-size: 20px; font-weight: bold; color: #19d3c5;', // Style for "1-platform"
  'font-size: 16px; color: #FF5722;' // Style for "You are running in Development Mode"
);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
