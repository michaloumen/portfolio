import styled from 'styled-components';

export const LandingType = styled.div`
  position: absolute;
  z-index: 1;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  color: #FFB830;
  background-color: rgba(0, 0, 0, 0.2);
  padding: 1.2rem;
  border-radius: 5px;
  backdrop-filter: blur(10px);
`;