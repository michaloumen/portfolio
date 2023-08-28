import { useLanguageContext } from '../../../hooks/languageProvider';
import * as S from './styles';

const Tradutor = () => {
  const { isEnglishLanguage, toggleLanguage } = useLanguageContext();

  return (
    <S.Wrapper>
      <img
        src={isEnglishLanguage ? 'usa.png' : 'brasil.png'}
        alt='Flag'
        onClick={toggleLanguage}
      />
    </S.Wrapper>
  );
};

export default Tradutor;
