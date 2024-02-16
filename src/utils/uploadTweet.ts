import { addDoc, collection } from 'firebase/firestore';

import { firestore } from '@/db';

const uploadTweet = async (text: string, name: string, email: string) => {
  const tweet = {
    text,
    name,
    email,
    createdAt: new Date(),
    likedBy: [],
  };

  try {
    const tweetsCollection = collection(firestore, 'tweets');
    await addDoc(tweetsCollection, tweet);
  } catch (error) {
    throw new Error(`An error occured while uploading tweet: ${error}`);
  }
};

export default uploadTweet;
