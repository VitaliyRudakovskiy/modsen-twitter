import { IProfileFormInput } from './types';

export const profileInputs: IProfileFormInput[] = [
  {
    placeholder: 'Change name',
    type: 'text',
    name: 'name',
  },
  {
    placeholder: 'Change email',
    type: 'text',
    name: 'email',
  },
  {
    placeholder: 'Current password',
    type: 'password',
    name: 'password',
  },
  {
    placeholder: 'Change birthday',
    type: 'text',
    name: 'birthday',
  },
  {
    placeholder: 'Change phone',
    type: 'text',
    name: 'phone',
  },
];

export const profileDefaultValues = {
  name: '',
  email: '',
  birthday: '',
  phone: '',
  password: '',
};
