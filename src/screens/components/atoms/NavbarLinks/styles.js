import styled from 'styled-components';
import { color, rotateMenu, space } from '../../../../styles';

export const NavbarLinksContainer = styled.div`
  display: flex;
  white-space: nowrap;
  animation: ${rotateMenu} 0.6s;
  gap: ${space.gap};

  a {
    text-decoration: none;
    transition: all 0.3s ease-in-out;
    color: ${color.citrusBurst};

    &:hover {
      transform: translateY(-5px);
      color: ${color.glimmeringGold};
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    padding-top: 10px;
  }
`;