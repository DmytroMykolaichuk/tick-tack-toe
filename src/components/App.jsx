import { useState } from 'react';
import css from './ButtonList/buttonList.module.css';

export const App = () => {
  const [step, setStep] = useState(null);
  const [playerOne, setPlayerOne] = useState(true);
  // const [playerTwo, setPlayerTwo] = useState(false);
  function getBackground(step, playerOne) {
    if (!step) return;
    return !playerOne ? 'red' : 'yellow';
  }

  function handleClick() {
    setStep(playerOne ? 'X' : 'O');
    setPlayerOne(!playerOne);
  }

  return (
    <div className={css.container_game}>
      <div className={css.container_button_game}>
        <button
          className={css.button_game}
          onClick={handleClick}
          style={{
            color: !playerOne ? 'black' : 'blue',
            backgroundColor: getBackground(step, playerOne),
          }}
        >
          {step}
        </button>
        <button
          className={css.button_game}
          onClick={handleClick}
          style={{
            color: !playerOne ? 'black' : 'blue',
            backgroundColor: getBackground(step, playerOne),
          }}
        >
          {step}
        </button>
        <button
          className={css.button_game}
          onClick={handleClick}
          style={{
            color: !playerOne ? 'black' : 'blue',
            backgroundColor: getBackground(step, playerOne),
          }}
        >
          {step}
        </button>
        <button
          className={css.button_game}
          onClick={handleClick}
          style={{
            color: !playerOne ? 'black' : 'blue',
            backgroundColor: getBackground(step, playerOne),
          }}
        >
          {step}
        </button>
        <button
          className={css.button_game}
          onClick={handleClick}
          style={{
            color: !playerOne ? 'black' : 'blue',
            backgroundColor: getBackground(step, playerOne),
          }}
        >
          {step}
        </button>
        <button
          className={css.button_game}
          onClick={handleClick}
          style={{
            color: !playerOne ? 'black' : 'blue',
            backgroundColor: getBackground(step, playerOne),
          }}
        >
          {step}
        </button>
        <button
          className={css.button_game}
          onClick={handleClick}
          style={{
            color: !playerOne ? 'black' : 'blue',
            backgroundColor: getBackground(step, playerOne),
          }}
        >
          {step}
        </button>
        <button
          className={css.button_game}
          onClick={handleClick}
          style={{
            color: !playerOne ? 'black' : 'blue',
            backgroundColor: getBackground(step, playerOne),
          }}
        >
          {step}
        </button>
        <button
          className={css.button_game}
          onClick={handleClick}
          style={{
            color: !playerOne ? 'black' : 'blue',
            backgroundColor: getBackground(step, playerOne),
          }}
        >
          {step}
        </button>
      </div>
    </div>
  );
};
