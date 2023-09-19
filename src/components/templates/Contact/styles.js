import styled from 'styled-components';
import { color, font, sizePx } from '../../../styles';

export const Container = styled.div`
  pointer-events: auto;
  color: ${color.yellow};
  font-size: ${font.header};
  svg {
    margin-top: ${sizePx.paddingG};
    width: ${sizePx.icon80};
    height: ${sizePx.icon80};
    cursor: pointer;
    &:hover {
      filter: none;
    } 
  }
`;

export const CopyEmail = styled.div`
  background-color: ${color.blue};
  position: absolute;
  border-radius: 6px;
  padding: 6px;
  color: ${color.gray};
  font-weight: 500;
`;