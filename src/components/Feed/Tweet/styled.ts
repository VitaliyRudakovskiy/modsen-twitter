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
  width: ${({ theme }) => theme.sizes.full};
  flex: 1;
`;

export const Avatar = styled.img`
  @media (max-width: ${({ theme }) => theme.sizes.px850}) {
    position: absolute;
  }
`;

export const TweetFile = styled.img`
  width: ${({ theme }) => theme.sizes.full};
  max-height: ${({ theme }) => theme.sizes.px450};
  border-radius: ${({ theme }) => theme.gaps.s};
  object-fit: contain;

  @media (max-width: ${({ theme }) => theme.sizes.px850}) {
    max-height: ${({ theme }) => theme.sizes.full};
  }
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: ${({ theme }) => theme.gaps.xs};
  max-width: ${({ theme }) => theme.sizes.per95};
  margin-bottom: ${({ theme }) => theme.gaps.s};
  flex-wrap: wrap;

  &:nth-child(4) {
    margin-bottom: 0;
  }

  @media (max-width: ${({ theme }) => theme.sizes.px850}) {
    max-width: ${({ theme }) => theme.sizes.full};

    &:nth-child(1) {
      align-items: flex-start;
      padding: 5px 30px 0 60px;
    }
  }
`;

export const MobileWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: ${({ theme }) => theme.gaps.xs};

  @media (max-width: ${({ theme }) => theme.sizes.px850}) {
    flex-direction: column;
    align-items: flex-start;
    gap: ${({ theme }) => theme.gaps.xs2};
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
