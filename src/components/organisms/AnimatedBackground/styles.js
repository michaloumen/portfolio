import styled from 'styled-components';
import { 
  color, 
  backgroundIcons1, 
  backgroundIcons2,
  backgroundIcons3,
  backgroundIcons4
} from '../../../styles';

export const AnimatedSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${color.purple};
  overflow: hidden;

  svg {
    width: 150px;
    height: 150px;
    fill: rgba(0, 0, 0, 0.1);
    transition: 0.2s;
    margin: 0 5px;
  }

  svg:hover {
    filter: drop-shadow(0 0 15px ${color.yellow});
    fill: ${color.yellow};
  }
`;

export const AnimatedRow = styled.div`
  position: relative;
  top: -60%;
  left: -50%;
  width: 100%;
  display: flex;
  padding: 10px 0;
  white-space: nowrap;
  transform: rotate(-30deg);

  div {
    animation: ${backgroundIcons1} 80s linear infinite;
    animation-delay: -80s;
  }

  div:nth-child(2) {
    animation: ${backgroundIcons2} 80s linear infinite;
    animation-delay: -40s;
  }

  &:nth-child(even) div {
    animation: ${backgroundIcons3} 80s linear infinite;
    animation-delay: -80s;
  }

  &:nth-child(even) div:nth-child(2) {
    animation: ${backgroundIcons4} 80s linear infinite;
    animation-delay: -40s;
  }
`;
