import Feed from '@/components/Feed';
import SearchSidebar from '@/components/SearchSidebar';
import Sidebar from '@/components/Sidebar';

import { HomeWrapper } from './styled';

const Home = () => {
  return (
    <HomeWrapper>
      <Sidebar />
      <Feed />
      <SearchSidebar />
    </HomeWrapper>
  );
};

export default Home;
