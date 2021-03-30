import ReactDOM from 'react-dom';

import FillInTheBlank from './components/FillInTheBlank';
import PickOne from './components/PickOne';
import Footer from './components/Footer';

import './style.css';

ReactDOM.render((
  <div>
    <div className="index-fillin"><FillInTheBlank /></div>
    <div className="index-pickone"><PickOne /></div>
    <div className="index-footer"><Footer /></div>
  </div>
  ),
  document.getElementById('root')
);