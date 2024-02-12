import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import SignupForm from '@components/SignupForm';
import ICONS from '@constants/icons';
import Routes from '@constants/routes';
import formatBirthDate from '@helpers/formatBirthDate';
import { zodResolver } from '@hookform/resolvers/zod';
import { setCurrentUser } from '@store/slices/userSlice';
import setUserToFirestore from '@utils/setUserToFirestore';
import { signupScheme } from '@zod/signupScheme';

import { SignupContainer, TwitterLogo } from './styled';
import { ISignupForm } from './types';

const Signup = () => {
  const { reset } = useForm<ISignupForm>({
    resolver: zodResolver(signupScheme),
  });
  const [isButtonActive, setIsButtonActive] = useState<boolean>(true);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onSubmit: SubmitHandler<ISignupForm> = async ({
    name,
    phone,
    email,
    password,
    month,
    day,
    year,
  }: ISignupForm) => {
    const formattedBirthDate = formatBirthDate(+day, month, +year);

    try {
      setIsButtonActive(false);
      const { userData } = await setUserToFirestore(
        name,
        phone,
        email,
        password,
        formattedBirthDate
      );
      dispatch(setCurrentUser({ ...userData }));
      navigate(Routes.HOME);
    } catch (error) {
      throw new Error(`An error occured while submitting form: ${error}`);
    } finally {
      reset();
      setIsButtonActive(true);
    }
  };

  return (
    <SignupContainer>
      <TwitterLogo src={ICONS.twitter} alt='twitter-icon' />
      <SignupForm onSubmit={onSubmit} isButtonActive={isButtonActive} />
    </SignupContainer>
  );
};

export default Signup;
