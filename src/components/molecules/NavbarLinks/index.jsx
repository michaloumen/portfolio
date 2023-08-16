import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguageContext } from '../../../hooks/languageProvider';
import navItems from '../../atoms/NavItems';
import * as S from './styles';

const NavbarLinks = () => {
  const navigate = useNavigate();
  const { isEnglishLanguage } = useLanguageContext();

  const handleLinkClick = (path) => {
    navigate(path);
  };

  return (
    <S.NavbarLinksContainer>
      {navItems.map(({ itemName, itemPath }) => (
        <div key={itemPath} onClick={() => handleLinkClick(itemPath)}>
          {isEnglishLanguage ? itemName.en : itemName.pt}
        </div>
      ))}
    </S.NavbarLinksContainer>
  );
};

export default NavbarLinks;
