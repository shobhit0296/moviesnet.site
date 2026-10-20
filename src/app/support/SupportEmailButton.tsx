'use client';

import { useState } from 'react';

interface Props {
  email: string;
}

export default function SupportEmailButton({ email }: Props) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      const textArea = document.createElement('textarea');
      textArea.value = email;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    }
  };

  return (
    <div className="flex items-center gap-1.5 w-full">
      <a
        href={`mailto:${email}?subject=MoviesNet%20Support%20Inquiry`}
        className="flex-1 min-w-0 py-2.5 px-3 rounded-xl text-xs font-bold text-center bg-white/[0.06] hover:bg-white hover:text-black text-slate-200 border border-white/10 transition-all duration-150 active:scale-95 flex items-center justify-center gap-1.5 truncate select-none group/link"
        title={`Click to email ${email}`}
      >
        <span className="truncate">{email}</span>
        <span className="text-[11px] opacity-75 shrink-0 group-hover/link:translate-x-0.5 transition-transform">
          ✉️
        </span>
      </a>

      <button
        type="button"
        onClick={handleCopy}
        className={`px-2.5 py-2.5 rounded-xl text-xs font-bold transition-all duration-150 active:scale-95 border shrink-0 cursor-pointer flex items-center justify-center ${
          copied
            ? 'bg-emerald-500 text-black border-emerald-400 font-black shadow-sm'
            : 'bg-white/[0.06] hover:bg-white/[0.15] text-slate-300 hover:text-white border-white/10'
        }`}
        title="Copy email address"
      >
        <span className="text-[12px]">{copied ? '✓' : '📋'}</span>
      </button>
    </div>
  );
}
