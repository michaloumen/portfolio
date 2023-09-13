import styled from 'styled-components';
import { color, font, sizePx } from '../../../styles';

export const Container = styled.div`
  pointer-events: auto;
  color: ${color.gray};
  font-size: ${font.secondaryHeaderS};
  font-weight: ${font.weight500};
  
  img {
    cursor: pointer;
    border-radius: 6px;
  }

  div {
    padding-bottom: ${sizePx['5']};
    font-weight: ${font.weight500};
  }
`;