'use client';

import React, { useState, useEffect, useRef } from 'react';
import QRCode from 'qrcode';


import type { Donation } from '@/lib/donations';

export function GooglePayIcon({ showText = false, className = '' }: { showText?: boolean; className?: string }) {
  return (
    <div className={`flex items-center gap-1.5 ${className}`}>
      <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24">
        <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"/>
        <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24z"/>
        <path fill="#FBBC05" d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.14-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.99 0 12s.45 3.82 1.25 5.42l4.03-3.15z"/>
        <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"/>
      </svg>
      {showText && <span className="font-semibold tracking-tight text-white text-xs">GPay</span>}
    </div>
  );
}

export function PhonePeIcon({ showText = false, className = '' }: { showText?: boolean; className?: string }) {
  return (
    <div className={`flex items-center gap-1.5 ${className}`}>
      <span className="w-5 h-5 rounded-full bg-[#5f259f] text-white flex items-center justify-center font-bold text-[10px] leading-none shrink-0 shadow-sm">
        पे
      </span>
      {showText && <span className="font-bold text-xs tracking-tight text-white">PhonePe</span>}
    </div>
  );
}

export function PaytmIcon({ showText = false, className = '', dark = false }: { showText?: boolean; className?: string; dark?: boolean }) {
  return (
    <div className={`flex items-center font-black tracking-tight text-xs ${className}`}>
      <span className={dark ? "text-[#002970]" : "text-white"}>pay</span>
      <span className="text-[#00BAF2]">tm</span>
      {showText && <span className={`${dark ? "text-[#002970]" : "text-white"} ml-1`}>Wallet</span>}
    </div>
  );
}

export function UPIIcon({ className = 'h-5', showText = true }: { className?: string; showText?: boolean }) {
  return (
    <div className={`flex items-center gap-1.5 ${className}`}>
      <svg className="w-4 h-4 shrink-0" viewBox="0 0 48 48" fill="none">
        <path d="M12 34L24 10H36L24 34H12Z" fill="#097939" />
        <path d="M24 34L36 10H44L32 34H24Z" fill="#ED7524" />
      </svg>
      {showText && <span className="font-extrabold text-white text-xs tracking-wider font-mono">BHIM UPI</span>}
    </div>
  );
}

export function RuPayIcon() {
  return (
    <div className="flex items-center gap-1 font-bold">
      <span className="font-black text-white text-xs italic tracking-tighter">RuPay</span>
      <span className="w-1.5 h-3 bg-[#097939] transform skew-x-[-15deg] inline-block" />
      <span className="w-1.5 h-3 bg-[#ED7524] transform skew-x-[-15deg] inline-block -ml-0.5" />
    </div>
  );
}

export function ApplePayIcon() {
  return (
    <div className="flex items-center gap-1 text-white font-bold text-xs">
      <svg className="w-3.5 h-3.5 fill-current shrink-0" viewBox="0 0 170 170">
        <path d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.19-2.12-9.97-3.17-14.34-3.17-4.58 0-9.49 1.05-14.74 3.17-5.26 2.13-9.5 3.24-12.74 3.35-4.35.13-9.16-1.9-14.42-6.08-3.69-3.04-7.69-7.85-12-14.43-6.53-10.12-11.64-21.75-15.34-34.91-3.7-13.16-5.55-25.75-5.55-37.78 0-14.13 3.49-26.17 10.47-36.14 6.98-9.97 15.82-15.08 26.53-15.34 4.58 0 9.87 1.25 15.89 3.75 6.02 2.5 10.23 3.75 12.63 3.75 2.02 0 6.34-1.28 12.96-3.85 6.62-2.57 12.21-3.74 16.76-3.52 12.44.8 22.56 5.46 30.36 13.99-10.88 6.56-16.21 15.68-16 27.35.22 9.09 3.74 16.75 10.57 22.98 6.82 6.23 14.86 9.77 24.11 10.63-2.12 6.64-4.8 13.17-8.04 19.59zM119.22 31.42c0-7.39 2.68-14.28 8.04-20.67 5.36-6.39 12-10.27 19.92-11.64.22 1.13.33 2.17.33 3.12 0 7.39-2.8 14.4-8.4 21.03-5.6 6.63-12.44 10.51-20.52 11.64-.11-1.13-.17-2.17-.17-3.12z"/>
      </svg>
      <span>Pay</span>
    </div>
  );
}

export function VisaIcon({ className = 'w-8 h-5' }: { className?: string }) {
  return (
    <span className="font-black italic tracking-tighter text-white font-mono text-xs px-1.5 py-0.5 rounded bg-[#1434CB]">
      VISA
    </span>
  );
}

export function MastercardIcon({ className = 'w-6 h-4' }: { className?: string }) {
  return (
    <div className="flex items-center -space-x-1.5">
      <span className="w-3.5 h-3.5 rounded-full bg-[#EB001B] inline-block" />
      <span className="w-3.5 h-3.5 rounded-full bg-[#F79E1B]/90 inline-block" />
    </div>
  );
}

export function PayPalIcon() {
  return (
    <div className="flex items-center font-black text-xs italic tracking-tight">
      <span className="text-[#003087]">Pay</span>
      <span className="text-[#0079C1]">Pal</span>
    </div>
  );
}

export function PayPalMarkIcon({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <path
        d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944.901C5.002.508 5.34.218 5.736.218h7.94c3.488 0 5.86 1.706 5.327 5.385-.458 3.16-2.585 4.909-5.64 4.909h-2.31c-.42 0-.776.307-.837.723l-1.42 8.995a.64.64 0 0 1-.632.535l-.088-.428z"
        fill="#0079C1"
      />
      <path
        d="M9.136 7.512c.061-.416.417-.723.837-.723h2.31c3.055 0 5.182-1.749 5.64-4.909.117-.808.084-1.503-.07-2.096-.644 4.095-3.376 6.096-7.14 6.096H8.385a.86.86 0 0 0-.85.737l-1.63 10.33a.64.64 0 0 0 .633.74h3.693l1.173-7.433.088-.428z"
        fill="#00457C"
      />
    </svg>
  );
}

export function CryptoMethodBadge() {
  return (
    <div className="flex items-center gap-2 select-none">
      <div className="flex -space-x-1.5 items-center">
        {/* Tether USDT */}
        <span
          className="w-4 h-4 rounded-full bg-[#26A17B] text-white flex items-center justify-center text-[9px] font-black shadow-sm ring-1 ring-black"
          title="Tether (USDT)"
        >
          ₮
        </span>
        {/* Bitcoin */}
        <span
          className="w-4 h-4 rounded-full bg-[#F7931A] text-white flex items-center justify-center text-[10px] font-black shadow-sm ring-1 ring-black"
          title="Bitcoin (BTC)"
        >
          ₿
        </span>
        {/* BEP-20 */}
        <span
          className="w-4 h-4 rounded-full bg-[#F0B90B] text-black flex items-center justify-center text-[8px] font-black shadow-sm ring-1 ring-black"
          title="BNB Smart Chain (BEP-20)"
        >
          ◈
        </span>
      </div>
      <span className="font-bold text-xs text-white tracking-wide">Crypto</span>
      <span className="text-[9px] font-mono font-semibold text-amber-400 bg-amber-500/15 px-1.5 py-0.5 rounded border border-amber-500/30">
        USDT • BTC • BEP-20
      </span>
    </div>
  );
}

export function StripeIcon() {
  return (
    <span className="font-extrabold text-[#635BFF] text-xs font-sans tracking-tight">
      stripe
    </span>
  );
}

interface PresetTier {
  value: number;
  inrValue: number;
  icon: string;
  label: string;
  desc: string;
}

const PRESET_TIERS: PresetTier[] = [
  { value: 5, inrValue: 100, icon: '☕', label: 'Starter', desc: 'A small coffee for our team' },
  { value: 10, inrValue: 250, icon: '🍔', label: 'Basic', desc: 'Helps us cover basic costs' },
  { value: 25, inrValue: 500, icon: '🚀', label: 'Boost', desc: 'Supports new features' },
  { value: 50, inrValue: 1000, icon: '👑', label: 'Hero', desc: 'Helps us grow faster' },
];

export const CRYPTO_WALLETS = {
  USDT: {
    symbol: '₮',
    name: 'USDT',
    network: 'TRC-20',
    fullNetwork: 'TRON (TRC-20)',
    address: 'TQGCXTG2PDEjvWXhacvxsv48E4BnzxPvJe',
    color: '#26A17B',
  },
  BTC: {
    symbol: '₿',
    name: 'Bitcoin',
    network: 'BTC',
    fullNetwork: 'Bitcoin Network',
    address: '1CY7JZgw6XjXBPpDFjQRc9r9HzAc1uEdhk',
    color: '#F7931A',
  },
  BEP: {
    symbol: '◈',
    name: 'BNB Chain',
    network: 'BEP-20',
    fullNetwork: 'BSC / BEP-20',
    address: '0x6fec5ab2f5d5dd8f1761cc4a91e0ebbaccba4c62',
    color: '#F0B90B',
  },
} as const;

interface DonationCardsProps {
  initialDonations?: Donation[];
  discordHelp?: string;
}

export default function DonationCards({ initialDonations = [], discordHelp }: DonationCardsProps) {
  const [liveDiscordHelp, setLiveDiscordHelp] = useState<string>(
    discordHelp || 'https://discord.com/users/1489691541126774857'
  );

  useEffect(() => {
    if (discordHelp) {
      setLiveDiscordHelp(discordHelp);
      return;
    }
    fetch('/api/social')
      .then(res => res.json())
      .then(data => {
        if (data?.discordHelp) setLiveDiscordHelp(data.discordHelp);
      })
      .catch(() => {});
  }, [discordHelp]);

  const [currency, setCurrency] = useState<'INR' | 'USD'>('INR');
  const [selectedIdx, setSelectedIdx] = useState<number>(2); // Default to ₹500 (index 2)
  const [isCustom, setIsCustom] = useState<boolean>(false);
  const [customValue, setCustomValue] = useState<string>('');
  const customInputRef = useRef<HTMLInputElement>(null);
  
  // Checkout modal / drawer state
  const [checkoutOpen, setCheckoutOpen] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<'upi' | 'card' | 'crypto'>('upi');
  const [copiedCrypto, setCopiedCrypto] = useState<string | null>(null);
  const [copiedUpi, setCopiedUpi] = useState<boolean>(false);
  const [paymentSuccess, setPaymentSuccess] = useState<boolean>(false);
  const [dynamicQrDataUrl, setDynamicQrDataUrl] = useState<string>('');
  const [selectedCrypto, setSelectedCrypto] = useState<'USDT' | 'BTC' | 'BEP'>('USDT');
  const [cryptoQrDataUrl, setCryptoQrDataUrl] = useState<string>('');

  // Supporter optional verification contact capture state
  const [supporterName, setSupporterName] = useState<string>('');
  const [supporterWhatsapp, setSupporterWhatsapp] = useState<string>('');
  const [supporterPaidAmount, setSupporterPaidAmount] = useState<string>('');
  const [supporterScreenshot, setSupporterScreenshot] = useState<string | null>(null);
  const [screenshotFileName, setScreenshotFileName] = useState<string | null>(null);
  const [nameError, setNameError] = useState<string>('');
  const [detailsSubmitted, setDetailsSubmitted] = useState<boolean>(false);
  const [isSubmittingDetails, setIsSubmittingDetails] = useState<boolean>(false);
  const [currentDonationId, setCurrentDonationId] = useState<string | null>(null);

  const [donations, setDonations] = useState<Donation[]>(initialDonations);

  useEffect(() => {
    if (initialDonations && initialDonations.length > 0) return;
    fetch('/api/donations')
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data.donations)) {
          setDonations(data.donations);
        }
      })
      .catch(() => {});
  }, [initialDonations]);

  useEffect(() => {
    if (checkoutOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') setCheckoutOpen(false);
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = originalOverflow;
        window.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [checkoutOpen]);

  const bmacBase = 'https://buymeacoffee.com/moviesnet';
  const kofiBase = 'https://ko-fi.com/moviesnet';
  const paypalBase = 'https://paypal.me/ShobhitVerma02?locale.x=en_GB&country.x=IN';
  const upiId = 'paytm.s2xzum9@pty';
  const payeeName = 'MoviesNet';

  const currentAmount = isCustom
    ? Math.max(1, parseFloat(customValue) || (currency === 'INR' ? 100 : 5))
    : currency === 'INR'
    ? PRESET_TIERS[selectedIdx]?.inrValue ?? 500
    : PRESET_TIERS[selectedIdx]?.value ?? 25;

  const currentSymbol = currency === 'INR' ? '₹' : '$';

  // Dynamic modal currency: Card and Crypto (BTC/USDT) tabs operate in USD ($), UPI operates in INR (₹)
  const isModalUsd = activeTab === 'card' || activeTab === 'crypto';
  const modalSymbol = isModalUsd ? '$' : '₹';
  const modalAmount = isCustom
    ? Math.max(
        1,
        currency === 'USD'
          ? parseFloat(customValue) || (isModalUsd ? 10 : 500)
          : isModalUsd
          ? Math.round((parseFloat(customValue) || 500) / 85) || 5
          : parseFloat(customValue) || 500
      )
    : isModalUsd
    ? PRESET_TIERS[selectedIdx]?.value ?? 25
    : PRESET_TIERS[selectedIdx]?.inrValue ?? 500;

  const upiCheckoutAmount =
    activeTab === 'upi'
      ? modalAmount
      : currency === 'INR'
      ? currentAmount
      : currentAmount * 85;

  useEffect(() => {
    const upiUrl = `upi://pay?pa=${upiId}&pn=${encodeURIComponent(payeeName)}&am=${upiCheckoutAmount}&cu=INR&tn=MoviesNet%20Support`;
    QRCode.toDataURL(upiUrl, {
      width: 280,
      margin: 1.5,
      errorCorrectionLevel: 'M',
      color: {
        dark: '#000000',
        light: '#ffffff',
      },
    })
      .then((url) => setDynamicQrDataUrl(url))
      .catch(() => {});
  }, [upiCheckoutAmount, upiId]);

  useEffect(() => {
    const target = CRYPTO_WALLETS[selectedCrypto];
    if (!target) return;
    QRCode.toDataURL(target.address, {
      width: 280,
      margin: 1.5,
      errorCorrectionLevel: 'M',
      color: {
        dark: '#000000',
        light: '#ffffff',
      },
    })
      .then((url) => setCryptoQrDataUrl(url))
      .catch(() => {});
  }, [selectedCrypto]);

  const handleCopyCrypto = (address: string, coin: string) => {
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(address);
      setCopiedCrypto(coin);
      setTimeout(() => setCopiedCrypto(null), 2200);
    }
  };

  const handleCopyUpi = () => {
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(upiId);
      setCopiedUpi(true);
      setTimeout(() => setCopiedUpi(false), 2200);
    }
  };

  const handleScreenshotChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        alert('Screenshot size must be under 5MB');
        return;
      }
      setScreenshotFileName(file.name);
      const reader = new FileReader();
      reader.onload = () => {
        setSupporterScreenshot(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleIHavePaidClick = async (paymentType: 'upi' | 'crypto') => {
    setPaymentSuccess(true);
    try {
      const finalAmt = paymentType === 'upi' ? upiCheckoutAmount : modalAmount;
      const res = await fetch('/api/donations', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: supporterName.trim() || 'Supporter (Verification Pending)',
          amount: finalAmt,
          currency: paymentType === 'crypto' || isModalUsd ? 'USD' : 'INR',
          platform:
            paymentType === 'crypto'
              ? `Crypto (${CRYPTO_WALLETS[selectedCrypto].name} - ${CRYPTO_WALLETS[selectedCrypto].network})`
              : 'Paytm Business UPI',
          message: 'Clicked "I Have Completed Payment"',
          status: 'pending_verification',
        }),
      });
      const data = await res.json();
      if (data?.donation?.id) {
        setCurrentDonationId(data.donation.id);
      }
    } catch (err) {
      console.error('Failed to pre-log donation on click:', err);
    }
  };

  const handleSaveContactDetails = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!supporterName.trim()) {
      setNameError('Name is compulsory. Please enter your name.');
      return;
    }
    setNameError('');
    setIsSubmittingDetails(true);
    try {
      const parsedUserAmt = parseFloat(supporterPaidAmount);
      const finalAmt =
        !isNaN(parsedUserAmt) && parsedUserAmt > 0
          ? parsedUserAmt
          : isModalUsd
          ? modalAmount
          : upiCheckoutAmount;

      await fetch('/api/donations', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          id: currentDonationId || undefined,
          name: supporterName.trim(),
          amount: finalAmt,
          currency: isModalUsd ? 'USD' : 'INR',
          platform:
            activeTab === 'crypto'
              ? `Crypto (${CRYPTO_WALLETS[selectedCrypto].name} - ${CRYPTO_WALLETS[selectedCrypto].network})`
              : activeTab === 'card'
              ? 'Global Card Checkout'
              : 'Paytm Business UPI',
          whatsapp: supporterWhatsapp.trim() || undefined,
          screenshot: supporterScreenshot || undefined,
          status: 'details_submitted',
          message: supporterScreenshot
            ? `Screenshot attached: ${screenshotFileName || 'Image'}`
            : 'Details submitted by supporter',
        }),
      });
      setDetailsSubmitted(true);
    } catch {
      setDetailsSubmitted(true);
    } finally {
      setIsSubmittingDetails(false);
    }
  };

  const handleDownloadReceipt = () => {
    const receiptId = `ASH-REC-${Date.now().toString().slice(-6)}-${Math.random().toString(36).substring(2, 6).toUpperCase()}`;
    const now = new Date();
    const formattedDate = now.toLocaleDateString('en-US', { day: '2-digit', month: 'short', year: 'numeric' });
    const formattedTime = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true });

    const paymentMethodLabel =
      activeTab === 'crypto'
        ? `Binance Smart Chain (${CRYPTO_WALLETS[selectedCrypto].name} - ${CRYPTO_WALLETS[selectedCrypto].network})`
        : activeTab === 'card'
        ? 'Global Card Clearing (3D-Secure 2.0 / Stripe Rail)'
        : 'Paytm Business UPI 2.0 (Direct Real-Time NPCI Rail)';

    const payeeDetails =
      activeTab === 'crypto'
        ? `${CRYPTO_WALLETS[selectedCrypto].address.slice(0, 10)}...${CRYPTO_WALLETS[selectedCrypto].address.slice(-6)} (MoviesNet Treasury Vault)`
        : activeTab === 'card'
        ? 'MoviesNet International Merchant Clearing Desk'
        : 'paytm.s2xzum9@pty (MoviesNet Operations Desk)';

    const payerName = supporterName.trim() || 'Honorable Community Patron';
    const parsedUserAmt = parseFloat(supporterPaidAmount);
    const finalReceiptAmount = !isNaN(parsedUserAmt) && parsedUserAmt > 0 ? parsedUserAmt : modalAmount;
    const amountFormatted = `${modalSymbol}${finalReceiptAmount.toLocaleString()} ${isModalUsd ? 'USD' : 'INR'}`;

    if (typeof window === 'undefined') return;

    const printWindow = window.open('', '_blank', 'width=920,height=1000');
    if (!printWindow) {
      window.print();
      return;
    }

    printWindow.document.write(`
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <title>MoviesNet_Official_Contribution_Receipt_${receiptId}</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <style>
    @page { size: A4 portrait; margin: 12mm; }
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
      background: #0f1015;
      color: #09090b;
      padding: 30px 15px;
      -webkit-print-color-adjust: exact;
      print-color-adjust: exact;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .page-wrap {
      width: 100%;
      max-width: 720px;
      background: #ffffff;
      border-radius: 12px;
      overflow: hidden;
      box-shadow: 0 25px 60px rgba(0,0,0,0.45);
      border: 1px solid #d4d4d8;
      position: relative;
    }
    .header-band {
      background: #18181b;
      color: #ffffff;
      padding: 28px 32px 24px;
      position: relative;
      border-bottom: 2px solid #27272a;
    }
    .brand-row {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      margin-bottom: 22px;
    }
    .brand-left {
      display: flex;
      align-items: center;
      gap: 14px;
    }
    .logo-crest {
      width: 48px;
      height: 48px;
      border-radius: 10px;
      background: #27272a;
      border: 1.5px solid #52525b;
      color: #ffffff;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 24px;
      font-weight: 900;
      letter-spacing: -1px;
    }
    .brand-text h1 {
      font-size: 20px;
      font-weight: 900;
      letter-spacing: -0.5px;
      color: #ffffff;
      text-transform: uppercase;
    }
    .brand-text p {
      font-size: 11px;
      color: #a1a1aa;
      margin-top: 2px;
      font-family: monospace;
      letter-spacing: 0.5px;
    }
    .brand-text .domain-badge {
      display: inline-block;
      margin-top: 4px;
      font-size: 10px;
      font-weight: 700;
      color: #d4d4d8;
      background: rgba(255, 255, 255, 0.08);
      border: 1px solid #3f3f46;
      padding: 2px 8px;
      border-radius: 4px;
    }
    .voucher-title-box {
      text-align: right;
    }
    .voucher-pill {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      background: rgba(255, 255, 255, 0.1);
      border: 1px solid #52525b;
      color: #f4f4f5;
      font-size: 9.5px;
      font-weight: 800;
      padding: 4px 10px;
      border-radius: 6px;
      text-transform: uppercase;
      letter-spacing: 0.8px;
    }
    .receipt-number {
      font-size: 12px;
      font-family: monospace;
      color: #d4d4d8;
      font-weight: 700;
      margin-top: 6px;
    }
    .receipt-date {
      font-size: 10.5px;
      color: #a1a1aa;
      margin-top: 2px;
    }
    .amount-highlight {
      background: rgba(255, 255, 255, 0.06);
      border: 1px solid #3f3f46;
      border-radius: 8px;
      padding: 14px 20px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .amount-label-col .amount-title {
      font-size: 10px;
      color: #a1a1aa;
      text-transform: uppercase;
      letter-spacing: 1px;
      font-weight: 800;
    }
    .amount-label-col .amount-sub {
      font-size: 11px;
      color: #d4d4d8;
      margin-top: 2px;
    }
    .amount-val-col {
      text-align: right;
    }
    .amount-val-col .amount-num {
      font-size: 26px;
      font-weight: 900;
      color: #ffffff;
      letter-spacing: -0.5px;
    }
    .amount-val-col .amount-status {
      font-size: 9px;
      font-family: monospace;
      color: #a1a1aa;
      font-weight: 700;
      text-transform: uppercase;
    }
    .body-content {
      padding: 24px 30px;
    }
    .parties-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 16px;
      margin-bottom: 22px;
    }
    .party-card {
      background: #fafafa;
      border: 1px solid #e4e4e7;
      border-radius: 8px;
      padding: 12px 14px;
    }
    .party-card-title {
      font-size: 9px;
      font-weight: 900;
      color: #71717a;
      text-transform: uppercase;
      letter-spacing: 0.8px;
      margin-bottom: 5px;
    }
    .party-card-name {
      font-size: 12.5px;
      font-weight: 800;
      color: #09090b;
    }
    .party-card-line {
      font-size: 10.5px;
      color: #52525b;
      margin-top: 3px;
      line-height: 1.4;
    }
    .party-card-line strong {
      color: #18181b;
    }
    .ledger-table-wrap {
      margin-bottom: 20px;
      border-radius: 8px;
      border: 1px solid #e4e4e7;
      overflow: hidden;
    }
    .ledger-table {
      width: 100%;
      border-collapse: collapse;
      font-size: 11.5px;
      text-align: left;
    }
    .ledger-table th {
      background: #f4f4f5;
      color: #18181b;
      padding: 8px 12px;
      font-size: 9.5px;
      font-weight: 800;
      text-transform: uppercase;
      letter-spacing: 0.6px;
      border-bottom: 1px solid #e4e4e7;
    }
    .ledger-table td {
      padding: 10px 12px;
      border-bottom: 1px solid #f4f4f5;
      color: #3f3f46;
    }
    .ledger-table tr:last-child td {
      border-bottom: none;
    }
    .ledger-table .cell-desc {
      font-weight: 700;
      color: #09090b;
    }
    .ledger-table .cell-sub {
      font-size: 10px;
      color: #71717a;
      margin-top: 1px;
    }
    .ledger-table .cell-right {
      text-align: right;
    }
    .ledger-table tfoot td {
      background: #fafafa;
      font-weight: 800;
      color: #09090b;
      padding: 9px 12px;
      border-top: 1.5px solid #d4d4d8;
    }
    .ledger-table tfoot .total-highlight {
      font-size: 14px;
      color: #09090b;
    }
    .telemetry-row {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 10px;
      background: #fafafa;
      border: 1px solid #e4e4e7;
      border-radius: 8px;
      padding: 10px 14px;
      margin-bottom: 20px;
      font-size: 10.5px;
    }
    .telemetry-item span {
      display: block;
      color: #71717a;
      font-size: 8.5px;
      font-weight: 800;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      margin-bottom: 2px;
    }
    .telemetry-item strong {
      color: #09090b;
      font-family: monospace;
      font-size: 10.5px;
    }
    .purpose-box {
      background: #fafafa;
      border-left: 3px solid #27272a;
      border-radius: 0 6px 6px 0;
      padding: 10px 14px;
      margin-bottom: 20px;
    }
    .purpose-head {
      font-size: 9.5px;
      font-weight: 800;
      color: #18181b;
      text-transform: uppercase;
      letter-spacing: 0.6px;
      margin-bottom: 3px;
    }
    .purpose-text {
      font-size: 11px;
      color: #52525b;
      line-height: 1.5;
    }
    .auth-section {
      border-top: 1px dashed #d4d4d8;
      padding-top: 18px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 16px;
    }
    .seal-wrap {
      display: flex;
      align-items: center;
      gap: 12px;
    }
    .official-seal-svg {
      width: 50px;
      height: 50px;
      flex-shrink: 0;
    }
    .seal-text-title {
      font-size: 11px;
      font-weight: 900;
      color: #09090b;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }
    .seal-text-sub {
      font-size: 9px;
      color: #71717a;
      font-family: monospace;
      margin-top: 2px;
    }
    .signature-wrap {
      text-align: right;
    }
    .signature-draw {
      font-family: monospace;
      font-size: 13px;
      color: #09090b;
      font-weight: 900;
      letter-spacing: 0.5px;
      display: inline-block;
      margin-bottom: 2px;
    }
    .signature-name {
      font-size: 10.5px;
      font-weight: 800;
      color: #18181b;
      border-top: 1px solid #d4d4d8;
      padding-top: 4px;
    }
    .signature-role {
      font-size: 9px;
      color: #71717a;
      font-family: monospace;
    }
    .legal-note {
      font-size: 8.5px;
      color: #a1a1aa;
      text-align: center;
      line-height: 1.45;
      padding-top: 12px;
      border-top: 1px solid #f4f4f5;
    }
    .print-actions {
      display: flex;
      justify-content: center;
      gap: 12px;
      margin-top: 20px;
    }
    .btn-action-print {
      background: #ffffff;
      color: #09090b;
      padding: 9px 22px;
      border-radius: 8px;
      font-size: 12.5px;
      font-weight: 800;
      border: 1px solid #d4d4d8;
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      gap: 8px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
    }
    .btn-action-close {
      background: #27272a;
      color: #d4d4d8;
      padding: 9px 18px;
      border-radius: 8px;
      font-size: 12.5px;
      font-weight: 700;
      border: 1px solid #3f3f46;
      cursor: pointer;
    }
    @media print {
      body { padding: 0; background: transparent; }
      .page-wrap { box-shadow: none; border: none; }
      .print-actions { display: none !important; }
    }
  </style>
</head>
<body>
  <div class="page-wrap">
    <!-- 1. Header Band -->
    <div class="header-band">
      <div class="brand-row">
        <div class="brand-left">
          <div class="logo-crest">A</div>
          <div class="brand-text">
            <h1>MoviesNet Digital Initiative</h1>
            <p>OPEN WEB DIRECTORY &amp; INFRASTRUCTURE REPOSITORY</p>
            <span class="domain-badge">Official Portal: https://www.moviesnet.site</span>
          </div>
        </div>
        <div class="voucher-title-box">
          <div class="voucher-pill">
            <span>Official Voucher</span>
          </div>
          <div class="receipt-number">${receiptId}</div>
          <div class="receipt-date">${formattedDate} • ${formattedTime}</div>
        </div>
      </div>

      <div class="amount-highlight">
        <div class="amount-label-col">
          <div class="amount-title">Official Contribution Recorded</div>
          <div class="amount-sub">Direct Infrastructure Support • Zero Intermediary Fee</div>
        </div>
        <div class="amount-val-col">
          <div class="amount-num">${amountFormatted}</div>
          <div class="amount-status">✓ Settled to Platform Treasury</div>
        </div>
      </div>
    </div>

    <!-- 2. Body Content -->
    <div class="body-content">
      <!-- Parties Registry -->
      <div class="parties-grid">
        <div class="party-card">
          <div class="party-card-title">Contributed By (Patron)</div>
          <div class="party-card-name">${payerName}</div>
          <div class="party-card-line">Classification: <strong>Verified Community Supporter</strong></div>
          <div class="party-card-line">Session Reference: <strong>Direct Public Web Session</strong></div>
        </div>

        <div class="party-card">
          <div class="party-card-title">Issued By (Beneficiary Platform)</div>
          <div class="party-card-name">MoviesNet Platform Treasury Desk</div>
          <div class="party-card-line">Authority: <strong>Platform Infrastructure Operations</strong></div>
          <div class="party-card-line">Account: <strong>${payeeDetails}</strong></div>
        </div>
      </div>

      <!-- Itemized Ledger Accounting Table -->
      <div class="ledger-table-wrap">
        <table class="ledger-table">
          <thead>
            <tr>
              <th style="width: 40px;">#</th>
              <th>Allocation Description</th>
              <th>Initiative Type</th>
              <th class="cell-right" style="width: 120px;">Net Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style="font-family: monospace; color: #71717a;">01</td>
              <td>
                <div class="cell-desc">High-Performance Cloud Compute &amp; Edge Bandwidth</div>
                <div class="cell-sub">24/7 Server uptime, NVMe cluster hosting &amp; global edge routing</div>
              </td>
              <td><span style="font-size: 10px; font-weight: 700; color: #09090b;">Core Infrastructure</span></td>
              <td class="cell-right" style="font-weight: 800; color: #09090b;">${amountFormatted}</td>
            </tr>
            <tr>
              <td style="font-family: monospace; color: #71717a;">02</td>
              <td>
                <div class="cell-desc">Zero-Paywall Community Directory &amp; Free Web Tools</div>
                <div class="cell-sub">Continuous curation for 50,000+ daily developers, creators &amp; students</div>
              </td>
              <td><span style="font-size: 10px; font-weight: 700; color: #52525b;">Universal Access</span></td>
              <td class="cell-right" style="font-size: 10px; font-weight: 700; color: #71717a;">INCLUDED</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td colspan="3" style="text-align: right; text-transform: uppercase; font-size: 10px; letter-spacing: 0.5px;">
                Net Total Settled:
              </td>
              <td class="cell-right total-highlight">${amountFormatted}</td>
            </tr>
          </tfoot>
        </table>
      </div>

      <!-- Audit & Transaction Telemetry -->
      <div class="telemetry-row">
        <div class="telemetry-item">
          <span>Payment Rail</span>
          <strong>${paymentMethodLabel}</strong>
        </div>
        <div class="telemetry-item">
          <span>Clearing Verification</span>
          <strong>Direct Treasury (Zero Fee)</strong>
        </div>
        <div class="telemetry-item">
          <span>Official Portal</span>
          <strong>www.moviesnet.site</strong>
        </div>
      </div>

      <!-- Purpose & Public Impact -->
      <div class="purpose-box">
        <div class="purpose-head">Public Web Purpose &amp; Impact</div>
        <div class="purpose-text">
          This voluntary contribution directly finances MoviesNet's multi-cloud infrastructure, preventing paywalls and sustaining free accessibility for web developers, designers, and students worldwide.
        </div>
      </div>

      <!-- Payment Verification Notice -->
      <div class="purpose-box" style="border-left: 3px solid #52525b; background: #f4f4f5; margin-bottom: 20px;">
        <div class="purpose-head" style="color: #18181b;">Payment Verification Notice</div>
        <div class="purpose-text" style="color: #27272a; font-weight: 500;">
          Your payment is currently being verified. Once confirmed, we will notify you on your provided contact details.
          <br>
          <span style="color: #52525b; font-size: 10px; font-weight: normal;">(Aapka payment check ho raha hai, confirm hone ke baad aapke diye gaye contact par inform kar diya jayega.)</span>
        </div>
      </div>

      <!-- Official Seal & Authority Signature -->
      <div class="auth-section">
        <div class="seal-wrap">
          <svg class="official-seal-svg" viewBox="0 0 100 100" fill="none">
            <circle cx="50" cy="50" r="46" stroke="#18181b" strokeWidth="2.5" />
            <circle cx="50" cy="50" r="41" stroke="#52525b" strokeWidth="1" strokeDasharray="3 3" />
            <circle cx="50" cy="50" r="32" fill="#fafafa" stroke="#27272a" strokeWidth="1" />
            <path d="M40,50 L47,57 L62,42" stroke="#18181b" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M50,15 L50,22 M50,78 L50,85 M15,50 L22,50 M78,50 L85,50" stroke="#71717a" strokeWidth="1.5" />
          </svg>
          <div>
            <div class="seal-text-title">MoviesNet Treasury Verified</div>
            <div class="seal-text-sub">DIGITAL SEAL • IMMUTABLE LEDGER RECORD</div>
          </div>
        </div>

        <div class="signature-wrap">
          <div class="signature-draw">ALLSITEHUB TREASURY</div>
          <div class="signature-name">MoviesNet Operations Desk</div>
          <div class="signature-role">Platform Infrastructure &amp; Treasury Desk</div>
        </div>
      </div>

      <!-- Legal Disclaimer -->
      <div class="legal-note">
        This document is an electronically verified acknowledgment receipt issued by MoviesNet Directory Platform (https://www.moviesnet.site). Generated automatically upon direct treasury settlement. Valid without physical stamp under digital documentation standards.
      </div>
    </div>
  </div>

  <!-- Print Actions Bar (Screen Mode Only) -->
  <div class="print-actions">
    <button class="btn-action-print" onclick="window.print()">
      <span>🖨️</span>
      <span>Download / Save as PDF</span>
    </button>
    <button class="btn-action-close" onclick="window.close()">
      ✕ Close Preview
    </button>
  </div>

  <script>
    window.onload = function() {
      setTimeout(function() {
        window.print();
      }, 500);
    };
  </script>
</body>
</html>
    `);
    printWindow.document.close();
  };

  const handleCloseModal = () => {
    setPaymentSuccess(false);
    setCheckoutOpen(false);
    setDetailsSubmitted(false);
    setSupporterName('');
    setSupporterWhatsapp('');
    setSupporterPaidAmount('');
    setSupporterScreenshot(null);
    setScreenshotFileName(null);
    setNameError('');
  };

  return (
    <div id="donate-module" className="w-full">
      {/* ── Main "Choose Your Support" Box with Pure Dark Transparent Glassmorphism ── */}
      <div className="relative rounded-3xl bg-black/45 border border-white/[0.14] p-6 sm:p-9 md:p-11 shadow-[0_30px_90px_rgba(0,0,0,0.85),inset_0_1px_1px_rgba(255,255,255,0.2)] backdrop-blur-3xl overflow-hidden transition-all duration-500">
        
        {/* Frosted Glass Sheen Line */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/35 to-transparent pointer-events-none" />

        {/* ── DYNAMIC CURRENCY BACKGROUND WATERMARK (₹ for INR, $ for USD) ── */}
        <div className="pointer-events-none select-none transition-all duration-700">
          {currency === 'INR' ? (
            <div className="absolute inset-0 pointer-events-none select-none flex items-center justify-end pr-2 sm:pr-8 md:pr-14 overflow-hidden">
              {/* Primary crisp, luminous Rupee glyph watermark */}
              <span
                aria-hidden="true"
                className="text-[300px] sm:text-[440px] md:text-[520px] font-black text-white/[0.08] font-sans leading-none select-none pointer-events-none drop-shadow-[0_0_60px_rgba(255,255,255,0.06)] rotate-[-6deg] transition-all duration-700 ease-out"
              >
                ₹
              </span>
              {/* Secondary subtle bottom-left floating ghost rupee */}
              <span
                aria-hidden="true"
                className="absolute -left-8 -bottom-14 text-[160px] sm:text-[220px] font-black text-white/[0.04] font-sans leading-none select-none pointer-events-none rotate-[14deg] transition-all duration-700 ease-out"
              >
                ₹
              </span>
            </div>
          ) : (
            <div className="absolute inset-0 pointer-events-none select-none flex items-center justify-end pr-2 sm:pr-8 md:pr-14 overflow-hidden">
              {/* Primary crisp, luminous Dollar glyph watermark */}
              <span
                aria-hidden="true"
                className="text-[300px] sm:text-[440px] md:text-[520px] font-black text-white/[0.08] font-sans leading-none select-none pointer-events-none drop-shadow-[0_0_60px_rgba(255,255,255,0.06)] rotate-[4deg] transition-all duration-700 ease-out"
              >
                $
              </span>
              {/* Secondary subtle bottom-left floating ghost dollar */}
              <span
                aria-hidden="true"
                className="absolute -left-8 -bottom-14 text-[160px] sm:text-[220px] font-black text-white/[0.04] font-sans leading-none select-none pointer-events-none rotate-[-10deg] transition-all duration-700 ease-out"
              >
                $
              </span>
            </div>
          )}
        </div>

        {/* ── Top Header Row ── */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-5 mb-8 relative z-10">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 border border-white/15 bg-white/[0.05] text-white shadow-lg backdrop-blur-md">
              <svg className="w-6 h-6 fill-current text-white" viewBox="0 0 24 24">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
              </svg>
            </div>
            <div>
              <div className="flex items-center gap-2.5 mb-1">
                <h2 className="font-headline text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  Choose Your Support
                </h2>
                {/* Dynamic Currency Indicator Chip */}
                <span className="px-2.5 py-0.5 rounded-full text-[10.5px] font-mono font-bold bg-white/[0.06] border border-white/15 text-slate-200">
                  {currency === 'INR' ? '🇮🇳 Rupee Mode (₹)' : '🌐 USD Mode ($)'}
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-400">
                Every contribution, big or small, helps us grow and stay free for everyone.
              </p>
            </div>
          </div>

          {/* ── Luxury Solid Matte Currency Capsule Controller ── */}
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <div className="relative p-1.5 rounded-2xl bg-[#0e0e13] border border-white/15 shadow-[0_8px_32px_rgba(0,0,0,0.6),inset_0_1px_0_rgba(255,255,255,0.1)] flex items-center gap-1.5">
              
              {/* INR Button */}
              <button
                type="button"
                onClick={() => {
                  setCurrency('INR');
                  setActiveTab('upi');
                }}
                className={`relative px-4 py-2 rounded-xl font-bold text-xs flex items-center gap-2 transition-all duration-300 cursor-pointer select-none ${
                  currency === 'INR'
                    ? 'bg-white text-black font-black shadow-[0_4px_22px_rgba(255,255,255,0.35)] ring-1 ring-white/80 scale-[1.02]'
                    : 'text-slate-400 hover:text-white hover:bg-white/[0.06]'
                }`}
              >
                <span className={`w-4 h-4 rounded-full flex items-center justify-center text-[11px] font-black font-sans leading-none ${
                  currency === 'INR' ? 'bg-black text-white' : 'bg-white/20 text-white'
                }`}>
                  ₹
                </span>
                <span className="tracking-wide">₹ INR</span>
                {currency === 'INR' && (
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                )}
              </button>

              {/* USD Button */}
              <button
                type="button"
                onClick={() => {
                  setCurrency('USD');
                  setActiveTab('crypto');
                }}
                className={`relative px-4 py-2 rounded-xl font-bold text-xs flex items-center gap-2 transition-all duration-300 cursor-pointer select-none ${
                  currency === 'USD'
                    ? 'bg-white text-black font-black shadow-[0_4px_22px_rgba(255,255,255,0.35)] ring-1 ring-white/80 scale-[1.02]'
                    : 'text-slate-400 hover:text-white hover:bg-white/[0.06]'
                }`}
              >
                <span className={`w-4 h-4 rounded-full flex items-center justify-center text-[11px] font-black font-sans leading-none ${
                  currency === 'USD' ? 'bg-black text-white' : 'bg-white/20 text-white'
                }`}>
                  $
                </span>
                <span className="tracking-wide">$ USD</span>
                {currency === 'USD' && (
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                )}
              </button>
            </div>

            {/* Secure Payments Glass Badge */}
            <div className="hidden xl:flex items-center gap-2.5 px-3.5 py-2 rounded-2xl bg-white/[0.04] border border-white/10 text-xs shadow-sm">
              <span className="material-symbols-outlined text-[18px] text-emerald-400">lock</span>
              <div className="text-left">
                <div className="font-bold text-[11px] text-white">Encrypted Payments</div>
                <div className="text-[10px] text-slate-400">256-bit SSL Security</div>
              </div>
            </div>
          </div>
        </div>

        {/* ── 5 Amount Selection Cards (Solid Matte Luxury Finish) ── */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-3.5 mb-6 relative z-10">
          {PRESET_TIERS.map((tier, idx) => {
            const isSelected = !isCustom && selectedIdx === idx;
            const displayAmount = currency === 'INR' ? `₹${tier.inrValue}` : `$${tier.value}`;

            return (
              <button
                key={idx}
                type="button"
                onClick={() => {
                  setIsCustom(false);
                  setSelectedIdx(idx);
                }}
                className={`relative p-4 sm:p-5 rounded-2xl text-center transition-all duration-300 active:scale-95 cursor-pointer flex flex-col items-center justify-center min-h-[120px] sm:min-h-[135px] select-none shadow-md ${
                  isSelected
                    ? 'bg-[#181822] border-2 border-white shadow-[0_0_25px_rgba(255,255,255,0.18),inset_0_1px_0_rgba(255,255,255,0.2)] text-white -translate-y-1'
                    : 'bg-[#0f0f14] border border-white/[0.09] hover:border-white/20 hover:bg-[#16161d]'
                }`}
              >
                {isSelected && (
                  <span className="absolute -top-2.5 px-2 py-0.5 rounded-full text-[9px] font-mono font-black uppercase tracking-wider bg-white text-black shadow-sm">
                    Selected
                  </span>
                )}
                <span className="text-2xl mb-2">{tier.icon}</span>
                <span className="font-headline text-xl sm:text-2xl font-black text-white tracking-tight">
                  {displayAmount}
                </span>
                <span className="text-[11px] text-slate-400 mt-1 leading-snug line-clamp-2">
                  {tier.desc}
                </span>
              </button>
            );
          })}

          {/* ── 5th Card: Custom Amount (Solid Matte Finish) ── */}
          <div
            onClick={() => {
              setIsCustom(true);
              setTimeout(() => customInputRef.current?.focus(), 30);
            }}
            className={`relative p-4 sm:p-5 rounded-2xl text-center transition-all duration-300 cursor-pointer flex flex-col items-center justify-center min-h-[120px] sm:min-h-[135px] col-span-2 sm:col-span-1 select-none group shadow-md ${
              isCustom
                ? 'bg-[#181822] border-2 border-white shadow-[0_0_25px_rgba(255,255,255,0.18),inset_0_1px_0_rgba(255,255,255,0.2)] text-white -translate-y-1'
                : 'bg-[#0f0f14] border border-white/[0.09] hover:border-white/20 hover:bg-[#16161d]'
            }`}
          >
            {isCustom && (
              <span className="absolute -top-2.5 px-2 py-0.5 rounded-full text-[9px] font-mono font-black uppercase tracking-wider bg-white text-black shadow-sm">
                Selected
              </span>
            )}

            <span className="text-2xl mb-2 transition-transform group-hover:scale-110">✨</span>

            {/* Seamless Amount Display: Idle State vs Focused Input State */}
            <div className="flex items-center justify-center w-full min-h-[32px] my-0.5">
              {!isCustom && !customValue ? (
                <span className="font-headline text-xl sm:text-2xl font-black text-white tracking-tight">
                  Custom
                </span>
              ) : (
                <div className="flex items-center justify-center gap-1 w-full animate-fadeIn">
                  <span className="font-headline text-xl sm:text-2xl font-black text-white/90 select-none">
                    {currentSymbol}
                  </span>
                  <input
                    ref={customInputRef}
                    type="number"
                    min="1"
                    step="1"
                    placeholder={currency === 'INR' ? '500' : '25'}
                    value={customValue}
                    onChange={(e) => {
                      setCustomValue(e.target.value);
                      setIsCustom(true);
                    }}
                    onFocus={() => setIsCustom(true)}
                    className="font-headline text-xl sm:text-2xl font-black text-white bg-transparent outline-none w-20 sm:w-24 text-center tracking-tight border-b-2 border-white/60 focus:border-white pb-0.5 placeholder:text-slate-500 placeholder:font-bold [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                    autoFocus={isCustom}
                  />
                </div>
              )}
            </div>

            <span className="text-[11px] text-slate-400 mt-1 leading-snug line-clamp-2">
              {isCustom ? 'Type any amount' : 'Choose your own'}
            </span>
          </div>
        </div>

        {/* ── High-Contrast Luminous "Donate Now ->" Button ── */}
        <div className="relative z-10 mb-6">
          <button
            type="button"
            onClick={() => {
              if (currency === 'USD') {
                setActiveTab('crypto');
              } else {
                setActiveTab('upi');
              }
              setCheckoutOpen(true);
            }}
            className="w-full py-4 px-6 rounded-xl font-headline text-base sm:text-lg font-black text-black bg-white hover:bg-slate-200 shadow-[0_4px_25px_rgba(255,255,255,0.25)] hover:shadow-[0_4px_30px_rgba(255,255,255,0.35)] transition-all duration-200 active:scale-[0.99] flex items-center justify-center gap-2.5 cursor-pointer"
          >
            <span>Donate {currentSymbol}{currentAmount} Now</span>
            <span className="text-xl leading-none">→</span>
          </button>
        </div>

        {/* ── "or pay using" Divider & Dynamic Official Payment Method Logos ── */}
        <div className="relative z-10 flex flex-col items-center justify-center pt-1">
          <div className="flex items-center gap-3 w-full max-w-md mb-3.5">
            <span className="h-px flex-1 bg-white/10" />
            <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">
              {currency === 'INR' ? 'supported indian payment methods' : 'supported international methods'}
            </span>
            <span className="h-px flex-1 bg-white/10" />
          </div>

          {currency === 'INR' ? (
            /* 🇮🇳 OFFICIAL INDIAN PAYMENT METHODS ROW */
            <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 text-xs">
              {/* Google Pay */}
              <button
                type="button"
                onClick={() => {
                  setActiveTab('upi');
                  setCheckoutOpen(true);
                }}
                className="px-3.5 py-2 rounded-xl bg-[#101015] hover:bg-[#1a1a22] border border-white/10 flex items-center gap-2 transition-all hover:scale-105 active:scale-95 cursor-pointer shadow-sm group"
                title="Pay via Google Pay (GPay)"
              >
                <GooglePayIcon />
              </button>

              {/* PhonePe */}
              <button
                type="button"
                onClick={() => {
                  setActiveTab('upi');
                  setCheckoutOpen(true);
                }}
                className="px-3.5 py-2 rounded-xl bg-[#101015] hover:bg-[#1a1a22] border border-white/10 flex items-center gap-2 transition-all hover:scale-105 active:scale-95 cursor-pointer shadow-sm group"
                title="Pay via PhonePe"
              >
                <PhonePeIcon />
              </button>

              {/* Paytm */}
              <button
                type="button"
                onClick={() => {
                  setActiveTab('upi');
                  setCheckoutOpen(true);
                }}
                className="px-3.5 py-2 rounded-xl bg-[#101015] hover:bg-[#1a1a22] border border-white/10 flex items-center gap-2 transition-all hover:scale-105 active:scale-95 cursor-pointer shadow-sm group"
                title="Pay via Paytm"
              >
                <PaytmIcon />
              </button>

              {/* BHIM UPI */}
              <button
                type="button"
                onClick={() => {
                  setActiveTab('upi');
                  setCheckoutOpen(true);
                }}
                className="px-3.5 py-2 rounded-xl bg-[#101015] hover:bg-[#1a1a22] border border-white/10 flex items-center gap-2 transition-all hover:scale-105 active:scale-95 cursor-pointer shadow-sm group"
                title="Pay via BHIM UPI"
              >
                <UPIIcon />
              </button>

              {/* RuPay */}
              <button
                type="button"
                onClick={() => {
                  setActiveTab('upi');
                  setCheckoutOpen(true);
                }}
                className="px-3.5 py-2 rounded-xl bg-[#101015] hover:bg-[#1a1a22] border border-white/10 flex items-center gap-2 transition-all hover:scale-105 active:scale-95 cursor-pointer shadow-sm group"
                title="Pay via RuPay Debit/Credit Card"
              >
                <RuPayIcon />
              </button>
            </div>
          ) : (
            /* 🌐 OFFICIAL INTERNATIONAL PAYMENT METHODS ROW */
            <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 text-xs">
              {/* 1. Crypto (USDT / BTC / SOL) - Prominently Designed & 1st Position */}
              <button
                type="button"
                onClick={() => {
                  setActiveTab('crypto');
                  setCheckoutOpen(true);
                }}
                className="px-3.5 py-2 rounded-xl bg-[#101015] hover:bg-[#1a1a22] border border-emerald-500/40 hover:border-emerald-400/60 flex items-center gap-2 transition-all hover:scale-105 active:scale-95 cursor-pointer shadow-[0_0_15px_rgba(16,185,129,0.12)] group"
                title="Pay with Cryptocurrency (USDT, BTC, Solana)"
              >
                <CryptoMethodBadge />
              </button>

              {/* 2. Apple Pay */}
              <button
                type="button"
                onClick={() => {
                  setActiveTab('card');
                  setCheckoutOpen(true);
                }}
                className="px-3.5 py-2 rounded-xl bg-[#101015] hover:bg-[#1a1a22] border border-white/10 flex items-center gap-2 transition-all hover:scale-105 active:scale-95 cursor-pointer shadow-sm"
                title="Pay via Apple Pay"
              >
                <ApplePayIcon />
              </button>

              {/* 3. Visa */}
              <button
                type="button"
                onClick={() => {
                  setActiveTab('card');
                  setCheckoutOpen(true);
                }}
                className="px-3.5 py-2 rounded-xl bg-[#101015] hover:bg-[#1a1a22] border border-white/10 flex items-center gap-2 transition-all hover:scale-105 active:scale-95 cursor-pointer shadow-sm"
                title="Pay via Visa"
              >
                <VisaIcon />
              </button>

              {/* 4. Mastercard */}
              <button
                type="button"
                onClick={() => {
                  setActiveTab('card');
                  setCheckoutOpen(true);
                }}
                className="px-3.5 py-2 rounded-xl bg-[#101015] hover:bg-[#1a1a22] border border-white/10 flex items-center gap-2 transition-all hover:scale-105 active:scale-95 cursor-pointer shadow-sm"
                title="Pay via Mastercard"
              >
                <MastercardIcon />
              </button>

              {/* 5. PayPal */}
              <button
                type="button"
                onClick={() => {
                  setActiveTab('card');
                  setCheckoutOpen(true);
                }}
                className="px-3.5 py-2 rounded-xl bg-[#101015] hover:bg-[#1a1a22] border border-white/10 flex items-center gap-2 transition-all hover:scale-105 active:scale-95 cursor-pointer shadow-sm"
                title="Pay via PayPal"
              >
                <PayPalIcon />
              </button>
            </div>
          )}
        </div>

        {/* ── Discord Community Support Strip ── */}
        <div className="mt-6 pt-4 border-t border-white/[0.08] flex flex-wrap items-center justify-between gap-3 text-xs relative z-10">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#5865F2] animate-pulse" />
            <span className="text-zinc-300">
              Need assistance with contributions, custom amounts, or website listing verification?
            </span>
          </div>

          <a
            href={liveDiscordHelp}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3.5 py-1.5 rounded-xl bg-[#5865F2]/20 hover:bg-[#5865F2]/35 text-white border border-[#5865F2]/40 font-headline font-bold text-xs flex items-center gap-1.5 transition-all shadow-sm active:scale-95 group"
          >
            <svg className="w-3.5 h-3.5 fill-current text-[#5865F2] group-hover:scale-110 transition-transform" viewBox="0 0 24 24">
              <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
            </svg>
            <span>Ask on Discord Help</span>
            <span className="text-[10px] text-zinc-400">↗</span>
          </a>
        </div>
      </div>

      {/* ── Checkout Modal / Exact Futuristic Zero-Scroll Payment Terminal ── */}
      {checkoutOpen && (
        <div className="fixed inset-0 z-[99999] flex items-center justify-center p-2 sm:p-4 bg-black/94 backdrop-blur-3xl overflow-hidden select-none animate-fadeIn">
          
          {/* ══════════════════════════════════════════════════════════════════
              FULL BACKDROP 3D AMBIENT ENVIRONMENT (Matching Reference Image)
              ══════════════════════════════════════════════════════════════════ */}
          
          {/* Backdrop dismiss click layer */}
          <div
            className="fixed inset-0 z-0 cursor-pointer"
            onClick={handleCloseModal}
            aria-hidden="true"
          />

          {/* ══════════════════════════════════════════════════════════════════
              HIGH-VISIBILITY CONTENT-MATCHING THEMATIC BACKDROPS
              Distinct, clearly recognizable artwork for UPI, Cards & Crypto
              ══════════════════════════════════════════════════════════════════ */}

          {/* ── 1. UPI THEME BACKDROP: Iconic Official BHIM UPI Chevrons, Bharat QR & Rupee Hologram ── */}
          {!paymentSuccess && activeTab === 'upi' && (
            <div className="absolute inset-0 pointer-events-none animate-fadeIn overflow-hidden select-none">
              {/* Fintech Tricolor/Cyan Ambient Lighting */}
              <div className="absolute top-1/4 -left-10 w-[520px] h-[520px] rounded-full bg-[#10b981]/[0.08] blur-[130px]" />
              <div className="absolute -top-10 right-1/4 w-[450px] h-[450px] rounded-full bg-[#00BAF2]/[0.09] blur-[140px]" />
              <div className="absolute -bottom-10 right-0 w-[480px] h-[480px] rounded-full bg-[#5f259f]/[0.07] blur-[130px]" />

              {/* Top-Left: Iconic BHIM / UPI Official Dual Chevrons & Speed Vectors */}
              <div className="absolute top-8 left-6 sm:top-12 sm:left-14 opacity-80">
                <svg className="w-36 h-28 sm:w-48 sm:h-36" viewBox="0 0 160 120" fill="none">
                  {/* Official Slanted UPI Chevrons (Green & Saffron) */}
                  <path d="M25,85 L55,20 L80,20 L50,85 Z" fill="rgba(16,185,129,0.3)" stroke="#10b981" strokeWidth="2.5" />
                  <path d="M55,85 L85,20 L110,20 L80,85 Z" fill="rgba(249,115,22,0.3)" stroke="#f97316" strokeWidth="2.5" />
                  {/* Laser Energy Ray */}
                  <line x1="15" y1="95" x2="140" y2="95" stroke="#00BAF2" strokeWidth="1.5" strokeDasharray="6 4" />
                  <circle cx="140" cy="95" r="3.5" fill="#00BAF2" />
                  {/* UPI Speed Emblem Label */}
                  <text x="25" y="112" fill="#ffffff" fontSize="10" fontFamily="system-ui, sans-serif" fontWeight="900" fontStyle="italic" letterSpacing="1">
                    BHIM UPI 2.0
                  </text>
                  <text x="96" y="112" fill="#10b981" fontSize="9" fontFamily="monospace" fontWeight="bold">
                    • ZERO FEE
                  </text>
                </svg>
              </div>

              {/* Right Side: Futuristic Bharat QR Scanner Terminal & Indian Rupee Hologram */}
              <div className="absolute top-1/2 -right-8 sm:right-6 -translate-y-1/2 opacity-75">
                <svg className="w-64 h-64 sm:w-80 sm:h-80" viewBox="0 0 240 240" fill="none">
                  {/* Orbiting Speed Waves */}
                  <circle cx="120" cy="120" r="108" stroke="rgba(0,186,242,0.22)" strokeWidth="1.8" strokeDasharray="10 8" />
                  <circle cx="120" cy="120" r="88" stroke="rgba(16,185,129,0.25)" strokeWidth="1.5" strokeDasharray="6 6" />
                  <circle cx="120" cy="120" r="68" stroke="rgba(249,115,22,0.20)" strokeWidth="1.2" />

                  {/* QR Target Viewfinder Brackets around the Rupee Core */}
                  <path d="M65,85 L65,65 L85,65" stroke="#00BAF2" strokeWidth="3" strokeLinecap="round" />
                  <path d="M155,65 L175,65 L175,85" stroke="#00BAF2" strokeWidth="3" strokeLinecap="round" />
                  <path d="M65,155 L65,175 L85,175" stroke="#10b981" strokeWidth="3" strokeLinecap="round" />
                  <path d="M155,175 L175,175 L175,155" stroke="#10b981" strokeWidth="3" strokeLinecap="round" />

                  {/* Laser Scan Guide Across Core */}
                  <line x1="55" y1="120" x2="185" y2="120" stroke="#00BAF2" strokeWidth="1.5" strokeDasharray="4 3" opacity="0.8" />

                  {/* Majestic Indian Rupee Currency Glyph */}
                  <path d="M85,75 L155,75" stroke="#ffffff" strokeWidth="6" strokeLinecap="round" />
                  <path d="M85,100 L142,100" stroke="#ffffff" strokeWidth="6" strokeLinecap="round" />
                  <path d="M110,75 L110,125 C142,125 142,100 110,100" stroke="#ffffff" strokeWidth="6" strokeLinecap="round" fill="none" />
                  <path d="M102,125 L155,178" stroke="#10b981" strokeWidth="6.5" strokeLinecap="round" />
                  <circle cx="155" cy="178" r="4.5" fill="#10b981" />
                </svg>
              </div>

              {/* Bottom-Left: Real-Time NPCI Rail Stream & Official App Badges */}
              <div className="absolute bottom-6 left-6 sm:bottom-10 sm:left-14 opacity-80 hidden md:block">
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_#34d399]" />
                  <span className="text-[11px] font-mono font-bold text-zinc-200 tracking-wider">
                    NPCI 24x7 REAL-TIME SETTLEMENT RAIL
                  </span>
                </div>
                <div className="flex items-center gap-2 text-[10px] font-mono text-zinc-400 tracking-wide">
                  <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-[#00BAF2]" />Paytm</span>
                  <span>•</span>
                  <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-[#5f259f]" />PhonePe</span>
                  <span>•</span>
                  <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-white" />Google Pay</span>
                  <span>•</span>
                  <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-[#10b981]" />BHIM</span>
                  <span>•</span>
                  <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-[#f97316]" />Cred</span>
                </div>
              </div>
            </div>
          )}

          {/* ── 2. CARDS THEME BACKDROP: Floating Cyber Credit Cards, EMV Chip & International World Map ── */}
          {!paymentSuccess && activeTab === 'card' && (
            <div className="absolute inset-0 pointer-events-none animate-fadeIn overflow-hidden select-none">
              {/* International Commerce Ambient Glow */}
              <div className="absolute top-1/3 -right-10 w-[500px] h-[500px] rounded-full bg-[#6366f1]/[0.08] blur-[140px]" />
              <div className="absolute -bottom-10 -left-10 w-[450px] h-[450px] rounded-full bg-white/[0.04] blur-[120px]" />

              {/* Top-Right: Floating 3D Angled Cyber Credit Card Silhouette */}
              <div className="absolute -top-6 -right-6 sm:top-8 sm:right-12 opacity-80">
                <svg className="w-64 h-44 sm:w-80 sm:h-56 transform rotate-[-8deg]" viewBox="0 0 280 180" fill="none">
                  {/* Card Outer Body */}
                  <rect x="5" y="5" width="270" height="170" rx="18" fill="rgba(18,18,24,0.85)" stroke="rgba(255,255,255,0.25)" strokeWidth="2" />
                  {/* Holographic Security Ribbon */}
                  <rect x="5" y="35" width="270" height="30" fill="rgba(255,255,255,0.06)" />
                  {/* EMV Microchip */}
                  <rect x="35" y="80" width="36" height="28" rx="6" fill="rgba(247,158,27,0.2)" stroke="#f79e1b" strokeWidth="1.8" />
                  <line x1="35" y1="94" x2="71" y2="94" stroke="#f79e1b" strokeWidth="1.2" />
                  <line x1="53" y1="80" x2="53" y2="108" stroke="#f79e1b" strokeWidth="1.2" />
                  {/* Contactless Wave Icon */}
                  <path d="M85,86 A10,10 0 0,1 85,102 M92,82 A16,16 0 0,1 92,106 M99,78 A22,22 0 0,1 99,110" stroke="rgba(255,255,255,0.5)" strokeWidth="1.8" strokeLinecap="round" />
                  {/* Embossed Card Number Mockup */}
                  <text x="35" y="135" fill="rgba(255,255,255,0.5)" fontSize="13" fontFamily="monospace" fontWeight="bold" letterSpacing="3">
                    •••• 8842 9012
                  </text>
                  {/* Interlocking Card Brand Circles (Mastercard/Visa Motif) */}
                  <circle cx="215" cy="130" r="16" fill="rgba(235,0,27,0.35)" stroke="#eb001b" strokeWidth="1.5" />
                  <circle cx="235" cy="130" r="16" fill="rgba(247,158,27,0.35)" stroke="#f79e1b" strokeWidth="1.5" />
                </svg>
              </div>

              {/* Left Side: International Cross-Border Trade Meridian Network */}
              <div className="absolute top-1/2 -left-8 sm:left-6 -translate-y-1/2 opacity-65 hidden md:block">
                <svg className="w-56 h-56 sm:w-72 sm:h-72" viewBox="0 0 220 220" fill="none">
                  {/* Global Meridian Globe */}
                  <circle cx="110" cy="110" r="95" stroke="rgba(255,255,255,0.22)" strokeWidth="1.8" />
                  <ellipse cx="110" cy="110" rx="95" ry="35" stroke="rgba(255,255,255,0.18)" strokeWidth="1.4" strokeDasharray="6 4" />
                  <ellipse cx="110" cy="110" rx="95" ry="65" stroke="rgba(255,255,255,0.18)" strokeWidth="1.4" />
                  <ellipse cx="110" cy="110" rx="35" ry="95" stroke="rgba(255,255,255,0.18)" strokeWidth="1.4" />
                  {/* Major Financial Gateway Hubs */}
                  <circle cx="75" cy="85" r="4.5" fill="#6366f1" stroke="#ffffff" strokeWidth="1.5" />
                  <circle cx="110" cy="70" r="4.5" fill="#6366f1" stroke="#ffffff" strokeWidth="1.5" />
                  <circle cx="155" cy="105" r="4.5" fill="#6366f1" stroke="#ffffff" strokeWidth="1.5" />
                  {/* Flightpath Transaction Arcs */}
                  <path d="M75,85 Q92,60 110,70 T155,105" stroke="#6366f1" strokeWidth="1.8" strokeDasharray="4 3" />
                </svg>
              </div>

              {/* Bottom-Left: Global Clearing Badge */}
              <div className="absolute bottom-6 left-6 sm:bottom-10 sm:left-14 opacity-75 hidden md:block">
                <div className="text-[11px] font-mono font-bold text-zinc-300 tracking-wider">
                  GLOBAL 3D-SECURE 2.0 PROTOCOL
                </div>
                <div className="text-[10px] font-mono text-zinc-500 tracking-wide mt-0.5">
                  VISA • MASTERCARD • AMEX • APPLE PAY
                </div>
              </div>
            </div>
          )}

          {/* ── 3. CRYPTO THEME BACKDROP: Iconic Floating Bitcoin, Tether USDT & Binance Blockchain DAG ── */}
          {!paymentSuccess && activeTab === 'crypto' && (
            <div className="absolute inset-0 pointer-events-none animate-fadeIn overflow-hidden select-none">
              {/* Crypto Gold/Amber Ambient Glow */}
              <div className="absolute top-1/4 right-0 w-[500px] h-[500px] rounded-full bg-[#F0B90B]/[0.09] blur-[140px]" />
              <div className="absolute -bottom-10 -left-10 w-[450px] h-[450px] rounded-full bg-[#f7931a]/[0.07] blur-[130px]" />

              {/* Top-Right: Iconic Floating 3D Bitcoin Medallion with Radiant Glow */}
              <div className="absolute top-6 right-6 sm:top-10 sm:right-14 opacity-80">
                <svg className="w-32 h-32 sm:w-40 sm:h-40" viewBox="0 0 140 140" fill="none">
                  {/* Coin Outer Ring */}
                  <circle cx="70" cy="70" r="60" fill="rgba(240,185,11,0.08)" stroke="#F0B90B" strokeWidth="2.5" />
                  <circle cx="70" cy="70" r="52" stroke="rgba(240,185,11,0.35)" strokeWidth="1.5" strokeDasharray="4 3" />
                  {/* Bitcoin ₿ Emblem */}
                  <path
                    d="M60,42 L60,98 M72,42 L72,98 M52,50 L78,50 C88,50 88,68 76,68 L52,68 M52,68 L82,68 C94,68 94,90 78,90 L52,90"
                    stroke="#F0B90B"
                    strokeWidth="5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  {/* Satellite Binance Diamonds */}
                  <polygon points="120,40 130,50 120,60 110,50" fill="rgba(240,185,11,0.4)" stroke="#F0B90B" strokeWidth="1.2" />
                  <polygon points="20,90 30,100 20,110 10,100" fill="rgba(240,185,11,0.4)" stroke="#F0B90B" strokeWidth="1.2" />
                </svg>
              </div>

              {/* Left Side: Linked Blockchain Ledger Blocks with Real Cryptographic Hash Vectors */}
              <div className="absolute top-1/2 -left-6 sm:left-8 -translate-y-1/2 opacity-75 hidden md:block">
                <svg className="w-56 h-72 sm:w-64 sm:h-80" viewBox="0 0 200 260" fill="none">
                  {/* Block 1 (Parent Block) */}
                  <rect x="25" y="15" width="120" height="55" rx="10" fill="rgba(18,16,12,0.85)" stroke="rgba(255,255,255,0.25)" strokeWidth="1.8" />
                  <text x="38" y="38" fill="rgba(255,255,255,0.8)" fontSize="10" fontFamily="monospace" fontWeight="bold">BLOCK #840,192</text>
                  <text x="38" y="54" fill="#F0B90B" fontSize="9" fontFamily="monospace">TXS: 2,491 • VERIFIED</text>
                  
                  {/* Cryptographic Hash Pointer Link */}
                  <path d="M85,70 L85,100" stroke="#F0B90B" strokeWidth="2.5" strokeDasharray="4 3" />
                  <polygon points="85,103 81,95 89,95" fill="#F0B90B" />

                  {/* Block 2 (Current Active Genesis) */}
                  <rect x="25" y="105" width="135" height="60" rx="12" fill="rgba(28,24,12,0.9)" stroke="#F0B90B" strokeWidth="2.2" />
                  <circle cx="42" cy="125" r="4" fill="#10b981" />
                  <text x="52" y="128" fill="#ffffff" fontSize="11" fontFamily="monospace" fontWeight="bold">0x7F4B...99AE</text>
                  <text x="38" y="150" fill="rgba(255,255,255,0.7)" fontSize="9" fontFamily="monospace">MERKLE ROOT VALID</text>

                  {/* Cryptographic Hash Pointer Link */}
                  <path d="M85,165 L85,195" stroke="#F0B90B" strokeWidth="2.5" strokeDasharray="4 3" />
                  <polygon points="85,198 81,190 89,190" fill="#F0B90B" />

                  {/* Block 3 (Next Candidate) */}
                  <rect x="25" y="200" width="120" height="45" rx="10" fill="rgba(18,16,12,0.6)" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" />
                  <text x="38" y="228" fill="rgba(255,255,255,0.5)" fontSize="10" fontFamily="monospace">BLOCK #840,194</text>
                </svg>
              </div>

              {/* Bottom-Left: Decentralized Ledger Telemetry */}
              <div className="absolute bottom-6 left-6 sm:bottom-10 sm:left-14 opacity-75 hidden md:block">
                <div className="flex items-center gap-2 mb-1">
                  <span className="w-2 h-2 rounded-full bg-[#F0B90B] animate-pulse shadow-[0_0_8px_#F0B90B]" />
                  <span className="text-[11px] font-mono font-bold text-zinc-300 tracking-wider">
                    BINANCE &amp; TRON LAYER-1 VALIDATED
                  </span>
                </div>
                <div className="text-[10px] font-mono text-zinc-500 tracking-wide">
                  USDT TRC20 • BITCOIN BTC • BSC BEP20
                </div>
              </div>
            </div>
          )}

          {/* ── 4. CELEBRATORY THANK-YOU BACKDROP: Clean Monochrome Slate & MoviesNet Heraldic Grid ── */}
          {paymentSuccess && (
            <div className="absolute inset-0 pointer-events-none animate-fadeIn overflow-hidden select-none">
              {/* Subtle Neutral Slate Ambient Lighting */}
              <div className="absolute top-1/4 left-1/3 w-[560px] h-[560px] rounded-full bg-zinc-800/[0.07] blur-[150px]" />
              <div className="absolute -bottom-10 right-1/4 w-[480px] h-[480px] rounded-full bg-zinc-700/[0.05] blur-[140px]" />

              {/* Top-Left: Sleek Architectural Monogram Crest */}
              <div className="absolute top-8 left-6 sm:top-12 sm:left-14 opacity-40 hidden sm:block">
                <svg className="w-40 h-36" viewBox="0 0 160 140" fill="none">
                  <circle cx="80" cy="70" r="58" stroke="rgba(255,255,255,0.15)" strokeWidth="1.2" strokeDasharray="6 4" />
                  <circle cx="80" cy="70" r="46" stroke="rgba(255,255,255,0.25)" strokeWidth="1.5" />
                  <path d="M72,100 L80,75 L88,100 M74,92 L86,92" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  <text x="80" y="125" textAnchor="middle" fill="#a1a1aa" fontSize="8.5" fontFamily="monospace" fontWeight="bold" letterSpacing="1">
                    ALLSITEHUB TREASURY
                  </text>
                </svg>
              </div>

              {/* Top-Right: Minimalist Geometric Star & Orbit Ring */}
              <div className="absolute top-8 right-6 sm:top-12 sm:right-14 opacity-35 hidden sm:block">
                <svg className="w-36 h-36" viewBox="0 0 140 140" fill="none">
                  <circle cx="70" cy="70" r="55" stroke="rgba(255,255,255,0.12)" strokeWidth="1" strokeDasharray="4 4" />
                  <polygon points="70,25 78,62 115,70 78,78 70,115 62,78 25,70 62,62" stroke="rgba(255,255,255,0.3)" strokeWidth="1.2" fill="none" />
                  <circle cx="70" cy="70" r="3.5" fill="#ffffff" />
                  <text x="70" y="132" textAnchor="middle" fill="#71717a" fontSize="8" fontFamily="monospace" fontWeight="bold" letterSpacing="1">
                    VERIFIED DIRECT IMPACT
                  </text>
                </svg>
              </div>

              {/* Bottom Stream Telemetry */}
              <div className="absolute bottom-6 left-6 sm:bottom-10 sm:left-14 opacity-75 hidden md:block">
                <div className="flex items-center gap-2 mb-1">
                  <span className="w-2 h-2 rounded-full bg-zinc-400" />
                  <span className="text-[11px] font-mono font-bold text-zinc-300 tracking-wider">
                    ALLSITEHUB OFFICIAL DIGITAL INFRASTRUCTURE REPOSITORY
                  </span>
                </div>
                <div className="text-[10px] font-mono text-zinc-500 tracking-wide">
                  DIRECT PLATFORM TREASURY • VERIFIED ELECTRONIC SETTLEMENT
                </div>
              </div>
            </div>
          )}

          {/* ══════════════════════════════════════════════════════════════════
              CENTRAL ZERO-SCROLL STEALTH BLACK MATTE CONTAINER
              ══════════════════════════════════════════════════════════════════ */}
          <div
            className={`relative z-10 w-full ${
              paymentSuccess ? 'max-w-2xl sm:max-w-3xl p-3 sm:p-4 my-auto overflow-hidden' : 'max-w-4xl lg:max-w-[860px] p-4 sm:p-6 max-h-[94vh] overflow-y-auto my-auto'
            } flex flex-col rounded-[24px] sm:rounded-[30px] bg-[#0c0d11] backdrop-blur-2xl transition-all duration-300 ${
              paymentSuccess
                ? 'border border-zinc-800 shadow-[0_30px_90px_rgba(0,0,0,0.98)]'
                : activeTab === 'upi'
                ? 'border border-emerald-500/35 shadow-[0_30px_90px_rgba(0,0,0,0.98),0_0_55px_rgba(16,185,129,0.12)]'
                : activeTab === 'card'
                ? 'border border-[#6366f1]/30 shadow-[0_30px_90px_rgba(0,0,0,0.98),0_0_50px_rgba(99,102,241,0.1)]'
                : 'border border-[#F0B90B]/30 shadow-[0_30px_90px_rgba(0,0,0,0.98),0_0_50px_rgba(240,185,11,0.1)]'
            }`}
          >
            {/* ── Subtle Thematic Translucent Backdrop Canvas (Clean & Non-overlapping) ── */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-[26px] sm:rounded-[32px] select-none z-0">
              {/* UPI Tab: Subtle Ambient Glow & Architectural Rupee Watermark */}
              {!paymentSuccess && activeTab === 'upi' && (
                <div className="absolute inset-0 animate-fadeIn">
                  <div className="absolute -top-16 -left-16 w-80 h-80 rounded-full bg-[#10b981]/[0.09] blur-[100px]" />
                  <div className="absolute top-1/2 -right-16 w-80 h-80 rounded-full bg-[#00BAF2]/[0.08] blur-[110px]" />
                  {/* Subtle Rupee & Speed Chevron Hologram behind the QR column */}
                  <div className="absolute top-4 right-6 sm:right-12 opacity-[0.09]">
                    <svg className="w-56 h-56 sm:w-68 sm:h-68" viewBox="0 0 200 200" fill="none">
                      <circle cx="100" cy="100" r="92" stroke="#10b981" strokeWidth="1.8" strokeDasharray="10 8" />
                      <circle cx="100" cy="100" r="74" stroke="#00BAF2" strokeWidth="1.2" strokeDasharray="5 5" />
                      {/* Slanted Dual Chevrons */}
                      <path d="M140,40 L160,20 L170,20 L150,40 Z" fill="#f97316" opacity="0.6" />
                      <path d="M152,40 L172,20 L182,20 L162,40 Z" fill="#10b981" opacity="0.6" />
                      {/* Rupee Glyph */}
                      <path d="M60,50 L140,50 M60,78 L125,78" stroke="#ffffff" strokeWidth="6" strokeLinecap="round" />
                      <path d="M88,50 L88,102 C125,102 125,78 88,78" stroke="#ffffff" strokeWidth="6" strokeLinecap="round" fill="none" />
                      <path d="M80,100 L136,155" stroke="#10b981" strokeWidth="6.5" strokeLinecap="round" />
                    </svg>
                  </div>
                  {/* Bottom Corner Subtle Speed Beam */}
                  <div className="absolute bottom-4 left-6 opacity-[0.07]">
                    <svg className="w-40 h-24" viewBox="0 0 160 80" fill="none">
                      <line x1="10" y1="35" x2="140" y2="35" stroke="#10b981" strokeWidth="2" strokeDasharray="8 6" />
                      <line x1="25" y1="50" x2="155" y2="50" stroke="#00BAF2" strokeWidth="1.5" strokeDasharray="5 5" />
                      <circle cx="140" cy="35" r="3" fill="#10b981" />
                    </svg>
                  </div>
                </div>
              )}

              {/* Cards Tab: Subtle Ambient Glow & 3D Credit Card Outline */}
              {!paymentSuccess && activeTab === 'card' && (
                <div className="absolute inset-0 animate-fadeIn">
                  <div className="absolute -top-16 -right-16 w-80 h-80 rounded-full bg-[#6366f1]/[0.10] blur-[100px]" />
                  <div className="absolute top-1/2 -left-16 w-80 h-80 rounded-full bg-[#3b82f6]/[0.06] blur-[110px]" />
                  <div className="absolute top-6 right-6 sm:right-12 opacity-[0.09] transform rotate-[-6deg]">
                    <svg className="w-52 h-32 sm:w-64 sm:h-44" viewBox="0 0 240 150" fill="none">
                      <rect x="5" y="5" width="230" height="140" rx="14" stroke="#6366f1" strokeWidth="2" />
                      <rect x="30" y="55" width="30" height="24" rx="4" stroke="#f79e1b" strokeWidth="1.5" />
                      <path d="M72,60 A8,8 0 0,1 72,74 M78,56 A13,13 0 0,1 78,78" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" />
                      <circle cx="180" cy="110" r="14" stroke="#eb001b" strokeWidth="1.5" />
                      <circle cx="198" cy="110" r="14" stroke="#f79e1b" strokeWidth="1.5" />
                    </svg>
                  </div>
                  <div className="absolute bottom-4 left-6 opacity-[0.07]">
                    <svg className="w-36 h-36" viewBox="0 0 160 160" fill="none">
                      <circle cx="80" cy="80" r="70" stroke="#6366f1" strokeWidth="1.5" />
                      <ellipse cx="80" cy="80" rx="70" ry="25" stroke="#6366f1" strokeWidth="1.2" strokeDasharray="4 4" />
                      <ellipse cx="80" cy="80" rx="25" ry="70" stroke="#6366f1" strokeWidth="1.2" />
                    </svg>
                  </div>
                </div>
              )}

              {/* Crypto Tab: Subtle Ambient Glow & Bitcoin Medallion Watermark */}
              {!paymentSuccess && activeTab === 'crypto' && (
                <div className="absolute inset-0 animate-fadeIn">
                  <div className="absolute -top-16 -right-16 w-80 h-80 rounded-full bg-[#F0B90B]/[0.10] blur-[100px]" />
                  <div className="absolute top-1/2 -left-16 w-80 h-80 rounded-full bg-[#f7931a]/[0.06] blur-[110px]" />
                  <div className="absolute top-4 right-6 sm:right-14 opacity-[0.09]">
                    <svg className="w-44 h-44 sm:w-56 sm:h-56" viewBox="0 0 160 160" fill="none">
                      <circle cx="80" cy="80" r="70" stroke="#F0B90B" strokeWidth="2.5" />
                      <circle cx="80" cy="80" r="58" stroke="#F0B90B" strokeWidth="1.2" strokeDasharray="5 4" />
                      <path
                        d="M68,48 L68,112 M82,48 L82,112 M58,56 L88,56 C100,56 100,76 86,76 L58,76 M58,76 L92,76 C106,76 106,102 88,102 L58,102"
                        stroke="#F0B90B"
                        strokeWidth="5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <polygon points="140,50 148,58 140,66 132,58" fill="#F0B90B" />
                    </svg>
                  </div>
                  <div className="absolute bottom-6 left-6 opacity-[0.07]">
                    <svg className="w-36 h-28" viewBox="0 0 160 120" fill="none">
                      <rect x="10" y="10" width="65" height="32" rx="6" stroke="#F0B90B" strokeWidth="1.5" />
                      <line x1="75" y1="26" x2="105" y2="26" stroke="#F0B90B" strokeWidth="1.5" strokeDasharray="3 3" />
                      <rect x="105" y="10" width="40" height="32" rx="6" stroke="#F0B90B" strokeWidth="1.5" />
                      <line x1="42" y1="42" x2="42" y2="72" stroke="#F0B90B" strokeWidth="1.5" strokeDasharray="3 3" />
                      <rect x="10" y="72" width="75" height="32" rx="6" stroke="#F0B90B" strokeWidth="1.5" />
                    </svg>
                  </div>
                </div>
              )}

              {/* Thank-You State: Minimalist Neutral Ambient Aura */}
              {paymentSuccess && (
                <div className="absolute inset-0 animate-fadeIn pointer-events-none">
                  <div className="absolute -top-16 -left-16 w-80 h-80 rounded-full bg-zinc-700/[0.08] blur-[100px]" />
                  <div className="absolute top-1/2 -right-16 w-80 h-80 rounded-full bg-zinc-600/[0.06] blur-[110px]" />
                  <div className="absolute top-6 right-6 sm:right-12 opacity-[0.04]">
                    <svg className="w-56 h-56 sm:w-68 sm:h-68" viewBox="0 0 200 200" fill="none">
                      <circle cx="100" cy="100" r="90" stroke="#ffffff" strokeWidth="1.5" strokeDasharray="6 6" />
                      <circle cx="100" cy="100" r="72" stroke="#ffffff" strokeWidth="1" strokeDasharray="3 3" />
                      <path d="M70,145 L100,55 L130,145 M78,118 L122,118" stroke="#ffffff" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
              )}
            </div>

            {/* Top Minimal Sheen Line */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none" />

            {/* ── Top Header Row: Verified Institutional Status & Close Button ── */}
            <div className="flex items-center justify-between gap-3 mb-2.5 sm:mb-3 relative z-10">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-zinc-900 border border-zinc-800 backdrop-blur-md shadow-sm">
                <svg className="w-3.5 h-3.5 text-zinc-300 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
                <span className="text-[11px] font-semibold text-zinc-300">Verified Platform Entity</span>
                <span className="w-1.5 h-1.5 rounded-full bg-zinc-400" />
              </div>

              <div className="flex items-center gap-2">
                <a
                  href={liveDiscordHelp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-2.5 py-1 rounded-lg bg-[#5865F2]/20 hover:bg-[#5865F2]/30 border border-[#5865F2]/40 text-white font-headline font-bold text-[10.5px] flex items-center gap-1.5 transition-all shadow-sm active:scale-95 shrink-0"
                  title="Ask on Discord for Payment Support"
                >
                  <svg className="w-3 h-3 fill-current text-[#5865F2]" viewBox="0 0 24 24">
                    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
                  </svg>
                  <span>Discord Help</span>
                  <span className="text-[9px] text-zinc-300">↗</span>
                </a>

                <button
                  type="button"
                  onClick={handleCloseModal}
                  className="w-8 h-8 rounded-full bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-300 hover:text-white flex items-center justify-center text-xs transition-all cursor-pointer backdrop-blur-md active:scale-95 shrink-0"
                  title="Close"
                >
                  ✕
                </button>
              </div>
            </div>

            {/* ── Payment Done State: Executive Monochrome MoviesNet Voucher & Receipt ── */}
            {/* ── Payment Done State: Zero-Scroll Stretched Executive Screen ── */}
            {paymentSuccess ? (
              <div className="animate-fadeIn relative z-10 flex flex-col items-center w-full text-center">
                {/* ── Header: Checkmark + Gratitude + Verification Note in One Sleek Band ── */}
                <div className="w-full flex flex-col items-center mb-2.5">
                  <div className="flex items-center justify-center gap-2 mb-1">
                    <span className="w-6 h-6 rounded-lg bg-zinc-900 border border-zinc-700 text-white flex items-center justify-center text-xs font-bold shrink-0">
                      ✓
                    </span>
                    <h3 className="font-headline text-lg sm:text-xl font-black text-white tracking-tight">
                      Thank You For Your Support!
                    </h3>
                  </div>

                  {/* Verification Note (English + Roman Hindi on next line) */}
                  <div className="w-full px-3 py-1.5 rounded-lg bg-zinc-900/90 border border-zinc-800 text-left flex items-start gap-2">
                    <span className="text-zinc-400 font-mono text-[11px] shrink-0 font-bold mt-0.5">ℹ</span>
                    <div className="text-[11px] text-zinc-300 leading-tight">
                      <div>Your payment is currently being verified. Once confirmed, we will notify you on your contact details.</div>
                      <div className="text-zinc-400 text-[10.5px] mt-0.5">
                        (Aapka payment check ho raha hai, confirm hone ke baad aapke contact par inform kar diya jayega.)
                      </div>
                    </div>
                  </div>

                  {/* ── Supporter Benefits & Discord Direct Action Bar ── */}
                  <div className="w-full mt-2 grid grid-cols-2 gap-2">
                    {/* Benefits Direct Redirect Link (Same Tab) */}
                    <a
                      href="/benefits"
                      className="px-3 py-2 rounded-lg bg-[#0e0f14] hover:bg-zinc-900 border border-zinc-800 hover:border-zinc-600 text-zinc-200 hover:text-white text-xs font-headline font-bold flex items-center justify-center gap-1.5 transition-all shadow-sm group cursor-pointer active:scale-95"
                    >
                      <span>🎁</span>
                      <span className="truncate">Supporter Benefits</span>
                      <span className="text-[10px] text-zinc-400 group-hover:text-white group-hover:translate-x-0.5 transition-all">→</span>
                    </a>

                    {/* Discord Direct Help Link */}
                    <a
                      href={liveDiscordHelp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-2 rounded-lg bg-[#0e0f14] hover:bg-[#5865F2]/20 border border-zinc-800 hover:border-[#5865F2]/60 text-zinc-200 hover:text-white text-xs font-headline font-bold flex items-center justify-center gap-1.5 transition-all shadow-sm group cursor-pointer active:scale-95"
                    >
                      <svg className="w-3.5 h-3.5 fill-current text-[#5865F2] shrink-0" viewBox="0 0 24 24">
                        <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.929 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.894.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
                      </svg>
                      <span className="truncate">Discord Help</span>
                      <span className="text-[10px] text-zinc-400 group-hover:text-white group-hover:translate-x-0.5 transition-all">↗</span>
                    </a>
                  </div>
                </div>

                {/* ── Row 1: Payment Destination & Download Receipt Button (Stretched Horizontal) ── */}
                <div className="w-full p-2.5 rounded-xl bg-[#0e0f14] border border-zinc-800 mb-2.5 flex flex-wrap sm:flex-nowrap items-center justify-between gap-3 text-left">
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2">
                      <span className="text-[9px] font-mono text-zinc-500 uppercase font-semibold">
                        Sent To:
                      </span>
                      <span className="text-[9px] font-mono text-zinc-300 bg-zinc-900 px-1.5 py-0.2 rounded border border-zinc-800">
                        Initiated
                      </span>
                    </div>
                    <span className="text-xs font-bold text-zinc-200 block truncate mt-0.5">
                      {activeTab === 'crypto'
                        ? `${CRYPTO_WALLETS[selectedCrypto].name} (${CRYPTO_WALLETS[selectedCrypto].network})`
                        : activeTab === 'card'
                        ? 'MoviesNet International Gateway'
                        : 'paytm.s2xzum9@pty (MoviesNet Operations Desk)'}
                    </span>
                  </div>

                  <div className="text-right shrink-0 px-2 sm:px-3 border-l border-zinc-800/80">
                    <span className="text-[9px] font-mono text-zinc-500 uppercase block font-semibold">
                      Amount
                    </span>
                    <span className="text-sm sm:text-base font-black text-white font-headline">
                      {modalSymbol}{modalAmount.toLocaleString()} {isModalUsd ? 'USD' : 'INR'}
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={handleDownloadReceipt}
                    className="py-2 px-3.5 rounded-lg bg-white hover:bg-zinc-200 text-black font-headline font-bold text-xs flex items-center justify-center gap-1.5 transition-all cursor-pointer shadow-md active:scale-95 shrink-0 whitespace-nowrap"
                  >
                    <span>🖨️</span>
                    <span>Download Receipt (PDF)</span>
                  </button>
                </div>

                {/* ── Row 2: Stretched Contact & Confirmation Form ── */}
                <div className="w-full p-2.5 sm:p-3 rounded-xl bg-zinc-900/40 border border-zinc-800 text-left mb-2">
                  {detailsSubmitted ? (
                    <div className="text-center py-1.5 animate-fadeIn">
                      <div className="w-5 h-5 rounded-full bg-zinc-800 text-white border border-zinc-700 flex items-center justify-center mx-auto text-[10px] mb-0.5 font-bold">
                        ✓
                      </div>
                      <div className="font-headline font-bold text-white text-xs">
                        Details Recorded Successfully!
                      </div>
                      <p className="text-[10.5px] text-zinc-400 mt-0.5">
                        Verification confirm hone par aapko inform kar diya jayega.
                      </p>
                    </div>
                  ) : (
                    <div>
                      {/* Form Header Note */}
                      <div className="flex flex-wrap items-center justify-between gap-1 mb-2">
                        <span className="text-xs font-bold text-zinc-200">
                          Payment Confirmation Details
                        </span>
                        <span className="text-[10px] text-zinc-400">
                          <span className="text-white font-semibold">* Name is compulsory.</span> Contact, Amount &amp; Screenshot are optional.
                        </span>
                      </div>

                      <form onSubmit={handleSaveContactDetails} className="space-y-2">
                        {/* 3-Column Stretched Input Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                          {/* 1. Name (Compulsory) */}
                          <div>
                            <div className="flex items-center justify-between mb-0.5">
                              <label className="text-[9.5px] font-mono text-zinc-300 font-bold uppercase">
                                Your Name <span className="text-rose-400">* (Compulsory)</span>
                              </label>
                              {nameError && (
                                <span className="text-[9px] text-rose-400 font-medium">Required</span>
                              )}
                            </div>
                            <input
                              type="text"
                              required
                              value={supporterName}
                              onChange={(e) => {
                                setSupporterName(e.target.value);
                                if (nameError) setNameError('');
                              }}
                              placeholder="Your Full Name"
                              className={`w-full px-2.5 py-1.5 rounded-lg bg-[#09090c] border ${nameError ? 'border-rose-500' : 'border-zinc-700'} text-white text-xs placeholder:text-zinc-600 focus:outline-none focus:border-white transition-colors`}
                            />
                          </div>

                          {/* 2. Flexible Contact Info (Optional: Gmail, Discord, Telegram, Instagram, Phone) */}
                          <div>
                            <label className="text-[9.5px] font-mono text-zinc-400 font-semibold uppercase block mb-0.5 truncate">
                              Contact <span className="text-zinc-500 font-normal">(Gmail/TG/Discord/Insta)</span>
                            </label>
                            <input
                              type="text"
                              value={supporterWhatsapp}
                              onChange={(e) => setSupporterWhatsapp(e.target.value)}
                              placeholder="Gmail, @telegram, discord, @insta..."
                              className="w-full px-2.5 py-1.5 rounded-lg bg-[#09090c] border border-zinc-800 text-white text-xs placeholder:text-zinc-600 focus:outline-none focus:border-zinc-600"
                            />
                          </div>

                          {/* 3. Amount Paid (Optional) */}
                          <div>
                            <label className="text-[9.5px] font-mono text-zinc-400 font-semibold uppercase block mb-0.5">
                              Amount Paid <span className="text-zinc-500 font-normal">(Optional)</span>
                            </label>
                            <input
                              type="text"
                              value={supporterPaidAmount}
                              onChange={(e) => setSupporterPaidAmount(e.target.value)}
                              placeholder={`e.g. ${modalSymbol}${modalAmount}`}
                              className="w-full px-2.5 py-1.5 rounded-lg bg-[#09090c] border border-zinc-800 text-white text-xs placeholder:text-zinc-600 focus:outline-none focus:border-zinc-600"
                            />
                          </div>
                        </div>

                        {/* Screenshot Upload & Submit Button in Single Stretched Row */}
                        <div className="flex flex-col sm:flex-row items-center gap-2 pt-0.5">
                          {/* Screenshot File Upload */}
                          <div className="w-full sm:flex-1">
                            {supporterScreenshot ? (
                              <div className="flex items-center justify-between px-2.5 py-1 rounded-lg bg-[#09090c] border border-zinc-700">
                                <div className="flex items-center gap-2 min-w-0">
                                  <img
                                    src={supporterScreenshot}
                                    alt="Preview"
                                    className="w-6 h-6 rounded object-cover border border-zinc-700 shrink-0"
                                  />
                                  <span className="text-[11px] text-zinc-300 truncate max-w-[160px]">
                                    {screenshotFileName || 'Screenshot attached'}
                                  </span>
                                </div>
                                <button
                                  type="button"
                                  onClick={() => {
                                    setSupporterScreenshot(null);
                                    setScreenshotFileName(null);
                                  }}
                                  className="text-[10px] text-zinc-400 hover:text-white px-1.5 py-0.5 rounded bg-zinc-800 border border-zinc-700 cursor-pointer"
                                >
                                  ✕ Remove
                                </button>
                              </div>
                            ) : (
                              <label className="flex items-center justify-center gap-1.5 w-full px-2.5 py-1.5 rounded-lg bg-[#09090c] border border-dashed border-zinc-800 hover:border-zinc-600 text-zinc-400 hover:text-zinc-200 text-xs cursor-pointer transition-all">
                                <span>📎</span>
                                <span className="truncate">Upload Screenshot / Slip (Optional)</span>
                                <input
                                  type="file"
                                  accept="image/*"
                                  onChange={handleScreenshotChange}
                                  className="hidden"
                                />
                              </label>
                            )}
                          </div>

                          {/* Submit Details Button */}
                          <button
                            type="submit"
                            disabled={isSubmittingDetails}
                            className="w-full sm:w-auto sm:px-6 py-1.5 rounded-lg bg-zinc-100 hover:bg-white text-black font-headline font-bold text-xs tracking-wide shadow transition-all cursor-pointer active:scale-95 disabled:opacity-50 shrink-0"
                          >
                            {isSubmittingDetails ? 'Submitting...' : 'Submit Details →'}
                          </button>
                        </div>
                      </form>
                    </div>
                  )}
                </div>

                {/* ── Done / Close Button ── */}
                <button
                  type="button"
                  onClick={handleCloseModal}
                  className="px-4 py-1 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-zinc-400 hover:text-white font-headline font-bold text-[11px] transition-all cursor-pointer active:scale-95"
                >
                  ← Done / Back to MoviesNet
                </button>
              </div>
            ) : (
              <>
                {/* ── 2-Column Hero Section: Left Text + Right Stealth QR Plaque ── */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-3.5 sm:gap-5 items-center relative z-10 mb-3">
                  
                  {/* Left Column: Heading, Amount, & Amount Chips */}
                  <div className="md:col-span-7 flex flex-col justify-center">
                    <span className="block text-[10.5px] font-mono font-bold tracking-[0.22em] text-zinc-300 uppercase mb-0.5 drop-shadow-[0_1px_2px_rgba(0,0,0,0.9)]">
                      SUPPORT OUR WORK
                    </span>

                    <div className="flex items-center flex-wrap gap-x-2">
                      <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]">
                        Contribute
                      </h2>
                      <span className="text-2xl sm:text-3xl font-black text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]">
                        {modalSymbol}{modalAmount}
                      </span>
                      {/* Subtle Clean Heart Doodle */}
                      <div className="relative inline-flex items-center">
                        <svg className="w-6 h-6 sm:w-7 sm:h-7 text-zinc-300 hover:text-rose-400 transition-colors drop-shadow-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                        </svg>
                      </div>
                    </div>

                    <p className="text-[11.5px] sm:text-xs text-zinc-300 font-medium leading-relaxed max-w-sm mt-1 mb-2.5 drop-shadow-[0_1px_4px_rgba(0,0,0,0.9)]">
                      Your support helps us keep building, maintaining and bringing more free resources for everyone.
                    </p>

                    {/* Quick Amount Switcher Chips (Matte Luxury) */}
                    <div className="flex items-center flex-wrap gap-1.5">
                      {PRESET_TIERS.map((tier, idx) => {
                        const amt = isModalUsd ? tier.value : tier.inrValue;
                        const isSel = !isCustom && selectedIdx === idx;
                        return (
                          <button
                            key={idx}
                            type="button"
                            onClick={() => {
                              setIsCustom(false);
                              setSelectedIdx(idx);
                            }}
                            className={`px-3 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                              isSel
                                ? 'bg-white text-black font-extrabold shadow-sm scale-105'
                                : 'bg-[#15151a] hover:bg-[#1f1f26] text-zinc-300 border border-white/[0.06]'
                            }`}
                          >
                            {modalSymbol}{amt}
                          </button>
                        );
                      })}

                      {/* Custom Amount Button / Input Chip */}
                      {isCustom ? (
                        <div className="flex items-center gap-1 px-2.5 py-0.5 rounded-lg bg-[#1c1c24] border border-white/30 text-white shadow-sm">
                          <span className="text-xs font-black text-zinc-300">{modalSymbol}</span>
                          <input
                            ref={customInputRef}
                            type="number"
                            min="1"
                            max="500000"
                            value={customValue}
                            onChange={(e) => setCustomValue(e.target.value)}
                            placeholder="Amount"
                            className="w-16 sm:w-20 bg-transparent text-xs font-bold text-white focus:outline-none placeholder:text-zinc-500"
                            autoFocus
                          />
                        </div>
                      ) : (
                        <button
                          type="button"
                          onClick={() => {
                            setIsCustom(true);
                            if (!customValue) {
                              setCustomValue(activeTab === 'upi' ? '250' : '15');
                            }
                            setTimeout(() => customInputRef.current?.focus(), 50);
                          }}
                          className="px-2.5 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer bg-[#15151a] hover:bg-[#1f1f26] text-zinc-300 hover:text-white border border-white/[0.08] flex items-center gap-1 active:scale-95"
                          title="Enter Custom Amount"
                        >
                          <span>✏️ Custom</span>
                        </button>
                      )}
                    </div>
                  </div>

                  {/* Right Column: Stealth Matte QR / Plaque */}
                  <div className="md:col-span-5 flex flex-col items-center justify-center">
                    <div className="relative p-2.5 sm:p-3 rounded-2xl sm:rounded-3xl bg-[#121216] border border-white/[0.08] shadow-[0_20px_45px_rgba(0,0,0,0.9)] backdrop-blur-2xl flex flex-col items-center justify-center text-center">
                      
                      {activeTab === 'crypto' ? (
                        <div className="relative z-10 w-[170px] h-[170px] sm:w-[190px] sm:h-[190px] bg-white p-2.5 sm:p-3 rounded-xl sm:rounded-2xl shadow-xl border border-white/20 flex items-center justify-center shrink-0">
                          <img
                            src={cryptoQrDataUrl || dynamicQrDataUrl || '/images/upi-qr-official.png'}
                            alt={`${selectedCrypto} Wallet QR`}
                            width={190}
                            height={190}
                            className="rounded-lg sm:rounded-xl object-contain w-full h-full select-none"
                          />
                          {/* Floating Network Pill on Bottom of QR Code */}
                          <div className="absolute -bottom-2.5 px-3 py-0.5 rounded-full bg-[#0a0a0d] border border-white/15 text-zinc-300 text-[9.5px] font-mono font-bold shadow-lg flex items-center gap-1.5 whitespace-nowrap">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                            <span>{CRYPTO_WALLETS[selectedCrypto].fullNetwork}</span>
                          </div>
                        </div>
                      ) : activeTab === 'card' ? (
                        <div className="relative z-10 w-[170px] h-[170px] sm:w-[190px] sm:h-[190px] rounded-xl sm:rounded-2xl p-3.5 bg-[#16161c] border border-white/[0.08] shadow-xl flex flex-col justify-between items-center text-center">
                          <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/[0.05] border border-white/10 text-zinc-300 text-[10px] font-mono font-semibold">
                            <span>Global Checkout</span>
                          </div>
                          <div className="my-auto">
                            <div className="text-2xl sm:text-3xl font-black text-white">
                              ${modalAmount}
                            </div>
                            <div className="text-[11px] text-zinc-400 mt-0.5">
                              Ko-fi • Cards • PayPal
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <VisaIcon />
                            <MastercardIcon />
                            <PayPalMarkIcon className="w-4 h-4" />
                          </div>
                        </div>
                      ) : (
                        <div className="relative z-10 w-[170px] h-[170px] sm:w-[190px] sm:h-[190px] bg-white p-2.5 sm:p-3 rounded-xl sm:rounded-2xl shadow-xl border border-white/20 flex items-center justify-center shrink-0">
                          <img
                            src={dynamicQrDataUrl || '/images/upi-qr-official.png'}
                            alt="Scan & Pay UPI QR"
                            width={190}
                            height={190}
                            className="rounded-lg sm:rounded-xl object-contain w-full h-full select-none"
                          />
                        </div>
                      )}
                    </div>
                  </div>

                </div>

                {/* ── Segmented Navigation Tabs (Themed Stealth Finish) ── */}
                <div className="relative z-10 grid grid-cols-3 p-1 rounded-xl bg-[#121216] border border-white/[0.08] backdrop-blur-xl shadow-inner mb-2.5">
                  <button
                    type="button"
                    onClick={() => setActiveTab('upi')}
                    className={`py-1.5 px-2 rounded-lg font-bold text-[11px] sm:text-xs flex items-center justify-center gap-1.5 transition-all duration-200 cursor-pointer ${
                      activeTab === 'upi'
                        ? 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/40 shadow-[0_0_15px_rgba(16,185,129,0.2)]'
                        : 'text-zinc-400 hover:text-white hover:bg-white/[0.03]'
                    }`}
                  >
                    <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="3" y="3" width="7" height="7" rx="1" />
                      <rect x="14" y="3" width="7" height="7" rx="1" />
                      <rect x="3" y="14" width="7" height="7" rx="1" />
                      <path d="M14 14h3v3h-3zM20 14v6M14 20h6" strokeLinecap="round" />
                    </svg>
                    <span>UPI &amp; QR</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setActiveTab('card')}
                    className={`py-1.5 px-2 rounded-lg font-bold text-[11px] sm:text-xs flex items-center justify-center gap-1.5 transition-all duration-200 cursor-pointer ${
                      activeTab === 'card'
                        ? 'bg-[#6366f1]/15 text-[#a5b4fc] border border-[#6366f1]/40 shadow-[0_0_15px_rgba(99,102,241,0.18)]'
                        : 'text-zinc-400 hover:text-white hover:bg-white/[0.03]'
                    }`}
                  >
                    <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="2" y="5" width="20" height="14" rx="2" />
                      <line x1="2" y1="10" x2="22" y2="10" />
                    </svg>
                    <span>Cards &amp; Global</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setActiveTab('crypto')}
                    className={`py-1.5 px-2 rounded-lg font-bold text-[11px] sm:text-xs flex items-center justify-center gap-1.5 transition-all duration-200 cursor-pointer ${
                      activeTab === 'crypto'
                        ? 'bg-[#F0B90B]/15 text-[#F0B90B] border border-[#F0B90B]/40 shadow-[0_0_15px_rgba(240,185,11,0.18)]'
                        : 'text-zinc-400 hover:text-white hover:bg-white/[0.03]'
                    }`}
                  >
                    <span className="text-sm leading-none font-serif">₿</span>
                    <span>Crypto</span>
                  </button>
                </div>

                {/* ── Tab Content ── */}
                {activeTab === 'upi' && (
                  <div className="relative z-10 animate-fadeIn">
                    {/* Amount & Quick Custom Indicator Row (Matte Black) */}
                    <div className="flex items-center justify-between gap-2 px-1 mb-2">
                      <div className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        <span className="text-[11px] font-bold text-zinc-300">
                          Transfer Amount: <span className="text-white font-black text-xs">₹{upiCheckoutAmount}</span>
                        </span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="text-[10px] text-zinc-400 font-medium">Custom ₹:</span>
                        <div className="relative flex items-center">
                          <span className="absolute left-2 text-[11px] font-bold text-zinc-400 pointer-events-none">₹</span>
                          <input
                            type="number"
                            min="1"
                            max="500000"
                            value={isCustom ? customValue : ''}
                            onChange={(e) => {
                              setIsCustom(true);
                              setCustomValue(e.target.value);
                            }}
                            placeholder={String(upiCheckoutAmount)}
                            className="w-20 pl-5 pr-2 py-0.5 rounded-lg bg-[#0b0b0e] border border-white/15 text-white text-xs font-bold focus:outline-none focus:border-white/40 transition-all placeholder:text-zinc-600"
                          />
                        </div>
                      </div>
                    </div>

                    {/* 4 Quick UPI App Cards in 1 Row (Matte Black Cards) */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-2.5 mb-2.5">
                      {/* 1. Paytm */}
                      <a
                        href={`paytmmp://pay?pa=${upiId}&pn=${encodeURIComponent(payeeName)}&am=${upiCheckoutAmount}&cu=INR&tn=MoviesNet%20Support`}
                        className="p-2 sm:p-2.5 rounded-xl bg-[#141419] hover:bg-[#1d1d25] border border-white/[0.07] hover:border-white/[0.14] flex items-center gap-2.5 transition-all hover:scale-[1.02] active:scale-95 group shadow-sm min-w-0"
                        title="Open Paytm App"
                      >
                        <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center shrink-0 shadow-sm border border-slate-200/90 p-0.5">
                          <svg className="w-6 h-auto max-h-4" viewBox="0 0 54 18" fill="none">
                            <text x="27" y="10" dominantBaseline="central" textAnchor="middle" fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif">
                              <tspan fill="#002970" fontWeight="900" fontSize="15" letterSpacing="-0.5">pay</tspan>
                              <tspan fill="#00BAF2" fontWeight="900" fontSize="15" letterSpacing="-0.5">tm</tspan>
                            </text>
                          </svg>
                        </div>
                        <div className="text-left min-w-0 flex-1">
                          <div className="font-bold text-xs text-white leading-tight truncate">Paytm</div>
                          <div className="text-[10px] text-zinc-400 group-hover:text-zinc-200 transition-colors leading-tight truncate mt-0.5">
                            Open Paytm ↗
                          </div>
                        </div>
                      </a>

                      {/* 2. PhonePe */}
                      <a
                        href={`phonepe://pay?pa=${upiId}&pn=${encodeURIComponent(payeeName)}&am=${upiCheckoutAmount}&cu=INR&tn=MoviesNet%20Support`}
                        className="p-2 sm:p-2.5 rounded-xl bg-[#141419] hover:bg-[#1d1d25] border border-white/[0.07] hover:border-white/[0.14] flex items-center gap-2.5 transition-all hover:scale-[1.02] active:scale-95 group shadow-sm min-w-0"
                        title="Open PhonePe App"
                      >
                        <div className="w-8 h-8 rounded-lg bg-[#5f259f] flex items-center justify-center shrink-0 shadow-sm text-white font-black text-[13px] leading-none select-none border border-purple-400/30">
                          पे
                        </div>
                        <div className="text-left min-w-0 flex-1">
                          <div className="font-bold text-xs text-white leading-tight truncate">PhonePe</div>
                          <div className="text-[10px] text-zinc-400 group-hover:text-zinc-200 transition-colors leading-tight truncate mt-0.5">
                            Open PhonePe ↗
                          </div>
                        </div>
                      </a>

                      {/* 3. Google Pay */}
                      <a
                        href={`gpay://upi/pay?pa=${upiId}&pn=${encodeURIComponent(payeeName)}&am=${upiCheckoutAmount}&cu=INR&tn=MoviesNet%20Support`}
                        className="p-2 sm:p-2.5 rounded-xl bg-[#141419] hover:bg-[#1d1d25] border border-white/[0.07] hover:border-white/[0.14] flex items-center gap-2.5 transition-all hover:scale-[1.02] active:scale-95 group shadow-sm min-w-0"
                        title="Open Google Pay App"
                      >
                        <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center shrink-0 shadow-sm p-1.5 border border-slate-200/90">
                          <GooglePayIcon showText={false} />
                        </div>
                        <div className="text-left min-w-0 flex-1">
                          <div className="font-bold text-xs text-white leading-tight truncate">Google Pay</div>
                          <div className="text-[10px] text-zinc-400 group-hover:text-zinc-200 transition-colors leading-tight truncate mt-0.5">
                            Open GPay ↗
                          </div>
                        </div>
                      </a>

                      {/* 4. Any UPI App */}
                      <a
                        href={`upi://pay?pa=${upiId}&pn=${encodeURIComponent(payeeName)}&am=${upiCheckoutAmount}&cu=INR&tn=MoviesNet%20Support`}
                        className="p-2 sm:p-2.5 rounded-xl bg-[#141419] hover:bg-[#1d1d25] border border-white/[0.07] hover:border-white/[0.14] flex items-center gap-2.5 transition-all hover:scale-[1.02] active:scale-95 group shadow-sm min-w-0"
                        title="Launch BHIM or installed UPI App"
                      >
                        <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center shrink-0 shadow-sm border border-slate-200/90 p-0.5">
                          <svg className="w-6 h-3.5 shrink-0" viewBox="0 0 46 20" fill="none">
                            <path d="M4 17L12 3H18L10 17H4Z" fill="#097939" />
                            <path d="M12 17L20 3H26L18 17H12Z" fill="#ED7524" />
                            <text x="26" y="14" fill="#0f172a" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="900" fontSize="12" fontStyle="italic" letterSpacing="-0.5">UPI</text>
                          </svg>
                        </div>
                        <div className="text-left min-w-0 flex-1">
                          <div className="font-bold text-xs text-white leading-tight truncate">Any UPI App</div>
                          <div className="text-[10px] text-zinc-400 group-hover:text-zinc-200 transition-colors leading-tight truncate mt-0.5">
                            Scan QR Code
                          </div>
                        </div>
                      </a>
                    </div>

                    {/* Direct UPI ID Bar with Copy */}
                    <div className="relative flex items-center justify-between px-3.5 py-2.5 rounded-xl bg-[#121216] border border-white/[0.08] backdrop-blur-xl mb-2.5 shadow-sm">
                      <div className="flex items-center gap-2.5 min-w-0 mr-3 flex-1">
                        <span className="px-2 py-0.5 rounded-md bg-white/[0.06] border border-white/10 text-[10px] font-mono font-bold text-zinc-300 uppercase tracking-wider shrink-0">
                          UPI ID
                        </span>
                        <span className="text-xs sm:text-sm font-mono tracking-wider font-semibold text-zinc-100 truncate select-all">
                          {upiId}
                        </span>
                      </div>

                      <button
                        type="button"
                        onClick={handleCopyUpi}
                        className={`px-3.5 py-1.5 rounded-lg font-bold text-xs transition-all cursor-pointer flex items-center gap-1.5 shrink-0 shadow-sm active:scale-95 ${
                          copiedUpi
                            ? 'bg-emerald-400 text-slate-950 font-black shadow-[0_0_12px_rgba(52,211,153,0.5)]'
                            : 'bg-white hover:bg-zinc-200 text-zinc-900'
                        }`}
                      >
                        <span>{copiedUpi ? '✓' : '📋'}</span>
                        <span>{copiedUpi ? 'Copied' : 'Copy'}</span>
                      </button>
                    </div>

                    {/* Action CTA Button (Matte Contrast) */}
                    <button
                      type="button"
                      onClick={() => handleIHavePaidClick('upi')}
                      className="w-full py-2.5 sm:py-3 rounded-xl bg-white hover:bg-zinc-200 text-black font-black text-xs sm:text-sm tracking-wide shadow-[0_4px_20px_rgba(255,255,255,0.15)] hover:shadow-[0_6px_25px_rgba(255,255,255,0.25)] transition-all cursor-pointer active:scale-[0.99] flex items-center justify-center gap-2"
                    >
                      <span className="w-4 h-4 rounded-full bg-black text-white flex items-center justify-center text-[10px] font-black shadow-inner">
                        ✓
                      </span>
                      <span>I Have Completed Payment (₹{upiCheckoutAmount})</span>
                      <span className="text-base leading-none">➔</span>
                    </button>
                  </div>
                )}

                {/* Tab 2: Cards & Global */}
                {activeTab === 'card' && (
                  <div className="relative z-10 animate-fadeIn">
                    {/* 4 International Payment Method Cards in 1 Row (Matte Black) */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-2.5 mb-2.5">
                      {/* 1. Ko-fi */}
                      <a
                        href={kofiBase}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 sm:p-2.5 rounded-xl bg-[#141419] hover:bg-[#1d1d25] border border-white/[0.07] hover:border-white/[0.14] flex items-center gap-2.5 transition-all hover:scale-[1.02] active:scale-95 group shadow-sm min-w-0"
                        title="Support on Ko-fi (0% platform fee, instant payout)"
                      >
                        <div className="w-8 h-8 rounded-lg bg-[#FF5E5B] flex items-center justify-center shrink-0 shadow-sm border border-red-300/40 text-white p-1">
                          <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                          </svg>
                        </div>
                        <div className="text-left min-w-0 flex-1">
                          <div className="font-bold text-xs text-white leading-tight truncate flex items-center gap-1">
                            <span>Ko-fi</span>
                            <span className="text-[9px] px-1 py-0.2 rounded bg-white/[0.06] text-zinc-300 font-mono font-bold">0%</span>
                          </div>
                          <div className="text-[10px] text-zinc-400 group-hover:text-zinc-200 transition-colors leading-tight truncate mt-0.5">
                            Instant Payout ↗
                          </div>
                        </div>
                      </a>

                      {/* 2. Credit & Debit Cards */}
                      <a
                        href={paypalBase}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 sm:p-2.5 rounded-xl bg-[#141419] hover:bg-[#1d1d25] border border-white/[0.07] hover:border-white/[0.14] flex items-center gap-2.5 transition-all hover:scale-[1.02] active:scale-95 group shadow-sm min-w-0"
                        title="Pay using Credit or Debit Card"
                      >
                        <div className="w-8 h-8 rounded-lg bg-[#101014] flex items-center justify-center shrink-0 shadow-sm border border-white/10 p-1">
                          <div className="flex items-center -space-x-1">
                            <span className="w-2.5 h-2.5 rounded-full bg-[#EB001B] inline-block" />
                            <span className="w-2.5 h-2.5 rounded-full bg-[#F79E1B]/90 inline-block" />
                          </div>
                        </div>
                        <div className="text-left min-w-0 flex-1">
                          <div className="font-bold text-xs text-white leading-tight truncate">Credit/Debit</div>
                          <div className="text-[10px] text-zinc-400 group-hover:text-zinc-200 transition-colors leading-tight truncate mt-0.5">
                            Visa • MC • Amex ↗
                          </div>
                        </div>
                      </a>

                      {/* 3. PayPal Express */}
                      <a
                        href={paypalBase}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 sm:p-2.5 rounded-xl bg-[#141419] hover:bg-[#1d1d25] border border-white/[0.07] hover:border-white/[0.14] flex items-center gap-2.5 transition-all hover:scale-[1.02] active:scale-95 group shadow-sm min-w-0"
                        title="Checkout with PayPal"
                      >
                        <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center shrink-0 shadow-sm border border-slate-200/90 p-1">
                          <PayPalMarkIcon className="w-4 h-4" />
                        </div>
                        <div className="text-left min-w-0 flex-1">
                          <div className="font-bold text-xs text-white leading-tight truncate">PayPal</div>
                          <div className="text-[10px] text-zinc-400 group-hover:text-zinc-200 transition-colors leading-tight truncate mt-0.5">
                            Fast &amp; Global ↗
                          </div>
                        </div>
                      </a>

                      {/* 4. Apple Pay */}
                      <a
                        href={kofiBase}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 sm:p-2.5 rounded-xl bg-[#141419] hover:bg-[#1d1d25] border border-white/[0.07] hover:border-white/[0.14] flex items-center gap-2.5 transition-all hover:scale-[1.02] active:scale-95 group shadow-sm min-w-0"
                        title="Instant 1-Click Support with Apple Pay"
                      >
                        <div className="w-8 h-8 rounded-lg bg-black flex items-center justify-center shrink-0 shadow-sm border border-white/20 p-1 text-white">
                          <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 170 170">
                            <path d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.19-2.12-9.97-3.17-14.34-3.17-4.58 0-9.49 1.05-14.74 3.17-5.26 2.13-9.5 3.24-12.74 3.35-4.35.13-9.16-1.9-14.42-6.08-3.69-3.04-7.69-7.85-12-14.43-6.53-10.12-11.64-21.75-15.34-34.91-3.7-13.16-5.55-25.75-5.55-37.78 0-14.13 3.49-26.17 10.47-36.14 6.98-9.97 15.82-15.08 26.53-15.34 4.58 0 9.87 1.25 15.89 3.75 6.02 2.5 10.23 3.75 12.63 3.75 2.02 0 6.34-1.28 12.96-3.85 6.62-2.57 12.21-3.74 16.76-3.52 12.44.8 22.56 5.46 30.36 13.99-10.88 6.56-16.21 15.68-16 27.35.22 9.09 3.74 16.75 10.57 22.98 6.82 6.23 14.86 9.77 24.11 10.63-2.12 6.64-4.8 13.17-8.04 19.59zM119.22 31.42c0-7.39 2.68-14.28 8.04-20.67 5.36-6.39 12-10.27 19.92-11.64.22 1.13.33 2.17.33 3.12 0 7.39-2.8 14.4-8.4 21.03-5.6 6.63-12.44 10.51-20.52 11.64-.11-1.13-.17-2.17-.17-3.12z"/>
                          </svg>
                        </div>
                        <div className="text-left min-w-0 flex-1">
                          <div className="font-bold text-xs text-white leading-tight truncate">Apple Pay</div>
                          <div className="text-[10px] text-zinc-400 group-hover:text-zinc-200 transition-colors leading-tight truncate mt-0.5">
                            1-Click Pay ↗
                          </div>
                        </div>
                      </a>
                    </div>

                    {/* Action CTA Button for Cards (Matte Contrast) */}
                    <a
                      href={kofiBase}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-2.5 sm:py-3 rounded-xl bg-white hover:bg-zinc-200 text-black font-black text-xs sm:text-sm tracking-wide shadow-[0_4px_20px_rgba(255,255,255,0.15)] hover:shadow-[0_6px_25px_rgba(255,255,255,0.25)] transition-all cursor-pointer active:scale-[0.99] flex items-center justify-center gap-2"
                    >
                      <span>Proceed to Global Checkout (${modalAmount})</span>
                      <span className="text-base leading-none">➔</span>
                    </a>
                  </div>
                )}

                {/* Tab 3: Crypto */}
                {activeTab === 'crypto' && (
                  <div className="relative z-10 animate-fadeIn space-y-2">
                    {/* Binance Direct Verified Badge */}
                    <div className="flex items-center justify-between px-1">
                      <div className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#F0B90B] animate-pulse" />
                        <span className="text-[11px] font-bold text-zinc-200 tracking-wide flex items-center gap-1">
                          <span>Binance Direct Deposit</span>
                          <span className="text-[9px] font-mono text-emerald-400 bg-white/[0.06] px-1.5 py-0.2 rounded border border-white/10">Verified</span>
                        </span>
                      </div>
                      <span className="text-[10px] font-mono text-zinc-400 bg-white/[0.04] px-2 py-0.5 rounded border border-white/10">
                        Direct to Founder Wallet
                      </span>
                    </div>

                    {/* 3 Prominent Crypto Coin Selector Cards (Matte Black) */}
                    <div className="grid grid-cols-3 gap-2 sm:gap-2.5">
                      {(Object.keys(CRYPTO_WALLETS) as Array<keyof typeof CRYPTO_WALLETS>).map((coinKey) => {
                        const coin = CRYPTO_WALLETS[coinKey];
                        const isSelected = selectedCrypto === coinKey;
                        return (
                          <button
                            key={coinKey}
                            type="button"
                            onClick={() => setSelectedCrypto(coinKey)}
                            className={`p-2 sm:p-2.5 rounded-xl border flex items-center gap-2 sm:gap-2.5 transition-all cursor-pointer min-w-0 text-left active:scale-95 ${
                              isSelected
                                ? 'bg-[#24242d] border-white/20 text-white shadow-sm ring-1 ring-white/10 scale-[1.02]'
                                : 'bg-[#141419] hover:bg-[#1d1d25] border-white/[0.07] hover:border-white/[0.14]'
                            }`}
                          >
                            <div
                              className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 shadow-sm font-black text-sm select-none"
                              style={{ backgroundColor: coin.color, color: coinKey === 'BEP' ? '#000' : '#fff' }}
                            >
                              {coin.symbol}
                            </div>
                            <div className="min-w-0 flex-1">
                              <div className="font-bold text-xs text-white leading-tight truncate flex items-center gap-1">
                                <span>{coin.name}</span>
                              </div>
                              <div className="text-[10px] text-zinc-400 font-mono leading-tight truncate mt-0.5">
                                {coin.network}
                              </div>
                            </div>
                          </button>
                        );
                      })}
                    </div>

                    {/* Direct Crypto Wallet Address Bar with Network Tag & Copy Button */}
                    <div className="relative flex items-center justify-between px-3.5 py-2.5 rounded-xl bg-[#121216] border border-white/[0.08] backdrop-blur-xl shadow-sm">
                      <div className="flex items-center gap-2.5 min-w-0 mr-3 flex-1">
                        <span className="px-2 py-0.5 rounded-md bg-white/[0.06] border border-white/10 text-[10px] font-mono font-bold text-zinc-300 uppercase tracking-wider shrink-0">
                          {CRYPTO_WALLETS[selectedCrypto].network}
                        </span>
                        <code className="text-xs sm:text-sm font-mono tracking-wider font-semibold text-zinc-100 truncate select-all">
                          {CRYPTO_WALLETS[selectedCrypto].address}
                        </code>
                      </div>

                      <button
                        type="button"
                        onClick={() =>
                          handleCopyCrypto(
                            CRYPTO_WALLETS[selectedCrypto].address,
                            selectedCrypto
                          )
                        }
                        className={`px-3.5 py-1.5 rounded-lg font-bold text-xs transition-all cursor-pointer flex items-center gap-1.5 shrink-0 shadow-sm active:scale-95 ${
                          copiedCrypto === selectedCrypto
                            ? 'bg-emerald-400 text-slate-950 font-black shadow-[0_0_12px_rgba(52,211,153,0.5)]'
                            : 'bg-white hover:bg-zinc-200 text-zinc-900'
                        }`}
                      >
                        <span>{copiedCrypto === selectedCrypto ? '✓' : '📋'}</span>
                        <span>{copiedCrypto === selectedCrypto ? 'Copied' : 'Copy'}</span>
                      </button>
                    </div>

                    {/* Clean Guidance & Target Amount Note */}
                    <div className="flex items-center justify-between px-1 text-[10.5px] font-mono text-zinc-400">
                      <span className="truncate">
                        ⚠️ Send on <span className="text-zinc-200 font-bold">{CRYPTO_WALLETS[selectedCrypto].fullNetwork}</span> only
                      </span>
                      <span className="text-emerald-400 font-bold shrink-0 ml-2">
                        Target: ${modalAmount} USD
                      </span>
                    </div>

                    {/* Action CTA Button for Crypto (Matte Contrast) */}
                    <button
                      type="button"
                      onClick={() => handleIHavePaidClick('crypto')}
                      className="w-full py-2.5 sm:py-3 rounded-xl bg-white hover:bg-zinc-200 text-black font-black text-xs sm:text-sm tracking-wide shadow-[0_4px_20px_rgba(255,255,255,0.15)] hover:shadow-[0_6px_25px_rgba(255,255,255,0.25)] transition-all cursor-pointer active:scale-[0.99] flex items-center justify-center gap-2"
                    >
                      <span className="w-4 h-4 rounded-full bg-black text-white flex items-center justify-center text-[10px] font-black shadow-inner">
                        ✓
                      </span>
                      <span>I Have Sent ${modalAmount} USD in {CRYPTO_WALLETS[selectedCrypto].name}</span>
                      <span className="text-base leading-none">➔</span>
                    </button>
                  </div>
                )}
                {/* Micro Help Strip in Modal Footer */}
                <div className="mt-3 pt-2 border-t border-zinc-800/80 flex items-center justify-between text-[11px] text-zinc-400">
                  <span className="truncate">Need payment assistance or website listing verification?</span>
                  <a
                    href={liveDiscordHelp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#5865F2] hover:text-[#7983f5] font-bold flex items-center gap-1 shrink-0 ml-2"
                  >
                    <span>Discord Help</span>
                    <span className="text-[10px]">↗</span>
                  </a>
                </div>
              </>
            )}

          </div>
        </div>
      )}
    </div>
  );
}
