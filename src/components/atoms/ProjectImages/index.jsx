import * as S from './styles';

const ProjectImages = ({ title, image, onClick }) => (
  <S.Container>
    <div>{title}</div>
    <img src={image} alt='Project illustration' onClick={onClick} />
  </S.Container>
);

export default ProjectImages;