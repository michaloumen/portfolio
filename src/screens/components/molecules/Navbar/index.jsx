import { useState } from 'react';
import NavbarLinks from '../../atoms/NavbarLinks';
import * as S from './styles';

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);

  return (
    <S.NavbarContainer>
      <S.MenuDesktop>
        <S.NavbarName>
          Michelle Mendonça
        </S.NavbarName>
        <NavbarLinks />
      </S.MenuDesktop>
      <S.MenuMobile>
        <S.NavbarName>
          Michelle Mendonça
          <img src='./menu-icon.svg' alt='Menu Icon' onClick={() => setShowLinks(!showLinks)} />
        </S.NavbarName>
        {showLinks && <NavbarLinks />}
      </S.MenuMobile>
    </S.NavbarContainer>
  )
};

// adicionar transição na abertura e fechamento do navbar

export default Navbar;