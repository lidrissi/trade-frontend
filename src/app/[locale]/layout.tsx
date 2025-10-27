import type { Metadata } from 'next';
import './globals.css';
import { AppProviders } from '@/providers';
import { use } from 'react';
import { Inter, Outfit, Quicksand, Work_Sans, Poppins } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  fallback: ['sans-serif'],
  display: 'swap',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  fallback: ['sans-serif'],
  display: 'swap',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

const workSans = Work_Sans({
  subsets: ['latin'],
  variable: '--font-work-sans',
  fallback: ['sans-serif'],
  display: 'swap',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  fallback: ['sans-serif'],
  display: 'swap',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

const quicksand = Quicksand({
  subsets: ['latin'],
  variable: '--font-quicksand',
  fallback: ['sans-serif'],
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'Trade.ma',
  description: 'B2B E-commerce platform',
};

export default function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = use(params);
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${outfit.variable} ${workSans.variable} ${quicksand.variable} ${poppins.variable}`}
      >
        <AppProviders locale={locale}>{children}</AppProviders>
      </body>
    </html>
  );
}
