// ============================================================================
// MoviesNet — Cron Usage Monitor & Multi-Channel Alert API
// ============================================================================
import { NextRequest, NextResponse } from 'next/server';
import { checkVercelUsageAndAlert } from '@/lib/usage-monitor';
import { sendDiscordAlert } from '@/lib/discord-alert';
import { sendWhatsAppAlert } from '@/lib/whatsapp-alert';
import { requireAdmin } from '@/lib/api-auth';

export const dynamic = 'force-dynamic';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const threshold = parseFloat(searchParams.get('threshold') || '95');
  const testDiscord = searchParams.get('testDiscord');
  const testPhone = searchParams.get('testPhone');
  const testKey = searchParams.get('testKey');

  // Test Discord Webhook
  if (testDiscord) {
    const testRes = await sendDiscordAlert({
      webhookUrl: testDiscord,
      title: '✅ MoviesNet Discord Alert Connected!',
      description: `Your automated Vercel usage monitor is connected!\nYou will receive instant alerts here whenever Vercel usage hits **${threshold}%**.`,
      color: 0x00ff88, // Emerald green
      fields: [
        { name: '🌐 Domain', value: 'https://moviesnet.site', inline: true },
        { name: '🛡️ Protection', value: 'Cloudflare Zero-Crash Shield', inline: true },
        { name: '⏱️ Interval', value: 'Checked Every 6 Hours', inline: true },
      ],
    });
    return NextResponse.json({ test: 'discord', ...testRes });
  }

  // Test WhatsApp
  if (testPhone && testKey) {
    const testRes = await sendWhatsAppAlert(
      `✅ *MOVIESNET WHATSAPP ALERTS ACTIVE* 🚀\n\n` +
      `Your automated Vercel usage monitor is connected!\n` +
      `You will receive immediate WhatsApp alerts if usage exceeds ${threshold}%.\n\n` +
      `🌐 Live Site: https://moviesnet.site`,
      testPhone,
      testKey
    );
    return NextResponse.json({ test: 'whatsapp', ...testRes });
  }

  const report = await checkVercelUsageAndAlert(threshold);
  return NextResponse.json(report, {
    headers: { 'Cache-Control': 'private, no-cache, no-store' },
  });
}

export async function POST(request: NextRequest) {
  const isAdmin = await requireAdmin(request);
  if (!isAdmin) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const body = await request.json().catch(() => ({}));
  const threshold = typeof body.threshold === 'number' ? body.threshold : 95;
  const webhookUrl = body.webhookUrl;

  const report = await checkVercelUsageAndAlert(threshold, webhookUrl);
  return NextResponse.json(report);
}
