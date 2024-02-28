import { useState } from 'react';

import LoginForm from '@/components/LoginForm';
import ICONS from '@/constants/icons';

import { LoginContainer, TwitterLogo } from './styled';

const Login = () => {
  const [isButtonActive, setIsButtonActive] = useState<boolean>(true);

  return (
    <LoginContainer>
      <TwitterLogo
        src={ICONS.twitter}
        alt='twitter-icon'
        data-cy='login-image'
      />
      <LoginForm
        isButtonActive={isButtonActive}
        setIsButtonActive={setIsButtonActive}
      />
    </LoginContainer>
  );
};

export default Login;
