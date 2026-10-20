import type { Metadata } from 'next';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import DonationCards from '@/components/DonationCards';
import TopDonorsSection from '@/components/TopDonorsSection';
import SupportEmailButton from './SupportEmailButton';
import { getDonations } from '@/lib/donations';

export const dynamic = 'force-static';
export const revalidate = 86400;

export const metadata: Metadata = {
  title: 'Support MoviesNet — Keep Movie Search & Streaming Alive',
  description:
    'MoviesNet is a 100% free movie & series discovery platform. Your voluntary support keeps our search indexes active, maintains reliable mirrors, and keeps the search engine fast without paywalls.',
  alternates: {
    canonical: 'https://moviesnet.site/support',
  },
  openGraph: {
    title: 'Support MoviesNet — Hey! We’re Glad You’re Here',
    description:
      'Support MoviesNet with a coffee tip, UPI, card, or crypto. Help keep movie indexes and streaming searches free for everyone.',
    url: 'https://moviesnet.site/support',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Support MoviesNet — Hey! We’re Glad You’re Here',
    description: 'Help keep MoviesNet independent, fast, and free for everyone.',
  },
};

const FAQ_COL_LEFT = [
  {
    icon: 'lock',
    q: 'Is my payment secure?',
    a: 'Yes, absolutely. All payments (UPI, Card, Stripe, PayPal) are processed through bank-grade 256-bit SSL encrypted payment gateways. We never store or handle your payment credentials.',
  },
  {
    icon: 'settings',
    q: 'How will my donation be used?',
    a: '100% of voluntary contributions go toward server hosting, indexing bots, fast global DNS, and keeping our search engine fast and popup-free.',
  },
  {
    icon: 'credit_card',
    q: 'Can I donate a custom amount?',
    a: 'Yes! Select the "Custom Amount" tile on the support card and enter any amount you wish to contribute via UPI, card, or crypto.',
  },
];

const FAQ_COL_RIGHT = [
  {
    icon: 'featured_seasonal_and_gifts',
    q: 'Do I get any special benefits?',
    a: 'Supporters receive our eternal gratitude, an optional permanent badge on our Community Wall of Fame, priority movie index requests, and fast-track 24h editorial verification.',
  },
  {
    icon: 'receipt_long',
    q: 'Can I get a receipt?',
    a: 'Yes, every gateway (UPI, Buy Me a Coffee, Ko-fi, Stripe) automatically generates an official digital transaction receipt delivered to your screen and email.',
  },
  {
    icon: 'chat_bubble',
    q: 'Other questions?',
    a: 'We are always active! Ping us on our Discord community, message our Telegram channel, or email officialvenom002@gmail.com anytime.',
  },
];

export default async function SupportPage() {
  const donations = await getDonations();
  const approvedDonations = donations.filter((d) => d.status === 'approved' || d.status === 'verified');

  const supportChannels = [
    {
      title: 'Discord Community',
      badge: 'Live Chat',
      icon: (
        <svg className="w-5 h-5 fill-current text-white" viewBox="0 0 24 24">
          <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.929 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.894.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
        </svg>
      ),
      desc: 'Get direct 1-on-1 help for payments, verification, or questions on Discord.',
      actionLabel: 'Chat on Discord Help',
      actionHref: 'https://discord.gg/ATGRvAjBr',
      isExternal: true,
    },
    {
      title: 'Telegram Channel',
      badge: 'Broadcasts',
      icon: (
        <svg className="w-5 h-5 fill-current text-white" viewBox="0 0 24 24">
          <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
        </svg>
      ),
      desc: 'Real-time mirror uptime broadcasts, newly verified platforms, and movie alerts.',
      actionLabel: 'Subscribe Channel',
      actionHref: 'https://t.me/+gWOCVAqtcXxkZDk9',
      isExternal: true,
    },
    {
      title: 'Email Dispatch Desk',
      badge: '< 24h Response',
      icon: (
        <span className="text-lg">✉️</span>
      ),
      desc: 'Direct email support for partnerships, copyright inquiries, and webmaster verification.',
      actionLabel: 'officialvenom002@gmail.com',
      actionHref: 'mailto:officialvenom002@gmail.com?subject=MoviesNet%20Support%20Inquiry',
      isExternal: false,
      email: 'officialvenom002@gmail.com',
    },
  ];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'MoviesNet Help & Support Center',
    url: 'https://moviesnet.site/support',
    description: 'Support MoviesNet — Keep the free movie search engine alive.',
    mainEntity: {
      '@type': 'Organization',
      name: 'MoviesNet',
      url: 'https://moviesnet.site',
      contactPoint: {
        '@type': 'ContactPoint',
        email: 'officialvenom002@gmail.com',
        contactType: 'customer support',
        availableLanguage: ['English'],
      },
    },
  };

  return (
    <div className="min-h-screen bg-[#07090e] text-slate-100 flex flex-col font-sans selection:bg-purple-500/30 selection:text-purple-200">
      <JsonLd schema={jsonLd} />
      <main className="flex-1 max-w-[1200px] w-full mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-16">
        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-purple-500/10 text-purple-300 border border-purple-500/20">
            <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
            100% Free & Community Funded
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
            Help Us Keep <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-400 to-pink-400">MoviesNet</span> Alive
          </h1>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            MoviesNet searches across curated sources to find movies and shows quickly without ads or paywalls. Your support keeps our search servers and index pipelines running.
          </p>
        </div>

        {/* Benefits Quick Link Bar */}
        <div className="bg-gradient-to-r from-purple-950/40 via-indigo-950/20 to-slate-900/40 border border-purple-500/20 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="text-lg font-bold text-white flex items-center justify-center sm:justify-start gap-2">
              <span>🌟</span> Exclusive Supporter Privileges
            </h3>
            <p className="text-sm text-slate-300">
              Get guaranteed website directory listing, 24-hour review fast-track, and Wall of Fame honors.
            </p>
          </div>
          <Link
            href="/benefits"
            className="shrink-0 px-5 py-2.5 rounded-xl font-bold text-sm bg-purple-600 hover:bg-purple-500 text-white transition-all shadow-lg shadow-purple-600/30"
          >
            Explore Supporter Benefits →
          </Link>
        </div>

        {/* Donation Cards Component */}
        <div id="donate-now">
          <DonationCards />
        </div>

        {/* Top Donors / Wall of Fame */}
        <div id="wall-of-fame">
          <TopDonorsSection dbDonations={approvedDonations} />
        </div>

        {/* Contact & Support Channels */}
        <div className="space-y-8">
          <div className="text-center space-y-2">
            <h2 className="text-2xl sm:text-3xl font-black text-white">Community & Support Desks</h2>
            <p className="text-sm text-slate-400">Need help with a payment, verification, or have questions? Reach out directly.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {supportChannels.map((c, i) => (
              <div key={i} className="bg-slate-900/60 border border-white/[0.08] rounded-2xl p-6 flex flex-col justify-between space-y-4 hover:border-purple-500/30 transition-all">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
                      {c.icon}
                    </div>
                    <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-white/[0.06] text-slate-300 border border-white/10">
                      {c.badge}
                    </span>
                  </div>
                  <h3 className="font-bold text-white text-base">{c.title}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">{c.desc}</p>
                </div>
                {c.email ? (
                  <SupportEmailButton email={c.email} />
                ) : (
                  <a
                    href={c.actionHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 px-4 rounded-xl text-xs font-bold text-center bg-white/[0.06] hover:bg-white hover:text-black text-slate-200 border border-white/10 transition-all flex items-center justify-center gap-1.5"
                  >
                    <span>{c.actionLabel}</span>
                    <span>→</span>
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* FAQs */}
        <div className="space-y-8 pt-8 border-t border-white/[0.06]">
          <div className="text-center space-y-2">
            <h2 className="text-2xl sm:text-3xl font-black text-white">Frequently Asked Questions</h2>
            <p className="text-sm text-slate-400">Everything you need to know about supporting MoviesNet.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              {FAQ_COL_LEFT.map((faq, i) => (
                <div key={i} className="bg-slate-900/40 border border-white/[0.07] rounded-xl p-5 space-y-2">
                  <h4 className="font-bold text-white text-sm">{faq.q}</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
            <div className="space-y-4">
              {FAQ_COL_RIGHT.map((faq, i) => (
                <div key={i} className="bg-slate-900/40 border border-white/[0.07] rounded-xl p-5 space-y-2">
                  <h4 className="font-bold text-white text-sm">{faq.q}</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      </div>
  );
}
