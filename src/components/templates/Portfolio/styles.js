import styled from 'styled-components';
import { color, font } from '../../../styles';

export const Container = styled.div`
  a {
    pointer-events: auto;
    color: ${color.yellow};
  }
`;

export const Header = styled.div`
  color: ${color.yellow};
  font-size: ${font.header};
`;
