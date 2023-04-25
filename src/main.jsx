import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { GlobalContextApp } from './globalContext';
ReactDOM.createRoot(document.getElementById('root')).render(
  <GlobalContextApp>
    <App />
  </GlobalContextApp>
);
