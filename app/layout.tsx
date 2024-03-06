import { Inter } from 'next/font/google';

import SwitchThemeButton from '@/components/buttons/switchTheme/SwitchThemeButton';
import NextThemesProvider from '@/components/providers/NextThemesProvider';
import { Toaster } from '@/components/ui/toaster';

import type { Metadata } from 'next';

import '@/styles/globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'dev camp',
  description: '간단한 회원가입 페이지',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextThemesProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
          <SwitchThemeButton />
        </NextThemesProvider>
      </body>
    </html>
  );
}
