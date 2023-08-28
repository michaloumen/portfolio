import { useEffect } from 'react';
import PropTypes from 'prop-types';
import * as S from './styles';

const Typewritter = ({ data, typeSpeed, msgDelay }) => {
  useEffect(() => {
    let characterPos = 0;
    let msgBuffer = '';
    let msgIndex = 0;
    let delay;
    let timer;

    const startTyping = () => {
      const id = document.getElementById('typing-text');
      if (id) {
        if (characterPos !== data[msgIndex].length) {
          msgBuffer = msgBuffer + data[msgIndex].charAt(characterPos);
          id.value = msgBuffer + '_';
          delay = typeSpeed;
        } else {
          delay = msgDelay;
          msgBuffer = '';
          characterPos = -1;
          msgIndex = msgIndex !== data.length - 1 ? msgIndex + 1 : 0;
        }
        characterPos++;
        timer = setTimeout(startTyping, delay);
      }
    };

    startTyping();

    return () => {
      clearTimeout(timer);
    };
  }, [data, typeSpeed, msgDelay]);

  return (
    <S.TextArea>
      <textarea id='typing-text' readOnly></textarea>
    </S.TextArea>
  );
};

Typewritter.propTypes = {
  data: PropTypes.array,
  typeSpeed: PropTypes.number,
  msgDelay: PropTypes.number
};

export default Typewritter;