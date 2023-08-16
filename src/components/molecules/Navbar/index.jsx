import { useState } from 'react';
import NavbarLinks from '../../molecules/NavbarLinks';
import MenuIcon from '../../icons/MenuIcon';
import Tradutor from '../Tradutor';
import LanguageProvider from '../../../hooks/languageProvider';
import * as S from './styles';

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);

  return (
    <LanguageProvider>
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
              <LanguageProvider>
                <Tradutor />
              </LanguageProvider>
            </div>
          </S.NavbarName>
          {showLinks && <NavbarLinks />}
        </S.MenuMobile>
      </S.NavbarContainer>
    </LanguageProvider>
  )
};

export default Navbar;