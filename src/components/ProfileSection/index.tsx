import { useSelector } from 'react-redux';
import avatar from '@assets/avatar-big.png';
import darkBackground from '@assets/dark.webp';
import lightBackground from '@assets/test.webp';
import { selectTheme } from '@store/slices/themeSlice';
import { selectUser } from '@store/slices/userSlice';
import ThemeToggler from '@UI/ThemeToggler';

import {
  Background,
  EditButton,
  FollowContainer,
  FollowNumber,
  FollowText,
  HeaderWrapper,
  ProfileContainer,
  ProfileDescription,
  ProfileEmail,
  ProfileHeader,
  ProfileInfo,
  ProfileLogo,
  ProfileName,
  TweetCount,
  UserName,
} from './styled';

const ProfileSection = () => {
  const { name, email } = useSelector(selectUser);
  const theme = useSelector(selectTheme);

  const imageUrl = theme === 'dark' ? darkBackground : lightBackground;

  return (
    <ProfileContainer>
      <ProfileHeader>
        <HeaderWrapper>
          <UserName>{name}</UserName>
          <TweetCount>123 Tweets</TweetCount>
        </HeaderWrapper>
        <ThemeToggler />
      </ProfileHeader>

      <Background src={imageUrl} alt='background' />

      <ProfileInfo>
        <ProfileLogo src={avatar} alt='user avatar' />
        <EditButton>Edit profile</EditButton>
        <ProfileName>{name}</ProfileName>
        <ProfileEmail>@{email}</ProfileEmail>
        <ProfileDescription>UX&UI designer at @abutechuz</ProfileDescription>

        <FollowContainer>
          <FollowNumber>61</FollowNumber>
          <FollowText>Following</FollowText>
          <FollowNumber>47</FollowNumber>
          <FollowText>Followers</FollowText>
        </FollowContainer>
      </ProfileInfo>
    </ProfileContainer>
  );
};

export default ProfileSection;
