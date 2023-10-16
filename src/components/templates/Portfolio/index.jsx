import React, { useState } from 'react';
import { useLanguageContext } from '../../../hooks/languageProvider';
import texts from '../../../utils/texts';
import AnimatedBackground from '../../organisms/AnimatedBackground';
import Container from '../../atoms/Container';
import Dialog from '../../molecules/Dialog';
import DialogContent from '../../molecules/DialogContent';
import PortfolioList from '../../molecules/PortfolioList';
import * as S from './styles';

const Portfolio = () => {
  const { isEnglishLanguage } = useLanguageContext();
  const portfolioTextMessages = texts[isEnglishLanguage ? 'en' : 'ptbr'].portfolio;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedText, setSelectedText] = useState(null);
  const [selectedDescription, setSelectedDescription] = useState(null);
  const [selectedLink, setSelectedLink] = useState(null);

  const handleOpenModal = (image, text, description, link) => {
    setSelectedImage(image);
    setSelectedText(text);
    setSelectedDescription(description);
    setSelectedLink(link);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
    setSelectedText(null);
    setSelectedDescription(null);
    setSelectedLink(null);
    setIsModalOpen(false);
  };

  return (
    <S.Wrapper>
      <AnimatedBackground>
        {isModalOpen && (
          <Dialog
            open={isModalOpen}
            onClose={handleCloseModal}
            children={
              <DialogContent
                image={selectedImage}
                text={selectedText}
                description={selectedDescription}
                link={selectedLink}
              />
            }
          />
        )}
        <Container>
          <S.Container>
            <S.Header>
              {portfolioTextMessages.header}
              <div>
                {portfolioTextMessages.subtitle} <a
                  href='https://github.com/michaloumen'
                  target='_blank'
                  rel='noreferrer'
                >{portfolioTextMessages.clickHere}</a>
              </div>
            </S.Header>
            <PortfolioList handleOpenModal={handleOpenModal} />
          </S.Container>
        </Container>
      </AnimatedBackground>
    </S.Wrapper>
  );
};

export default Portfolio;