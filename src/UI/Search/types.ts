import { ChangeEvent } from 'react';

export interface ISearchInputProps {
  placeholder?: string;
  value: string;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
}
