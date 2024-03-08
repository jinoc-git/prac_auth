'use client';

import React from 'react';

import { useRouter } from 'next/navigation';

import { changeRawTheme } from '@/lib/admin';

import { ToggleGroup, ToggleGroupItem } from '../ui/toggle-group';
import { useToast } from '../ui/use-toast';

import type { Themes } from '@/lib/admin';

interface ChangeThemeProps {
  defaultTheme: string;
  adminId: string;
}

const ChangeTheme = ({ defaultTheme, adminId }: ChangeThemeProps) => {
  const router = useRouter();
  const { toast } = useToast();

  const onClickTheme = async (theme: Themes) => {
    try {
      await changeRawTheme(theme, adminId);
      router.refresh();
    } catch (error) {
      if (error instanceof Error) {
        toast({
          variant: 'destructive',
          title: error.message,
          duration: 2000,
        });
      }
    }
  };

  return (
    <section className="flex flex-col gap-5">
      <h3>사용자들의 기본 테마를 바꿀 수 있습니다.</h3>
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
    </section>
  );
};

export default ChangeTheme;
