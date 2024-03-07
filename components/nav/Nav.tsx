'use client';

import React from 'react';

import NavButtonItem from './navButtonItem/NavButtonItem';
import NavLinkItem from './navLinkItem/NavLinkItem';
import { NavigationMenu, NavigationMenuList } from '../ui/navigation-menu';

const Nav = () => {
  const isLogin = false;

  const onClickLogout = () => {
    console.log('logout');
  };

  return (
    <NavigationMenu>
      <NavigationMenuList className=" w-[380px] justify-between">
        <NavLinkItem href="/" value="홈" />
        {isLogin ? (
          <NavButtonItem value="로그아웃" onClick={onClickLogout} />
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
