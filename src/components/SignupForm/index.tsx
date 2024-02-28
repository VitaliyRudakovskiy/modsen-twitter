import { SubmitHandler, useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { zodResolver } from '@hookform/resolvers/zod';

import ButtonVariants from '@/constants/buttonVariants';
import {
  signupDefaultValues,
  signupInputs,
  signupSelects,
} from '@/constants/signupElements';
import formatBirthDate from '@/helpers/formatBirthDate';
import ROUTES from '@/routes';
import { setCurrentUser } from '@/store/slices/userSlice';
import { ISignupForm } from '@/types/form';
import Button from '@/UI/Button';
import Input from '@/UI/Input';
import Select from '@/UI/Select';
import setUserToFirestore from '@/utils/setUserToFirestore';
import { signupScheme } from '@/zod/signupScheme';

import * as Styled from './styled';
import { ISignupFormProps } from './types';

const SignupForm = ({
  isButtonActive,
  setIsButtonActive,
}: ISignupFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm<ISignupForm>({
    resolver: zodResolver(signupScheme),
    defaultValues: signupDefaultValues,
    mode: 'onChange',
  });

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
      navigate(ROUTES.HOME);
    } catch (error) {
      throw new Error(`An error occured while submitting form: ${error}`);
    } finally {
      reset();
      setIsButtonActive(true);
    }
  };

  return (
    <Styled.SignupFormContainer
      onSubmit={handleSubmit(onSubmit)}
      data-cy='signup-form'
    >
      <Styled.SignupTitle>Create an account</Styled.SignupTitle>

      <Styled.SignupInputsContainer>
        {signupInputs.map(({ placeholder, type, name }) => (
          <Styled.InputContainer key={placeholder}>
            <Input
              {...register(name)}
              placeholder={placeholder}
              type={type}
              data-cy={`signup-form-${name}`}
            />
            {errors && errors[name] && (
              <Styled.ErrorMessage>{errors[name]?.message}</Styled.ErrorMessage>
            )}
          </Styled.InputContainer>
        ))}
      </Styled.SignupInputsContainer>

      <Styled.StyledLink data-cy='signup-email-link' to={ROUTES.AUTH}>
        Use email
      </Styled.StyledLink>

      <Styled.BirthTitle>Date of Birth</Styled.BirthTitle>
      <Styled.BirthText>
        Facilisi sem pulvinar velit nunc, gravida scelerisque amet nibh sit.
        Quis bibendum ante phasellus metus, magna lacinia sed augue. Odio enim
        nascetur leo mauris vel eget. Pretium id ullamcorper blandit viverra
        dignissim eget tellus. Nibh mi massa in molestie a sit. Elit congue.
      </Styled.BirthText>

      <Styled.SelectsContainer>
        {signupSelects.map(({ options, placeholder, width, name }) => (
          <Select
            {...register(name)}
            key={placeholder}
            options={options}
            placeholder={placeholder}
            width={width}
            data-cy={`signup-form-${name}`}
          />
        ))}
      </Styled.SelectsContainer>
      <Button
        dataCy='signup-submit-button'
        variant={ButtonVariants.primary}
        type='submit'
        disabled={!isButtonActive || !isValid}
      >
        Next
      </Button>
    </Styled.SignupFormContainer>
  );
};

export default SignupForm;
