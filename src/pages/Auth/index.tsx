import { useNavigate } from 'react-router-dom';
import TwitterBg from '@assets/back-twitter.webp';
import ButtonVariants from '@constants/buttonVariants';
import FooterLinks from '@constants/footerLinks';
import ICONS from '@constants/icons';
import Routes from '@constants/routes';
import Button from '@UI/Button';

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

  const handleSignUpClick = () => {
    navigate(Routes.SIGNUP);
  };

  return (
    <AuthContainer>
      <MainContent>
        <TwitterImage src={TwitterBg} alt='Background twitter' />
        <AuthContent>
          <TwitterLogo src={ICONS.twitter} />
          <Title>Happening now</Title>
          <Subtitle>Join Twitter today</Subtitle>
          <ButtonsContainer>
            <Button variant={ButtonVariants.secondary} icon={ICONS.google}>
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
            <LoginLink to={Routes.LOGIN}> Log In</LoginLink>
          </ExtraText>
        </AuthContent>
      </MainContent>
      <FooterLinksContainer>
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
