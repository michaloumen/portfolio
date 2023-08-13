import TechnologiesIcons from '../../atoms/TecnologiesIcons';
import * as S from './styles';

const TechnologiesList = () =>
  TechnologiesIcons.map((technology, index) => (
    <div key={index}>
      <S.Container>
        {technology.image}
        <S.Text>{technology.name}</S.Text>
      </S.Container>
    </div>
  ));

export default TechnologiesList;