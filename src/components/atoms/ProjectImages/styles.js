import styled from 'styled-components';
import color from '../../../styles/color';

export const Container = styled.div`
  pointer-events: auto;
  color: ${color.gray};
  font-size: 18px;
  font-weight: bold;
  img {
    cursor: pointer;
    border-radius: 6px;
  }
`;