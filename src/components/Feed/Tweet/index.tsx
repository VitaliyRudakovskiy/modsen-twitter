import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import {
  arrayRemove,
  arrayUnion,
  collection,
  deleteDoc,
  doc,
  updateDoc,
} from 'firebase/firestore';
import { getDownloadURL, ref } from 'firebase/storage';

import avatar from '@/assets/avatar.png';
import ICONS from '@/constants/icons';
import { firestore, storage } from '@/db';
import convertTimestamp from '@/helpers/convertTimestamp';
import defineLikeIcon from '@/helpers/defineLikeIcon';
import isLikedByUser from '@/helpers/isLikedByUser';
import { selectUser } from '@/store/slices/userSlice';
import { ITweetProps } from '@/types';

import {
  Avatar,
  Date,
  Delete,
  LikeImage,
  LikesContainer,
  MainContent,
  MobileWrapper,
  TweetContainer,
  TweetFile,
  UserEmail,
  UserName,
  Wrapper,
} from './styled';

const Tweet = ({ tweetData, id }: ITweetProps) => {
  const { text, email, name, file, likedBy, createdAt } = tweetData;
  const { id: userId, email: userEmail } = useSelector(selectUser);

  const [isLiked, setIsLiked] = useState(() => isLikedByUser(likedBy, userId));
  const [fileURL, setFileURL] = useState<string>('');

  useEffect(() => {
    const getFileUrl = async () => {
      if (file) {
        const url = await getDownloadURL(ref(storage, file));
        setFileURL(url);
      }
    };

    getFileUrl();
  }, [file]);

  const handleDeleteTweet = async () => {
    const tweetsCollection = collection(firestore, 'tweets');
    const tweetRef = doc(tweetsCollection, id);

    try {
      await deleteDoc(tweetRef);
    } catch (error) {
      throw new Error(`Error occured while deleting tweet: ${error}`);
    }
  };

  const handleLikeTweet = async () => {
    const tweetsCollection = collection(firestore, 'tweets');
    const tweetRef = doc(tweetsCollection, id);

    try {
      if (isLiked) {
        await updateDoc(tweetRef, {
          likedBy: arrayRemove(userId),
        });
      } else {
        await updateDoc(tweetRef, {
          likedBy: arrayUnion(userId),
        });
      }

      setIsLiked(!isLiked);
    } catch (error) {
      throw new Error(`Error occured while liking tweet: ${error}`);
    }
  };

  const LikeIcon = defineLikeIcon(isLiked);

  return (
    <TweetContainer>
      <Avatar src={avatar} alt='user photo' />
      <MainContent>
        <Wrapper>
          <MobileWrapper>
            <UserName>{name}</UserName>
            <UserEmail>@{email.split('@')[0]}</UserEmail>
          </MobileWrapper>
          <Date>{convertTimestamp(createdAt)}</Date>
        </Wrapper>
        <Wrapper>{text}</Wrapper>
        <Wrapper>
          {file && <TweetFile src={fileURL} alt='tweet file' />}
        </Wrapper>
        <Wrapper>
          <LikesContainer onClick={handleLikeTweet}>
            <LikeImage src={LikeIcon} alt='like heart' />
            <p>{likedBy.length}</p>
          </LikesContainer>
        </Wrapper>

        {userEmail === email && (
          <Delete
            src={ICONS.delete}
            alt='delete button'
            onClick={handleDeleteTweet}
          />
        )}
      </MainContent>
    </TweetContainer>
  );
};

export default Tweet;
