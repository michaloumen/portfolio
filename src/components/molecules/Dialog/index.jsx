import PropTypes from 'prop-types';
import { CloseIcon } from '../../icons';
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

Dialog.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func,
  children: PropTypes.node
};

export default Dialog;
