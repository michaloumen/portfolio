import { useState } from 'react';
import * as S from './styles';

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);

  const renderNavBarLinks = (
    <S.NavbarLinksContainer>
    <a href='#home'>Home</a>
    <a href='#aboutme'>About Me</a>
    <a href='#technolegies'>Technologies</a>
    <a href='#portfolio'>Portfolio</a>
    <a href='#contact'>Contact</a>
  </S.NavbarLinksContainer>
  );

  return (
    <S.NavbarContainer>
      <S.MenuDesktop>
        <S.NavbarName>
          Michelle Mendonça
        </S.NavbarName>
        {renderNavBarLinks}
      </S.MenuDesktop>
      <S.MenuMobile>
        <S.NavbarName>
          Michelle Mendonça
          <img src='./menu-icon.svg' alt='Menu Icon' onClick={() => setShowLinks(!showLinks)} />
        </S.NavbarName>
        {showLinks && renderNavBarLinks}
      </S.MenuMobile>
    </S.NavbarContainer>
  )
};

// adicionar transição na abertura e fechamento do navbar

export default Navbar;