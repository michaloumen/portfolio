import * as S from './styles';
import { useHistory } from 'react-router-dom';

const NavItems = ({ items }) => {
  const history = useHistory();

  const handleLinkClick = (path) => {
    history.push(path);
  };

  return (
    <S.NavbarLinksContainer>
      {items.map(({ itemName, itemPath }) => (
        <S.Item key={itemPath} onClick={() => handleLinkClick(itemPath)}>
          {itemName}
        </S.Item>
      ))}
    </S.NavbarLinksContainer>
  );
};

export default NavItems;
