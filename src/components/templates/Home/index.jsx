import Landing from '../../molecules/Landing';
import AnimatedBackground from '../../organisms/AnimatedBackground';
import Container from '../../atoms/Container';
import * as S from './styles';

const Home = () => {
  const currentDate = new Date();
  const startDate = new Date('June 1, 2021');
  const diffInYears = currentDate.getFullYear() - startDate.getFullYear();

  return (
    <S.StyledAnimatedBackground>
      <AnimatedBackground>
        {/* <S.Container> */}
        <Container>
          <S.Text>
            <img src='/square-me.png' alt='myself' />
            <div>
              <Landing />
              Sou desenvolvedora pela Ironhack com mais de {diffInYears} anos de experiência em desenvolvimento fullstack<br /><br />Minha jornada até aqui tem sido incrível, e estou ansiosa para continuar crescendo, aprendendo e contribuindo com novas soluções<br /><br /> Se você busca ajuda ou quer trocar ideias, estou á disposição para colaborar!
            </div>
          </S.Text>
        </Container>
        {/* </S.Container> */}
      </AnimatedBackground>
    </S.StyledAnimatedBackground>
  );
};

export default Home;