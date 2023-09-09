import styled from 'styled-components';
import { color, font, sizePx } from '../../../styles';

export const HeaderText = styled.div`
  span {
    cursor: pointer;
    color: ${color.yellow};
    font-size: ${font.header};
  }
  div {
    padding-top: ${sizePx['5']};
    font-size: ${font.secondaryHeaderS};
    color: ${color.gray};
  }
`;

export const BodyText = styled.div`
  margin: ${sizePx.margin};
  span {
    pointer-events: auto;
    color: ${color.gray};
    font-size: ${font.secondaryHeaderS};
    font-weight: ${font.weight500};
  }
`;

export const ListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 50px;
  margin: 40px;

  @media (max-width: 1200px) { grid-template-columns: repeat(4, 1fr); }
  @media (max-width: 900px) { grid-template-columns: repeat(3, 1fr); }
  @media (max-width: 700px) { grid-template-columns: repeat(2, 1fr); }
`;
