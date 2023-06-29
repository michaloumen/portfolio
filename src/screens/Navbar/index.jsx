import { useState } from 'react';
import * as S from './styles';

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(true);

  const handleClick = () => {
    setShowLinks(!showLinks);
  };

  return (
    <S.NavbarContainer showLinks={showLinks}>
      <S.NavbarName>
        Michelle Mendonça
        <img src='./menu-icon.svg' alt='Menu Icon' onClick={handleClick} />
      </S.NavbarName>
      {showLinks && (
        <S.NavbarLinksContainer>
          <a href='#home'>Home</a>
          <a href='#aboutme'>About Me</a>
          <a href='#technolegies'>Technologies</a>
          <a href='#portfolio'>Portfolio</a>
          <a href='#contact'>Contact</a>
        </S.NavbarLinksContainer>
      )}
    </S.NavbarContainer>
  );
};

// tem um bug no menu-icon
// quando fecho ele e expando a tela, ele continua aparecendo
// quero diminuir a tela e não aparecer ainda a lista

export default Navbar;