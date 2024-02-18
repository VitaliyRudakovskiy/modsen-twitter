import styled from 'styled-components';

export const ProfileWrapper = styled.section`
  display: flex;
  justify-content: center;
  min-height: ${({ theme }) => theme.sizes.vh100};
  max-width: ${({ theme }) => theme.sizes.px1440};
  padding: ${({ theme }) => theme.gaps.l} ${({ theme }) => theme.gaps.m};
  margin: 0 auto;
  background: ${({ theme }) => theme.backgroundColor};
  color: ${({ theme }) => theme.textColor};
`;

export const MainSection = styled.div``;

export const TweetsContainer = styled.div``;
