import AboutMe from '../../molecules/AboutMe';
import AnimatedBackground from '../../organisms/AnimatedBackground';
import Container from '../../atoms/Container';
import { useLanguageContext } from '../../../hooks/languageProvider';
import texts from '../../../utils/texts';
import * as S from './styles';

const Home = () => {
  const { isEnglishLanguage } = useLanguageContext();
  const currentDate = new Date();
  const startDate = new Date('June 1, 2021');
  const diffInYears = currentDate.getFullYear() - startDate.getFullYear();
  const message = texts[isEnglishLanguage ? 'en' : 'ptbr'].intro(diffInYears);

  return (
    <AnimatedBackground>
      <Container>
        <S.Text>
          <img src='/square-me.png' alt='myself' />
          <div>
            <AboutMe />
            {message}
          </div>
        </S.Text>
      </Container>
    </AnimatedBackground>
  );
};

export default Home;
