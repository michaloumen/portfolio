import * as S from './styles';
import AnimatedBackground from '../../organisms/AnimatedBackground';
import TechnologiesList from '../TecnologiesList';

const Technologies = () => {
  return (
    <S.StyledAnimatedBackground>
      <AnimatedBackground>
        <S.Container>
          <span>Some of the technologies I use</span>
          <S.ListContainer>
            <TechnologiesList />
          </S.ListContainer>
        </S.Container>
      </AnimatedBackground>
    </S.StyledAnimatedBackground>
  )
};

export default Technologies;