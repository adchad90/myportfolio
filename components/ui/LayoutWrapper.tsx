// components/LayoutWrapper.tsx
'use client';

import { usePathname } from 'next/navigation';
import Navbar from './navbar';
import Footer from './footer';

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isLandingPage = pathname === '/';

  return (
    <>
      {!isLandingPage && <Navbar />}
      {children}
      {!isLandingPage && <Footer />}
    </>
  );
}
