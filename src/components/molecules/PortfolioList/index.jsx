import PortfolioItems from '../../atoms/PortfolioItems';
import ProjectImages from '../../atoms/ProjectImages';
import { useLanguageContext } from '../../../hooks/languageProvider';
import * as S from './styles';

const PortfolioList = ({ handleOpenModal }) => {
  const { isEnglishLanguage } = useLanguageContext();
  
  return (
    <S.PortfolioListContainer>
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
    </S.PortfolioListContainer>
  );
};

export default PortfolioList;
