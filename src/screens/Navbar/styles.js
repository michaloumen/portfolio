import styled from 'styled-components';
import { color, font, space } from '../../styles';

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  letter-spacing: 1px;
  background-color: ${color.midnightBlue};
  padding: ${space.pagePadding};
  color: ${color.tangerineOrange};
  font-size: ${font.fontSize};
  font-weight: ${font.fontWeight};
`;

export const NavbarLinksContainer = styled.div`
  display: flex;
  gap: ${space.gap};

  a {
    text-decoration: none;
    transition: all 0.3s ease-in-out;
    color: ${color.tangerineOrange};

    &:hover {
      transform: translateY(-5px);
      color: ${color.goldenYellow};
    }
  }
`;

export const NavbarName = styled.div`

`;
