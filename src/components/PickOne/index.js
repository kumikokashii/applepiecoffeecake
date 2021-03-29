import { useState } from 'react';
import { readingMap } from './readingMap.js';
import './style.css';

const PickOne = () => {
  const [pickedNum, setPickedNum] = useState(-1);

  const getRandomNums = (n=2) => {
    let nums = [];
    while (nums.length < n) {
      let temp = Math.floor(Math.random() * Object.keys(readingMap).length);
      if (!nums.includes(temp)) {
        nums.push(temp);
      }
    }
    return nums;
  }
  const randomNums = getRandomNums();

  const year = new Date().getFullYear();

  return (
    (pickedNum === -1) ? (
      <div className="center-wrapper">
        <div className="main-pick-one">
          <div className="pickone">Pick one.</div>
          <div className="options">{
            randomNums.map((_, i) => 
              <div className="option" onClick={()=>setPickedNum(i)}>This one.</div>
            )}
          </div>
        </div>
      </div>
    ) : (
      <div className="center-wrapper">
        <div className="main-pick-one reading">
          <div className="reading-image"><img src={"/readingImages/"+readingMap[pickedNum].image} /></div>
          <div className="reading-text">{readingMap[pickedNum].text}</div>
          <div className="private-reading">
            If you have a specific question, you may benefit from a private reading. If interested, email your question to Kumiko at <a href = "mailto: kumiverse@gmail.com">kumiverse@gmail.com</a> for further information. Please note that the availability is limited, and there is a small but required fee.
          </div>
        </div>
      </div>
    )
  );
}

export default PickOne;
