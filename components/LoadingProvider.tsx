// app/providers/LoadingProvider.tsx
'use client'; // Ensure it's client-side

import { createContext, useContext, useState, ReactNode } from 'react';

// Define the type for the context
interface LoadingContextType {
  loading: boolean;
  setLoading: (loading: boolean) => void;
}

// Create the context
const LoadingContext = createContext<LoadingContextType>({
  loading: false,
  setLoading: () => {}, // Default no-op
});

// Create a hook to use the context
export const useLoading = () => useContext(LoadingContext);

// Create the provider component
export function LoadingProvider({ children }: { children: ReactNode }) {
  const [loading, setLoading] = useState(false);

  return (
    <LoadingContext.Provider value={{ loading, setLoading }}>
      {children}
    </LoadingContext.Provider>
  );
}
