import styled from 'styled-components';

import { max850 } from '@/theme/style/sizes';

export const ProfileWrapper = styled.section`
  display: flex;
  justify-content: center;
  min-height: ${({ theme }) => theme.sizes.vh100};
  max-width: ${({ theme }) => theme.sizes.px1440};
  padding: ${({ theme }) => theme.gaps.l} ${({ theme }) => theme.gaps.m};
  margin: 0 auto;
  background: ${({ theme }) => theme.backgroundColor};
  color: ${({ theme }) => theme.textColor};

  @media (max-width: ${max850}) {
    padding: 0 ${({ theme }) => theme.gaps.xs};
  }
`;

export const MainSection = styled.div``;

export const TweetsContainer = styled.div``;
