import AnimatedBackground from '../../organisms/AnimatedBackground';
import { Typewritter } from '../../..';
import * as S from './styles';

const msgArray = [
  ' ',
  'A Software Developer',
  'Also know as an',
  'Frontend Developer',
  'Backend Developer',
  'Or',
  'A Coder',
  ' '
];

const Landing = () => {
  return (
    <AnimatedBackground>
      <S.LandingType>
      <div>What am I?</div>
      <Typewritter data={msgArray} typeSpeed={100} msgDelay={2000} />
      </S.LandingType>
    </AnimatedBackground>
  );
};

export default Landing;