import { supabase } from './auth';

export type Themes = 'light' | 'dark' | 'system';

export const changeRawTheme = async (theme: Themes, admin_id: string) => {
  const { data, error } = await supabase
    .from('theme')
    .insert({ theme, admin_id });
  console.log(data, error);
};
