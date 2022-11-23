import React from 'react';
// import ReactDOM from 'react-dom'; //구버전
import { createRoot } from 'react-dom/client';
import { Reset } from 'styled-reset';
import App from './App';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <>
    <Reset />
    <App />
  </>
);
