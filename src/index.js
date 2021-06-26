import './style.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import { hot } from 'react-hot-loader';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Root from './components/root';
import footerPusher from './utils/footerPusher'
//import { Provider } from 'react-redux'
//import store from './app/store'
hot(module)(Root);

document.addEventListener('DOMContentLoaded', () => {
  footerPusher();
})

window.addEventListener('resize', () => {
  footerPusher();
})

ReactDOM.render(
  //<Provider store={store}>
    <Root />
  //</Provider>
  ,
  document.querySelector('#root')
);