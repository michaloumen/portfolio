import styled, { keyframes } from 'styled-components';
import { color, font, size } from '../../styles';

const rotateMenu = keyframes`
  0% {
    opacity: 0;
    transform: rotateX(-90deg) translateY(-20px);
  }
  50% {
    opacity: 0.5;
    transform: rotateX(0deg) translateY(10px);
  }
  100% {
    opacity: 1;
    transform: rotateX(0deg) translateY(0);
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  letter-spacing: 1px;
  gap: 1rem;
  background-color: ${color.midnightBlue};
  padding: ${size.pagePadding};
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

  @media (max-width: 768px) {
    flex-direction: column;
    padding-left: 1rem;
  }
`;

export const NavbarLinksContainer = styled.div`
  display: flex;
  white-space: nowrap;
  animation: ${rotateMenu} 0.6s;
  gap: ${size.gap};

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
`;

export const NavbarName = styled.div`
  display: flex;
  justify-content: space-between;
`;
