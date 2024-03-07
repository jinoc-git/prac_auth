import { createClient } from '@supabase/supabase-js';

import type { Database, InsertUserType } from './database.types';
import type { SignupFormRegisterInput } from '@/components/signupForm/SignupForm';

const supabase = createClient<Database>(
  process.env.NEXT_PUBLIC_SUPABASE_URL as string,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string,
);

export { supabase };

export const signup = async (formData: SignupFormRegisterInput) => {
  const { username, email, phone, role, password } = formData;

  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        username,
        phone,
        role,
      },
    },
  });

  if (error !== null) throw new Error('signup user is error');

  const user = {
    id: data.user?.id,
    username,
    email,
    phone,
    role,
  };

  await insertUser(user);
};

const insertUser = async (user: InsertUserType) => {
  const { error } = await supabase.from('users').insert(user);
  if (error !== null) throw new Error('insert user is error');
};
