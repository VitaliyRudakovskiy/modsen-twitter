import { IPasswordFormInput } from './types';

export const passwordInputs: IPasswordFormInput[] = [
  {
    placeholder: 'Confirm email',
    type: 'email',
    name: 'email',
  },
  {
    placeholder: 'Confirm old password',
    type: 'password',
    name: 'old password',
  },
  {
    placeholder: 'Input new password',
    type: 'password',
    name: 'new password',
  },
];

export const passwordDefaultValues = {
  email: '',
  oldPassword: '',
  newPassword: '',
};
