import PropTypes from 'prop-types';
import * as S from './styles';

const Button = ({ text, href }) => {
  return (
    <S.ButtonWrapper>
      <a href={href} target='_blank' rel='noreferrer'>{text}</a>
    </S.ButtonWrapper>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired, 
};

export default Button;





