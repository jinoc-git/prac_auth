import React from 'react';

import { redirect } from 'next/navigation';

import ChangeTheme from '@/components/admin-page/ChangeTheme';
import { getAuthSession, getDefaultTheme } from '@/lib/serverAction';

export default async function Admin() {
  const session = await getAuthSession();

  if (!session) redirect('/signin');

  const isAdmin = session?.user.user_metadata.role === '관리자';
  if (!isAdmin) redirect('/');

  const defaultTheme = await getDefaultTheme();

  return (
    <main className="min-h-[calc(100vh-88px)] flex-center">
      <ChangeTheme defaultTheme={defaultTheme} adminId={session.user.id} />
    </main>
  );
}
