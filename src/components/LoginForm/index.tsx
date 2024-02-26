import { Fragment } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import ButtonVariants from '@/constants/buttonVariants';
import { loginDefaultValues, loginInputs } from '@/constants/loginElements';
import ROUTES from '@/routes';
import Button from '@/UI/Button';
import Input from '@/UI/Input';
import loginScheme from '@/zod/loginScheme';

import * as Styled from './styled';
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
    <Styled.LoginFormContainer
      onSubmit={handleSubmit(onSubmit)}
      data-cy='login-form'
    >
      <Styled.LoginTitle>Log In to Twitter</Styled.LoginTitle>
      <Styled.LoginInputsContainer>
        {loginInputs.map(({ placeholder, type, name }) => (
          <Fragment key={placeholder}>
            <Input
              {...register(name)}
              placeholder={placeholder}
              type={type}
              data-cy={`login-form-${name}`}
            />
            {errors && errors[name] && (
              <Styled.ErrorMessage>{errors[name]?.message}</Styled.ErrorMessage>
            )}
          </Fragment>
        ))}
      </Styled.LoginInputsContainer>
      <Button
        dataCy='login-submit-button'
        variant={ButtonVariants.primary}
        type='submit'
        disabled={!isButtonActive || !isValid}
      >
        Log In
      </Button>
      <Styled.SignupLink data-cy='signup-twitter-link' to={ROUTES.SIGNUP}>
        Sign Up to Twitter
      </Styled.SignupLink>
    </Styled.LoginFormContainer>
  );
};

export default LoginForm;
