import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';

import type { Database } from './database.types';

const supabaseServerClient = createServerComponentClient<Database>({ cookies });

export const getAuthSession = async () => {
  const {
    data: { session },
  } = await supabaseServerClient.auth.getSession();

  return session;
};

export const getDefaultTheme = async () => {
  const { data } = await supabaseServerClient
    .from('theme')
    .select('theme')
    .order('created_at', { ascending: false })
    .limit(1)
    .single();

  const defaultTheme = data === null ? 'system' : data.theme;

  return defaultTheme;
};
