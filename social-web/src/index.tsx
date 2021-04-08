import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Reset } from 'styled-reset';
import { MainPage } from './components/MainPage/MainPage';


ReactDOM.render(
  <React.StrictMode>
    <Reset />
    <MainPage />
  </React.StrictMode>,
  document.getElementById('root')
);

