import styled from 'styled-components';
import { sizePx, sizeRem } from '../../../styles';

export const Wrapper = styled.div`
  img {
    cursor: pointer;
    width: ${sizePx.icon30};
    margin-left: ${sizeRem.gap};
  }
`;