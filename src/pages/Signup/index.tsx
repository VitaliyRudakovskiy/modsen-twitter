import SignupForm from '@components/SignupForm';
import ICONS from '@constants/icons';

import { SignupContainer, TwitterLogo } from './styled';

const Signup = () => {
  return (
    <SignupContainer>
      <TwitterLogo src={ICONS.twitter} alt='twitter-icon' />
      <SignupForm />
    </SignupContainer>
  );
};

export default Signup;
