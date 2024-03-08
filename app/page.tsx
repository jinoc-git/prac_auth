import { redirect } from 'next/navigation';

import Introduce from '@/components/home-content/introduce/Introduce';
import { getAuthSession } from '@/lib/serverActions';

export default async function Home() {
  const session = await getAuthSession();

  if (!session) redirect('/signin');

  return (
    <main className="flex-center min-h-[calc(100vh-88px)]">
      <Introduce />
    </main>
  );
}
