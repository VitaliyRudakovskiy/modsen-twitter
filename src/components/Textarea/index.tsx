import { ChangeEvent, useState } from 'react';
import { useSelector } from 'react-redux';

import userPhoto from '@/assets/avatar.png';
import uploadImage from '@/assets/upload.png';
import ButtonVariants from '@/constants/buttonVariants';
import { selectUser } from '@/store/slices/userSlice';
import Button from '@/UI/Button';
import uploadTweet from '@/utils/uploadTweet';

import {
  Area,
  AreaContainer,
  Avatar,
  ButtonWrapper,
  TextareaWrapper,
  UploadImage,
} from './styled';

const Textarea = () => {
  const { name, email } = useSelector(selectUser);
  const [textValue, setTextValue] = useState<string>('');

  const handleSendTweet = async () => {
    try {
      await uploadTweet(textValue, name, email);
      setTextValue('');
    } catch (error) {
      throw new Error(`An error occured while sending tweet: ${error}`);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setTextValue(e.target.value);
  };

  return (
    <TextareaWrapper>
      <Avatar src={userPhoto} alt='user avatar' />
      <AreaContainer>
        <Area
          placeholder="What's happening"
          value={textValue}
          onChange={handleChange}
        />

        <UploadImage src={uploadImage} alt='upload image icon' />

        <ButtonWrapper>
          <Button
            variant={ButtonVariants.primary}
            disabled={textValue === ''}
            width='130px'
            onClick={handleSendTweet}
          >
            Tweet
          </Button>
        </ButtonWrapper>
      </AreaContainer>
    </TextareaWrapper>
  );
};

export default Textarea;
