import { z } from 'zod';

const passwordScheme = z
  .object({
    email: z.string().email("This email doesn't exist"),
    'old password': z.string(),
    'new password': z
      .string()
      .min(6, 'Password should have at least 6 characters'),
  })
  .required();

export default passwordScheme;
