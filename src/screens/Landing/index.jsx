import AnimatedBackground from '../components/organisms/AnimatedBackground';
import { Typewritter } from '..';
import * as S from './styles';

let msgArray = [
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
      <Typewritter data={msgArray} />
      </S.LandingType>
    </AnimatedBackground>
  );
};

export default Landing;