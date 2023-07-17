import Typewritter from '../../organisms/Typewritter';
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
    <S.LandingType>
      <div>What am I?</div>
      <Typewritter data={msgArray} typeSpeed={100} msgDelay={2000} />
    </S.LandingType>
  );
};

export default Landing;