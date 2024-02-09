import LoginForm from '@components/LoginForm';
import ICONS from '@constants/icons';

import { LoginContainer, TwitterLogo } from './styled';

const Login = () => {
  return (
    <LoginContainer>
      <TwitterLogo src={ICONS.twitter} alt='twitter-icon' />
      <LoginForm />
    </LoginContainer>
  );
};

export default Login;
