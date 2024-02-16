import { ILoginForm } from '@/constants/types';

export type ILoginFormProps = {
  onSubmit: (form: ILoginForm) => void;
  isButtonActive: boolean;
};
