import * as S from './styles';

const DialogContent = ({ image, text, description, link }) => (
  <S.Container>
    <div>{text}</div>
    <img src={image} alt='Dialog illustration' />
    <span>{description}</span>
    {link && (
      <S.StyledLink>
        <a href={link} target='_blank' rel='noreferrer'>
          Saiba mais
        </a>
      </S.StyledLink>
    )}
  </S.Container>
);

export default DialogContent;