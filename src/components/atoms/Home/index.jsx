import Landing from '../../molecules/Landing';
import PropTypes from 'prop-types';
import * as S from './styles';

const Home = ({ image, text }) => {
  return (
    <S.HomeContainer>
      <img src={image} alt='myself' />
      <div>
        <Landing />
        {text}
      </div>
    </S.HomeContainer>
  );
};

Home.propTypes = {
  image: PropTypes.node.isRequired,
  text: PropTypes.string
};

export default Home;