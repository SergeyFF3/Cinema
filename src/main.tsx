import { ThemeProvider } from '@emotion/react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { App } from './app/App';
import { StoreProvider } from './app/providers/StoreProvider';
import './app/styles/index.css';
import { theme } from './app/theme/theme';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <StoreProvider>
          <App />
        </StoreProvider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
