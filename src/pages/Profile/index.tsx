import ProfileSection from '@components/ProfileSection';
import SearchSidebar from '@components/SearchSidebar';
import Sidebar from '@components/Sidebar';

import { ProfileWrapper } from './styled';

const Profile = () => {
  return (
    <ProfileWrapper>
      <Sidebar />
      <ProfileSection />
      <SearchSidebar />
    </ProfileWrapper>
  );
};

export default Profile;
