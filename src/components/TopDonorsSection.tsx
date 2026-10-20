'use client';

import React, { useEffect, useState } from 'react';
import type { Donation } from '@/lib/donations';

interface TopDonorsProps {
  dbDonations?: Donation[];
  discordHelp?: string;
}

export default function TopDonorsSection({ dbDonations = [], discordHelp }: TopDonorsProps) {
  // Only accept donations that have been explicitly approved/verified by the admin
  const isApproved = (d: Donation) => d.status === 'approved' || d.status === 'verified';

  const [liveDiscordHelp, setLiveDiscordHelp] = useState<string>(
    discordHelp || 'https://discord.com/users/1489691541126774857'
  );

  const [donations, setDonations] = useState<Donation[]>(() =>
    Array.isArray(dbDonations) ? dbDonations.filter(isApproved) : []
  );

  // Live client-side sync so approved donations reflect immediately without page re-deploy
  useEffect(() => {
    if (discordHelp) {
      setLiveDiscordHelp(discordHelp);
    } else {
      fetch('/api/social')
        .then((res) => res.json())
        .then((data) => {
          if (data?.discordHelp) setLiveDiscordHelp(data.discordHelp);
        })
        .catch(() => {});
    }

    const fetchDonations = () => {
      fetch('/api/donations')
        .then((res) => res.json())
        .then((data) => {
          if (Array.isArray(data.donations)) {
            setDonations(data.donations.filter(isApproved));
          }
        })
        .catch(() => {});
    };

    // If initial server data was empty or not provided, fetch client-side once
    if (!Array.isArray(dbDonations) || dbDonations.length === 0) {
      fetchDonations();
    }

    let bc: BroadcastChannel | null = null;
    try {
      if (typeof window !== 'undefined' && 'BroadcastChannel' in window) {
        bc = new BroadcastChannel('ash_live_sync');
        bc.onmessage = () => {
          fetchDonations();
        };
      }
    } catch {}

    const onStorage = (e: StorageEvent) => {
      if (e.key === 'ash_last_update_ts') {
        fetchDonations();
      }
    };
    window.addEventListener('storage', onStorage);

    return () => {
      bc?.close();
      window.removeEventListener('storage', onStorage);
    };
  }, []);

  // Sort approved donations by amount descending (or featured first)
  const sortedDonations = donations
    .filter(isApproved)
    .sort((a, b) => {
      if (a.isFeatured && !b.isFeatured) return -1;
      if (!a.isFeatured && b.isFeatured) return 1;
      return (Number(b.amount) || 0) - (Number(a.amount) || 0);
    });

  const hasDonors = sortedDonations.length > 0;

  return (
    <div className="w-full relative">
      {/* ── Ultra-Polished Stealth Matte Glass Card ── */}
      <div className="w-full rounded-3xl bg-[#0a0a0e]/85 border border-white/[0.12] p-5 sm:p-6 backdrop-blur-2xl shadow-[0_20px_60px_rgba(0,0,0,0.85)] relative overflow-hidden flex flex-col justify-between min-h-[360px] sm:min-h-[380px]">
        
        {/* Subtle top border shimmer */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-400/30 to-transparent pointer-events-none" />

        {/* Ambient background glow */}
        <div className="absolute -top-12 -right-12 w-36 h-36 bg-amber-500/[0.05] rounded-full blur-3xl pointer-events-none" />

        {/* ── Card Header ── */}
        <div className="flex items-center justify-between gap-3 pb-3 mb-3 border-b border-white/[0.08] relative z-10">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center text-amber-300 text-base shrink-0 shadow-inner">
              👑
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-headline text-sm sm:text-base font-bold text-white tracking-tight">
                  Top Donors
                </h3>
                <span className="px-2 py-0.5 rounded-full text-[9.5px] font-semibold bg-white/[0.06] text-slate-300 border border-white/10">
                  Hall of Fame
                </span>
              </div>
              <p className="text-[11px] text-slate-400 mt-0.5">
                Community supporters keeping MoviesNet free
              </p>
            </div>
          </div>

          <span className="text-[10.5px] font-mono text-slate-400 bg-white/[0.04] border border-white/10 px-2.5 py-1 rounded-lg shrink-0">
            {hasDonors ? `${sortedDonations.length} Backers` : '0 Donors'}
          </span>
        </div>

        {/* ── Card Body ── */}
        <div className="flex-1 flex flex-col justify-center items-center relative z-10 my-auto">
          {hasDonors ? (
            /* ── Real Donors (Jab admin panel se add ho) ── */
            <div className="w-full flex flex-col gap-2.5">
              {sortedDonations.slice(0, 5).map((d, idx) => {
                const rank = idx + 1;
                const isRank1 = rank === 1;
                const isRank2 = rank === 2;
                const isRank3 = rank === 3;
                const curr = (d.currency || 'INR').toUpperCase();
                const symbol = curr === 'INR' ? '₹' : curr === 'USD' ? '$' : '';
                const formattedAmount = `${symbol}${Number(d.amount).toLocaleString()} ${symbol ? '' : curr}`.trim();
                const initials = (d.name || 'AN')
                  .split(' ')
                  .map((w) => w[0])
                  .slice(0, 2)
                  .join('')
                  .toUpperCase() || 'SP';

                return (
                  <div
                    key={d.id || idx}
                    className={`flex items-center justify-between gap-3 p-2.5 sm:p-3 rounded-2xl border transition-all duration-200 ${
                      isRank1
                        ? 'bg-amber-500/[0.08] border-amber-500/35 shadow-[0_0_20px_rgba(245,158,11,0.06)]'
                        : isRank2
                        ? 'bg-slate-300/[0.05] border-slate-300/25'
                        : isRank3
                        ? 'bg-orange-500/[0.05] border-orange-500/25'
                        : 'bg-white/[0.03] border-white/10 hover:bg-white/[0.05]'
                    }`}
                  >
                    {/* Left: Rank + Avatar + Name */}
                    <div className="flex items-center gap-2.5 min-w-0">
                      <div
                        className={`w-7 h-7 rounded-xl flex items-center justify-center text-xs font-bold shrink-0 border ${
                          isRank1
                            ? 'bg-amber-500/20 text-amber-300 border-amber-500/40 shadow-inner'
                            : isRank2
                            ? 'bg-slate-400/15 text-slate-200 border-slate-300/30'
                            : isRank3
                            ? 'bg-orange-500/15 text-orange-300 border-orange-500/30'
                            : 'bg-white/[0.04] text-slate-400 border-white/10 font-mono text-[10.5px]'
                        }`}
                      >
                        {isRank1 ? '👑' : isRank2 ? '🥈' : isRank3 ? '🥉' : `#${rank}`}
                      </div>

                      <div
                        className={`w-7 h-7 sm:w-8 sm:h-8 rounded-xl flex items-center justify-center text-[10.5px] font-bold shrink-0 border ${
                          isRank1
                            ? 'bg-amber-500/20 text-amber-200 border-amber-500/30'
                            : 'bg-white/[0.06] text-slate-200 border-white/10'
                        }`}
                      >
                        {initials}
                      </div>

                      <div className="min-w-0">
                        <div className="flex items-center gap-1.5 flex-wrap">
                          <span className="font-semibold text-xs sm:text-sm text-white truncate max-w-[120px] sm:max-w-[150px]">
                            {d.name || 'Anonymous Supporter'}
                          </span>
                          {d.isFeatured && (
                            <span className="text-[9px] px-1.5 py-0.2 rounded-full bg-amber-500/20 border border-amber-500/30 text-amber-300 font-semibold">
                              ⭐ Featured
                            </span>
                          )}
                        </div>
                        <div className="flex items-center gap-1 text-[10px] text-slate-400 mt-0.5">
                          <span>{d.platform || 'UPI'}</span>
                          <span>•</span>
                          <span>{d.date || 'Recent'}</span>
                        </div>
                      </div>
                    </div>

                    {/* Right: Amount */}
                    <div className="text-right shrink-0">
                      <div
                        className={`text-xs sm:text-sm font-black font-mono tracking-tight ${
                          isRank1
                            ? 'text-amber-300'
                            : isRank2
                            ? 'text-slate-200'
                            : isRank3
                            ? 'text-orange-300'
                            : 'text-emerald-400'
                        }`}
                      >
                        {formattedAmount}
                      </div>
                      <span className="text-[9px] text-emerald-400 font-mono block">
                        Verified ✓
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            /* ── Bilkul Clean & Khali Place (Pura Empty State) ── */
            <div className="w-full py-8 sm:py-10 flex flex-col items-center justify-center text-center px-4">
              <div className="w-14 h-14 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center text-2xl text-slate-400 mb-3.5 shadow-inner">
                ✨
              </div>
              <h4 className="text-sm font-bold text-white mb-1">
                No Donors Yet
              </h4>
              <p className="text-xs text-slate-400 max-w-xs leading-relaxed">
                No contributions recorded yet. When someone supports the platform, their name will be proudly displayed here.
              </p>
            </div>
          )}
        </div>

        {/* ── Card Footer CTA ── */}
        <div className="mt-3 pt-3 border-t border-white/[0.08] flex items-center justify-between gap-2 text-xs relative z-10">
          <span className="text-[11px] text-slate-400">
            {hasDonors ? 'Want your name listed here?' : 'Be the first supporter'}
          </span>

          <div className="flex items-center gap-2">
            <a
              href={liveDiscordHelp}
              target="_blank"
              rel="noopener noreferrer"
              className="px-2.5 py-1.5 rounded-xl bg-[#5865F2]/15 hover:bg-[#5865F2]/25 text-[#a5b4fc] border border-[#5865F2]/30 font-bold text-[11px] transition-all active:scale-95 flex items-center gap-1 shrink-0"
              title="Get direct payment or website listing help on Discord"
            >
              <span>Discord Help</span>
              <span className="text-[9px]">↗</span>
            </a>

            <a
              href="#support-options"
              onClick={(e) => {
                e.preventDefault();
                const el = document.getElementById('support-options');
                if (el) {
                  el.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="px-3 py-1.5 rounded-xl bg-white hover:bg-slate-200 text-black font-bold text-[11px] transition-all active:scale-95 flex items-center gap-1.5 shrink-0 shadow-sm"
            >
              <span>Support Below</span>
              <span className="text-[10px]">↓</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
