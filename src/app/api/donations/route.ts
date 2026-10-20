import { NextResponse } from 'next/server';
import { getDonations, saveDonation, updateDonation, type Donation } from '@/lib/donations';

export const revalidate = 60;

const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN || '8741338089:AAHTpVcV1teL3c-XUMSOLJPX1FoadkPSoAg';

export async function GET() {
  try {
    const all = await getDonations();
    const donations = all.filter((d) => d.status === 'approved' || d.status === 'verified');
    return NextResponse.json({ donations }, {
      headers: {
        'Cache-Control': 'public, max-age=60, s-maxage=300',
      }
    });
  } catch (err) {
    console.error('[API /api/donations] Error:', err);
    return NextResponse.json({ error: 'Failed to fetch donations' }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { id, name, amount, currency, message, platform, email, whatsapp, utr, screenshot, status } = body;

    const parsedAmount = Number(amount);
    if (!parsedAmount || parsedAmount <= 0) {
      return NextResponse.json({ error: 'Valid amount is required' }, { status: 400 });
    }

    if (id) {
      const updated = await updateDonation(id, {
        name: name ? String(name).trim() : undefined,
        amount: parsedAmount,
        currency: currency || 'INR',
        platform: platform,
        message: message !== undefined ? String(message).trim() : undefined,
        email: email ? String(email).trim() : undefined,
        whatsapp: whatsapp ? String(whatsapp).trim() : undefined,
        utr: utr ? String(utr).trim() : undefined,
        screenshot: screenshot || undefined,
        status: status || 'pending_verification',
      });
      if (updated) {
        return NextResponse.json({ success: true, donation: updated });
      }
    }

    const newDonation: Donation = {
      id: id || `DON_${Date.now()}_${Math.random().toString(36).substring(2, 6)}`,
      name: (name && String(name).trim()) || 'Supporter (Verification Pending)',
      amount: parsedAmount,
      currency: currency || 'INR',
      platform: platform || 'Paytm Business UPI',
      message: message || 'Initiated via payment modal',
      email: email ? String(email).trim() : undefined,
      whatsapp: whatsapp ? String(whatsapp).trim() : undefined,
      utr: utr ? String(utr).trim() : undefined,
      screenshot: screenshot || undefined,
      status: status || 'pending_verification',
      date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
      createdAt: Date.now(),
    };

    await saveDonation(newDonation);

    // Telegram notification
    if (TELEGRAM_BOT_TOKEN) {
      const adminChatId = process.env.TELEGRAM_ADMIN_CHAT_ID;
      if (adminChatId) {
        const text = `🎉 *[MoviesNet] New Donation / Verification!*\n\n` +
          `💰 *Amount:* ${newDonation.currency === 'USD' ? '$' : '₹'}${parsedAmount}\n` +
          `👤 *Name:* ${newDonation.name}\n` +
          `💳 *Platform:* ${newDonation.platform}\n` +
          (newDonation.utr ? `📝 *UTR:* \`${newDonation.utr}\`\n` : '') +
          (newDonation.whatsapp ? `📱 *Contact:* \`${newDonation.whatsapp}\`\n` : '') +
          (newDonation.status ? `🚦 *Status:* \`${newDonation.status}\`\n` : '') +
          `🕒 *Time:* ${new Date().toLocaleString('en-IN')}`;

        fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ chat_id: adminChatId, text, parse_mode: 'Markdown' }),
        }).catch(() => {});
      }
    }

    return NextResponse.json({ success: true, donation: newDonation });
  } catch (err) {
    console.error('[API /api/donations POST] Error:', err);
    return NextResponse.json({ error: 'Failed to record donation' }, { status: 500 });
  }
}

export async function PUT(req: Request) {
  try {
    const body = await req.json();
    const { id, ...updates } = body;
    if (!id) return NextResponse.json({ error: 'Donation id is required' }, { status: 400 });
    const updated = await updateDonation(id, updates);
    if (!updated) return NextResponse.json({ error: 'Donation not found' }, { status: 404 });
    return NextResponse.json({ success: true, donation: updated });
  } catch (err) {
    return NextResponse.json({ error: 'Failed to update donation' }, { status: 500 });
  }
}
