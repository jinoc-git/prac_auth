'use client';

import React from 'react';

import { changeRawTheme } from '@/lib/admin';

import type { Themes } from '@/lib/admin';

interface ChangeThemeProps {
  adminId: string;
}

const ChangeTheme = ({ adminId }: ChangeThemeProps) => {
  const onClickTheme = async (theme: Themes) => {
    await changeRawTheme(theme, adminId);
  };

  return (
    <div className="flex flex-col">
      <button onClick={() => onClickTheme('light')}>light</button>
      <button onClick={() => onClickTheme('dark')}>dark</button>
      <button onClick={() => onClickTheme('system')}>system</button>
    </div>
  );
};

export default ChangeTheme;
