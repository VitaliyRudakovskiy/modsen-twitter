import { Dispatch, SetStateAction } from 'react';

export type ISignupFormProps = {
  isButtonActive: boolean;
  setIsButtonActive: Dispatch<SetStateAction<boolean>>;
};
