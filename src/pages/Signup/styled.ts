import styled from 'styled-components';

import { flexCenter } from '@/theme/style/mixins';

export const SignupContainer = styled.section`
  ${flexCenter};
  flex-direction: column;
  gap: ${({ theme }) => theme.gaps.xl3};
  min-height: ${({ theme }) => theme.sizes.vh100};
  background-color: ${({ theme }) => theme.backgroundColor};
  color: ${({ theme }) => theme.textColor};
  padding: ${({ theme }) => theme.gaps.xl} 0;
`;

export const TwitterLogo = styled.img`
  width: ${({ theme }) => theme.gaps.xl6};
  margin: 0 auto;
`;
