import styled from 'styled-components';

export const ProfileWrapper = styled.section`
  display: flex;
  justify-content: center;
  min-height: ${({ theme }) => theme.sizes.vh100};
  max-width: ${({ theme }) => theme.sizes.px1440};
  margin: 0 auto;
  padding: ${({ theme }) => theme.gaps.l} ${({ theme }) => theme.gaps.m};
  background: ${({ theme }) => theme.backgroundColor};
  color: ${({ theme }) => theme.textColor};
`;
