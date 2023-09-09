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
  padding: ${sizePx.padding};
  border-radius: ${sizePx.borderRadius};
  svg {
    width: ${sizePx.icon100};
    height: ${sizePx.icon100};
    margin-top: ${sizePx.margin};
  }
`;

export const Text = styled.div`
  letter-spacing: ${font.letterSpacing};
  font-weight: ${font.weight500};
  `;