import { useState } from 'react';
import { useSelector } from 'react-redux';

import avatar from '@/assets/images/avatar-big.png';
import PasswordModal from '@/components/PasswordModal';
import ProfileModal from '@/components/ProfileModal';
import defineProfileBackground from '@/helpers/defineProfileBackground';
import { selectTheme } from '@/store/slices/themeSlice';
import { selectCount } from '@/store/slices/tweetsSlice';
import { selectUser } from '@/store/slices/userSlice';
import ThemeToggler from '@/UI/ThemeToggler';

import * as Styled from './styled';

const ProfileSection = () => {
  const { name, email } = useSelector(selectUser);
  const userName = `@${email.split('@')[0]}`;
  const tweetsCount = useSelector(selectCount);
  const theme = useSelector(selectTheme);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isPasswordModalOpen, setIsPasswordModalOpen] =
    useState<boolean>(false);

  const closeModal = () => setIsModalOpen(false);
  const showModal = () => setIsModalOpen(true);

  const closePasswordModal = () => setIsPasswordModalOpen(false);
  const showPasswordModal = () => setIsPasswordModalOpen(true);

  return (
    <>
      <Styled.ProfileContainer>
        <Styled.ProfileHeader>
          <Styled.HeaderWrapper>
            <Styled.UserName>{name}</Styled.UserName>
            <Styled.TweetCount>{tweetsCount} Tweets</Styled.TweetCount>
          </Styled.HeaderWrapper>
          <ThemeToggler />
        </Styled.ProfileHeader>

        <Styled.Background
          src={defineProfileBackground(theme)}
          alt='background'
          data-cy='profile-image'
        />

        <Styled.ProfileInfo>
          <Styled.ProfileLeftInfo>
            <Styled.ProfileLogo
              src={avatar}
              alt='user avatar'
              data-cy='profile-avatar'
            />
            <Styled.ProfileName data-cy='profile-name'>
              {name}
            </Styled.ProfileName>
            <Styled.ProfileEmail data-cy='profile-email'>
              {userName}
            </Styled.ProfileEmail>
            <Styled.ProfileDescription data-cy='profile-description'>
              UX&UI designer at @abutechuz
            </Styled.ProfileDescription>

            <Styled.FollowContainer data-cy='profile-follow-container'>
              <Styled.FollowNumber>61</Styled.FollowNumber>
              <Styled.FollowText>Following</Styled.FollowText>
              <Styled.FollowNumber>47</Styled.FollowNumber>
              <Styled.FollowText>Followers</Styled.FollowText>
            </Styled.FollowContainer>
          </Styled.ProfileLeftInfo>

          <Styled.ButtonsContainer>
            <Styled.EditButton
              data-cy='profile-edit-button'
              onClick={showModal}
            >
              Edit profile
            </Styled.EditButton>
            <Styled.EditButton
              data-cy='profile-edit-password'
              onClick={showPasswordModal}
            >
              Change password
            </Styled.EditButton>
          </Styled.ButtonsContainer>
        </Styled.ProfileInfo>
      </Styled.ProfileContainer>

      {isModalOpen && <ProfileModal closeModal={closeModal} />}
      {isPasswordModalOpen && <PasswordModal closeModal={closePasswordModal} />}
    </>
  );
};

export default ProfileSection;
