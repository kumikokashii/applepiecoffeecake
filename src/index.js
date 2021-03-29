import ReactDOM from 'react-dom';

import FillInTheBlank from './components/FillInTheBlank';
import PickOne from './components/PickOne';
import Footer from './components/Footer';

import './style.css';

ReactDOM.render((
  <div>
    <div class="index-fillin"><FillInTheBlank /></div>
    <div class="index-pickone"><PickOne /></div>
    <div class="index-footer"><Footer /></div>
  </div>
  ),
  document.getElementById('root')
);