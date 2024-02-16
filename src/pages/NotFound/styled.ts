import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { flexCenter } from '@/theme/style/mixins';

export const NotFoundContainer = styled.div`
  ${flexCenter};
  flex-direction: column;
  gap: ${({ theme }) => theme.gaps.xl2};
  min-height: ${({ theme }) => theme.sizes.vh100};
  background: ${({ theme }) => theme.notFoundGradient};
  color: ${({ theme }) => theme.textColor};
`;

export const NotFoundTitle = styled.h2`
  font-size: 180px;
  font-weight: ${({ theme }) => theme.fonts.fontWeight.m};
`;

export const NotFoundSubtitle = styled.h3`
  font-size: ${({ theme }) => theme.fonts.fontSize.xl3}px;
  font-weight: ${({ theme }) => theme.fonts.fontWeight.m};
`;

export const NotFoundText = styled.p`
  font-size: ${({ theme }) => theme.fonts.fontSize.xl}px;
  max-width: ${({ theme }) => theme.sizes.px400};
  text-align: center;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.goBackLink};
`;
