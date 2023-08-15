import styled from 'styled-components';
import { color, rotateMenu, space } from '../../../styles';

export const NavbarLinksContainer = styled.div`
  display: flex;
  white-space: nowrap;
  cursor: pointer;
  animation: ${rotateMenu} 0.6s;
  gap: ${space.gap};

  @media (max-width: 768px) {
    flex-direction: column;
    padding-top: 10px;
  }

  div {
    text-decoration: none;
    transition: all 0.3s ease-in-out;

    &:hover {
      transform: translateY(-5px);
      color: ${color.yellow};
    }
  }
`;