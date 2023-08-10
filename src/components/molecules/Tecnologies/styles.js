import styled from 'styled-components';
import { color } from '../../../styles';

export const StyledAnimatedBackground = styled.div`
  overflow: hidden;
  max-height: 100vh;

  @media (max-width: 1600px) { max-height: 170vh; }
  @media (max-width: 1200px) { max-height: 180vh; }
  @media (max-width: 900px) { max-height: 240vh; }
  @media (max-width: 700px) { max-height: 400vh; }
`;


export const Container = styled.div`
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translateX(-50%);
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 6px;
  padding: 50px;
  backdrop-filter: blur(10px);
  pointer-events: none;
  span {
    font-size: 2.5rem;
    color: ${color.yellow};
  }
`;

export const ListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 50px;
  padding: 50px;

  @media (max-width: 1600px) { grid-template-columns: repeat(5, 1fr); }
  @media (max-width: 1400px) { grid-template-columns: repeat(4, 1fr); }
  @media (max-width: 1200px) { grid-template-columns: repeat(3, 1fr); }
  @media (max-width: 900px) { grid-template-columns: repeat(2, 1fr); }
  @media (max-width: 700px) { grid-template-columns: repeat(1, 1fr); }
`;