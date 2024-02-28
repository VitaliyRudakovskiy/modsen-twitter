import Avatar from '@/assets/images/avatar.png';
import ButtonVariants from '@/constants/buttonVariants';
import Button from '@/UI/Button';

import * as Styled from './styled';
import { IUserProps } from './types';

const RecommendedUser = ({ name, email }: IUserProps) => {
  return (
    <Styled.UserContainer>
      <Styled.UserPhoto src={Avatar} alt='user avatar' />
      <Styled.MainContent>
        <Styled.UserInfo>
          <Styled.UserName>{name}</Styled.UserName>
          <Styled.UserEmail>@{email.split('@')[0]}</Styled.UserEmail>
        </Styled.UserInfo>
        <Button variant={ButtonVariants.follow} width='90px'>
          Follow
        </Button>
      </Styled.MainContent>
    </Styled.UserContainer>
  );
};

export default RecommendedUser;
