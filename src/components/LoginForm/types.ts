import { ILoginForm } from '@/types/form';

export type ILoginFormProps = {
  onSubmit: (form: ILoginForm) => void;
  isButtonActive: boolean;
};
