import styled from 'styled-components';
import { color } from '../../../styles';

export const ButtonArrowContainer = styled.button`
  display: flex;
  border: 0 none;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.5);
  cursor: pointer;
  width: 50px;
  height: 50px;
  align-items: center;
  justify-content: center;
  pointer-events: auto;

  svg {
    transform: ${(props) => props.invertDirection && 'rotate(180deg)'}
  }
  
  svg {
    path {
      stroke: ${color.blue};
    }
  }

  &:hover {
    background-color: #F0F0F0CC;
  }
`;
