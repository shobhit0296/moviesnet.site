'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

let memoryDonationEnabledCache: boolean | null = null;

export default function TopSupportBanner() {
  const pathname = usePathname();
  const [enabled, setEnabled] = useState<boolean>(() => {
    if (memoryDonationEnabledCache !== null) return memoryDonationEnabledCache;
    return true;
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      try {
        const cached = localStorage.getItem('mn_donation_page_enabled');
        const cachedTs = Number(localStorage.getItem('mn_donation_page_enabled_ts') || 0);
        if (cached !== null && Date.now() - cachedTs < 86400000) {
          const val = cached === 'true';
          memoryDonationEnabledCache = val;
          setEnabled(val);
          return;
        }
      } catch {}
    }

    fetch('/api/settings')
      .then((res) => res.json())
      .then((data) => {
        if (data && typeof data.donationPageEnabled === 'boolean') {
          memoryDonationEnabledCache = data.donationPageEnabled;
          setEnabled(data.donationPageEnabled);
          try {
            localStorage.setItem('mn_donation_page_enabled', String(data.donationPageEnabled));
            localStorage.setItem('mn_donation_page_enabled_ts', String(Date.now()));
          } catch {}
        }
      })
      .catch(() => {});
  }, []);

  if (!enabled) return null;
  if (pathname === '/donate' || pathname?.startsWith('/donate') || pathname === '/support' || pathname?.startsWith('/support')) return null;

  return (
    <aside
      aria-label="Community announcement"
      className="w-full relative z-20 overflow-hidden bg-[#0c0d12] border-b border-white/[0.09] text-white transition-colors"
      style={{
        minHeight: 'var(--top-banner-h, 36px)',
      }}
    >
      <div className="max-w-[1600px] mx-auto px-3 sm:px-6 lg:px-12 py-1.5 min-h-[36px] flex items-center justify-between sm:justify-center gap-3 sm:gap-5 flex-nowrap">
        {/* Larger Prominent Text Quote */}
        <p className="truncate text-xs sm:text-sm md:text-[14.5px] font-medium text-slate-100 leading-normal">
          <span className="hidden sm:inline">
            We&apos;re facing a hard time keeping MoviesNet alive —{' '}
          </span>
          <span className="sm:hidden">
            Facing hard times —{' '}
          </span>
          <span className="text-white font-semibold">please support our community</span>
        </p>

        {/* Clean Simple Button (No red color, simple & modern) */}
        <Link
          href="/support#donate"
          prefetch={false}
          data-no-ad="true"
          className="shrink-0 inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs sm:text-[13px] font-medium bg-white/[0.08] hover:bg-white/[0.16] text-white border border-white/20 hover:border-white/35 transition-all duration-150 active:scale-95 select-none cursor-pointer"
          title="Support MoviesNet Community"
        >
          <span>Support Us</span>
          <span className="text-xs sm:text-sm leading-none" aria-hidden="true">
            →
          </span>
        </Link>
      </div>
    </aside>
  );
}
