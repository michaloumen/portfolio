import styled from 'styled-components';
import { color, sizePx, sizeRem } from '../../../styles';

export const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  left: 50%;
  transform: translateX(-50%);
  backdrop-filter: blur(10px);
  pointer-events: none;
  background-color: ${color.transparentBlack};
  border-radius: ${sizePx.borderRadius};
  margin-top: ${sizePx['50']};
  padding: ${sizePx['50']};
  max-width: ${sizeRem.maxWidth};
`;
