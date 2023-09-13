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

export const ListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${sizePx.paddingM};

  @media (max-width: 1000px) { 
    grid-template-columns: repeat(2, 1fr); 
  }

  @media (max-width: 700px) { 
    gap: ${sizePx.paddingS};
    img {
      width: ${sizePx.icon150};
    }
  }
`;

export const Header = styled.div`
  color: ${color.yellow};
  font-size: ${font.header};

  div {
    padding-top: ${sizePx['5']};
    padding-bottom: ${sizePx.paddingM};
    font-size: ${font.secondaryHeaderS};
    color: ${color.gray};
  }
`;
