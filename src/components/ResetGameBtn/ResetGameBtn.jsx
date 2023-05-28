import { ResetBtn } from './ResetGameBtn.js';
import { TfiReload } from 'react-icons/tfi';

export function ResetGameBtn({ onClick }) {
  return (
    <ResetBtn onClick={onClick}>
      Reset Game
      <TfiReload />
    </ResetBtn>
  );
}
