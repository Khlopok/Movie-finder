import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';

import Header from './components/Header';
import List from './components/list/List';

const App = () => (
  <>
    <Header />
    <List />
  </>
)

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);