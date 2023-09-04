import styled from 'styled-components';
import Modal from 'react-modal';

export const ModalOverlay = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  top: 0;
  left: 0;
`;

export const StyledModal = styled(Modal)`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  outline: none;
  padding: 20px;
  background-color: white;
  border-radius: 4px;
  div {
    display: flex;
    cursor: pointer;
    justify-content: right;
  }
`;