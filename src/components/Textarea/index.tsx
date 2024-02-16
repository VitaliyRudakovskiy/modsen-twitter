import { ChangeEvent, useState } from 'react';

import userPhoto from '@/assets/avatar.png';
import uploadImage from '@/assets/upload.png';
import ButtonVariants from '@/constants/buttonVariants';
import Button from '@/UI/Button';

import {
  Area,
  AreaContainer,
  Avatar,
  ButtonWrapper,
  TextareaWrapper,
  UploadImage,
} from './styled';

const Textarea = () => {
  const [textValue, setTextValue] = useState<string>('');

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
          >
            Tweet
          </Button>
        </ButtonWrapper>
      </AreaContainer>
    </TextareaWrapper>
  );
};

export default Textarea;
