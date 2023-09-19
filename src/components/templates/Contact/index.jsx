import AnimatedBackground from "../../organisms/AnimatedBackground";
import Container from "../../atoms/Container";
import LinkedinIcon from "../../icons/LinkedinIcon";
import GithubIcon from "../../icons/GithubIcon";
import EmailIcon from "../../icons/EmailIcon";
import * as S from './styles';

const Contact = () => {
  const linkedinURL = 'https://www.linkedin.com/in/michaloumen/';
  const githubURL = 'https://github.com/michaloumen';

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
            <a href={githubURL} target="_blank" rel="noopener noreferrer">
              <EmailIcon />
            </a>
          </div>
        </S.Container>
      </Container>
    </AnimatedBackground>
  );
};

export default Contact;