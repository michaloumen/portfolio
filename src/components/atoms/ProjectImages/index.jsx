import PropTypes from 'prop-types';
import * as S from './styles';

const ProjectImages = ({ title, image, onClick }) => (
  <S.Container>
    <div>{title}</div>
    <img src={image} alt='Project illustration' onClick={onClick} />
    {/* imagens tamanho 878x566 */}
  </S.Container>
);

ProjectImages.propTypes = {
  title: PropTypes.string,
  image: PropTypes.node,
  onClick: PropTypes.func
};

export default ProjectImages;