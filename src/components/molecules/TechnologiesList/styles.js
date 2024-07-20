import styled from 'styled-components';
import { font, sizePx } from '../../../styles';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(-45deg, #000000, #FFFFFF);
  background-size: 400% 400%;
  img {
    max-width: 100%;
    height: auto;
  }
  margin-bottom: ${sizePx.margin};
  padding: ${sizePx.paddingS};
  border-radius: ${sizePx.borderRadius};
  
  svg {
    width: ${sizePx.icon100};
    height: ${sizePx.icon100};
    margin-top: ${sizePx.margin};
    
    @media (max-width: 700px) { 
      width: ${sizePx.icon80};
      height: ${sizePx.icon80};
    }
  }
`;

export const Text = styled.div`
  font-weight: ${font.weight500};
  `;