import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { zodResolver } from '@hookform/resolvers/zod';

import LoginForm from '@/components/LoginForm';
import ICONS from '@/constants/icons';
import ROUTES from '@/routes';
import { setCurrentUser } from '@/store/slices/userSlice';
import { IUser } from '@/store/types';
import getUserDataAndLogin from '@/utils/getUserFromFirestore';
import loginScheme from '@/zod/loginScheme';

import { LoginContainer, TwitterLogo } from './styled';
import { ILoginForm } from './types';

const Login = () => {
  const { reset } = useForm<ILoginForm>({
    resolver: zodResolver(loginScheme),
  });
  const [isButtonActive, setIsButtonActive] = useState<boolean>(true);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onSubmit = async ({ phoneOrEmail, password }: ILoginForm) => {
    try {
      setIsButtonActive(false);
      const { userData, token } = await getUserDataAndLogin(
        phoneOrEmail,
        password
      );

      if (token) {
        dispatch(setCurrentUser({ ...(userData as IUser), token }));
        navigate(ROUTES.HOME);
      } else {
        throw new Error('User not found');
      }
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
