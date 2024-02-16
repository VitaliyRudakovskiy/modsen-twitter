import avatar from '@/assets/avatar.png';
import ICONS from '@/constants/icons';

import {
  Avatar,
  Date,
  LikeImage,
  Likes,
  LikesContainer,
  MainContent,
  More,
  TweetContainer,
  UserEmail,
  UserName,
  Wrapper,
} from './styled';
import { ITweetProps } from './types';

const Tweet = ({ tweetData, id }: ITweetProps) => {
  const { text, email, name, likedBy, createdAt } = tweetData;

  return (
    <TweetContainer>
      <Avatar src={avatar} alt='user photo' />
      <MainContent>
        <Wrapper>
          <UserName>{name}</UserName>
          <UserEmail>{email}</UserEmail>
          {/* <Date>{createdAt.getDay()}</Date> */}
          <Date>14.03.2003</Date>
        </Wrapper>
        <Wrapper>{text}</Wrapper>
        <Wrapper>
          <LikesContainer>
            <LikeImage src={ICONS.likeOutline} alt='like heart' />
            <Likes>{likedBy.length}</Likes>
          </LikesContainer>
        </Wrapper>

        <More src={ICONS.moreSimple} alt='more button' />
      </MainContent>
    </TweetContainer>
  );
};

export default Tweet;
