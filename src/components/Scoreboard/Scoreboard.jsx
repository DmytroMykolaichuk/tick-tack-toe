import {
  Title,
  ScoreboardList,
  Result,
  Number,
  Container,
  Restart,
} from './Scoreboard.js';
import { TfiReload } from 'react-icons/tfi';

export function Scoreboard({
  firstPlayer,
  secondPlayer,
  score: { scorePlayerOne, scorePlayerTwo, scoreDraw },
  resetScoreboard,
}) {
  return (
    <Container>
      <Restart type="button" onClick={resetScoreboard}>
        <TfiReload size={26} />
      </Restart>
      <Title>Scoreboard</Title>
      <ScoreboardList>
        <li>
          <Result>
            {firstPlayer || 'Player 1'}:<Number> {scorePlayerOne}</Number>
          </Result>
        </li>
        <li>
          <Result>
            {secondPlayer || 'Player 2'}:<Number> {scorePlayerTwo}</Number>
          </Result>
        </li>
        <li>
          <Result>
            Draw:<Number> {scoreDraw}</Number>
          </Result>
        </li>
      </ScoreboardList>
    </Container>
  );
}
