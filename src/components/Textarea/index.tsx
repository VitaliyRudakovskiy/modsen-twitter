import { ChangeEvent, useState } from 'react';
import { useSelector } from 'react-redux';

import userPhoto from '@/assets/images/avatar.png';
import uploadImage from '@/assets/images/upload.png';
import ButtonVariants from '@/constants/buttonVariants';
import { selectUser } from '@/store/slices/userSlice';
import { IFile } from '@/types/tweet';
import Button from '@/UI/Button';
import uploadTweet from '@/utils/uploadTweet';

import Loader from '../Loader';

import * as Styled from './styled';

const Textarea = () => {
  const { id, name, email } = useSelector(selectUser);
  const [textValue, setTextValue] = useState<string>('');
  const [file, setFile] = useState<IFile>(null);
  const [fileName, setFileName] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSendTweet = async () => {
    try {
      await uploadTweet(textValue, name, email, file, id, setIsLoading);
      setTextValue('');
      setFile(null);
      setFileName('');
    } catch (error) {
      throw new Error(`An error occured while sending tweet: ${error}`);
    }
  };

  const handleUploadFile = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files === null) return;

    setFile(e.target.files[0]);
    setFileName(e.target.files[0].name);
  };

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setTextValue(e.target.value);
  };

  return (
    <Styled.TextareaWrapper data-testid='textarea'>
      {isLoading && (
        <Styled.LoaderContainer>
          <Loader />
        </Styled.LoaderContainer>
      )}
      <Styled.Avatar src={userPhoto} alt='user avatar' />
      <Styled.AreaContainer>
        <Styled.Area
          placeholder="What's happening"
          value={textValue}
          onChange={handleChange}
        />

        <Styled.UploadFileLabel $fileName={fileName} htmlFor='upload-file'>
          <Styled.UploadFile src={uploadImage} alt='upload file icon' />
          <Styled.InputForFile
            type='file'
            id='upload-file'
            onChange={handleUploadFile}
          />

          {fileName && <Styled.FileName>{fileName}</Styled.FileName>}
        </Styled.UploadFileLabel>

        <Styled.ButtonWrapper data-testid='tweet-button'>
          <Button
            variant={ButtonVariants.primary}
            disabled={!textValue || isLoading}
            width='130px'
            onClick={handleSendTweet}
          >
            Tweet
          </Button>
        </Styled.ButtonWrapper>
      </Styled.AreaContainer>
    </Styled.TextareaWrapper>
  );
};

export default Textarea;
