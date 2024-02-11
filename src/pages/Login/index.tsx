import { useForm } from 'react-hook-form';
import LoginForm from '@components/LoginForm';
import ICONS from '@constants/icons';

import { LoginContainer, TwitterLogo } from './styled';
import { ILoginForm } from './types';
import { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import loginScheme from '@zod/loginScheme';
import { useNavigate } from 'react-router-dom';
import { auth, signin } from '@db/index';

const Login = () => {
  const { reset } = useForm<ILoginForm>({
    resolver: zodResolver(loginScheme),
  });
  const [isButtonActive, setIsButtonActive] = useState<boolean>(true);

  const navigate = useNavigate();

  const onSubmit = async ({ phoneOrEmail, password }: ILoginForm) => {
    try {
      setIsButtonActive(false);
      const user = await signin(phoneOrEmail, password);
      console.log(auth.currentUser);
    } catch (error) {
      throw new Error(`An error occured while submitting login form: ${error}`);
    } finally {
      reset();
      setIsButtonActive(true);
    }
  };

  return (
    <LoginContainer>
      <TwitterLogo src={ICONS.twitter} alt='twitter-icon' />
      <LoginForm onSubmit={onSubmit} isButtonActive={isButtonActive} />
    </LoginContainer>
  );
};

export default Login;
