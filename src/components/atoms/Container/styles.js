import styled from 'styled-components';

export const Wrapper = styled.div`
  position: absolute;
  max-width: 74rem;
  width: 100%;
  margin-top: 50px;
  left: 50%;
  transform: translateX(-50%);
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 6px;
  padding: 50px;
  backdrop-filter: blur(10px);
  pointer-events: none;
`;
