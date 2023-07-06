import { useState, useEffect } from 'react';
import * as S from './styles';

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(true);

  const handleClick = () => {
    setShowLinks(!showLinks);
  };

  useEffect(() => {
    const handleResize = () => {
      setShowLinks(window.innerWidth > 768);
    };

    window.addEventListener('resize', handleResize);
  }, []);

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

// adicionar transição na abertura e fechamento do navbar

export default Navbar;