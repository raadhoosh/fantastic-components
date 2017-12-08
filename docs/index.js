/* eslint-disable global-require, import/no-unresolved, react/no-multi-comp */
import React from 'react';
import ReactDOM from 'react-dom';
import 'purecss/build/pure.css';
import './main.css';
import '../style.css';
import App from './App';

ReactDOM.render(
  <div>
    <App/>
  </div>,
  document.getElementById('catalog')
);
