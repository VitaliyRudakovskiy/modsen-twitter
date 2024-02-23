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
  iconDark: string;
};

export type ISignupSelect = {
  options: string[] | number[];
  placeholder: string;
  width?: string;
  name: 'month' | 'day' | 'year';
};

export type IFormInput = {
  placeholder: string;
  type: 'text' | 'password' | 'email';
  name: 'name' | 'phone' | 'email' | 'password';
};

export type ILoginFormInput = Omit<IFormInput, 'name'> & {
  name: 'password' | 'phoneOrEmail';
};

export type IProfileFormInput = Pick<IFormInput, 'placeholder' | 'type'> & {
  name: 'name' | 'phone' | 'birthDate';
};

export type IPasswordFormInput = Pick<IFormInput, 'placeholder' | 'type'> & {
  name: 'email' | 'old password' | 'new password';
};
