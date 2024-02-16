import Memes from '@/assets/memes.webp';
import RecommendedUser from '@/components/RecommendedUser';
import Search from '@/UI/Search';

import {
  MemesImage,
  RecommendationsTitle,
  SearchSidebarContainer,
  ShowMoreButton,
} from './styled';

const SearchSidebar = () => {
  return (
    <SearchSidebarContainer>
      <Search />
      <MemesImage src={Memes} alt='Memes from twitter' />
      <RecommendationsTitle>You might like</RecommendationsTitle>
      <RecommendedUser />
      <RecommendedUser />
      <RecommendedUser />
      <ShowMoreButton>Show more</ShowMoreButton>
    </SearchSidebarContainer>
  );
};

export default SearchSidebar;
