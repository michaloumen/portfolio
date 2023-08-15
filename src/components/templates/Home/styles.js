import styled from 'styled-components';
import { color } from '../../../styles';

export const StyledAnimatedBackground = styled.div`
  overflow: hidden;
  max-height: 200vh;
`;

export const Text = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  font-size: 18px;
  color: ${color.gray};
  img {
    max-width: 50%;
    max-height: 300px;
    height: auto;
    border-radius: 50%;
    box-shadow: 2px 2px 2px 1px rgba(0,0,0,0.2);
  }
  @media (max-width: 769px) {
    flex-direction: column;
  }
`;