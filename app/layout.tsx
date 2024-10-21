// app/layout.tsx

import './globals.css';
import { ReactNode } from 'react';
import { LoadingProvider } from '@/components/LoadingProvider'; // Import the LoadingProvider
import localFont from 'next/font/local';
import Navbar from '@/components/Navbar';

// Fonts configuration
const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});

const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>Netflix Household | Nezoka</title>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased w-full flex flex-col items-center justify-center`}
      >
        <LoadingProvider>
          <Navbar />
          <div
            id="container"
            className="max-w-7xl w-full flex flex-col justify-center items-center"
          >
            {children}
          </div>
        </LoadingProvider>
      </body>
    </html>
  );
}
