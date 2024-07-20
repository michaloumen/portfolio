import styled from 'styled-components';
import Modal from 'react-modal';
import { sizePx } from '../../../styles';

export const StyledModal = styled(Modal)`
  width: ${sizePx.modalWidthM};
  height: ${sizePx.modalHeight};
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  outline: none;
  background-color: white;
  border-radius: ${sizePx.borderRadius};
  padding: ${sizePx.paddingM};

  div {
    display: flex;
    cursor: pointer;
    justify-content: right;
  }

  @media (max-width: 900px) { 
    width: ${sizePx.modalWidthS};
    height: ${sizePx.modalHeightS};
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