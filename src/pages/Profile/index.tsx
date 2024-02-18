import { useSelector } from 'react-redux';

import Feed from '@/components/Feed';
import ProfileSection from '@/components/ProfileSection';
import SearchSidebar from '@/components/SearchSidebar';
import Sidebar from '@/components/Sidebar';
import { selectUser } from '@/store/slices/userSlice';

import { MainSection, ProfileWrapper } from './styled';

const Profile = () => {
  const { email } = useSelector(selectUser);

  return (
    <ProfileWrapper>
      <Sidebar />
      <MainSection>
        <ProfileSection />
        <Feed profileEmail={email} />
      </MainSection>
      <SearchSidebar />
    </ProfileWrapper>
  );
};

export default Profile;
