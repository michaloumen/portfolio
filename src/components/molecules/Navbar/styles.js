import styled from 'styled-components';
import { color, font, sizePx } from '../../../styles';

export const NavbarContainer = styled.div`
  background-color: ${color.blue};
  color: ${color.gray};
  font-size: ${font.secondaryHeaderM};
  letter-spacing: ${font.letterSpacing};
  font-weight: ${font.weight600};
  padding: ${sizePx.paddingM} ${sizePx['50']};
`;

export const MenuDesktop = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 769px) {
    display: none;
  }

  div {
    display: flex;
  }
`;

export const MenuMobile = styled.div`
  div {
    display: flex;
  }

  @media (min-width: 769px) {
    display: none;
  }
`;

export const StyledMenuIcon = styled.div`
  margin-right: ${sizePx.margin};
  svg {
    cursor: pointer;
    width: ${sizePx.icon24};
    height: ${sizePx.icon24};
  }
`;

export const NavbarName = styled.div`
  display: flex;
  justify-content: space-between;
  white-space: nowrap;
`;

