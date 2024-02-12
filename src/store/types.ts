export type IThemeState = {
  mode: 'dark' | 'light';
};

export type IUser = {
  id: string;
  email: string;
  birthDate: string;
  phone: string;
  name: string;
  token: string | null;
};
