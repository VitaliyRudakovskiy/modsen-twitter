import { Dispatch, SetStateAction } from 'react';

export type ILoginFormProps = {
  isButtonActive: boolean;
  setIsButtonActive: Dispatch<SetStateAction<boolean>>;
};
