import styled from 'styled-components';
import { color, font, sizePx } from '../../../styles';

export const Wrapper = styled.div`
  display: flex;
  overflow: hidden;
  max-height: calc(100vh - 64px); 

  @media (max-width: 1400px) { max-height: 50rem; }
  @media (max-width: 900px) { max-height: 75rem; }
  @media (max-width: 700px) { max-height: 100rem; }
`;

export const Text = styled.div`
  display: flex;
  align-items: center;
  color: ${color.black};
  font-size: ${font.textG};
  gap: ${sizePx.paddingM};
  
  img {
    max-width: 50%;
    border-radius: 50%;
    max-height: ${sizePx.icon300};
  }

  @media (max-width: 769px) {
    flex-direction: column;
  }
`;
