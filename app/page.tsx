import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

import Introduce from '@/components/home-content/introduce/Introduce';

import type { Database } from '@/lib/database.types';

export default async function Home() {
  const supabase = createServerComponentClient<Database>({ cookies });
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session) redirect('/signin');

  return (
    <main className="flex-center min-h-[calc(100vh-88px)]">
      <Introduce />
    </main>
  );
}
