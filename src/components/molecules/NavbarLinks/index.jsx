import { useNavigate } from 'react-router-dom';
import navItems from '../../atoms/NavItems';
import * as S from './styles';

const NavbarLinks = () => {
  const navigate = useNavigate();
  // useNavigate evita rerenderização

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
