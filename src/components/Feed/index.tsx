import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { collection, getDocs } from 'firebase/firestore';

import { firestore } from '@/db';
import { selectUser } from '@/store/slices/userSlice';

import { FeedContainer } from './styled';
import Tweet from './Tweet';

const Feed = () => {
  const { email } = useSelector(selectUser);
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    const fetchTweets = async () => {
      try {
        const tweetCollection = collection(firestore, 'tweets');
        const snapshot = await getDocs(tweetCollection);
        const tweetData = snapshot.docs.map((doc) => ({
          id: doc.id,
          tweetData: doc.data(),
        }));
        setTweets(tweetData);
      } catch (error) {
        throw new Error(`Error fetching tweets: ${error}`);
      }
    };

    fetchTweets();
  }, []);

  return (
    <FeedContainer>
      {tweets.length > 0 ? (
        tweets.map(({ tweetData, id }) => (
          <Tweet key={id} id={id} tweetData={tweetData} />
        ))
      ) : (
        <div>No tweets!</div>
      )}
    </FeedContainer>
  );
};

export default Feed;
