import styled from 'styled-components';
import { color, rotateMenu, space } from '../../styles';

export const NavbarContainer = styled.div`
  letter-spacing: 1px;
  padding: 1.2rem 10vh;
  font-size: 1.2rem;
  font-weight: 600;
  background-color: ${color.sageGreen};
  color: ${color.tangerineOrange};
`;

export const MenuDesktop = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 769px) {
    display: none;
  }
`;

export const MenuMobile = styled.div`
  flex-direction: column;
  padding-left: ${space.gap};
  img {
    width: 1.5rem;
    height: 1.5rem;
    cursor: pointer;
  }

  @media (min-width: 769px) {
    display: none;
  }
`;

export const NavbarLinksContainer = styled.div`
  display: flex;
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
    padding-top: 10px;
  }
`;

export const NavbarName = styled.div`
  display: flex;
  justify-content: space-between;
  white-space: nowrap;
`;
