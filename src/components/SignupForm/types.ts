import { ISignupForm } from '@/types/form';

export type ISignupFormProps = {
  onSubmit: (form: ISignupForm) => void;
  isButtonActive: boolean;
};
