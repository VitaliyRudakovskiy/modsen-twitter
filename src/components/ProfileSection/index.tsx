import { useState } from 'react';
import { useSelector } from 'react-redux';

import avatar from '@/assets/avatar-big.png';
import darkBackground from '@/assets/dark.webp';
import lightBackground from '@/assets/light.webp';
import PasswordModal from '@/components/PasswordModal';
import ProfileModal from '@/components/ProfileModal';
import { selectTheme } from '@/store/slices/themeSlice';
import { selectCount } from '@/store/slices/tweetsSlice';
import { selectUser } from '@/store/slices/userSlice';
import ThemeToggler from '@/UI/ThemeToggler';

import {
  Background,
  ButtonsContainer,
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
  const tweetsCount = useSelector(selectCount);
  const theme = useSelector(selectTheme);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isPasswordModalOpen, setIsPasswordModalOpen] =
    useState<boolean>(false);

  const imageUrl = theme === 'dark' ? darkBackground : lightBackground;

  const closeModal = () => setIsModalOpen(false);
  const showModal = () => setIsModalOpen(true);

  const closePasswordModal = () => setIsPasswordModalOpen(false);
  const showPasswordModal = () => setIsPasswordModalOpen(true);

  return (
    <>
      <ProfileContainer>
        <ProfileHeader>
          <HeaderWrapper>
            <UserName>{name}</UserName>
            <TweetCount>{tweetsCount} Tweets</TweetCount>
          </HeaderWrapper>
          <ThemeToggler />
        </ProfileHeader>

        <Background src={imageUrl} alt='background' data-cy='profile-image' />

        <ProfileInfo>
          <ProfileLeftInfo>
            <ProfileLogo
              src={avatar}
              alt='user avatar'
              data-cy='profile-avatar'
            />
            <ProfileName data-cy='profile-name'>{name}</ProfileName>
            <ProfileEmail data-cy='profile-email'>
              @{email.split('@')[0]}
            </ProfileEmail>
            <ProfileDescription data-cy='profile-description'>
              UX&UI designer at @abutechuz
            </ProfileDescription>

            <FollowContainer data-cy='profile-follow-container'>
              <FollowNumber>61</FollowNumber>
              <FollowText>Following</FollowText>
              <FollowNumber>47</FollowNumber>
              <FollowText>Followers</FollowText>
            </FollowContainer>
          </ProfileLeftInfo>

          <ButtonsContainer>
            <EditButton data-cy='profile-edit-button' onClick={showModal}>
              Edit profile
            </EditButton>
            <EditButton
              data-cy='profile-edit-password'
              onClick={showPasswordModal}
            >
              Change password
            </EditButton>
          </ButtonsContainer>
        </ProfileInfo>
      </ProfileContainer>

      {isModalOpen && <ProfileModal closeModal={closeModal} />}
      {isPasswordModalOpen && <PasswordModal closeModal={closePasswordModal} />}
    </>
  );
};

export default ProfileSection;
