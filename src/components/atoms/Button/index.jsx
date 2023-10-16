import React from 'react';
import PropTypes from 'prop-types';
import * as S from './styles';

const Button = ({ text, href }) => {
  return (
    <S.ButtonWrapper onClick={() => window.open(href, '_blank', 'noopener noreferrer')}>
      {text}
    </S.ButtonWrapper>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired, 
};

export default Button;





