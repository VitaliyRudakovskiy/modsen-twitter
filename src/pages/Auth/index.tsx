import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import TwitterBg from '@/assets/images/back-twitter.webp';
import ButtonVariants from '@/constants/buttonVariants';
import FooterLinks from '@/constants/footerLinks';
import ICONS from '@/constants/icons';
import ROUTES from '@/routes';
import Button from '@/UI/Button';
import signupWithGoogle from '@/utils/signupWithGoogle';

import * as Styled from './styled';

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
    <Styled.AuthContainer>
      <Styled.MainContent>
        <Styled.TwitterImage
          src={TwitterBg}
          alt='Background twitter'
          data-cy='auth-image'
        />
        <Styled.AuthContent>
          <Styled.TwitterLogo src={ICONS.twitter} />
          <Styled.Title>Happening now</Styled.Title>
          <Styled.Subtitle>Join Twitter today</Styled.Subtitle>
          <Styled.ButtonsContainer data-cy='auth-signup-buttons'>
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
          </Styled.ButtonsContainer>
          <Styled.TermsText>
            By singing up you agree to the{' '}
            <Styled.Span>Terms of Service</Styled.Span> and
            <Styled.Span> Privacy Policy</Styled.Span>, including
            <Styled.Span> Cookie Use</Styled.Span>.
          </Styled.TermsText>
          <Styled.ExtraText>
            <Styled.Paragraph>Already have an account?</Styled.Paragraph>
            <Styled.LoginLink data-cy='auth-login-link' to={ROUTES.LOGIN}>
              {' '}
              Log In
            </Styled.LoginLink>
          </Styled.ExtraText>
        </Styled.AuthContent>
      </Styled.MainContent>
      <Styled.FooterLinksContainer data-cy='auth-footer-links'>
        {FooterLinks.map(({ id, text, to }) => (
          <Styled.FooterLink key={id} to={to}>
            {text}
          </Styled.FooterLink>
        ))}
      </Styled.FooterLinksContainer>
    </Styled.AuthContainer>
  );
};

export default Auth;
