import styled from 'styled-components';

export const Container = styled.div`
  flex-direction: column;
  font-size: 18px;
  cursor: default !important;

  div {
    margin: 10px 0; 
    justify-content: left;
    font-weight: bold;
    cursor: default !important;
  }

  img {
    border-radius: 6px;
  }

  span {
    margin: 10px 0; 
  }
`;

export const StyledLink = styled.button`
  font-size: 16px;
  display: flex;
  background-color: transparent; 
  border: none; 
  padding: 0;
`;