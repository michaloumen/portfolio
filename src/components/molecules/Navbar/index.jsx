import { useState } from 'react';
import NavbarLinks from '../../molecules/NavbarLinks';
import MenuIcon from '../../icons/MenuIcon';
import Tradutor from '../../atoms/Tradutor';
import * as S from './styles';

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);

  return (
      <S.NavbarContainer>
        <S.MenuDesktop>
          <S.NavbarName>
            Michelle Mendonça
          </S.NavbarName>
          <div>
            <NavbarLinks />
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
          {showLinks && <NavbarLinks />}
        </S.MenuMobile>
      </S.NavbarContainer>
  )
};

export default Navbar;