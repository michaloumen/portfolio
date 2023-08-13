import PropTypes from 'prop-types';
import ArrowIcon from '../../icons/ArrowIcon';
import * as S from './styles';

const ButtonArrow = ({
  onClick,
  invertDirection,
  ...props
}) => (
  <S.ButtonArrowContainer
    invertDirection={invertDirection}
    onClick={onClick}
    {...props}
  >
    <ArrowIcon />
  </S.ButtonArrowContainer>
);

ButtonArrow.propTypes = {
  onClick: PropTypes.func,
  invertDirection: PropTypes.bool
};

export default ButtonArrow;
