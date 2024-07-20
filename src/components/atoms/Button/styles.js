import styled from 'styled-components';
import { font, sizePx, color } from '../../../styles';

export const ButtonWrapper = styled.button`
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;
  width: 100%;
  background-color: ${color.tealBlue};
  padding: ${sizePx.paddingButton};
  border-radius: ${sizePx.borderRadius};
  font-weight: ${font.weight600};
  color: ${color.transparentGray};

  &:hover {
    background-color: ${color.tealBlue}cc;
  }
`;
