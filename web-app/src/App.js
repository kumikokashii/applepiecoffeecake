import './App.css';
import {questionMap} from './questionMap.js';
import { useState, Fragment } from 'react';

function App(props) {
  const { questionNum } = props;
  const questionList = questionMap[questionNum];

  const [inputs, setInputs] = useState({});

  const inputOnChange = (event, i) => {
    let newInputs = {...inputs};
    newInputs[i] = event.target.value;
    setInputs(newInputs);
    console.log(newInputs[i].length, newInputs[i])
  }

  const questionListDOM = questionList.map((line, i) =>
    <Fragment>
      {line} 
      <input 
        value={inputs[i]}
        onChange={(event, i) => inputOnChange(event, i)}
        className="line-input" placeholder="______"
        size={6}
      />
      .<br/>
    </Fragment> 
  )

  const copyLines = () => {
    console.log("clicked on copy");
  }

  return (
    <div className="App">
      {questionNum} is the questionNum.

      <div class="lines">
        <span class="fillin">Fill in the blank.</span>
        {questionListDOM}
      </div>
      <div class="action">
        <span class="button" onClick={copyLines}>copy my lines</span>
      </div>
      <div class="footer">
        &copy; 2021 Kumiko Kashii
      </div>
    </div>
  );
}

export default App;
