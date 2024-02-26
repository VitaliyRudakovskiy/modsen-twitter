export type IUser = {
  id: string;
  email: string;
  birthDate: string;
  phone: string;
  name: string;
  token: string | null;
};

export type ISearchedUser = Omit<IUser, 'token'>;
