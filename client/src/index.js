import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './Routes';
import {BrowserRouter} from 'react-router-dom'
import './Resources/css/styles.css'

ReactDOM.render(
  <BrowserRouter>
  <Routes/>
  </BrowserRouter>,
  document.getElementById('root')
);


