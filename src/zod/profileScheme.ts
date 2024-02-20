import { z } from 'zod';

import { DATE, PHONE_NUMBER } from '@/constants/regulars';

const preprocessFunc = (prop: unknown) => {
  if (!prop || typeof prop !== 'string') return undefined;
  return prop === '' ? undefined : prop;
};

const date = z.preprocess(
  (dateProp) => preprocessFunc(dateProp),
  z
    .string()
    .refine(
      (value) => value === null || DATE.test(value),
      'Date should be in format dd.mm.yyyy'
    )
    .optional()
);

const phone = z.preprocess(
  (phoneNum) => preprocessFunc(phoneNum),
  z
    .string()
    .refine(
      (value) => value === null || PHONE_NUMBER.test(value),
      'Phone number should be in format: +375xxxxxxxxx'
    )
    .optional()
);

const profileScheme = z.object({
  name: z.preprocess(
    (nameProp) => preprocessFunc(nameProp),
    z.string().optional()
  ),
  email: z.preprocess(
    (emailProp) => preprocessFunc(emailProp),
    z.string().email().optional()
  ),
  password: z.string().optional(),
  phone,
  birthDate: date,
});

export default profileScheme;
