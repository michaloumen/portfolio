import React from 'react';
import * as S from './styles';

const Navbar = () => {
  return (
    <S.NavbarContainer>
      <S.NavbarName>Michelle Mendonça</S.NavbarName>
      <S.NavbarLinksContainer>
        <a>Home</a>
        <a>About</a>
        <a>About Me</a>
        <a>Technologies</a>
        <a>Portfolio</a>
      </S.NavbarLinksContainer>
    </S.NavbarContainer>
  );
};

export default Navbar