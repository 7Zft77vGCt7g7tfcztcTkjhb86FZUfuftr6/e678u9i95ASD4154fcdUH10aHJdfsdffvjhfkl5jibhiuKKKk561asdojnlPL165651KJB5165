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
        <div className="w-full font-aktivGroteskBold h-5 fixed bottom-0 flex justify-center items-center bg-cyan-500 sm:bg-blue-500 md:bg-green-500 lg:bg-yellow-500 xl:bg-orange-500 2xl:bg-red-500 ">
          <p className="hidden sm:block md:hidden">sm</p>
          <p className="hidden md:block lg:hidden">md</p>
          <p className="hidden lg:block xl:hidden">lg</p>
          <p className="hidden xl:block 2xl:hidden">xl</p>
          <p className="hidden 2xl:block">2xl</p>
        </div>
      </body>
    </html>
  );
}
