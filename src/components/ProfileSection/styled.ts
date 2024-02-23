import styled from 'styled-components';

import { flexBetween, flexCenter } from '@/theme/style/mixins';

export const ProfileContainer = styled.div`
  flex: 1;
  padding: 0 ${({ theme }) => theme.gaps.s};
  margin-bottom: ${({ theme }) => theme.gaps.xl2};
`;

export const ProfileHeader = styled.div`
  ${flexBetween};
  padding: ${({ theme }) => theme.gaps.s};

  @media (max-width: ${({ theme }) => theme.sizes.px1230}) {
    padding-right: ${({ theme }) => theme.gaps.xl6};
  }

  @media (max-width: ${({ theme }) => theme.sizes.px850}) {
    padding-left: ${({ theme }) => theme.gaps.xl6};
  }
`;

export const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.gaps.xs2};
`;

export const UserName = styled.h3`
  font-family: ${({ theme }) => theme.fonts.fontFamily.robotoSerif};
  font-size: ${({ theme }) => theme.fonts.fontSize.xl}px;
`;

export const TweetCount = styled.p`
  color: ${({ theme }) => theme.profileEmailColor};
`;

export const Background = styled.img`
  width: ${({ theme }) => theme.sizes.full};
`;

export const ProfileInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: start;
  padding: 0 ${({ theme }) => theme.gaps.s};
`;

export const ProfileLeftInfo = styled.div`
  margin-top: -${({ theme }) => theme.gaps.xl7};
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const EditButton = styled.button`
  ${flexCenter};
  gap: ${({ theme }) => theme.gaps.xs2};
  background: transparent;
  color: ${({ theme }) => theme.textColor};
  border: 1px solid ${({ theme }) => theme.colors.gray300};
  border-radius: ${({ theme }) => theme.gaps.xl6};
  font-size: ${({ theme }) => theme.fonts.fontSize.m}px;
  font-weight: ${({ theme }) => theme.fonts.fontWeight.m};
  margin-top: ${({ theme }) => theme.gaps.s};
  padding: ${({ theme }) => theme.gaps.s};
  cursor: pointer;
`;

export const ProfileLogo = styled.img`
  width: ${({ theme }) => theme.sizes.px150};
  height: ${({ theme }) => theme.sizes.px150};
`;

export const ProfileName = styled.h2`
  font-family: ${({ theme }) => theme.fonts.fontFamily.robotoSerif};
  font-size: ${({ theme }) => theme.fonts.fontSize.xl2}px;
  margin-bottom: ${({ theme }) => theme.gaps.xs2};
`;

export const ProfileEmail = styled.p`
  color: ${({ theme }) => theme.profileEmailColor};
  margin-bottom: ${({ theme }) => theme.gaps.m};
`;

export const ProfileDescription = styled.p`
  margin-bottom: ${({ theme }) => theme.gaps.xl3};
`;

export const FollowContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const FollowNumber = styled.span`
  font-family: ${({ theme }) => theme.fonts.fontFamily.robotoSerif};
  font-size: ${({ theme }) => theme.fonts.fontSize.l}px;
  margin-right: ${({ theme }) => theme.gaps.xs3};
`;

export const FollowText = styled.span`
  color: ${({ theme }) => theme.profileEmailColor};

  &:nth-child(2) {
    margin-right: ${({ theme }) => theme.gaps.l};
  }
`;
