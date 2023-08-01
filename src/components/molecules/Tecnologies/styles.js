import styled from 'styled-components';

export const Container = styled.div`
  background-color: #635377;
  gap: 20px;
  padding: 100px;
`;

export const ListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 50px;
  justify-content: center;
  padding: 100px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr); 
  }

  @media (max-width: 530px) {
    grid-template-columns: 1fr;
  }
`;