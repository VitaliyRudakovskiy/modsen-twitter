import { Timestamp } from 'firebase/firestore';

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
