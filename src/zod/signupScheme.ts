import { PHONE_NUMBER } from '@constants/regulars';
import { z } from 'zod';

export const signupScheme = z
  .object({
    name: z
      .string()
      .min(2, 'Your name should be at least 2 characters')
      .max(25, 'Your name should be not more than 25 characters'),
    phone: z
      .string()
      .regex(PHONE_NUMBER, 'Phone number should be in format: +375xxxxxxxxx'),
    email: z.string().email("This email doesn't exist"),
    password: z.string().min(6, 'Password should have at least 6 characters'),
    month: z.string(),
    day: z.string(),
    year: z.string(),
  })
  .required();

export type SignupSchemeType = z.infer<typeof signupScheme>;
