import React from 'react';

import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

import ChangeTheme from '@/components/admin-page/ChangeTheme';

import type { Database } from '@/lib/database.types';

export default async function Admin() {
  const supabase = createServerComponentClient<Database>({ cookies });
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session) redirect('/signin');

  const isAdmin = session?.user.user_metadata.role === '관리자';
  if (!isAdmin) redirect('/');

  return (
    <main className="min-h-[calc(100vh-88px)] flex-center">
      <ChangeTheme adminId={session.user.id} />
    </main>
  );
}
