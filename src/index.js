import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {questionMap} from './questionMap.js';

const getRandomQuestion = () => {
  const questionNum = Math.floor(Math.random() * Object.keys(questionMap).length);
  return questionMap[questionNum]
}

ReactDOM.render(
  <App questionList={getRandomQuestion()} />,
  document.getElementById('root')
);
