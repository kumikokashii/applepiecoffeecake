import { useState } from 'react';
import { readingMap } from './readingMap.js';
import './style.css';

const PickOne = () => {
  const [pickedNum, setPickedNum] = useState(-1);

  const getRandomNums = (n=3) => {
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

  return (
    (pickedNum === -1) ? (
      <div className="center-wrapper">
        <div className="main-pick-one">
          <div className="pickone">Pick one.</div>
          <div className="options">{
            randomNums.map((readingNum) => 
              <div className="option" onClick={()=>setPickedNum(readingNum)}>This one.</div>
            )}
          </div>
        </div>
      </div>
    ) : (
      <div className="center-wrapper">
        <div className="main-pick-one reading">
          <div className="reading-image"><img src={"/readingImages/"+readingMap[pickedNum].image} alt="cards" /></div>
          <div className="reading-text">{readingMap[pickedNum].text}</div>
          <div className="private-reading">
            You may find personal readings helpful. If interested, message Kumiko at <a href = "mailto: kumiverse@gmail.com">kumiverse@gmail.com</a> for further information. Please note that the availability is limited, and there is a small but required fee.
          </div>
        </div>
      </div>
    )
  );
}

export default PickOne;
