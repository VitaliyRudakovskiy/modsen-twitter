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

type IFooterLink = {
  id: number;
  text: string;
  to?: string;
};

export type IFooterLinks = IFooterLink[];
