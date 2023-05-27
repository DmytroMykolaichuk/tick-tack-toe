import { useState } from 'react';
import css from './ButtonList/ButtonList.module.css';
import { Button } from './ButtonList/ButtonList';
import { ModalBanner } from './ModalBanner/ModalBanner';

export const App = () => {
  const [player, setPlayer] = useState('X');
  const [winner, setWinner] = useState(null);
  const [game, setGame] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0]);
  const [newGame, setNewGame] = useState(false);

  function getWinner() {
    if (
      (game[0] === 'X' && game[1] === 'X' && game[2] === 'X') ||
      (game[3] === 'X' && game[4] === 'X' && game[5] === 'X') ||
      (game[6] === 'X' && game[7] === 'X' && game[8] === 'X') ||
      (game[0] === 'X' && game[3] === 'X' && game[6] === 'X') ||
      (game[1] === 'X' && game[4] === 'X' && game[7] === 'X') ||
      (game[2] === 'X' && game[5] === 'X' && game[8] === 'X') ||
      (game[0] === 'X' && game[4] === 'X' && game[8] === 'X') ||
      (game[2] === 'X' && game[4] === 'X' && game[6] === 'X')
    ) {
      setWinner('Player1');
      resetGame();
      return;
    }

    if (
      (game[0] === 'O' && game[1] === 'O' && game[2] === 'O') ||
      (game[3] === 'O' && game[4] === 'O' && game[5] === 'O') ||
      (game[6] === 'O' && game[7] === 'O' && game[8] === 'O') ||
      (game[0] === 'O' && game[3] === 'O' && game[6] === 'O') ||
      (game[1] === 'O' && game[4] === 'O' && game[7] === 'O') ||
      (game[2] === 'O' && game[5] === 'O' && game[8] === 'O') ||
      (game[0] === 'O' && game[4] === 'O' && game[8] === 'O') ||
      (game[2] === 'O' && game[4] === 'O' && game[6] === 'O')
    ) {
      setWinner('Player2');
      resetGame();
      return;
    }

    if (!game.includes(0)) {
      setWinner('Draw');
      resetGame();
      return;
    }
  }

  function resetGame() {
    setTimeout(() => setWinner(null), 1000);
    setPlayer('X');
    setGame([0, 0, 0, 0, 0, 0, 0, 0, 0]);
    setNewGame(true);
  }

  function handleClick(id, variant) {
    if (newGame) {
      setNewGame(false);
    }
    game[id] = variant;
    player === 'X' ? setPlayer('O') : setPlayer('X');
    getWinner();
  }

  return (
    <div className={css.container_game}>
      <div className={css.container_button_game}>
        {[0, 0, 0, 0, 0, 0, 0, 0, 0].map((_, index) => (
          <Button
            key={index}
            id={index}
            player={player}
            newGame={newGame}
            onClick={handleClick}
          ></Button>
        ))}
      </div>
      {winner && <ModalBanner winner={winner} />}
    </div>
  );
};
