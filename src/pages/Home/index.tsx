import Feed from '@/components/Feed';
import SearchSidebar from '@/components/SearchSidebar';
import Sidebar from '@/components/Sidebar';

import { HomeWrapper, MainContent } from './styled';

const Home = () => {
  return (
    <HomeWrapper>
      <Sidebar />
      <MainContent>
        <Feed />
      </MainContent>
      <SearchSidebar />
    </HomeWrapper>
  );
};

export default Home;
