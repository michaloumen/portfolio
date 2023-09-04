import CloseIcon from '../../icons/CloseIcon';
import * as S from './styles';

const Dialog = ({ open, onClose, children }) => (
  <S.ModalOverlay isOpen={open}>
    <S.StyledModal
      isOpen={open}
      onRequestClose={onClose}
      style={{
        overlay: {
          zIndex: 1200,
          backgroundColor: 'rgba(0, 0, 0, 0.7)'
        }
      }}
    >
      <div onClick={onClose}>
        <CloseIcon />
      </div>
      {children}
    </S.StyledModal>
  </S.ModalOverlay>
);

export default Dialog;
