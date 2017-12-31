import React from "react";
import ReactDOM from "react-dom";
import App from './App';
import {ThemeProvider} from 'styled-components';
import ThemeRtl from '../src/commons/Themes/ThemeRtl';
import ThemeLtr from '../src/commons/Themes/ThemeLtr';
import 'font-awesome/css/font-awesome.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

let mountNode = document.getElementById("app");
ReactDOM.render(
  <Router>
    <App/>
  </Router>
  , mountNode);


