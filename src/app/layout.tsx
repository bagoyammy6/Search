import type { Metadata } from 'next';
import { Space_Mono } from 'next/font/google';
import './globals.css';
import LayoutContainer from './LayoutContainer';

const space_mono = Space_Mono({ subsets: ['latin'], weight: ['400', '700'] });

export const metadata: Metadata = {
  title: 'GitHub User Search',
  description: 'Search GitHub by username'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <LayoutContainer>
        <body className={space_mono.className}>{children}</body>
      </LayoutContainer>
    </html>
  );
}
