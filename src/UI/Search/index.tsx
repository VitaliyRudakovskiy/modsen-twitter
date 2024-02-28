import { useRef } from 'react';
import { useSelector } from 'react-redux';

import defineSearchIcon from '@/helpers/defineSearchIcon';
import { selectTheme } from '@/store/slices/themeSlice';

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

  return (
    <SearchContainer>
      <SearchIcon
        src={defineSearchIcon(theme)}
        alt='Search Icon'
        onClick={focusTextInput}
      />
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
