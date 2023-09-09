import styled from 'styled-components';
import colors from '../../../styles/color';

export const ButtonWrapper = styled.button`
  background-color: ${colors.blue};
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  a {
    text-decoration: none;
    color: ${colors.gray};
    font-weight: bold;
  }

  &:hover {
    background-color: ${colors.blue}cc;
  }
`;
