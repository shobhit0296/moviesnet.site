// ============================================================================
// MoviesNet — Automated WhatsApp Alert Service
// ============================================================================

export interface WhatsAppAlertConfig {
  phoneNumber: string; // E.g. +919876543210 (country code + number)
  apiKey: string;      // CallMeBot Free API Key or Twilio
}

/**
 * Sends a direct WhatsApp alert using the CallMeBot Free API.
 * 
 * Setup in 10 seconds:
 * 1. Add CallMeBot on WhatsApp: +34 941 01 99 97 or +34 911 06 73 92
 * 2. Send message: "I allow callmebot to send me messages"
 * 3. Receive your free API Key and add it to .env.local:
 *    WHATSAPP_PHONE="+919876543210"
 *    WHATSAPP_API_KEY="123456"
 */
export async function sendWhatsAppAlert(message: string, customPhone?: string, customKey?: string): Promise<{ success: boolean; error?: string }> {
  const phone = customPhone || process.env.WHATSAPP_PHONE;
  const apiKey = customKey || process.env.WHATSAPP_API_KEY;

  if (!phone || !apiKey) {
    return {
      success: false,
      error: 'WhatsApp phone number or API key not configured in environment variables (WHATSAPP_PHONE, WHATSAPP_API_KEY).',
    };
  }

  try {
    const formattedPhone = phone.replace(/[^0-9+]/g, '');
    const encodedMessage = encodeURIComponent(message);
    const url = `https://api.callmebot.com/whatsapp.php?phone=${formattedPhone}&text=${encodedMessage}&apikey=${apiKey}`;

    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 10000);

    const res = await fetch(url, { signal: controller.signal });
    clearTimeout(timeout);

    if (res.ok) {
      return { success: true };
    }

    const text = await res.text();
    return { success: false, error: text || `HTTP ${res.status}` };
  } catch (err) {
    const errorMsg = err instanceof Error ? err.message : 'Unknown error';
    return { success: false, error: errorMsg };
  }
}
