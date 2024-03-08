'use client';

import React from 'react';

import { useRouter } from 'next/navigation';

import { changeRawTheme } from '@/lib/admin';

import { ToggleGroup, ToggleGroupItem } from '../ui/toggle-group';

import type { Themes } from '@/lib/admin';

interface ChangeThemeProps {
  defaultTheme: string;
  adminId: string;
}

const ChangeTheme = ({ defaultTheme, adminId }: ChangeThemeProps) => {
  const router = useRouter();

  const onClickTheme = async (theme: Themes) => {
    await changeRawTheme(theme, adminId);
    router.refresh();
  };

  return (
    <ToggleGroup
      variant={'outline'}
      type="single"
      defaultValue={defaultTheme}
      defaultChecked
    >
      <ToggleGroupItem value="light" aria-label="Toggle light">
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
