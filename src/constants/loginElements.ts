import { ILoginForm } from '@/types/form';

import { ILoginFormInput } from './types';

export const loginInputs: ILoginFormInput[] = [
  {
    placeholder: 'Phone number, email address',
    type: 'text',
    name: 'phoneOrEmail',
  },
  {
    placeholder: 'Password',
    type: 'password',
    name: 'password',
  },
];

export const loginDefaultValues: ILoginForm = {
  phoneOrEmail: '',
  password: '',
};
