import styled from 'styled-components';
import { color, sizePx, font } from '../../../styles';

export const Container = styled.div`
  display: flex;
  pointer-events: auto;
  color: ${color.neonGreen};
  font-size: ${font.header};
  svg {
    cursor: pointer;
    margin-top: ${sizePx.paddingG};
    width: ${sizePx['50']};
    height: ${sizePx['50']};
    &:hover {
      filter: none;
    } 
  }
`;

export const CopyEmail = styled.div`
  position: absolute;
  background-color: ${color.tealBlue};
  border-radius: ${sizePx.borderRadius};
  padding: ${sizePx['5']};
  color: ${color.black};
  font-weight: ${font.weight500};
  font-size: ${font.textS};
`;