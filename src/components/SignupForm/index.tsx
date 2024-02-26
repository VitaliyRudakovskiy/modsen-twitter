import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import ButtonVariants from '@/constants/buttonVariants';
import {
  signupDefaultValues,
  signupInputs,
  signupSelects,
} from '@/constants/signupElements';
import ROUTES from '@/routes';
import { ISignupForm } from '@/types/form';
import Button from '@/UI/Button';
import Input from '@/UI/Input';
import Select from '@/UI/Select';
import { signupScheme } from '@/zod/signupScheme';

import * as Styled from './styled';
import { ISignupFormProps } from './types';

const SignupForm = ({ onSubmit, isButtonActive }: ISignupFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<ISignupForm>({
    resolver: zodResolver(signupScheme),
    defaultValues: signupDefaultValues,
    mode: 'onChange',
  });

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
