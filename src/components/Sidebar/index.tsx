import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import AvatarInfo from '@/assets/avatar.png';
import ButtonVariants from '@/constants/buttonVariants';
import ICONS from '@/constants/icons';
import SidebarLinks from '@/constants/sidebarLinks';
import { logout } from '@/db/index';
import ROUTES from '@/routes';
import { selectUser, setCurrentUser } from '@/store/slices/userSlice';
import Button from '@/UI/Button';

import TweetModal from '../TweetModal';

import {
  Avatar,
  ProfileEmail,
  ProfileInfo,
  ProfileName,
  ProfileWrapper,
  SidebarLink,
  SidebarLinkImage,
  SidebarLinksContainer,
  SidebarWrapper,
  TwitterIcon,
} from './styled';

const Sidebar = () => {
  const { name, email } = useSelector(selectUser);
  const [isTweetModalOpen, setIsTweetModalOpen] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = async () => {
    await logout();
    dispatch(
      setCurrentUser({
        id: '',
        email: '',
        birthDate: '',
        phone: '',
        name: '',
        token: null,
      })
    );
    navigate(ROUTES.AUTH);
  };

  const closeModal = () => setIsTweetModalOpen(false);
  const showModal = () => setIsTweetModalOpen(true);

  return (
    <>
      <SidebarWrapper>
        <TwitterIcon src={ICONS.twitter} alt='twitter' />
        <SidebarLinksContainer>
          {SidebarLinks.map(({ title, path, icon }) => (
            <SidebarLink
              className={({ isActive }) => (isActive ? 'active' : '')}
              key={path}
              to={path}
            >
              <SidebarLinkImage src={icon} alt='sidebar link icon' />
              {title}
            </SidebarLink>
          ))}
        </SidebarLinksContainer>

        <Button
          variant={ButtonVariants.primary}
          width='220px'
          onClick={showModal}
        >
          Tweet
        </Button>

        <ProfileWrapper>
          <Avatar src={AvatarInfo} alt='Avatar' />
          <ProfileInfo>
            <ProfileName>{name}</ProfileName>
            <ProfileEmail>@{email}</ProfileEmail>
          </ProfileInfo>
        </ProfileWrapper>

        <Button
          variant={ButtonVariants.logout}
          width='220px'
          onClick={handleLogout}
        >
          Log out
        </Button>
      </SidebarWrapper>

      {isTweetModalOpen && <TweetModal closeModal={closeModal} />}
    </>
  );
};

export default Sidebar;
