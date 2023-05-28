import css from './ResetGameBtn.module.css';
import { TfiReload } from 'react-icons/tfi';

export function ResetGameBtn({ onClick }) {
  return (
    <button type="button" className={css.resetBtn} onClick={onClick}>
      Reset Game
      <TfiReload />
    </button>
  );
}
