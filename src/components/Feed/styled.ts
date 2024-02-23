import styled from 'styled-components';

import { flexBetween, flexCenter, flexColumnStart } from '@/theme/style/mixins';

export const FeedContainer = styled.section`
  ${flexColumnStart};
  flex: 1;
`;

export const Header = styled.div`
  ${flexBetween};
  width: ${({ theme }) => theme.sizes.full};
  padding: ${({ theme }) => theme.gaps.m};

  @media (max-width: ${({ theme }) => theme.sizes.px1230}) {
    padding-right: ${({ theme }) => theme.gaps.xl6};
  }

  @media (max-width: ${({ theme }) => theme.sizes.px850}) {
    padding: 0 ${({ theme }) => theme.gaps.xl7};
  }
`;

export const HeaderTitle = styled.h2`
  font-family: ${({ theme }) => theme.fonts.fontFamily.robotoSerif};
`;

export const TweetsContainer = styled.div`
  width: ${({ theme }) => theme.sizes.full};
`;

export const NoTweets = styled.div`
  ${flexCenter};
  flex-direction: column;
  font-size: ${({ theme }) => theme.fonts.fontSize.xl}px;
  gap: ${({ theme }) => theme.gaps.xl2};
`;

export const NoTweetsImage = styled.img`
  width: ${({ theme }) => theme.sizes.px150};
`;

export const LoaderContainer = styled.div`
  ${flexCenter};
  height: ${({ theme }) => theme.sizes.full};
  width: ${({ theme }) => theme.sizes.full};
`;
