import styled from 'styled-components';
import { color } from '../../../styles';

export const StyledAnimatedBackground = styled.div`
  overflow: hidden;
  max-height: 1020px;

  ${(props) => props.tecnologiesList && `
    @media (max-width: 1200px) { max-height: 1250px; }
    @media (max-width: 900px) { max-height: 1730px }
    @media (max-width: 700px) { max-height: 3000px; }
  `}
`;

export const Container = styled.div`
  position: absolute;
  max-width: 74rem;
  width: 100%;
  top: 100px; 
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
    cursor: pointer;
  }
  div {
    font-size: 18px;
    color: ${color.gray};
    padding-top: 8px;
  }
`;

export const Text = styled.div`
  margin: 12px;
  span {
    color: white;
    font-size: 18px;
    pointer-events: auto;
    font-weight: 500;
  }
`;

export const ListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 50px;
  margin: 40px;

  @media (max-width: 1200px) { grid-template-columns: repeat(3, 1fr); }
  @media (max-width: 900px) { grid-template-columns: repeat(2, 1fr); }
  @media (max-width: 700px) { grid-template-columns: repeat(1, 1fr); }
`;
