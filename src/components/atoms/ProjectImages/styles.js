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
    width: ${sizePx.icon300};
    height: 193.15px;
    overflow: hidden; 
  }

  div {
    padding-bottom: ${sizePx['5']};
    font-weight: ${font.weight600};
    
    @media (max-width: 1000px) { 
      font-size: ${font.textS};
    }
  }
`;