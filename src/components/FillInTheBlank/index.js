import { useState, Fragment } from 'react';
import { questionMap } from './questionMap.js';
import './style.css';

const FillInTheBlank = () => {
  const getRandomQuestion = () => {
    const questionNum = Math.floor(Math.random() * Object.keys(questionMap).length);
    return questionMap[questionNum]
  }
  const questionList = getRandomQuestion();
  
  const blankPositions = questionList.map((line) => {
    const start = line.indexOf("___");
    return [start, start+2];
  })

  let initInputs = {};
  questionList.forEach((_, i) => {
    initInputs[i] = "";
  })

  const [inputs, setInputs] = useState(initInputs);
  const [buttonClicked, setButtonClicked] = useState(false);
  
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
          autocapitalize={blankPositions[i][0] === 0 ? "on" : "none"}
        />
        {line.substring(blankPositions[i][1]+1, line.length)}
        <br/>
      </Fragment>
    )
  )

  const copyLines = () => {
    setButtonClicked(true);
    setTimeout(() => setButtonClicked(false), 1000);

    const lines = questionList.map((line, i) => {
      if (inputs[i].length === 0) {
        return line
      }
      return line.replace("___", "*" + inputs[i] + "*")
    }).join("\n");
    navigator.clipboard.writeText(lines);
  }

  const copyButtonDOM = (
    <span 
      className={"button" + (buttonClicked ? " buttonClicked" : "")}
      onClick={copyLines}
    >
      {buttonClicked ? "copied" : "copy my lines"}
    </span>
  )

  const year = new Date().getFullYear();

  return (
    <div className="main-fillin">
      <div className="fillin">Fill in the blank.</div>
      <div className="lines">{questionListDOM}</div>
      {copyButtonDOM}
    </div>
  );
}

export default FillInTheBlank;
