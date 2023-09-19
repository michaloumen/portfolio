import { useState } from 'react';
import { LinkedinIcon, GithubIcon, EmailIcon } from '../../icons';
import { useLanguageContext } from '../../../hooks/languageProvider';
import texts from '../../../utils/texts';
import CopyToClipboard from 'react-copy-to-clipboard';
import * as S from './styles';

const HomeContact = () => {
  const { isEnglishLanguage } = useLanguageContext();
  const message = texts[isEnglishLanguage ? 'en' : 'ptbr'].contactMenu;
  const linkedinURL = 'https://www.linkedin.com/in/michaloumen';
  const githubURL = 'https://github.com/michaloumen';
  const emailAddress = 'michelle.lmendonca@gmail.com';

  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyClick = () => {
    setCopiedEmail(true);
    setTimeout(() => {
      setCopiedEmail(false);
    }, 3000);
  };

  return (
    <S.Container>
      <div>
        <a href={linkedinURL} target='_blank' rel='noopener noreferrer'>
          <LinkedinIcon />
        </a>
        <a href={githubURL} target='_blank' rel='noopener noreferrer'>
          <GithubIcon />
        </a>
        <CopyToClipboard text={emailAddress} onCopy={handleCopyClick}>
          <span>
            <EmailIcon />
            {copiedEmail && <S.CopyEmail>{message}</S.CopyEmail>}
          </span>
        </CopyToClipboard>
      </div>
    </S.Container>
  )
};

export default HomeContact;