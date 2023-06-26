import React from 'react';
import * as S from './styles';

const Navbar = () => {
  return (
    <S.NavbarContainer>
      <S.NavbarName>Michelle Mendonça</S.NavbarName>
      <S.NavbarLinksContainer>
        <a href='#home'>Home</a>
        <a href='#aboutme'>About Me</a>
        <a href='#technolegies'>Technologies</a>
        <a href='#portfolio'>Portfolio</a>
        <a href='#contact'>Contact</a>
      </S.NavbarLinksContainer>
    </S.NavbarContainer>
  );
};

export default Navbar