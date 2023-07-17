import { useHistory } from 'react-router-dom';
import navItems from '../NavItems';
import * as S from './styles';

const NavbarLinks = () => {
  const history = useHistory();

  const handleLinkClick = (path) => {
    history.push(path);
  };

  return (
    <S.NavbarLinksContainer>
      {navItems.map(({ itemName, itemPath }) => (
        <div key={itemPath} onClick={() => handleLinkClick(itemPath)}>
          <a href={itemPath}>{itemName}</a>
        </div>
      ))}
    </S.NavbarLinksContainer>
  );
};

export default NavbarLinks;
