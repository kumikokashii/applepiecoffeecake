import ReactDOM from 'react-dom';

import FillInTheBlank from './components/FillInTheBlank';
import PickOne from './components/PickOne';
import Footer from './components/Footer';

import {questionMap} from './components/FillInTheBlank/questionMap.js';
import './style.css';

const getRandomQuestion = () => {
  const questionNum = Math.floor(Math.random() * Object.keys(questionMap).length);
  return questionMap[questionNum]
}

ReactDOM.render((
  <div>
    <div className="index-fillin"><FillInTheBlank questionList={getRandomQuestion()} /></div>
    <div className="index-pickone"><PickOne /></div>
    <div className="index-footer"><Footer /></div>
  </div>
  ),
  document.getElementById('root')
);