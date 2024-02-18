import { useEffect, useState } from 'react';
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
import { ITweetProps } from '@/types';
import ThemeToggler from '@/UI/ThemeToggler';

import {
  FeedContainer,
  Header,
  HeaderTitle,
  NoTweets,
  NoTweetsImage,
  TweetsContainer,
} from './styled';
import Tweet from './Tweet';
import { IFeedProps } from './types';

const Feed = ({ profileEmail }: IFeedProps) => {
  const [tweets, setTweets] = useState<ITweetProps[]>([]);

  useEffect(() => {
    const tweetsCollection = collection(firestore, 'tweets');
    let orderedQuery = query(tweetsCollection, orderBy('createdAt', 'desc'));

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
    });

    return () => unsubscribe();
  }, [profileEmail]);

  return (
    <FeedContainer>
      {!profileEmail && (
        <Header>
          <HeaderTitle>Home</HeaderTitle>
          <ThemeToggler />
        </Header>
      )}
      <Textarea />
      <TweetsContainer>
        {tweets.length > 0 ? (
          tweets.map(({ tweetData, id }) => (
            <Tweet key={id} id={id} tweetData={tweetData} />
          ))
        ) : (
          <NoTweets>
            No Tweets yet. When they do, they&apos;ll show up here.
            <NoTweetsImage src={birdImage} alt='bird image for no tweets' />
          </NoTweets>
        )}
      </TweetsContainer>
    </FeedContainer>
  );
};

export default Feed;
