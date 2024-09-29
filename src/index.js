import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from '../src/components/Header.js'
import Content from './components/Content.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
      <Header></Header>
      <Content></Content>
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

