export type ISignupForm = {
  name: string;
  phone: string;
  email: string;
  password: string;
  month: string;
  day: string;
  year: string;
};

export type ILoginForm = {
  phoneOrEmail: string;
  password: string;
};

export type IModal = {
  closeModal: () => void;
};

export type IIsOpen = {
  $isOpen: boolean;
};
