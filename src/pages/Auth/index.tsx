import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import TwitterBg from '@/assets/back-twitter.webp';
import ButtonVariants from '@/constants/buttonVariants';
import FooterLinks from '@/constants/footerLinks';
import ICONS from '@/constants/icons';
import ROUTES from '@/routes';
import Button from '@/UI/Button';
import signupWithGoogle from '@/utils/signupWithGoogle';

import {
  AuthContainer,
  AuthContent,
  ButtonsContainer,
  ExtraText,
  FooterLink,
  FooterLinksContainer,
  LoginLink,
  MainContent,
  Paragraph,
  Span,
  Subtitle,
  TermsText,
  Title,
  TwitterImage,
  TwitterLogo,
} from './styled';

const Auth = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSignUpClick = () => {
    navigate(ROUTES.SIGNUP);
  };

  const handleGoogleSignUp = async () => {
    try {
      await signupWithGoogle(navigate, dispatch);
    } catch (error) {
      throw new Error(`Error while signing up with Google: ${error}`);
    }
  };

  return (
    <AuthContainer>
      <MainContent>
        <TwitterImage
          src={TwitterBg}
          alt='Background twitter'
          data-cy='auth-image'
        />
        <AuthContent>
          <TwitterLogo src={ICONS.twitter} />
          <Title>Happening now</Title>
          <Subtitle>Join Twitter today</Subtitle>
          <ButtonsContainer data-cy='auth-signup-buttons'>
            <Button
              variant={ButtonVariants.secondary}
              icon={ICONS.google}
              onClick={handleGoogleSignUp}
            >
              Sign up with Google
            </Button>
            <Button
              variant={ButtonVariants.secondary}
              onClick={handleSignUpClick}
            >
              Sign up with email
            </Button>
          </ButtonsContainer>
          <TermsText>
            By singing up you agree to the <Span>Terms of Service</Span> and
            <Span> Privacy Policy</Span>, including
            <Span> Cookie Use</Span>.
          </TermsText>
          <ExtraText>
            <Paragraph>Already have an account?</Paragraph>
            <LoginLink data-cy='auth-login-link' to={ROUTES.LOGIN}>
              Log In
            </LoginLink>
          </ExtraText>
        </AuthContent>
      </MainContent>
      <FooterLinksContainer data-cy='auth-footer-links'>
        {FooterLinks.map(({ id, text, to }) => (
          <FooterLink key={id} to={to}>
            {text}
          </FooterLink>
        ))}
      </FooterLinksContainer>
    </AuthContainer>
  );
};

export default Auth;
