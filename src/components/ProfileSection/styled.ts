import { flexBetween } from '@theme/style/mixins';
import styled from 'styled-components';

export const ProfileContainer = styled.div`
  flex: 1;
`;

export const ProfileHeader = styled.div`
  ${flexBetween};
`;

export const HeaderWrapper = styled.div``;

export const UserName = styled.h3``;

export const TweetCount = styled.p``;

export const Background = styled.img`
  width: ${({ theme }) => theme.sizes.full};
`;

export const ProfileInfo = styled.div``;

export const EditButton = styled.button``;

export const ProfileLogo = styled.img`
  width: ${({ theme }) => theme.sizes.px150};
  height: ${({ theme }) => theme.sizes.px150};
`;

export const ProfileName = styled.h2``;

export const ProfileEmail = styled.h2``;

export const ProfileDescription = styled.p``;

export const FollowContainer = styled.div``;

export const FollowNumber = styled.span``;

export const FollowText = styled.span``;
