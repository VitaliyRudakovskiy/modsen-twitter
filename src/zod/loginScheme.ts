import { z } from 'zod';

import { EMAIL, PHONE_NUMBER } from '@/constants/regulars';

const loginScheme = z
  .object({
    phoneOrEmail: z
      .string()
      .refine(
        (value) => PHONE_NUMBER.test(value) || EMAIL.test(value),
        "This email doesn't exist or this phone number is not in format of +375xxxxxxxxx"
      ),
    password: z.string().min(6, 'Password should have at least 6 characters'),
  })
  .required();

export default loginScheme;
