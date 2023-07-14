import NavItems from "../NavItems";

const NavbarLinks = () => {
  const navItems = [
    { itemName: 'Home', itemPath: '/home' },
    { itemName: 'About Me', itemPath: '/aboutme' },
    { itemName: 'Technologies', itemPath: '/technologies' },
    { itemName: 'Portfolio', itemPath: '/portfolio' },
    { itemName: 'Contact', itemPath: '/contact' },
  ];

  return <NavItems items={navItems} />;
};

export default NavbarLinks;