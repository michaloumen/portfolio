import styled from 'styled-components';
import { color, font, sizePx } from '../../../styles';

export const Container = styled.div`
  a {
    pointer-events: auto;
    text-decoration: none;
    font-weight: ${font.weight600};
    color: ${color.gray};
  }
`;

export const Header = styled.div`
  color: ${color.yellow};
  font-size: ${font.header};

  div {
    padding-top: ${sizePx['5']};
    padding-bottom: ${sizePx.paddingG};
    font-size: ${font.secondaryHeaderS};
    color: ${color.gray};
  }
`;
