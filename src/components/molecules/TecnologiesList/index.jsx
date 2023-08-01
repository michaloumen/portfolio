import TechnologiesIcons from '../../atoms/TecnologiesIcons';
import * as S from './styles';

const TechnologiesList = () => {
  return (
    <>
      {TechnologiesIcons.map((technology, index) => (
        <S.Container key={index}>
          {technology.image}
          <S.Text>{technology.name}</S.Text>
        </S.Container>
      ))}
    </>
  );
};

export default TechnologiesList;