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
};

export type IFormInput = {
  placeholder: string;
  type: 'text' | 'password' | 'email';
};
