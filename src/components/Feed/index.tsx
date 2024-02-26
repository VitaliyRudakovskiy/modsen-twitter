import { memo, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import {
  collection,
  onSnapshot,
  orderBy,
  query,
  where,
} from 'firebase/firestore';

import birdImage from '@/assets/error-image.webp';
import Textarea from '@/components/Textarea';
import { firestore } from '@/db';
import { selectSearch } from '@/store/slices/searchSlice';
import { setCount } from '@/store/slices/tweetsSlice';
import { ITweetProps } from '@/types/tweet';
import ThemeToggler from '@/UI/ThemeToggler';

import Loader from '../Loader';

import * as Styled from './styled';
import Tweet from './Tweet';
import { IFeedProps } from './types';

const Feed = memo(({ profileEmail }: IFeedProps) => {
  const [tweets, setTweets] = useState<ITweetProps[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const searchInput = useSelector(selectSearch);

  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    setIsLoading(true);
    const tweetsCollection = collection(firestore, 'tweets');
    let orderedQuery = query(tweetsCollection, orderBy('createdAt', 'desc'));

    if (searchInput && location.pathname === '/') {
      orderedQuery = query(
        tweetsCollection,
        where('text', '>=', searchInput),
        where('text', '<=', `${searchInput}\uf8ff`)
      );
    }

    if (profileEmail) {
      orderedQuery = query(
        tweetsCollection,
        where('email', '==', profileEmail),
        orderBy('createdAt', 'desc')
      );
    }

    const unsubscribe = onSnapshot(orderedQuery, (snapshot) => {
      const tweetData = snapshot.docs.map((doc) => ({
        id: doc.id,
        tweetData: doc.data(),
      })) as ITweetProps[];
      setTweets(tweetData);
      dispatch(setCount(tweetData.length));
      setIsLoading(false);
    });

    return () => unsubscribe();
  }, [profileEmail, dispatch, searchInput, location]);

  return (
    <Styled.FeedContainer data-cy='feed'>
      {isLoading ? (
        <Styled.LoaderContainer>
          <Loader />
        </Styled.LoaderContainer>
      ) : (
        <>
          {!profileEmail && (
            <Styled.Header>
              <Styled.HeaderTitle>Home</Styled.HeaderTitle>
              <ThemeToggler />
            </Styled.Header>
          )}
          <Textarea />
          <Styled.TweetsContainer>
            {tweets.length > 0 ? (
              tweets.map(({ tweetData, id }) => (
                <Tweet key={id} id={id} tweetData={tweetData} />
              ))
            ) : (
              <Styled.NoTweets>
                No Tweets yet. When they do, they&apos;ll show up here.
                <Styled.NoTweetsImage
                  src={birdImage}
                  alt='bird image for no tweets'
                />
              </Styled.NoTweets>
            )}
          </Styled.TweetsContainer>
        </>
      )}
    </Styled.FeedContainer>
  );
});

export default Feed;
