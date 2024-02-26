import ROUTES from '@/routes';

import * as Styled from './styled';

const NotFound = () => {
  return (
    <Styled.NotFoundContainer>
      <Styled.NotFoundTitle>404</Styled.NotFoundTitle>
      <Styled.NotFoundSubtitle>Page not found</Styled.NotFoundSubtitle>
      <Styled.NotFoundText>
        The link you clicked may be broken or the page may have been removed.
      </Styled.NotFoundText>
      <Styled.StyledLink to={ROUTES.HOME}>Back to Home Page</Styled.StyledLink>
    </Styled.NotFoundContainer>
  );
};

export default NotFound;
