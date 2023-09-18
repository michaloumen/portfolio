import styled from 'styled-components';
import { sizePx } from '../../../styles';

export const PortfolioListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${sizePx.paddingG};

  img {
    max-width: 100%;
    height: auto;
  }

  @media (max-width: 1000px) { 
    grid-template-columns: repeat(2, 1fr); 
  }

  @media (max-width: 700px) { 
    grid-template-columns: repeat(1, 1fr); 
    gap: ${sizePx.paddingM};
  }
`;