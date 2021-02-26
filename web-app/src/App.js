import './App.css';
import {questionMap} from './questionMap.js';
import { useState, Fragment } from 'react';

function App(props) {
  const { questionNum } = props;
  const [buttonClicked, setButtonClicked] = useState(false);

  const questionList = questionMap[questionNum];
  const blankPositions = [];
  questionList.forEach((line) => {
    const start = line.indexOf("___");
    blankPositions.push([start, start+2]);
  })

  const getInitInputs = () => {
    let initInputs = {};
    questionList.forEach((_, i) => {
      initInputs[i] = "";
    })
    return initInputs;
  }
  const [inputs, setInputs] = useState(getInitInputs());
  const inputOnChange = (event, i) => {
    let newInputs = {...inputs};
    newInputs[i] = event.target.value;
    setInputs(newInputs);
  }

  const questionListDOM = questionList.map((line, i) =>
    blankPositions[i][0] === -1 ? <Fragment>{line}<br/></Fragment> : (
      <Fragment>
        {line.substring(0, blankPositions[i][0])}
        <input
          key={i}
          value={inputs[i]}
          onChange={(event) => inputOnChange(event, i)}
          className="line-input"
          placeholder="______"
          size={inputs[i].length || 5}
        />
        {line.substring(blankPositions[i][1]+1, line.length)}<br/>
      </Fragment>
    )
  )

  const getLines = () => {
    let output = ""
    questionList.forEach((line, i) => {
      output += line.replace("___", inputs[i] || "___");
      if (i !== questionList.length-1) {
        output += "\n"
      }
    })
    return output;
  }

  const copyLines = () => {
    setButtonClicked(true);
    setTimeout(() => setButtonClicked(false), 1000);
    navigator.clipboard.writeText(getLines());
  }

  return (
    <div className="App">
      <div className="lines">
        <span className="fillin">Fill in the blank.</span>
        {questionListDOM}
      </div>
      <div className="action">
        <span 
          className={"button" + (buttonClicked ? " buttonClicked" : "")}
          onClick={copyLines}
        >
          {buttonClicked ? "copied ^_^ v" : "copy my lines"}
        </span>
      </div>
      <div className="footer">
        &copy; 2021 Kumiko Kashii
      </div>
    </div>
  );
}

export default App;
