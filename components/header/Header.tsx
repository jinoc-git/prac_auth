'use client';

import React from 'react';

import NavButtonItem from '../nav/navButtonItem/NavButtonItem';
import NavLinkItem from '../nav/navLinkItem/NavLinkItem';
import { NavigationMenu, NavigationMenuList } from '../ui/navigation-menu';

const Header = () => {
  const onClickLogout = () => {
    console.log('logout');
  };

  return (
    <header className=" flex justify-center w-screen h-[88px]">
      <NavigationMenu>
        <NavigationMenuList className=" w-[380px] justify-between">
          <NavLinkItem href="/" value="홈" />
          <NavLinkItem href="/signin" value="로그인" />
          <NavLinkItem href="/signup" value="회원가입" />
          <NavButtonItem value="로그아웃" onClick={onClickLogout} />
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
};

export default Header;
