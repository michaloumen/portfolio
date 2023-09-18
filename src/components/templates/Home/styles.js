import styled from 'styled-components';
import { color, font, sizePx } from '../../../styles';

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