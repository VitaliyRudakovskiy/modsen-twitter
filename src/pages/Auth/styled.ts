import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { flexCenter } from '@/theme/style/mixins';
import { max1230 } from '@/theme/style/sizes';

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
  gap: ${({ theme }) => theme.gaps.xl};
  flex: 1;
`;

export const AuthContent = styled.div`
  display: flex;
  align-self: center;
  flex-direction: column;
  padding: ${({ theme }) => theme.gaps.l};
  width: ${({ theme }) => theme.sizes.full};

  @media (max-width: ${({ theme }) => theme.sizes.px980}) {
    display: flex;
    align-items: center;
  }
`;

export const TwitterImage = styled.img`
  width: 50%;

  @media (max-width: ${max1230}) {
    width: ${({ theme }) => theme.sizes.px620};
  }

  @media (max-width: ${({ theme }) => theme.sizes.px980}) {
    display: none;
  }
`;

export const TwitterLogo = styled.img`
  width: ${({ theme }) => theme.gaps.xl6};
  margin-bottom: ${({ theme }) => theme.gaps.xl7};

  @media (max-width: ${({ theme }) => theme.sizes.px1040}) {
    width: ${({ theme }) => theme.gaps.xl4};
    margin-bottom: ${({ theme }) => theme.gaps.xl};
  }
`;

export const Title = styled.h1`
  font-size: ${({ theme }) => theme.fonts.fontSize.xl4}px;
  font-weight: ${({ theme }) => theme.fonts.fontWeight.xl};
  margin-bottom: ${({ theme }) => theme.gaps.xl5};

  @media (max-width: ${({ theme }) => theme.sizes.px1440}) {
    font-size: ${({ theme }) => theme.fonts.fontSize.xl3}px;
  }

  @media (max-width: ${({ theme }) => theme.sizes.px1040}) {
    text-align: center;
  }
`;

export const Subtitle = styled.h2`
  font-size: ${({ theme }) => theme.fonts.fontSize.xl3}px;
  font-weight: ${({ theme }) => theme.fonts.fontWeight.xl};
  margin-bottom: ${({ theme }) => theme.gaps.xl2};

  @media (max-width: ${({ theme }) => theme.sizes.px1440}) {
    font-size: ${({ theme }) => theme.fonts.fontSize.xl2}px;
  }
`;

export const ButtonsContainer = styled.div`
  ${flexCenter};
  flex-direction: column;
  max-width: ${({ theme }) => theme.sizes.px400};
  gap: ${({ theme }) => theme.gaps.l};
  margin-bottom: ${({ theme }) => theme.gaps.xl2};
  width: ${({ theme }) => theme.sizes.full};
`;

export const TermsText = styled.div`
  margin-bottom: ${({ theme }) => theme.gaps.xl2};
  max-width: ${({ theme }) => theme.sizes.px400};

  @media (max-width: ${({ theme }) => theme.sizes.px1040}) {
    text-align: center;
  }
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
  flex-wrap: wrap;
  padding: ${({ theme }) => theme.gaps.l};
  gap: ${({ theme }) => theme.gaps.m};
`;

export const FooterLink = styled(Link)`
  font-size: ${({ theme }) => theme.fonts.fontSize.xs}px;
  color: ${({ theme }) => theme.textColor};
  text-decoration: none;
`;
