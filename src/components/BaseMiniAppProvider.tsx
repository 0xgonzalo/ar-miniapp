'use client';

import { useEffect, useState, ReactNode } from 'react';
import { sdk } from '@farcaster/miniapp-sdk';
import type { BaseMiniAppProviderProps } from '@/types';

export default function BaseMiniAppProvider({ children }: BaseMiniAppProviderProps) {
  const [isReady, setIsReady] = useState<boolean>(false);

  useEffect(() => {
    // Signal that the mini app is ready
    sdk.actions.ready();
    setIsReady(true);
  }, []);

  return (
    <>
      {children}
    </>
  );
}

/**
 * Hook to access Base mini app context and user information
 */
export function useBaseMiniApp() {
  const [context, setContext] = useState<any>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchContext = async () => {
      try {
        const ctx = await sdk.context;
        setContext(ctx);
      } catch (error) {
        console.error('Failed to fetch Base mini app context:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchContext();
  }, []);

  return {
    context,
    isLoading,
    user: context?.user,
    client: context?.client,
  };
}
