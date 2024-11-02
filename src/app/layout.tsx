import '@/styles/globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import CookieBanner from '@/components/CookieBanner';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Kane Miller - Technical Project Manager',
  description: "Portfolio website showcasing Kane Miller's project management skills and projects.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en">
      <head>
        {/* Favicon Links */}
        <link rel="icon" href="/images/icon-logo-2-nobackground.png" sizes="any" type="image/png" />
        <link rel="icon" href="/images/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/images/apple-touch-icon.png" />
        <link rel="manifest" href="/images/site.webmanifest" />
      </head>
      <body className={`${inter.className} antialiased`}>
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}
