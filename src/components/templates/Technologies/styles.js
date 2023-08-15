import styled from 'styled-components';
import { color } from '../../../styles';

export const StyledAnimatedBackground = styled.div`
  // ${(props) => props.listContainer && `
  //   @media (max-width: 1600px) { max-height: 1000px }
  //   @media (max-width: 1200px) { max-height: 1400px; }
  //   @media (max-width: 900px) { max-height: 1740px; }
  //   @media (max-width: 700px) { max-height: 3000px; }
  // `}
`;

export const HeaderText = styled.div`
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

export const BodyText = styled.div`
  margin: 12px;
  span {
    color: ${color.gray};
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
