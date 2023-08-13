import Carousel from '../Carousel';
import TechnologiesIcons from '../../atoms/TecnologiesIcons';
import * as S from './styles';

const TechnologyCarousel = () => {
  const Tecnologies = TechnologiesIcons.map((technology, index) => (
    <div key={index}>
      <S.Container>
        {technology.image}
        <S.Text>{technology.name}</S.Text>
      </S.Container>
    </div>
  ));

  return (
    <Carousel>
      {Tecnologies}
    </Carousel>
  );
};

export default TechnologyCarousel;
