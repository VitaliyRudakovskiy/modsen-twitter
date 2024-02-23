import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import AvatarInfo from '@/assets/avatar.png';
import ButtonVariants from '@/constants/buttonVariants';
import ICONS from '@/constants/icons';
import SidebarLinks from '@/constants/sidebarLinks';
import { logout } from '@/db/index';
import ROUTES from '@/routes';
import { selectTheme } from '@/store/slices/themeSlice';
import { selectUser, setCurrentUser } from '@/store/slices/userSlice';
import Button from '@/UI/Button';

import Burger from '../Burger';
import TweetModal from '../TweetModal';

import {
  Avatar,
  Overlay,
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
  const theme = useSelector(selectTheme);
  const [isTweetModalOpen, setIsTweetModalOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

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

  const closeSidebar = () => setIsSidebarOpen(false);

  const toggleSidebar = () => {
    setIsSidebarOpen((prevState) => !prevState);
  };

  return (
    <>
      {isSidebarOpen && <Overlay onClick={closeSidebar} />}
      <SidebarWrapper
        $isOpen={isSidebarOpen}
        data-cy='sidebar'
        onClick={closeSidebar}
      >
        <TwitterIcon src={ICONS.twitter} alt='twitter' />
        <SidebarLinksContainer>
          {SidebarLinks.map(({ title, path, icon, iconDark }) => (
            <SidebarLink
              className={({ isActive }) => (isActive ? 'active' : '')}
              key={path}
              to={path}
              data-cy={`sidebar-${title}`}
            >
              <SidebarLinkImage
                src={theme === 'dark' ? iconDark : icon}
                alt='sidebar link icon'
              />
              {title}
            </SidebarLink>
          ))}
        </SidebarLinksContainer>

        <Button
          dataCy='sidebar-tweet-button'
          variant={ButtonVariants.primary}
          onClick={showModal}
        >
          Tweet
        </Button>

        <ProfileWrapper data-cy='sidebar-profile-wrapper'>
          <Avatar src={AvatarInfo} alt='Avatar' />
          <ProfileInfo>
            <ProfileName>{name}</ProfileName>
            <ProfileEmail>@{email.split('@')[0]}</ProfileEmail>
          </ProfileInfo>
        </ProfileWrapper>

        <Button
          dataCy='sidebar-logout-button'
          variant={ButtonVariants.logout}
          onClick={handleLogout}
        >
          Log out
        </Button>
      </SidebarWrapper>

      <Burger isOpen={isSidebarOpen} onClick={toggleSidebar} />

      {isTweetModalOpen && <TweetModal closeModal={closeModal} />}
    </>
  );
};

export default Sidebar;
