import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { flexCenter } from '@/theme/style/mixins';

export const AuthContainer = styled.section`
  display: flex;
  flex-direction: column;
  min-height: ${({ theme }) => theme.sizes.full};
  background-color: ${({ theme }) => theme.backgroundColor};
  color: ${({ theme }) => theme.textColor};
`;

export const MainContent = styled.div`
  display: flex;
  align-items: start;
  gap: ${({ theme }) => theme.gaps.xl6};
  flex: 1;
`;

export const AuthContent = styled.div`
  display: flex;
  align-self: center;
  flex-direction: column;
`;

export const TwitterImage = styled.img`
  height: 91vh;
`;

export const TwitterLogo = styled.img`
  width: ${({ theme }) => theme.gaps.xl6};
  margin-bottom: ${({ theme }) => theme.gaps.xl7};
`;

export const Title = styled.h1`
  font-size: ${({ theme }) => theme.fonts.fontSize.xl4}px;
  font-weight: ${({ theme }) => theme.fonts.fontWeight.xl};
  margin-bottom: ${({ theme }) => theme.gaps.xl5};
`;

export const Subtitle = styled.h2`
  font-size: ${({ theme }) => theme.fonts.fontSize.xl3}px;
  font-weight: ${({ theme }) => theme.fonts.fontWeight.xl};
  margin-bottom: ${({ theme }) => theme.gaps.xl2};
`;

export const ButtonsContainer = styled.div`
  ${flexCenter};
  flex-direction: column;
  max-width: ${({ theme }) => theme.sizes.px400};
  gap: ${({ theme }) => theme.gaps.l};
  margin-bottom: ${({ theme }) => theme.gaps.xl2};
`;

export const TermsText = styled.div`
  margin-bottom: ${({ theme }) => theme.gaps.xl2};
  max-width: ${({ theme }) => theme.sizes.px400};
`;

export const ExtraText = styled.div``;

export const Span = styled.span`
  font-size: ${({ theme }) => theme.fonts.fontSize.s}px;
  color: ${({ theme }) => theme.colors.blue300};
`;

export const Paragraph = styled.span`
  font-size: ${({ theme }) => theme.fonts.fontSize.m}px;
`;

export const LoginLink = styled(Link)`
  color: ${({ theme }) => theme.colors.blue300};
  text-decoration: none;
`;

export const FooterLinksContainer = styled.div`
  ${flexCenter};
  padding: ${({ theme }) => theme.gaps.l} 0;
  gap: ${({ theme }) => theme.gaps.m};
`;

export const FooterLink = styled(Link)`
  font-size: ${({ theme }) => theme.fonts.fontSize.xs}px;
  color: ${({ theme }) => theme.textColor};
  text-decoration: none;
`;
