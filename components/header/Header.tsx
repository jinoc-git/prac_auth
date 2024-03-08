import React from 'react';

import { getAuthSession } from '@/lib/serverAction';

import Nav from '../nav/Nav';

const Header = async () => {
  const session = await getAuthSession();

  return (
    <header className=" flex justify-center w-screen h-[88px]">
      <Nav session={session} />
    </header>
  );
};

export default Header;
