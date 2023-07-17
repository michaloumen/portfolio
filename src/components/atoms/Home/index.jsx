import Landing from '../../molecules/Landing';
import * as S from './styles';

const Home = () => {
  return (
    <S.HomeContainer>
      <img src='square-me.png' alt='myself' />
      <div>
        <Landing />
        <p>
          Eu sou uma minina bem bunita pra dedéu. Se você não gostou então olha só o meu olho
        </p>
      </div>
    </S.HomeContainer>
  );
};

export default Home;