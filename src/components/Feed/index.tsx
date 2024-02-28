import { memo, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { onSnapshot } from 'firebase/firestore';

import birdImage from '@/assets/images/error-image.webp';
import Textarea from '@/components/Textarea';
import { selectSearch } from '@/store/slices/searchSlice';
import { ITweetProps } from '@/types/tweet';
import ThemeToggler from '@/UI/ThemeToggler';
import createQuery from '@/utils/createQuery';
import handleSnapshot from '@/utils/handleSnapshot';

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
    const orderedQuery = createQuery(searchInput, location, profileEmail);
    const unsubscribe = onSnapshot(orderedQuery, (snapshot) =>
      handleSnapshot(snapshot, setTweets, dispatch, setIsLoading)
    );

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
