import { memo, useState } from 'react';
import { useSelector } from 'react-redux';
import {
  arrayRemove,
  arrayUnion,
  collection,
  deleteDoc,
  doc,
  updateDoc,
} from 'firebase/firestore';

import avatar from '@/assets/images/avatar.png';
import ICONS from '@/constants/icons';
import { firestore } from '@/db';
import convertTimestamp from '@/helpers/convertTimestamp';
import defineLikeIcon from '@/helpers/defineLikeIcon';
import isLikedByUser from '@/helpers/isLikedByUser';
import useFileUrl from '@/hooks/useFileUrl';
import { selectTheme } from '@/store/slices/themeSlice';
import { selectUser } from '@/store/slices/userSlice';
import { ITweetProps } from '@/types/tweet';

import * as Styled from './styled';

const Tweet = memo(({ tweetData, id }: ITweetProps) => {
  const { text, email, name, file, likedBy, createdAt } = tweetData;
  const { id: userId, email: userEmail } = useSelector(selectUser);
  const theme = useSelector(selectTheme);
  const fileURL = useFileUrl(file);

  const [isLiked, setIsLiked] = useState(() => isLikedByUser(likedBy, userId));

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

  return (
    <Styled.TweetContainer>
      <Styled.Avatar src={avatar} alt='user photo' />
      <Styled.MainContent>
        <Styled.Wrapper>
          <Styled.MobileWrapper>
            <Styled.UserName>{name}</Styled.UserName>
            <Styled.UserEmail>@{email.split('@')[0]}</Styled.UserEmail>
          </Styled.MobileWrapper>
          <Styled.Date>{convertTimestamp(createdAt)}</Styled.Date>
        </Styled.Wrapper>
        <Styled.Wrapper>{text}</Styled.Wrapper>
        <Styled.Wrapper>
          {file && <Styled.TweetFile src={fileURL} alt='tweet file' />}
        </Styled.Wrapper>
        <Styled.Wrapper>
          <Styled.LikesContainer onClick={handleLikeTweet}>
            <Styled.LikeImage
              src={defineLikeIcon(isLiked, theme)}
              alt='like heart'
            />
            <p>{likedBy.length}</p>
          </Styled.LikesContainer>
        </Styled.Wrapper>

        {userEmail === email && (
          <Styled.Delete
            src={theme === 'dark' ? ICONS.deleteDark : ICONS.delete}
            alt='delete button'
            onClick={handleDeleteTweet}
          />
        )}
      </Styled.MainContent>
    </Styled.TweetContainer>
  );
});

export default Tweet;
