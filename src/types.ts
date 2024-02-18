import { Timestamp } from 'firebase/firestore';

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

export type ITweetData = {
  text: string;
  email: string;
  name: string;
  file: string;
  likedBy: Array<string>;
  createdAt: Timestamp;
};

export type ITweetProps = {
  tweetData: ITweetData;
  id: string;
};

export type IFile = Blob | Uint8Array | ArrayBuffer | null;
