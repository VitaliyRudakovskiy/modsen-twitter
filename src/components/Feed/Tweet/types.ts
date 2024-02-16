export type ITweetData = {
  text: string;
  email: string;
  name: string;
  likedBy: Array<string>;
  createdAt: Date;
};

export type ITweetProps = {
  tweetData: ITweetData;
  id: string;
};
