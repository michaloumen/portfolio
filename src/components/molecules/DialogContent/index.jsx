import PropTypes from 'prop-types';
import Button from '../../atoms/Button';
import * as S from './styles';

const DialogContent = ({ image, text, description, link }) => (
  <S.Container>
    <div>{text}</div>
    <img src={image} alt='Dialog illustration' />
    <span>{description}</span>
    <Button
      text={'Saiba mais'}
      href={link}
    />
  </S.Container>
);

DialogContent.propTypes = {
  image: PropTypes.string,
  text: PropTypes.string,
  description: PropTypes.string,
  link: PropTypes.string
};

export default DialogContent;