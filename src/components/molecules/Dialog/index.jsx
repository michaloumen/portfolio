import CloseIcon from '../../icons/CloseIcon';
import * as S from './styles';

const Dialog = ({ open, onClose, children }) => (
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
    <S.Header onClick={onClose}>
      <CloseIcon />
    </S.Header>
    {children}
  </S.StyledModal>
);

export default Dialog;
