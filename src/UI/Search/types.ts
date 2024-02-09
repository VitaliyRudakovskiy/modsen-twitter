import { ChangeEvent } from 'react';

export type ISearchInputProps = {
  placeholder?: string;
  value: string;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
};
