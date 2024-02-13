import { useState } from 'react';
import { useSelector } from 'react-redux';
import avatar from '@assets/avatar-big.png';
import darkBackground from '@assets/dark.webp';
import lightBackground from '@assets/test.webp';
import ProfileModal from '@components/ProfileModal';
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
  ProfileLeftInfo,
  ProfileLogo,
  ProfileName,
  TweetCount,
  UserName,
} from './styled';

const ProfileSection = () => {
  const { name, email } = useSelector(selectUser);
  const theme = useSelector(selectTheme);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const imageUrl = theme === 'dark' ? darkBackground : lightBackground;

  const closeModal = () => setIsModalOpen(false);
  const showModal = () => setIsModalOpen(true);

  return (
    <>
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
          <ProfileLeftInfo>
            <ProfileLogo src={avatar} alt='user avatar' />
            <ProfileName>{name}</ProfileName>
            <ProfileEmail>@{email}</ProfileEmail>
            <ProfileDescription>
              UX&UI designer at @abutechuz
            </ProfileDescription>

            <FollowContainer>
              <FollowNumber>61</FollowNumber>
              <FollowText>Following</FollowText>
              <FollowNumber>47</FollowNumber>
              <FollowText>Followers</FollowText>
            </FollowContainer>
          </ProfileLeftInfo>

          <EditButton onClick={showModal}>Edit profile</EditButton>
        </ProfileInfo>
      </ProfileContainer>

      {isModalOpen && <ProfileModal closeModal={closeModal} />}
    </>
  );
};

export default ProfileSection;
