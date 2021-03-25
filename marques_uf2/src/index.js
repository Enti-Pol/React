import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Header from './Header';
import Footer from './Footer';
import './index.css';

ReactDOM.render(
  <Header />,
  document.getElementById('main-header')
);

ReactDOM.render(
  <Footer />,
  document.getElementById('main-footer')
);

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
