import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './app/App';
import { StoreProvider } from './app/providers/StoreProvider';
import './app/styles/index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <StoreProvider>
      <App />
    </StoreProvider>
  </React.StrictMode>,
);
