import * as S from './styles';
import TechnologiesList from '../TecnologiesList';

const Technologies = () => {
  return (
    <S.Container>
      <h1>Some of the technologies I use</h1>
      <S.ListContainer>
        <TechnologiesList />
      </S.ListContainer>
    </S.Container>
  )
};

export default Technologies;