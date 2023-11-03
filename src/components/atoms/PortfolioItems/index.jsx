import texts from '../../../utils/texts';

const PortfolioItems = (isEnglishLanguage) => {
  const portfolioItemsMessages = texts[isEnglishLanguage ? 'en' : 'ptbr'].portfolioItems;

  return [
    {
      image: 'project3.jpg',
      title: portfolioItemsMessages[3].header,
      description: portfolioItemsMessages[3].description,
      link: 'https://github.com/michaloumen/odonto-website'
    },
    {
      image: 'project0.png',
      title: portfolioItemsMessages[0].header,
      description: portfolioItemsMessages[0].description,
      link: 'https://github.com/michaloumen/portfolio'
    },
    {
      image: 'project1.png',
      title: portfolioItemsMessages[1].header,
      description: portfolioItemsMessages[1].description,
      link: 'https://github.com/michaloumen/calculate-project-cost'
    },
    {
      image: 'project2.gif',
      title: portfolioItemsMessages[2].header,
      description: portfolioItemsMessages[2].description,
      link: 'https://github.com/michaloumen/express-project'
    }
  ]
};

export default PortfolioItems;