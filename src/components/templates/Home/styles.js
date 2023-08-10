import styled from 'styled-components';
import { color } from '../../../styles';

export const StyledAnimatedBackground = styled.div`
  overflow: hidden;
  max-height: 100vh;
`;

export const Container = styled.div`
  position: absolute;
  top: 54%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  gap: 20px;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.2);
  padding: 1.2rem;
  border-radius: 6px;
  backdrop-filter: blur(10px);
  color: ${color.gray};
  font-size: 18px;
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