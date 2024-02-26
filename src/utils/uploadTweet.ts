import { Dispatch, SetStateAction } from 'react';
import { addDoc, collection } from 'firebase/firestore';

import { firestore } from '@/db';
import { IFile } from '@/types/tweet';

import uploadFile from './uploadFile';

const uploadTweet = async (
  text: string,
  name: string,
  email: string,
  image: IFile,
  userId: string,
  setLoadingState: Dispatch<SetStateAction<boolean>>
) => {
  setLoadingState(true);

  const file = await uploadFile(image, userId);
  const tweet = {
    text,
    name,
    email,
    file,
    createdAt: new Date(),
    likedBy: [],
  };

  try {
    const tweetsCollection = collection(firestore, 'tweets');
    await addDoc(tweetsCollection, tweet);
  } catch (error) {
    throw new Error(`An error occured while uploading tweet: ${error}`);
  } finally {
    setLoadingState(false);
  }
};

export default uploadTweet;
