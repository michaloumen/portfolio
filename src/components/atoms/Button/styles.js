import styled from 'styled-components';
import { font, sizePx } from '../../../styles';

export const ButtonWrapper = styled.button`
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;
  width: 100%;
  padding: ${sizePx.paddingButton};
  border-radius: ${sizePx.borderRadius};
  font-weight: ${font.weight600};
`;
