import { Days, Months, Years } from './dates';
import { IFormInput, ISignupSelect } from './types';

export const signupSelects: ISignupSelect[] = [
  {
    options: Months,
    placeholder: 'Month',
    width: '50%',
  },
  {
    options: Days,
    placeholder: 'Day',
    width: '30%',
  },
  {
    options: Years,
    placeholder: 'Year',
    width: '20%',
  },
];

export const signupInputs: IFormInput[] = [
  { placeholder: 'Name', type: 'text' },
  { placeholder: 'Phone number', type: 'text' },
  { placeholder: 'Email', type: 'email' },
  {
    placeholder: 'Password',
    type: 'password',
  },
];
