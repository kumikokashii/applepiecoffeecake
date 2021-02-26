import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const getRandomQuestionNumber = () => {
  return Math.floor(Math.random() * 3);
}

ReactDOM.render(
  <App questionNum={getRandomQuestionNumber()} />,
  document.getElementById('root')
);