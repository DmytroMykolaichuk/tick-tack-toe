import { useState } from 'react';
import {
  ContainerButtonField,
  ContainerButtonGame,
  ContainerGame,
  ContainerMain,
} from './App.js';
import { Button } from './GameButton/GameButton.jsx';
import { ModalBanner } from './ModalBanner/ModalBanner.jsx';
import { ResetGameBtn } from './ResetGameBtn/ResetGameBtn.jsx';
import { FormNamePlayer } from './FormNamePlayer/FormNamePlayer.jsx';
import { Scoreboard } from './Scoreboard/Scoreboard.jsx';

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
    <ContainerMain>
      <Scoreboard
        resetScoreboard={resetScoreboard}
        firstPlayer={firstPlayer}
        secondPlayer={secondPlayer}
        score={{ scorePlayerOne, scorePlayerTwo, scoreDraw }}
      />
      <ContainerGame>
        <FormNamePlayer
          defaultName={'Player 1'}
          getNamePlayer={getNamePlayer}
        />
        <ContainerButtonGame>
          <ContainerButtonField>
            {[0, 0, 0, 0, 0, 0, 0, 0, 0].map((_, index) => (
              <Button
                key={index}
                id={index}
                player={player}
                newGame={newGame}
                onClick={handleClick}
              ></Button>
            ))}
          </ContainerButtonField>
          <ResetGameBtn onClick={resetGame} />
        </ContainerButtonGame>
        <FormNamePlayer
          defaultName={'Player 2'}
          getNamePlayer={getNamePlayer}
        />
        {winner && <ModalBanner winner={winner} />}
      </ContainerGame>
    </ContainerMain>
  );
};
