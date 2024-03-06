'use client';

import React from 'react';

import NavLinkItem from '../nav/NavLinkItem';
import { NavigationMenu, NavigationMenuList } from '../ui/navigation-menu';

const Header = () => {
  return (
    <header className=" flex justify-center w-screen h-[48px]">
      <NavigationMenu>
        <NavigationMenuList>
          <NavLinkItem href="/" value="홈" />
          <NavLinkItem href="/signin" value="로그인" />
          <NavLinkItem href="/signup" value="회원가입" />
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
};

export default Header;
