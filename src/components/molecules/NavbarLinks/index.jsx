import { useNavigate } from 'react-router-dom';
import NavItems from '../../atoms/NavItems';
import * as S from './styles';
import { useLanguageContext } from '../../../hooks/languageProvider';

const NavbarLinks = () => {
  const navigate = useNavigate();
  const { isEnglishLanguage } = useLanguageContext();
  const navItems = NavItems(isEnglishLanguage);

  const handleLinkClick = (path) => {
    navigate(path);
  };

  return (
    <S.NavbarLinksContainer>
      {navItems.map(({ itemName, itemPath }) => (
        <div key={itemPath} onClick={() => handleLinkClick(itemPath)}>
          {itemName}
        </div>
      ))}
    </S.NavbarLinksContainer>
  );
};

export default NavbarLinks;
