import { useEffect } from 'react';
import * as S from './styles';

/**
 * 
 * @param {Array} data - Array[]: Array of strings to be typed
 * @param {Number} TypedSpeed -  Number: speed of typing in milliseconds
 * * @param {Numbers} MsgDelay - Number: delay between each message in milliseconds 
 * ------------------------------------------------------------------
 * 
 * usage:
 * 
 * `<Typewritter
 * 
 * &nbsp;&nbsp;&nbsp;data={msgArray} 
 * 
 * &nbsp;&nbsp;&nbsp;TypeSpeed={100}
 * 
 * &nbsp;&nbsp;&nbsp;MsgDelay={2000}
 * 
 * />`
 */

// https://jsdoc.app/tags-params.html

const Typewritter = ({ data = [], TypeSpeed = 100, MsgDelay = 2000 }) => {
  useEffect(() => {
    let characterPos = 0;
    let msgBuffer = '';
    let msgIndex = 0;
    let delay;

    const startTyping = () => {
      const id = document.getElementById('typing-text');
      if(characterPos !== data[msgIndex].length) {
        msgBuffer = msgBuffer + data[msgIndex].charAt(characterPos);
        id.value = msgBuffer + '_';
        delay = TypeSpeed;
      } else {
        delay = MsgDelay;
        msgBuffer = '';
        characterPos = -1;
        msgIndex = msgIndex !== data.length - 1 ? msgIndex + 1 : 0;
      };
      characterPos++;
      setTimeout(startTyping, delay);
    };
    startTyping();
  }, []);

  return (
    <S.TextArea>
      <textarea id='typing-text' readOnly>
      </textarea>
    </S.TextArea>
  )
};

export default Typewritter;