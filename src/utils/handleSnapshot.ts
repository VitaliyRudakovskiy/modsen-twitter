import { Dispatch, SetStateAction } from 'react';
import { QuerySnapshot } from 'firebase/firestore';

import { DispatchRTK } from '@/store';
import { setCount } from '@/store/slices/tweetsSlice';
import { ITweetProps } from '@/types/tweet';

const handleSnapshot = (
  snapshot: QuerySnapshot,
  setTweets: Dispatch<SetStateAction<ITweetProps[]>>,
  dispatch: DispatchRTK,
  setIsLoading: Dispatch<SetStateAction<boolean>>
) => {
  const tweetData = snapshot.docs.map((doc) => ({
    id: doc.id,
    tweetData: doc.data(),
  })) as ITweetProps[];

  setTweets(tweetData);
  dispatch(setCount(tweetData.length));
  setIsLoading(false);
};

export default handleSnapshot;
