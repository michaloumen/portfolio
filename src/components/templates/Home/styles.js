import styled from 'styled-components';
import { color, font, sizePx } from '../../../styles';

export const Wrapper = styled.div`
  display: flex;
  overflow: hidden;
  max-height: calc(100vh - 64px); 

  @media (max-width: 769px) { max-height: 60rem; }
`;

export const Text = styled.div`
  display: flex;
  align-items: center;
  color: ${color.gray};
  font-size: ${font.secondaryHeaderS};
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
