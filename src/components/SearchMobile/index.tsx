import ICONS from '@/constants/icons';

import { SearchIcon, SearchIconWrapper } from './styled';
import { ISearchProps } from './types';

const SearchbarMobile = ({ onClick }: ISearchProps) => {
  return (
    <SearchIconWrapper onClick={onClick}>
      <SearchIcon src={ICONS.search} alt='search mobile icon' />
    </SearchIconWrapper>
  );
};

export default SearchbarMobile;
