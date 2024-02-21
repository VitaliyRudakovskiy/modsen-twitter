import { ISignupForm } from '@/types';

import { Days, Months, Years } from './dates';
import { IFormInput, ISignupSelect } from './types';

export const signupSelects: ISignupSelect[] = [
  {
    options: Months,
    placeholder: 'Month',
    name: 'month',
  },
  {
    options: Days,
    placeholder: 'Day',
    name: 'day',
  },
  {
    options: Years,
    placeholder: 'Year',
    name: 'year',
  },
];

export const signupInputs: IFormInput[] = [
  { placeholder: 'Name', type: 'text', name: 'name' },
  { placeholder: 'Phone number', type: 'text', name: 'phone' },
  { placeholder: 'Email', type: 'email', name: 'email' },
  {
    placeholder: 'Password',
    type: 'password',
    name: 'password',
  },
];

export const signupDefaultValues: ISignupForm = {
  name: '',
  phone: '',
  email: '',
  password: '',
  month: 'January',
  day: '1',
  year: '1961',
};
