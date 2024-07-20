import styled from 'styled-components';
import { color, font } from '../../../styles';

export const TextArea = styled.div`
  textarea {
    border: none;
    width: 100%;
    overflow: auto;
    outline: none;
    resize: none;
    background: transparent;
    color: ${color.black};
    font-weight: ${font.weight600};
  }
`;

