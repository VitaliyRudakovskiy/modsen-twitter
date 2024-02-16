import ProfileSection from '@/components/ProfileSection';
import SearchSidebar from '@/components/SearchSidebar';
import Sidebar from '@/components/Sidebar';
import Textarea from '@/components/Textarea';

import { MainSection, ProfileWrapper } from './styled';

const Profile = () => {
  return (
    <ProfileWrapper>
      <Sidebar />
      <MainSection>
        <ProfileSection />
        <Textarea />
      </MainSection>
      <SearchSidebar />
    </ProfileWrapper>
  );
};

export default Profile;
