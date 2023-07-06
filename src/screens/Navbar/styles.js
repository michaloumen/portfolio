import styled from 'styled-components';
import { color, font, rotateMenu, space } from '../../styles';

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  letter-spacing: 1px;
  gap: ${space.gap};
  background-color: ${color.sageGreen};
  padding: ${space.pagePadding};
  color: ${color.tangerineOrange};
  font-size: ${font.fontSize};
  font-weight: ${font.fontWeight};

  img {
    width: 1.5rem;
    height: 1.5rem;
    cursor: pointer;
    display: ${props => (props.showLinks ? 'none' : 'block')};

    @media (max-width: 768px) {
      display: block;
    }
  }

  @media (min-width: 769px) {
    img {
      display: none;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    padding-left: ${space.gap};
  }

  @media (min-width: 769px) {
    flex-direction: row;
  }
`;

export const NavbarLinksContainer = styled.div`
  display: flex;
  white-space: nowrap;
  animation: ${rotateMenu} 0.6s;
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

  @media (max-width: 768px) {
    flex-direction: column;
  }

  @media (min-width: 769px) {
    flex-direction: row;
    display: flex;
  }
`;

export const NavbarName = styled.div`
  display: flex;
  justify-content: space-between;
  white-space: nowrap;
`;
