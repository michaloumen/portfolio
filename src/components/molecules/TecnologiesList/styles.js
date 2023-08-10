import styled from 'styled-components';
import { color } from '../../../styles';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 180px;
  height: 180px; 
  padding: 1.2rem;
  border-radius: 6px;
  background: linear-gradient(-45deg, #FFB830, #233E8B);
  background-size: 400% 400%;
  svg {
    width: 100px;
    height: 100px;
  }
`;

export const Text = styled.div`
  color: ${color.gray};
  letter-spacing: 1px;
  font-size: 1.2rem;
  padding-top: 10px;
  font-weight: 600;
`;