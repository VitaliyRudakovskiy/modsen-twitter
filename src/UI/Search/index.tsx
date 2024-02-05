import { useRef } from 'react';
import { useSelector } from 'react-redux';
import ICONS from '@constants/icons';
import { selectTheme } from '@store/slices/themeSlice';

import { SearchContainer, SearchIcon, SearchInput } from './styled';
import { ISearchInputProps } from './types';

const Search = ({
  placeholder = 'Search Twitter',
  value,
  handleChange,
}: ISearchInputProps) => {
  const theme = useSelector(selectTheme);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const focusTextInput = () => {
    inputRef.current?.focus();
  };

  const Icon = theme === 'dark' ? ICONS.searchDark : ICONS.search;

  return (
    <SearchContainer>
      <SearchIcon src={Icon} alt='Search Icon' onClick={focusTextInput} />
      <SearchInput
        ref={inputRef}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
      />
    </SearchContainer>
  );
};

export default Search;
