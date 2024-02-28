import { useState } from 'react';

import SignupForm from '@/components/SignupForm';
import ICONS from '@/constants/icons';

import { SignupContainer, TwitterLogo } from './styled';

const Signup = () => {
  const [isButtonActive, setIsButtonActive] = useState<boolean>(true);

  return (
    <SignupContainer>
      <TwitterLogo
        src={ICONS.twitter}
        alt='twitter-icon'
        data-cy='signup-image'
      />
      <SignupForm
        isButtonActive={isButtonActive}
        setIsButtonActive={setIsButtonActive}
      />
    </SignupContainer>
  );
};

export default Signup;
