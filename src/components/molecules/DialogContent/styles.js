import styled from 'styled-components';
import { font, sizePx } from '../../../styles';

export const Container = styled.div`
  flex-direction: column;
  cursor: default !important;
  position: relative;
  height: 100%;
  width: 100%;
  font-size: ${font.secondaryHeaderS};
  
  div {
    justify-content: left;
    cursor: default !important;
    font-weight: ${font.weight500};
    margin: ${sizePx.margin} 0; 
  }

  img {
    border-radius: ${sizePx.borderRadius};
  }

  span {
    margin: ${sizePx.margin} 0; 
    font-size: ${font.text};
  }
`;

export const StyledButton = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
`;
