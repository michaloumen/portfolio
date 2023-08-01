import styled from 'styled-components';
import { color } from '../../../styles';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.2rem;
  border-radius: 6px;
  border: 1px solid ${color.yellow};
  svg {
    width: 150px;
    height: 150px;
  }
`;

export const Text = styled.div`
  color: ${color.yellow};
  letter-spacing: 1px;
  font-size: 1.2rem;
  padding-top: 10px;
  font-weight: 600;
`;