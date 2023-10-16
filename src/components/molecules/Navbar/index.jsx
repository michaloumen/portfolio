import React, { useState } from 'react';
import NavbarList from '../../molecules/NavbarList';
import MenuIcon from '../../icons/MenuIcon';
import Tradutor from '../../atoms/Tradutor';
import * as S from './styles';

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);

  const closeMenu = () => {
    setShowLinks(false);
  };

  return (
      <S.NavbarContainer>
        <S.MenuDesktop>
          <S.NavbarName>
            Michelle Mendonça
          </S.NavbarName>
          <div>
            <NavbarList closeMenu={closeMenu} />
            <Tradutor />
          </div>
        </S.MenuDesktop>
        <S.MenuMobile>
          <S.NavbarName>
            Michelle Mendonça
            <div>
              <S.StyledMenuIcon onClick={() => setShowLinks(!showLinks)}><MenuIcon /></S.StyledMenuIcon>
              <Tradutor />
            </div>
          </S.NavbarName>
          {showLinks && <NavbarList closeMenu={closeMenu} />}
        </S.MenuMobile>
      </S.NavbarContainer>
  )
};

export default Navbar;