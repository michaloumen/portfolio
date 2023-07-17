import Icons from './svg';
import * as S from './styles';

const AnimatedBackground = ({ children }) => {
  let arr = [];
  let rowsQty = 15;

  for (let i = 0; i < rowsQty; i++) {
    arr.push(i);
  };

  const showIcons = () => {
    return <Icons />;
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

export default AnimatedBackground;