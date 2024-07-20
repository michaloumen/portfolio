import styled from 'styled-components';
import { color, rotateMenu, sizePx, sizeRem } from '../../../styles';

export const NavbarListContainer = styled.div`
  display: flex;
  white-space: nowrap;
  cursor: pointer;
  animation: ${rotateMenu} 0.6s;
  gap: ${sizeRem.gap};

  @media (max-width: 768px) {
    flex-direction: column;
    margin-top: ${sizePx.margin};
  }

  div {
    text-decoration: none;
    transition: all 0.3s ease-in-out;

    &:hover {
      transform: translateY(-5px);
      color: ${color.neonGreen};
    }
  }
`;
