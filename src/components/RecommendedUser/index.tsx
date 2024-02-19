import Avatar from '@/assets/avatar.png';
import ButtonVariants from '@/constants/buttonVariants';
import Button from '@/UI/Button';

import {
  MainContent,
  UserContainer,
  UserEmail,
  UserInfo,
  UserName,
  UserPhoto,
} from './styled';
import { IUserProps } from './types';

const RecommendedUser = ({ name, email }: IUserProps) => {
  return (
    <UserContainer>
      <UserPhoto src={Avatar} alt='user avatar' />
      <MainContent>
        <UserInfo>
          <UserName>{name}</UserName>
          <UserEmail>@{email.split('@')[0]}</UserEmail>
        </UserInfo>
        <Button variant={ButtonVariants.follow} width='90px'>
          Follow
        </Button>
      </MainContent>
    </UserContainer>
  );
};

export default RecommendedUser;
