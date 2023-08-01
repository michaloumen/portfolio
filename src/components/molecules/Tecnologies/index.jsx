import * as S from './styles';
import TechnologiesList from '../TecnologiesList';

const Technologies = () => {
  return (
    <S.Container>
      <h1>Some of the technologies I use (e ferramentas)</h1>
      <S.ListContainer>
        <TechnologiesList />
      </S.ListContainer>
      <h3>And more...</h3>
    </S.Container>
  )
};

export default Technologies;