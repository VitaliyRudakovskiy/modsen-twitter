import styled from 'styled-components';

export const TweetContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: ${({ theme }) => theme.sizes.full};
  padding: ${({ theme }) => theme.gaps.m};
  gap: ${({ theme }) => theme.gaps.m};
`;

export const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  flex: 1;
`;

export const Avatar = styled.img``;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: ${({ theme }) => theme.gaps.xs};
  max-width: ${({ theme }) => theme.sizes.per95};
  margin-bottom: ${({ theme }) => theme.gaps.s};

  &:nth-child(4) {
    margin-bottom: 0;
  }
`;

export const Delete = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  width: ${({ theme }) => theme.gaps.l};
  cursor: pointer;
`;

export const UserName = styled.h3`
  font-family: ${({ theme }) => theme.fonts.fontFamily.robotoSerif};
  font-size: ${({ theme }) => theme.fonts.fontSize.l}px;
`;

export const UserEmail = styled.p`
  color: ${({ theme }) => theme.profileEmailColor};
`;

export const Date = styled.p`
  color: ${({ theme }) => theme.profileEmailColor};
`;

export const LikesContainer = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.gaps.s};
  cursor: pointer;
`;

export const LikeImage = styled.img``;

export const TweetFile = styled.img`
  width: ${({ theme }) => theme.sizes.full};
  max-height: ${({ theme }) => theme.sizes.px400};
  border-radius: ${({ theme }) => theme.gaps.s};
  object-fit: contain;
`;
