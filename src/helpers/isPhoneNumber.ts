import { PHONE_NUMBER } from '@constants/regulars';

const isPhoneNumber = (phoneOrEmail: string): boolean => {
  return PHONE_NUMBER.test(phoneOrEmail);
};

export default isPhoneNumber;
