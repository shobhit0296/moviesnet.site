// ============================================================================
// MoviesNet — Cron Usage Monitor & WhatsApp Alert API
// ============================================================================
import { NextRequest, NextResponse } from 'next/server';
import { checkVercelUsageAndAlert } from '@/lib/usage-monitor';
import { sendWhatsAppAlert } from '@/lib/whatsapp-alert';
import { requireAdmin } from '@/lib/api-auth';

export const dynamic = 'force-dynamic';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const threshold = parseFloat(searchParams.get('threshold') || '95');
  const testPhone = searchParams.get('testPhone');
  const testKey = searchParams.get('testKey');

  // If testing a WhatsApp message directly:
  if (testPhone && testKey) {
    const testRes = await sendWhatsAppAlert(
      `✅ *MOVIESNET WHATSAPP ALERTS ACTIVE* 🚀\n\n` +
      `Your automated Vercel usage monitor is connected!\n` +
      `You will receive immediate WhatsApp alerts if usage exceeds ${threshold}%.\n\n` +
      `🌐 Live Site: https://moviesnet.site`,
      testPhone,
      testKey
    );
    return NextResponse.json({ test: true, ...testRes });
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

  const report = await checkVercelUsageAndAlert(threshold);
  return NextResponse.json(report);
}
