import { useLanguageContext } from '../../../hooks/languageProvider';
import Typewritter from '../../organisms/Typewritter';
import messages from '../../../utils/messages';
import * as S from './styles';

const AboutMe = () => {
  const { isEnglishLanguage } = useLanguageContext();
  const landing = messages[isEnglishLanguage ? 'en' : 'ptbr'].landing;

  return (
    <S.LandingType>
      <div>{landing.whoAmI}</div>
      <Typewritter data={landing.typewritter} typeSpeed={100} msgDelay={2000} />
    </S.LandingType>
  );
};

export default AboutMe;