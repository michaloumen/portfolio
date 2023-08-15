import React, { useState } from 'react';
import AnimatedBackground from '../../organisms/AnimatedBackground';
import TechnologiesList from '../../molecules/TechnologiesList';
import Carousel from '../../molecules/Carousel';
import Container from '../../atoms/Container';
import * as S from './styles';

const Technologies = () => {
  const [showList, setShowList] = useState(true);

  const toggleListContainer = () => {
    setShowList(!showList);
  };

  const renderText = () => (
    showList ? (
      <S.BodyText>
        Não existe nenhum motivo para colocar essa mesma lista em um Carrossel. Mas eu quis fazer mesmo assim!
        <span onClick={() => toggleListContainer()}> Clique aqui e veja o modo 🎠 Carrossel 🎠</span>
      </S.BodyText>
    ) : (
      <S.BodyText>
        <span onClick={() => toggleListContainer()}>Volte para a visualização anterior</span>
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
    <S.StyledAnimatedBackground>
      <AnimatedBackground>
        <Container>
          <S.HeaderText>
            <span>Some of the technologies I use</span>
            {renderText()}
            {renderTechnologies()}
          </S.HeaderText>
        </Container>
      </AnimatedBackground>
    </S.StyledAnimatedBackground>
  );
};

export default Technologies;