export type IString = {
  [key: string]: string;
};

export type IStringOrNumber = {
  [code: string]: string | number;
};

export type IFonts = {
  fontFamily: IStringOrNumber;
  fontSize: IStringOrNumber;
  fontWeight: IStringOrNumber;
};

export type IFooterLink = {
  id: number;
  text: string;
  to: string;
};

export type ISidebarLink = {
  title: string;
  path: string;
  icon: string;
};

export type ISignupSelect = {
  options: string[] | number[];
  placeholder: string;
  width: string;
  name: 'month' | 'day' | 'year';
};

export type IFormInput = {
  placeholder: string;
  type: 'text' | 'password' | 'email';
  name: 'name' | 'phone' | 'email' | 'password';
};

export type ISignupForm = {
  name: string;
  phone: string;
  email: string;
  password: string;
  month: string;
  day: string;
  year: string;
};

export type ILoginFormInput = Omit<IFormInput, 'name'> & {
  name: 'password' | 'phoneOrEmail';
};

export type ILoginForm = {
  phoneOrEmail: string;
  password: string;
};

export type IProfileFormInput = Pick<IFormInput, 'placeholder' | 'type'> & {
  name: 'name' | 'phone' | 'email' | 'password' | 'birthday';
};
