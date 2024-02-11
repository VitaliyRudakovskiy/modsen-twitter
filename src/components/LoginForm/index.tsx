import { Fragment } from 'react';
import { useForm } from 'react-hook-form';
import ButtonVariants from '@constants/buttonVariants';
import { loginDefaultValues, loginInputs } from '@constants/loginElements';
import Routes from '@constants/routes';
import { zodResolver } from '@hookform/resolvers/zod';
import Button from '@UI/Button';
import Input from '@UI/Input';
import loginScheme from '@zod/loginScheme';

import {
  ErrorMessage,
  LoginFormContainer,
  LoginInputsContainer,
  LoginTitle,
  SignupLink,
} from './styled';
import { ILoginFormProps } from './types';

const LoginForm = ({ onSubmit, isButtonActive }: ILoginFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    resolver: zodResolver(loginScheme),
    mode: 'onChange',
    defaultValues: loginDefaultValues,
  });

  return (
    <LoginFormContainer onSubmit={handleSubmit(onSubmit)}>
      <LoginTitle>Log In to Twitter</LoginTitle>
      <LoginInputsContainer>
        {loginInputs.map(({ placeholder, type, name }) => (
          <Fragment key={placeholder}>
            <Input {...register(name)} placeholder={placeholder} type={type} />
            {errors && errors[name] && (
              <ErrorMessage>{errors[name]?.message}</ErrorMessage>
            )}
          </Fragment>
        ))}
      </LoginInputsContainer>
      <Button
        variant={ButtonVariants.primary}
        type='submit'
        disabled={!isButtonActive || !isValid}
      >
        Log In
      </Button>
      <SignupLink to={Routes.SIGNUP}>Sign Up to Twitter</SignupLink>
    </LoginFormContainer>
  );
};

export default LoginForm;
