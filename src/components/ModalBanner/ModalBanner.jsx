import { Backdrop, Modal, TitleModal } from './ModalBanner.js';
import win from '../../image/win1.jpg';
import draw from '../../image/draw.jpg';

export const ModalBanner = ({ winner }) => {
  return (
    <Backdrop>
      <Modal
        style={{
          backgroundImage: `url(${winner === 'Draw' ? draw : win})`,
          // height: `${winner === 'Draw' ? '600px' : '425px'}`,
          // width: `${winner === 'Draw' ? '500px' : '640px'}`,
        }}
      >
        <TitleModal>{winner === 'Draw' ? 'Draw' : `Win ${winner}`}</TitleModal>
      </Modal>
    </Backdrop>
  );
};
