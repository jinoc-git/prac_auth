import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';

import type { Database, InsertUserType } from './database.types';
import type { SigninFormRegisterInput } from '@/components/signinForm/SigninForm';
import type { SignupFormRegisterInput } from '@/components/signupForm/SignupForm';

const supabase = createClientComponentClient<Database>();

export { supabase };

export const signup = async (formData: SignupFormRegisterInput) => {
  const { username, email, phone, role, password } = formData;

  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      emailRedirectTo: `${location.origin}/auth/callback`,
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

export const signin = async (formData: SigninFormRegisterInput) => {
  const { error } = await supabase.auth.signInWithPassword(formData);
  if (error !== null) throw new Error('signin is error');
};

export const signout = async () => {
  await supabase.auth.signOut();
};

export const signinWithGoogle = async () => {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'google',
    options: {
      redirectTo: `${location.origin}/auth/callback`,
      queryParams: {
        access_type: 'offline',
        prompt: 'consent',
      },
    },
  });

  if (error !== null) throw new Error('google is error');
};
