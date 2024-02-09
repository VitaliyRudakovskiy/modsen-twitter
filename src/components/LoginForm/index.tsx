import ButtonVariants from '@constants/buttonVariants';
import loginInputs from '@constants/loginInputs';
import Routes from '@constants/routes';
import Button from '@UI/Button';
import Input from '@UI/Input';

import {
  LoginFormContainer,
  LoginInputsContainer,
  LoginTitle,
  SignupLink,
} from './styled';

const LoginForm = () => {
  return (
    <LoginFormContainer>
      <LoginTitle>Log In to Twitter</LoginTitle>
      <LoginInputsContainer>
        {loginInputs.map(({ placeholder, type }) => (
          <Input key={placeholder} placeholder={placeholder} type={type} />
        ))}
      </LoginInputsContainer>
      <Button variant={ButtonVariants.primary}>Log In</Button>
      <SignupLink to={Routes.SIGNUP}>Sign Up to Twitter</SignupLink>
    </LoginFormContainer>
  );
};

export default LoginForm;
