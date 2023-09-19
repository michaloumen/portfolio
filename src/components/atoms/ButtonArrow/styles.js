import styled from 'styled-components';
import { color, sizePx } from '../../../styles';

export const ButtonArrowContainer = styled.button`
  display: flex;
  border: 0 none;
  border-radius: 50%;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  pointer-events: auto;
  width: ${sizePx['50']};
  height: ${sizePx['50']};
  background-color: ${color.transparentWhite};

  svg {
    transform: ${(props) => props.invertDirection && 'rotate(180deg)'};
  }
  
  svg {
    path {
      stroke: ${color.blue};
    }
  }

  &:hover {
    background-color: ${color.transparentGray};
  }
`;
