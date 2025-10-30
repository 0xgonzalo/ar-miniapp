'use client';

import { useEffect, useState } from 'react';
import { sdk } from '@farcaster/miniapp-sdk';

export default function BaseMiniAppProvider({ children }) {
  const [isReady, setIsReady] = useState(false);

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
  const [context, setContext] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

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
