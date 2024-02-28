import styled from 'styled-components';

import { max850 } from '@/theme/style/sizes';

export const HomeWrapper = styled.section`
  display: flex;
  justify-content: center;
  min-height: ${({ theme }) => theme.sizes.vh100};
  max-width: ${({ theme }) => theme.sizes.px1440};
  margin: 0 auto;
  padding: ${({ theme }) => theme.gaps.l} ${({ theme }) => theme.gaps.m};
  background: ${({ theme }) => theme.backgroundColor};
  color: ${({ theme }) => theme.textColor};

  @media (max-width: ${max850}) {
    padding: ${({ theme }) => theme.gaps.m} ${({ theme }) => theme.gaps.xs};
  }
`;

export const MainContent = styled.div``;
