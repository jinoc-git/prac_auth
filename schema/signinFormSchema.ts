import { z } from 'zod';

import { passwordRegExp } from './signupFormSchema';

export const signinFormSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6).max(50).regex(passwordRegExp),
});
