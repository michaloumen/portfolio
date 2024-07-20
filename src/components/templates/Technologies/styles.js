import styled from 'styled-components';
import { color, font, sizePx } from '../../../styles';

export const Wrapper = styled.div`
  display: flex;
  overflow: hidden;
  max-height: calc(100vh - 64px); 

  @media (max-width: 1400px) { max-height: 82rem; }
  @media (max-width: 900px) { max-height: 75rem; }
  @media (max-width: 700px) { max-height: 100rem; }
`;

export const HeaderText = styled.div`
  span {
    cursor: pointer;
    color: ${color.black};
    font-size: ${font.header};
  }
  div {
    padding-top: ${sizePx['5']};
    font-size: ${font.secondaryHeaderS};
    color: ${color.black};
  }
`;

export const BodyText = styled.div`
  span {
    pointer-events: auto;
    color: ${color.black};
    font-size: ${font.secondaryHeaderS};
    font-weight: ${font.weight600};
  }
`;

export const ListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 50px;
  margin-top: ${sizePx.paddingG};

  @media (max-width: 1200px) { grid-template-columns: repeat(4, 1fr); }
  @media (max-width: 900px) { grid-template-columns: repeat(3, 1fr); }
  @media (max-width: 700px) { grid-template-columns: repeat(2, 1fr); }
`;
