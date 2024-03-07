'use client';

import React from 'react';

import { useRouter } from 'next/navigation';

import { signout } from '@/lib/auth';

import NavButtonItem from './navButtonItem/NavButtonItem';
import NavLinkItem from './navLinkItem/NavLinkItem';
import { NavigationMenu, NavigationMenuList } from '../ui/navigation-menu';

import type { Session } from '@supabase/auth-helpers-nextjs';

interface NavProps {
  session: Session | null;
}

const Nav = ({ session }: NavProps) => {
  const router = useRouter();
  const isLogin = session !== null;
  console.log(session);

  const onClickLogout = async () => {
    await signout();
    router.refresh();
  };

  return (
    <NavigationMenu>
      <NavigationMenuList className=" w-[380px] justify-between">
        {isLogin ? (
          <>
            <NavLinkItem href="/" value="홈" />
            <NavButtonItem value="로그아웃" onClick={onClickLogout} />
          </>
        ) : (
          <>
            <NavLinkItem href="/signin" value="로그인" />
            <NavLinkItem href="/signup" value="회원가입" />
          </>
        )}
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default Nav;
