import React from 'react';
import { RecoilRoot } from 'recoil';
import ReactDOM from 'react-dom/client';
import { Reset } from 'styled-reset';
import App from './App';
import GlobalStyle from './styles/global';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RecoilRoot>
    <Reset />
    <GlobalStyle />
    <App />
  </RecoilRoot>,
);
