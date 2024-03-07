import React from 'react';

import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';

import Nav from '../nav/Nav';

import type { Database } from '@/lib/database.types';

const Header = async () => {
  const supabase = createServerComponentClient<Database>({ cookies });
  const {
    data: { session },
  } = await supabase.auth.getSession();

  return (
    <header className=" flex justify-center w-screen h-[88px]">
      <Nav session={session} />
    </header>
  );
};

export default Header;
