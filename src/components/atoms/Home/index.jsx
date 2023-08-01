import PropTypes from 'prop-types';
import Landing from '../../molecules/Landing';
import AnimatedBackground from '../../organisms/AnimatedBackground';
import * as S from './styles';

const Home = ({ image, text }) => {
  return (
    <AnimatedBackground>
      <S.Container>
        <img src={image} alt='myself' />
        <div>
          <Landing />
          {text}
        </div>
      </S.Container>
    </AnimatedBackground>
  );
};

Home.propTypes = {
  image: PropTypes.node.isRequired,
  text: PropTypes.string
};

export default Home;