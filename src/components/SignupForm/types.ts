import { ISignupForm } from '@/types';

export type ISignupFormProps = {
  onSubmit: (form: ISignupForm) => void;
  isButtonActive: boolean;
};
