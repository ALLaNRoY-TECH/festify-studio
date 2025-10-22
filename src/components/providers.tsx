'use client';

import {ThemeProvider as NextThemesProvider} from 'next-themes';
import type {ThemeProviderProps} from 'next-themes/dist/types';
import {AuthProvider} from '@/context/auth-provider';
import {PageTransition} from '@/components/page-transition';

export function Providers({children, ...props}: ThemeProviderProps) {
  return (
    <NextThemesProvider {...props}>
      <AuthProvider>
        <PageTransition>{children}</PageTransition>
      </AuthProvider>
    </NextThemesProvider>
  );
}
