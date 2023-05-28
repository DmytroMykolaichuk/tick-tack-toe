import { useEffect, useState } from 'react';
import { ButtonGame } from './GameButton.js';

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
    <ButtonGame
      onClick={handelStep}
      style={{
        color: (step === 'X' && 'red') || (step === 'O' && 'black'),
      }}
      disabled={!newGame && step}
    >
      {!newGame && step}
    </ButtonGame>
  );
};
