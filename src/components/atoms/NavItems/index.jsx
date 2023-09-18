import texts from '../../../utils/texts';

const NavItems = (isEnglishLanguage) => {
  const navigationMessages = texts[isEnglishLanguage ? 'en' : 'ptbr'].navigation;

  return [
    {
      itemName: navigationMessages.home,
      itemPath: '/'
    },
    {
      itemName: navigationMessages.technologies,
      itemPath: '/technologies'
    },
    {
      itemName: navigationMessages.portfolio,
      itemPath: '/portfolio'
    },
    {
      itemName: navigationMessages.contact,
      itemPath: '/contact'
    }
  ];
};

export default NavItems;
