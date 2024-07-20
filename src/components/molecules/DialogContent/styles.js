import styled from 'styled-components';
import { color, font, sizePx } from '../../../styles';

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
    font-weight: ${font.weight600};
    margin-bottom: ${sizePx.margin}; 
  }

  img {
    border-radius: ${sizePx.borderRadius};
  }

  span {
    margin: ${sizePx.margin} 0; 
    font-size: ${font.textG};
    @media (max-width: 900px) { 
      font-size: ${font.textM};
    }
  }
`;

export const StyledButton = styled.button`
  position: absolute;
  width: 100%;
  border: none;
  bottom: ${sizePx['5']};
`;
