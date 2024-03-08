import { supabase } from './auth';

export const changeRawTheme = async (theme: string) => {
  const { data, error } = await supabase.from('theme').insert({ theme });
  console.log(data, error);
};
