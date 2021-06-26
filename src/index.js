import './style.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import { hot } from 'react-hot-loader';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Root from './components/root';
//import { Provider } from 'react-redux'
import store from './app/store'
require("regenerator-runtime/runtime");
hot(module)(Root);

function footerPusher() {
  const header = document.querySelector('.navbar').clientHeight;
  const footer = document.querySelector('.footer').clientHeight;
  document.querySelector('.main').style.minHeight = String(window.innerHeight - (header + footer)).concat("px");
}
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