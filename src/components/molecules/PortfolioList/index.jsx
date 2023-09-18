import PortfolioItems from '../../atoms/PortfolioItems';
import ProjectImages from '../../atoms/ProjectImages';
import { useLanguageContext } from '../../../hooks/languageProvider';

const PortfolioList = ({ handleOpenModal }) => {
  const { isEnglishLanguage } = useLanguageContext();
  
  return (
    <>
      {PortfolioItems(isEnglishLanguage).map((item, index) => (
        <ProjectImages
          key={index}
          title={item.title}
          image={item.image}
          onClick={() => handleOpenModal(
            item.image,
            item.title,
            item.description,
            item.link
          )}
        />
      ))}
    </>
  );
};

export default PortfolioList;
