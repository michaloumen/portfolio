import { useState } from 'react';
import { useLanguageContext } from '../../../hooks/languageProvider';
import messages from '../../../utils/texts';
import AnimatedBackground from '../../organisms/AnimatedBackground';
import TechnologiesList from '../../molecules/TechnologiesList';
import Carousel from '../../molecules/Carousel';
import Container from '../../atoms/Container';
import * as S from './styles';

const Technologies = () => {
  const { isEnglishLanguage } = useLanguageContext();
  const technologiesTextMessages = messages[isEnglishLanguage ? 'en' : 'ptbr'].technologies;
  const [showList, setShowList] = useState(true);

  const toggleListContainer = () => {
    setShowList(!showList);
  };

  const renderText = () => (
    showList ? (
      <S.BodyText>
        {technologiesTextMessages.subtitle}
        <span onClick={() => toggleListContainer()}> {technologiesTextMessages.clickHere}</span>
      </S.BodyText>
    ) : (
      <S.BodyText>
        <span onClick={() => toggleListContainer()}>{technologiesTextMessages.back}</span>
      </S.BodyText>
    )
  );

  const renderTechnologies = () => (
    showList ? (
      <S.ListContainer><TechnologiesList /></S.ListContainer>
    ) : (
      <Carousel listContainer>{TechnologiesList()}</Carousel>
    )
  );

  return (
    <AnimatedBackground>
      <Container>
        <S.HeaderText>
          <span>{technologiesTextMessages.header}</span>
          {renderText()}
          {renderTechnologies()}
        </S.HeaderText>
      </Container>
    </AnimatedBackground>
  );
};

export default Technologies;