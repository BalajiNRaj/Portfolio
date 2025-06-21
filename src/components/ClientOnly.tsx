'use client';

import { useEffect, useState, ReactNode } from 'react';

/**
 * A component to safely render client-side only content
 * to avoid hydration mismatches with server rendering
 */
export default function ClientOnly({ children }: { children: ReactNode }) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Return null on server-side rendering to avoid hydration mismatch
  if (!isClient) {
    return null;
  }

  return <>{children}</>;
}
