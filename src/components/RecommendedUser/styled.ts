import styled from 'styled-components';

export const UserContainer = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.gaps.s};
  width: ${({ theme }) => theme.sizes.full};
`;

export const MainContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: ${({ theme }) => theme.sizes.full};
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.gaps.xs3};
  margin-right: ${({ theme }) => theme.gaps.l};
`;

export const UserPhoto = styled.img``;

export const UserName = styled.p`
  font-size: ${({ theme }) => theme.fonts.fontSize.l}px;
  font-weight: ${({ theme }) => theme.fonts.fontWeight.l};
  color: ${({ theme }) => theme.textColor};
`;

export const UserEmail = styled.span`
  color: ${({ theme }) => theme.profileEmailColor};
`;
