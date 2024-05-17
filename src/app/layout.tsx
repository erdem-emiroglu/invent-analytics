import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import '@/styles/globals.scss';
import AppProvider from '@/providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Invent Analytics Assessment',
  description: 'Assessment for Invent Analytics',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  );
}
