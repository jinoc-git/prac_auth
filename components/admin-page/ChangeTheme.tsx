'use client';

import React from 'react';

import { changeRawTheme } from '@/lib/admin';

import { ToggleGroup, ToggleGroupItem } from '../ui/toggle-group';

import type { Themes } from '@/lib/admin';

interface ChangeThemeProps {
  adminId: string;
}

const ChangeTheme = ({ adminId }: ChangeThemeProps) => {
  const onClickTheme = async (theme: Themes) => {
    await changeRawTheme(theme, adminId);
  };

  return (
    <ToggleGroup variant={'outline'} type="single">
      <ToggleGroupItem value="bold" aria-label="Toggle light">
        <p onClick={() => onClickTheme('light')}>light</p>
      </ToggleGroupItem>
      <ToggleGroupItem value="dark" aria-label="Toggle dark">
        <p onClick={() => onClickTheme('dark')}>dark</p>
      </ToggleGroupItem>
      <ToggleGroupItem value="system" aria-label="Toggle system">
        <p onClick={() => onClickTheme('system')}>system</p>
      </ToggleGroupItem>
    </ToggleGroup>
  );
};

export default ChangeTheme;
