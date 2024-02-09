import AvatarInfo from '@assets/avatar.png';
import ButtonVariants from '@constants/buttonVariants';
import ICONS from '@constants/icons';
import SidebarLinks from '@constants/sidebarLinks';
import Button from '@UI/Button';

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
  return (
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
      <Button variant={ButtonVariants.primary} width='230px'>
        Tweet
      </Button>

      <ProfileWrapper>
        <Avatar src={AvatarInfo} alt='Avatar' />
        <ProfileInfo>
          <ProfileName>Vitaliy</ProfileName>
          <ProfileEmail>vitalikrud03@gmail.com</ProfileEmail>
        </ProfileInfo>
      </ProfileWrapper>

      <Button variant={ButtonVariants.logout} width='230px'>
        Log out
      </Button>
    </SidebarWrapper>
  );
};

export default Sidebar;
