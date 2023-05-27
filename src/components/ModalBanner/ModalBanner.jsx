import css from '../ModalBanner/ModalBanner.module.css';
import win from '../../image/win.jpg';

export const ModalBanner = ({ winner }) => {
  return (
    <div className={css.backdrop}>
      <div className={css.modal} style={{ backgroundImage: `url(${win})` }}>
        <h1 className={css.titleModal}>
          {winner === 'Draw' ? 'Draw' : `Win ${winner}`}
        </h1>
      </div>
    </div>
  );
};
