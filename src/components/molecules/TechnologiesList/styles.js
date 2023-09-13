import styled from 'styled-components';
import { font, sizePx } from '../../../styles';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(-45deg, #FFB830, #233E8B);
  background-size: 400% 400%;
  width: ${sizePx.icon150};
  height: ${sizePx.icon150};
  padding: ${sizePx.paddingS};
  border-radius: ${sizePx.borderRadius};
  @media (max-width: 700px) { 
    width: ${sizePx.icon100};
    height: ${sizePx.icon100};
  }
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
  letter-spacing: ${font.letterSpacing};
  font-weight: ${font.weight500};
  `;