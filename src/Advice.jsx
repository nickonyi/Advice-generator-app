import Dividor from './assets/images/pattern-divider-desktop.svg?react';
import Dice from './assets/images/icon-dice.svg?react';

function Advice() {
  return (
    <div className="container">
      <h2>Advice # ""</h2>
      <p className="advice">Some dummy type of a advice</p>
      <Dividor className="dividor" />
      <div className="dice-container">
        <Dice className="dice" />
      </div>
    </div>
  );
}

export default Advice;
