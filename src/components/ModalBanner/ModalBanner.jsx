import css from '../ModalBanner/ModalBanner.module.css';
import win from '../../image/win1.jpg';
import draw from '../../image/draw.jpg';

export const ModalBanner = ({ winner }) => {
  return (
    <div className={css.backdrop}>
      <div
        className={css.modal}
        style={{
          backgroundImage: `url(${winner === 'Draw' ? draw : win})`,
          height: `${winner === 'Draw' ? '600px' : '425px'}`,
          width: `${winner === 'Draw' ? '500px' : '640px'}`,
        }}
      >
        <h1 className={css.titleModal}>
          {winner === 'Draw' ? 'Draw' : `Win ${winner}`}
        </h1>
      </div>
    </div>
  );
};
