import Dividor from './assets/images/pattern-divider-desktop.svg?react';
import MobileDividor from './assets/images/pattern-divider-mobile.svg?react';
import Dice from './assets/images/icon-dice.svg?react';
import { useState } from 'react';

function Advice() {
  const [advice, setAdvice] = useState('');
  const [adviceNo, setAdviceNo] = useState('');
  const fetchAdvice = async () => {
    try {
      const response = await fetch('https://api.adviceslip.com/advice');
      const data = await response.json();
      setAdviceNo(data.slip.id);
      setAdvice(data.slip.advice);
    } catch (error) {
      console.log('error fetching advice', error);
    }
  };
  return (
    <div className="container">
      <h2>Advice # {adviceNo && adviceNo}</h2>
      <p className="quote">
        {advice ? advice : 'Click the button below to generate advices'}
      </p>
      <div className="dividor-container">
        <Dividor className="dividor" />
        <MobileDividor className="m-dividor" />
      </div>
      <div className="dice-container" onClick={fetchAdvice}>
        <Dice className="dice" />
      </div>
    </div>
  );
}

export default Advice;
