import css from './Scoreboard.module.css';
import { TfiReload } from 'react-icons/tfi';

export function Scoreboard({
  firstPlayer,
  secondPlayer,
  score: { scorePlayerOne, scorePlayerTwo, scoreDraw },
  resetScoreboard,
}) {
  return (
    <div className={css.container}>
      <button className={css.restart} type="button" onClick={resetScoreboard}>
        <TfiReload size={26} />
      </button>
      <p className={css.title}>Scoreboard</p>
      <ul className={css.scoreboardList}>
        <li>
          <p className={css.result}>
            {firstPlayer || 'Player 1'}:
            <span className={css.number}> {scorePlayerOne}</span>
          </p>
        </li>
        <li>
          <p className={css.result}>
            {secondPlayer || 'Player 2'}:
            <span className={css.number}> {scorePlayerTwo}</span>
          </p>
        </li>
        <li>
          <p className={css.result}>
            Draw:<span className={css.number}> {scoreDraw}</span>
          </p>
        </li>
      </ul>
    </div>
  );
}
