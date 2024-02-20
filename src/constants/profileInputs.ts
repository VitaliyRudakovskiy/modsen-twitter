import { IProfileFormInput } from './types';

export const profileInputs: IProfileFormInput[] = [
  {
    placeholder: 'Change name',
    type: 'text',
    name: 'name',
  },
  {
    placeholder: 'Change birthday',
    type: 'text',
    name: 'birthDate',
  },
  {
    placeholder: 'Change phone',
    type: 'text',
    name: 'phone',
  },
];

export const profileDefaultValues = {
  name: '',
  phone: '',
  birthDate: '',
};
