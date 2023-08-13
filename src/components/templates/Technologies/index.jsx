import React, { useState } from 'react';
import AnimatedBackground from '../../organisms/AnimatedBackground';
import TechnologiesList from '../../molecules/TechnologiesList';
import TechnologyCarousel from '../../molecules/TechnologyCarousel';
import * as S from './styles';

const Technologies = () => {
  const [showListContainer, setShowListContainer] = useState(false);

  const toggleListContainer = () => {
    setShowListContainer(!showListContainer);
  };

  return (
    <S.StyledAnimatedBackground>
      <AnimatedBackground>
        <S.Container>
          <span>Some of the technologies I use</span>
          <S.CarouselMode>
            Não existe nenhum motivo para colocar essa mesma lista em um Carrossel. Mas eu quis fazer mesmo assim!{' '}
            <span onClick={() => toggleListContainer()}>Clique aqui e veja o modo 🎠 Carrossel 🎠</span>
          </S.CarouselMode>
          {showListContainer ? (
            <S.ListContainer><TechnologiesList /></S.ListContainer>
          ) : (
            <TechnologyCarousel />
          )}
        </S.Container>
      </AnimatedBackground>
    </S.StyledAnimatedBackground>
  );
};

export default Technologies;