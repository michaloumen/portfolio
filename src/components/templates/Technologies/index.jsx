import React, { useState } from 'react';
import AnimatedBackground from '../../organisms/AnimatedBackground';
import TechnologiesList from '../../molecules/TechnologiesList';
import Carousel from '../../molecules/Carousel';
import * as S from './styles';

const Technologies = () => {
  const [showList, setShowList] = useState(true);

  const toggleListContainer = () => {
    setShowList(!showList);
  };

  const renderText = () => (
    showList ? (
      <S.Text>
        Não existe nenhum motivo para colocar essa mesma lista em um Carrossel. Mas eu quis fazer mesmo assim!{' '}
        <span onClick={() => toggleListContainer()}>Clique aqui e veja o modo 🎠 Carrossel 🎠</span>
      </S.Text>
    ) : (
      <S.Text>
        <span onClick={() => toggleListContainer()}>Volte para a visualização anterior</span>
      </S.Text>
    )
  );

  const renderTechnologies = () => (
    showList ? (
      <S.ListContainer tecnologiesList><TechnologiesList /></S.ListContainer>
    ) : (
      <Carousel>{TechnologiesList()}</Carousel>
    )
  );

  return (
    <S.StyledAnimatedBackground>
      <AnimatedBackground>
        <S.Container>
          <span>Some of the technologies I use</span>
          {renderText()}
          {renderTechnologies()}
        </S.Container>
      </AnimatedBackground>
    </S.StyledAnimatedBackground>
  );
};

export default Technologies;