import { supabaseClientClient } from './auth';

export type Themes = 'light' | 'dark' | 'system';

export const changeRawTheme = async (theme: Themes, admin_id: string) => {
  const { data, error } = await supabaseClientClient
    .from('theme')
    .insert({ theme, admin_id });

  if (error !== null) throw new Error('change theme is error');
};
