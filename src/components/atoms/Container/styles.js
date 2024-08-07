import styled from 'styled-components';
import { color, sizePx, sizeRem } from '../../../styles';

export const Wrapper = styled.div`
  position: absolute;
  width: 70%;
  left: 50%;
  transform: translateX(-50%);
  backdrop-filter: blur(10px);
  pointer-events: none;
  background-color: ${color.transparentGray};
  border-radius: ${sizePx.borderRadius};
  margin-top: ${sizePx['50']};
  padding: ${sizePx['50']};
  max-width: ${sizeRem.maxWidth};
`;
