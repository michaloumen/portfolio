import { useState } from "react";
import AnimatedBackground from "../../organisms/AnimatedBackground";
import Container from "../../atoms/Container";
import LinkedinIcon from "../../icons/LinkedinIcon";
import GithubIcon from "../../icons/GithubIcon";
import EmailIcon from "../../icons/EmailIcon";
import CopyToClipboard from "react-copy-to-clipboard";
import * as S from './styles';

const Contact = () => {
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
    <AnimatedBackground>
      <Container>
        <S.Container>
          <span>Meus contatos</span>
          <div>
            <a href={linkedinURL} target="_blank" rel="noopener noreferrer">
              <LinkedinIcon />
            </a>
            <a href={githubURL} target="_blank" rel="noopener noreferrer">
              <GithubIcon />
            </a>
            <CopyToClipboard text={emailAddress} onCopy={handleCopyClick}>
              <span>
                <EmailIcon />
              </span>
            </CopyToClipboard>
          </div>
        </S.Container>
        {copiedEmail && <S.CopyEmail>Email copiado!</S.CopyEmail>}
      </Container>
    </AnimatedBackground>
  );
};

export default Contact;
