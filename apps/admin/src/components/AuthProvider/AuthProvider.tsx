import React, { useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import Layout from '../Layout';

const PUBLIC_ROUTES = ['/login'];

interface AuthProvider {
  children: React.ReactNode;
}

function AuthProvider({ children }: AuthProvider) {
  const router = useRouter();
  const { status } = useSession({
    required: false,
    onUnauthenticated: () => {
      router.replace('/login');
    },
  });

  useEffect(() => {
    if (
      status === 'unauthenticated' &&
      !PUBLIC_ROUTES.includes(router.pathname)
    ) {
      router.replace('/login');
    }

    if (status === 'authenticated' && PUBLIC_ROUTES.includes(router.pathname)) {
      router.replace('/');
    }
  }, [status]);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'authenticated') {
    return <Layout>{children}</Layout>;
  }

  return <>{children}</>;
}

export default AuthProvider;
