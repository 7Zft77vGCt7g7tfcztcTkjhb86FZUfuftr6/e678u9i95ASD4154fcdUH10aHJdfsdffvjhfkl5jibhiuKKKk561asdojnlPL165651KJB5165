/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';
import localFont from 'next/font/local';
import './globals.css';
import Navbar from '@/components/Navbar';
import { useState, createContext, useContext, ReactNode } from 'react';

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

// Loading context to manage global loading state
interface LoadingContextType {
  loading: boolean;
  setLoading: (loading: boolean) => void;
}

const LoadingContext = createContext<LoadingContextType>({
  loading: false,
  setLoading: () => {}, // Default implementation
});

export const useLoading = () => useContext(LoadingContext);

// Layout component
export default function Layout({ children }: { children: ReactNode }) {
  const [loading, setLoading] = useState(false); // State to track loading

  return (
    <html lang="en">
      <head>
        <title>Netflix Household | Nezoka</title>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased w-full flex flex-col items-center justify-center`}
      >
        {/* Provide loading state to children components */}
        <LoadingContext.Provider value={{ loading, setLoading }}>
          {/* Navbar gets access to loading state */}
          <Navbar loading={loading} setLoading={setLoading} />

          {/* Main container for children */}
          <div
            id="container"
            className="max-w-7xl w-full flex flex-col justify-center items-center"
          >
            {children}
          </div>
        </LoadingContext.Provider>
      </body>
    </html>
  );
}
