import ButtonVariants from '@constants/buttonVariants';
import Button from '@UI/Button';

import {
  MainContent,
  UserContainer,
  UserEmail,
  UserInfo,
  UserName,
  UserPhoto,
} from './styled';

import Avatar from '@assets/avatar.png';

const RecommendedUser = () => {
  return (
    <UserContainer>
      <UserPhoto src={Avatar} alt='user avatar' />
      <MainContent>
        <UserInfo>
          <UserName>Name test</UserName>
          <UserEmail>@email123@test.ru</UserEmail>
        </UserInfo>
        <Button variant={ButtonVariants.follow} width='90px'>
          Follow
        </Button>
      </MainContent>
    </UserContainer>
  );
};

export default RecommendedUser;
