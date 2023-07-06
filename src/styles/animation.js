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

const backgroundIcons1 = keyframes`
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
`;

const backgroundIcons2 = keyframes`
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-200%);
  }
`;

const backgroundIcons3 = keyframes`
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
`;

const backgroundIcons4 = keyframes`
  0% {
    transform: translateX(-200%);
  }
  100% {
    transform: translateX(0%);
  }
`;

export { 
  rotateMenu,
  backgroundIcons1,
  backgroundIcons2,
  backgroundIcons3,
  backgroundIcons4
};