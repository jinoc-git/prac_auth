import { createClient } from '@supabase/supabase-js';

import type { Database } from './database.types';
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

  const user = {
    id: data.user?.id,
    username,
    email,
    phone,
    role,
  };
};

const insertUser = async () => {};
