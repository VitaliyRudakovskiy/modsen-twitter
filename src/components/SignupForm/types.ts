export type ISignupForm = {
  name: string;
  phone: string;
  email: string;
  password: string;
  month: string;
  day: string;
  year: string;
};

export type ISignupFormProps = {
  onSubmit: (form: ISignupForm) => void;
  isButtonActive: boolean;
};
