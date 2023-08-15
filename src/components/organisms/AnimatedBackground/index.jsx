import PropTypes from 'prop-types';
import AnimatedBackgroundIcons from '../../icons/AnimatedBackgroundIcons';
import * as S from './styles';

const AnimatedBackground = ({ children }) => {
  let arr = [];
  let rowsQty = 20;

  for (let i = 0; i < rowsQty; i++) {
    arr.push(i);
  };

  const showIcons = () => {
    return <AnimatedBackgroundIcons />;
  };

  const layers = arr.map(i => {
    return (
      <S.AnimatedRow key={i}>
        {showIcons()}
        {showIcons()}
      </S.AnimatedRow>
    );
  });

  return (
    <S.AnimatedSection>
      {layers}
      {children}
    </S.AnimatedSection>
  );
};

AnimatedBackground.propTypes = {
  children: PropTypes.node
};

export default AnimatedBackground;