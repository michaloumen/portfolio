import styled from 'styled-components';
import Modal from 'react-modal';

export const StyledModal = styled(Modal)`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  outline: none;
  padding: 20px;
  background-color: white;
  border-radius: 6px;
  div {
    display: flex;
    cursor: pointer;
    justify-content: right;
  }
`;

export const Header = styled.button`
  display: flex;
  cursor: pointer;
  background-color: transparent; 
  border: none; 
  padding: 0;
  margin-left: auto;
`;