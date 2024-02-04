export interface IString {
  [key: string]: string;
}

export interface IStringOrNumber {
  [code: string]: string | number;
}

export interface IFonts {
  fontFamily: IStringOrNumber;
  fontSize: IStringOrNumber;
  fontWeight: IStringOrNumber;
}
