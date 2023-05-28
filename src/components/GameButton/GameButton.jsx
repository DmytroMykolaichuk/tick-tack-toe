import { useEffect, useState } from 'react';
import css from './GameButton.module.css';

export const Button = ({ onClick, id, player, newGame }) => {
  const [step, setStep] = useState(null);

  useEffect(() => {
    if (newGame) {
      setStep(null);
    }
  }, [newGame]);

  function handelStep() {
    setStep(player);
    onClick(id, player);
  }
  return (
    <button
      className={css.button_game}
      onClick={handelStep}
      style={{
        color: (step === 'X' && 'red') || (step === 'O' && 'black'),
      }}
      disabled={!newGame && step}
    >
      {!newGame && step}
    </button>
  );
};
