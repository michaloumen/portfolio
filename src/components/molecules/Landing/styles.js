import styled from 'styled-components';
import color from '../../../styles/color';

export const LandingType = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  color: ${color.burntSienna};
  background-color: rgba(0, 0, 0, 0.2);
  padding: 1.2rem;
  border-radius: 5px;
  backdrop-filter: blur(10px);
`;