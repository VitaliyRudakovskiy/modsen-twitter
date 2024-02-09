import Routes from '@constants/routes';

import {
  NotFoundContainer,
  NotFoundSubtitle,
  NotFoundText,
  NotFoundTitle,
  StyledLink,
} from './styled';

const NotFound = () => {
  return (
    <NotFoundContainer>
      <NotFoundTitle>404</NotFoundTitle>
      <NotFoundSubtitle>Page not found</NotFoundSubtitle>
      <NotFoundText>
        The link you clicked may be broken or the page may have been removed.
      </NotFoundText>
      <StyledLink to={Routes.HOME}>Back to Home Page</StyledLink>
    </NotFoundContainer>
  );
};

export default NotFound;
