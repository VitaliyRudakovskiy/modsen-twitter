import ButtonVariants from '@constants/buttonVariants';
import Routes from '@constants/routes';
import { signupInputs, signupSelects } from '@constants/signupElements';
import Button from '@UI/Button';
import Input from '@UI/Input';
import Select from '@UI/Select';

import {
  BirthText,
  BirthTitle,
  SelectsContainer,
  SignupFormContainer,
  SignupInputsContainer,
  SignupTitle,
  StyledLink,
} from './styled';

const SignupForm = () => {
  return (
    <SignupFormContainer>
      <SignupTitle>Create an account</SignupTitle>

      <SignupInputsContainer>
        {signupInputs.map(({ placeholder, type }) => (
          <Input key={placeholder} placeholder={placeholder} type={type} />
        ))}
      </SignupInputsContainer>

      <StyledLink to={Routes.AUTH}>Use email</StyledLink>

      <BirthTitle>Date of Birth</BirthTitle>
      <BirthText>
        Facilisi sem pulvinar velit nunc, gravida scelerisque amet nibh sit.
        Quis bibendum ante phasellus metus, magna lacinia sed augue. Odio enim
        nascetur leo mauris vel eget. Pretium id ullamcorper blandit viverra
        dignissim eget tellus. Nibh mi massa in molestie a sit. Elit congue.
      </BirthText>

      <SelectsContainer>
        {signupSelects.map(({ options, placeholder, width }) => (
          <Select
            key={placeholder}
            options={options}
            placeholder={placeholder}
            width={width}
          />
        ))}
      </SelectsContainer>
      <Button variant={ButtonVariants.primary} type='submit'>
        Next
      </Button>
    </SignupFormContainer>
  );
};

export default SignupForm;
