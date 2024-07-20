import styled from 'styled-components';
import { color, font, sizePx } from '../../../styles';

export const Wrapper = styled.div`
  display: flex;
  overflow: hidden;
  max-height: calc(150vh - 64px); 

  @media (max-width: 1000px) { max-height: 60rem; }
  @media (max-width: 769px) { max-height: 110rem; }
`;

export const Header = styled.div`
  color: ${color.black};
  font-size: ${font.header};

  div {
    padding-top: ${sizePx['5']};
    padding-bottom: ${sizePx.paddingG};
    font-size: ${font.secondaryHeaderS};
    color: ${color.black};
  }
`;
