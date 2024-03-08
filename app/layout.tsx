import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { Inter } from 'next/font/google';
import { cookies } from 'next/headers';

import SwitchThemeButton from '@/components/buttons/switchTheme/SwitchThemeButton';
import Header from '@/components/header/Header';
import NextThemesProvider from '@/components/providers/NextThemesProvider';
import { Toaster } from '@/components/ui/toaster';

import type { Database } from '@/lib/database.types';
import type { Metadata } from 'next';

import '@/style/globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'simple auth page',
  description: '간단한 로그인 회원가입 페이지',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const supabase = createServerComponentClient<Database>({ cookies });
  const { data } = await supabase
    .from('theme')
    .select('theme')
    .order('created_at', { ascending: false })
    .limit(1)
    .single();

  const defaultTheme = data === null ? 'system' : data.theme;

  return (
    <html lang="en">
      <body className={inter.className}>
        <NextThemesProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
          <Toaster />
          <SwitchThemeButton defaultTheme={defaultTheme} />
        </NextThemesProvider>
      </body>
    </html>
  );
}
