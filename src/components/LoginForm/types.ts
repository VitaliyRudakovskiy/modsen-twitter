import { ILoginForm } from '@/types';

export type ILoginFormProps = {
  onSubmit: (form: ILoginForm) => void;
  isButtonActive: boolean;
};
