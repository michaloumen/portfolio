import React from 'react';
import PropTypes from 'prop-types';
import { useLanguageContext } from '../../../hooks/languageProvider';
import Button from '../../atoms/Button';
import texts from '../../../utils/texts';
import * as S from './styles';

const DialogContent = ({ image, text, description, link }) => {
  const { isEnglishLanguage } = useLanguageContext();
  const portfolioButton = texts[isEnglishLanguage ? 'en' : 'ptbr'].portfolioDialogButton;

  return (
    <S.Container>
      <div>{text}</div>
      <img src={image} alt='Dialog illustration' />
      <span>{description}</span>
      <S.StyledButton>
        <Button
          text={portfolioButton}
          href={link}
        />
      </S.StyledButton>
    </S.Container>
  );
};

DialogContent.propTypes = {
  image: PropTypes.string,
  text: PropTypes.string,
  description: PropTypes.string,
  link: PropTypes.string
};

export default DialogContent;