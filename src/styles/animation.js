import { keyframes } from 'styled-components';

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

export default rotateMenu;