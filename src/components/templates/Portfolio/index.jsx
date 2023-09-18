import { useState } from 'react';
import AnimatedBackground from '../../organisms/AnimatedBackground';
import Container from '../../atoms/Container';
import ProjectImages from '../../atoms/ProjectImages';
import Dialog from '../../molecules/Dialog';
import DialogContent from '../../molecules/DialogContent';
import PortfolioItems from '../../atoms/PortfolioItems';
import * as S from './styles';

const Portfolio = () => {
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
            Meus projetos
            <div>
              Aqui você encontrará alguns dos meus repositórios. Para ver todos, acesse minha <a
                href='https://github.com/michaloumen'
                target='_blank'
                rel='noreferrer'
              >Página do GitHub</a>
            </div>
          </S.Header>
          <S.ListContainer>
            {PortfolioItems.map((item, index) => (
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
          </S.ListContainer>
        </S.Container>
      </Container>
    </AnimatedBackground>
  );
};

export default Portfolio;