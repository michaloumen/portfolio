import styled from 'styled-components';
import { sizePx, color } from '../../../styles';

export const ButtonWrapper = styled.button`
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;
  width: 100%;
  background-color: ${color.blue};
  padding: ${sizePx.paddingButton};
  border-radius: ${sizePx.borderRadius};
  a {
    text-decoration: none;
    font-weight: bold;
    color: ${color.gray};
  }

  &:hover {
    background-color: ${color.blue}cc;
  }
`;
