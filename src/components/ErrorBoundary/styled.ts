import styled from 'styled-components';

import { flexCenter } from '@/theme/style/mixins';

export const ErrorBoundaryWrapper = styled.div`
  ${flexCenter};
  min-height: 100vh;
  flex-direction: column;
  gap: ${({ theme }) => theme.gaps.xl2};
  padding: 0 ${({ theme }) => theme.gaps.l};
  background-color: ${({ theme }) => theme.backgroundColor};
  color: ${({ theme }) => theme.textColor};
  text-align: center;
`;

export const Error = styled.p`
  font-size: ${({ theme }) => theme.fonts.fontSize.xl2}px;
`;

export const ErrorInfoText = styled.span`
  font-size: ${({ theme }) => theme.fonts.fontSize.xl}px;
`;

export const ErrorBoundaryImage = styled.img`
  width: ${({ theme }) => theme.sizes.px230};
`;
