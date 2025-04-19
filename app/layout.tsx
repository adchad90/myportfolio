// app/layout.tsx
import './globals.css';
import Navbar from '@/components/ui/navbar';
import Footer from '@/components/ui/footer';
import LayoutWrapper from '@/components/ui/LayoutWrapper';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Aditya Chavan Portfolio',
  description: 'Portfolio website of Aditya Chavan',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-green-400 font-mono">
        <LayoutWrapper>
          {children}
        </LayoutWrapper>
      </body>
    </html>
  );
}
