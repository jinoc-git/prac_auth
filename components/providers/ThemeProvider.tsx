'use client';

import React from 'react';

import { ThemeProvider as NextThemProvider } from 'next-themes';

import type { ThemeProviderProps } from 'next-themes/dist/types';

const ThemeProvider = ({ children, ...props }: ThemeProviderProps) => {
  return <NextThemProvider {...props}>{children}</NextThemProvider>;
};

export default ThemeProvider;
