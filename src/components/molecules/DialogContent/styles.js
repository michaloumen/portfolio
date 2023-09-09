import styled from 'styled-components';
import { font, sizePx } from '../../../styles';

export const Container = styled.div`
  flex-direction: column;
  cursor: default !important;
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
  }
`;
