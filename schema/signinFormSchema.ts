import { z } from 'zod';

import { passwordRegExp } from './signupFormSchema';

export const signinFormSchema = z.object({
  email: z.string().email({ message: '올바른 이메일이 아닙니다.' }),
  password: z.string().min(6).max(50).regex(passwordRegExp),
});
