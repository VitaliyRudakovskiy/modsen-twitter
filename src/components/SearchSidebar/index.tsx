import { ChangeEvent, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { collection, getDocs, query, where } from 'firebase/firestore';

import Memes from '@/assets/memes.webp';
import RecommendedUser from '@/components/RecommendedUser';
import { firestore } from '@/db';
import { selectSearch, setSearchText } from '@/store/slices/searchSlice';
import { ISearchedUser, ITweetData } from '@/types';
import Search from '@/UI/Search';

import SearchbarMobile from '../SearchMobile';

import {
  MemesImage,
  Overlay,
  RecommendationsTitle,
  SearchSidebarContainer,
  ShowMoreLessButton,
} from './styled';

const SearchSidebar = () => {
  const inputValue = useSelector(selectSearch);
  const [items, setItems] = useState<ITweetData[] | ISearchedUser[]>([]);
  const [visibleItems, setVisibleItems] = useState(3);
  const [showMore, setShowMore] = useState<boolean>(true);
  const [isSearchbarOpen, setIsSearchbarOpen] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      if (!inputValue) {
        const dataQuery = query(collection(firestore, 'users'));

        try {
          const snapshot = await getDocs(dataQuery);
          const newItems = snapshot.docs.map(
            (doc) => doc.data() as ISearchedUser
          );
          setItems(newItems);
        } catch (error) {
          throw new Error(`Error occured while fetching data: ${error}`);
        }
      } else {
        const dataQuery = query(
          collection(firestore, 'users'),
          where('email', '>=', inputValue),
          where('email', '<=', `${inputValue}\uf8ff`)
        );

        try {
          const snapshot = await getDocs(dataQuery);
          const newItems = snapshot.docs.map(
            (doc) => doc.data() as ISearchedUser
          );
          setItems(newItems);
        } catch (error) {
          throw new Error(`Error occured while fetching data: ${error}`);
        }
      }
    };
    fetchData();
  }, [inputValue]);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchText(e.target.value));
  };

  const handleShowMore = () => {
    if (items.length - visibleItems >= 3) {
      setVisibleItems(visibleItems + 3);
      setShowMore(true);
    } else {
      setVisibleItems(items.length);
      setShowMore(false);
    }
  };

  const handleShowLess = () => {
    setVisibleItems(3);
    setShowMore(true);
  };

  const closeSearchbar = () => setIsSearchbarOpen(false);

  const toggleSearchbar = () => {
    setIsSearchbarOpen((prevState) => !prevState);
  };

  return (
    <>
      {isSearchbarOpen && <Overlay onClick={closeSearchbar} />}

      <SearchSidebarContainer $isOpen={isSearchbarOpen} data-cy='searchbar'>
        <Search value={inputValue} handleChange={handleInputChange} />
        <MemesImage src={Memes} alt='Memes from twitter' />
        <RecommendationsTitle>
          {inputValue ? 'Search results' : 'You might like'}
        </RecommendationsTitle>
        {items.slice(0, visibleItems).map(({ name, email }) => (
          <RecommendedUser key={email} name={name} email={email} />
        ))}
        {showMore && items?.length > 3 && (
          <ShowMoreLessButton onClick={handleShowMore}>
            Show more
          </ShowMoreLessButton>
        )}
        {!showMore && (
          <ShowMoreLessButton onClick={handleShowLess}>
            Show less
          </ShowMoreLessButton>
        )}
      </SearchSidebarContainer>

      <SearchbarMobile onClick={toggleSearchbar} />
    </>
  );
};

export default SearchSidebar;
