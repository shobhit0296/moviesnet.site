import type { Metadata, Viewport } from 'next';
import { Syne, Instrument_Sans, Geist_Mono } from 'next/font/google';
import './globals.css';
import { Providers } from '@/components/Providers';
import { Header } from '@/components/layout/Header';
import TopSupportBanner from '@/components/TopSupportBanner';
import { Footer } from '@/components/layout/Footer';
import { ThemeContainer } from '@/components/effects/ThemeContainer';
import { GoogleAnalytics } from '@/components/seo/GoogleAnalytics';
import { JsonLd } from '@/components/seo/JsonLd';
import {
  buildRootMetadata,
  organizationJsonLd,
  softwareApplicationJsonLd,
  websiteJsonLd,
} from '@/lib/seo';

const syne = Syne({
  variable: '--font-display',
  subsets: ['latin'],
  display: 'swap',
  weight: ['500', '600', '700', '800'],
});

const instrumentSans = Instrument_Sans({
  variable: '--font-sans',
  subsets: ['latin'],
  display: 'swap',
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = buildRootMetadata();

export const viewport: Viewport = {
  themeColor: '#03050a',
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${syne.variable} ${instrumentSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <meta
          name="profiton-domain-verification"
          content="7573d1bb564a9c711068e99daebd1cb3e6354578d59ec8f415f1dede6d3330ee"
        />
        <meta
          name="profiton-check"
          content="0a15b0475ab2a6a132078d67b4e0952f"
        />
        <JsonLd
          data={[organizationJsonLd(), websiteJsonLd(), softwareApplicationJsonLd()]}
        />
      </head>
      <body suppressHydrationWarning className="min-h-full flex flex-col bg-[#03050a] text-white font-sans">
        <div style={{ display: 'none' }} aria-hidden="true">
          Profiton check: 0a15b0475ab2a6a132078d67b4e0952f
        </div>
        <GoogleAnalytics />
        <Providers>
          <ThemeContainer />
          <div className="relative z-10 flex flex-col min-h-screen">
            <TopSupportBanner />
            <Header />
            <main className="flex-1 pt-[var(--header-height)]">{children}</main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
