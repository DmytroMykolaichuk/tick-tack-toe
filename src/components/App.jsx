import { useState } from 'react';
import css from './ButtonList/ButtonList.module.css';
import { Button } from './ButtonList/ButtonList';
import { ModalBanner } from './ModalBanner/ModalBanner';
import { ResetGameBtn } from './ResetGameBtn/ResetGameBtn';
import { FormNamePlayer } from './FormNamePlayer/FormNamePlayer';
import { Scoreboard } from './Scoreboard/Scoreboard';

export const App = () => {
  const [player, setPlayer] = useState('X');
  const [firstPlayer, setFirstPlayer] = useState(null);
  const [secondPlayer, setSecondPlayer] = useState(null);
  const [winner, setWinner] = useState(null);
  const [game, setGame] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0]);
  const [newGame, setNewGame] = useState(false);
  const [scorePlayerOne, setScorePlayerOne] = useState(0);
  const [scorePlayerTwo, setScorePlayerTwo] = useState(0);
  const [scoreDraw, setScoreDraw] = useState(0);

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
      setWinner(firstPlayer || 'Player 1');
      setScorePlayerOne(pre => pre + 1);
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
      setWinner(secondPlayer || 'Player 2');
      setScorePlayerTwo(pre => pre + 1);
      resetGame();
      return;
    }

    if (!game.includes(0)) {
      setWinner('Draw');
      setScoreDraw(pre => pre + 1);
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

  function resetScoreboard() {
    setScorePlayerOne(0);
    setScorePlayerTwo(0);
    setScoreDraw(0);
  }

  function getNamePlayer(defaultName, newName) {
    if (defaultName === 'Player 1') {
      setFirstPlayer(newName);
    } else {
      setSecondPlayer(newName);
    }
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
    <div className={css.container_main}>
      <Scoreboard
        resetScoreboard={resetScoreboard}
        firstPlayer={firstPlayer}
        secondPlayer={secondPlayer}
        score={{ scorePlayerOne, scorePlayerTwo, scoreDraw }}
      />
      <div className={css.container_game}>
        <FormNamePlayer
          defaultName={'Player 1'}
          getNamePlayer={getNamePlayer}
        />
        <div className={css.container_button_game}>
          <div className={css.container_button_field}>
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
          <ResetGameBtn onClick={resetGame} />
        </div>
        <FormNamePlayer
          defaultName={'Player 2'}
          getNamePlayer={getNamePlayer}
        />
        {winner && <ModalBanner winner={winner} />}
      </div>
    </div>
  );
};
//
