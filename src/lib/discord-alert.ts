// ============================================================================
// MoviesNet — Automated Discord Webhook Alert Service
// ============================================================================

export interface DiscordEmbedField {
  name: string;
  value: string;
  inline?: boolean;
}

export interface DiscordAlertPayload {
  title: string;
  description: string;
  color?: number; // E.g. 0xff0033 (Red) or 0x00ff88 (Green)
  fields?: DiscordEmbedField[];
  url?: string;
  webhookUrl?: string;
}

/**
 * Sends a rich Discord embed notification to a configured Webhook.
 */
export async function sendDiscordAlert(payload: DiscordAlertPayload): Promise<{ success: boolean; error?: string }> {
  const webhookUrl = payload.webhookUrl || process.env.DISCORD_WEBHOOK_URL;

  if (!webhookUrl) {
    return {
      success: false,
      error: 'Discord Webhook URL not configured (DISCORD_WEBHOOK_URL environment variable).',
    };
  }

  try {
    const body = {
      username: 'MoviesNet Vercel Shield',
      avatar_url: 'https://moviesnet.site/icon.svg',
      embeds: [
        {
          title: payload.title,
          description: payload.description,
          url: payload.url || 'https://moviesnet.site',
          color: payload.color || 0xe8b86d, // Gold default
          fields: payload.fields || [],
          footer: {
            text: 'MoviesNet Zero-Crash Monitor • Vercel Free Tier',
            icon_url: 'https://moviesnet.site/icon.svg',
          },
          timestamp: new Date().toISOString(),
        },
      ],
    };

    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 8000);

    const res = await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
      signal: controller.signal,
    });
    clearTimeout(timeout);

    if (res.ok || res.status === 204) {
      return { success: true };
    }

    const text = await res.text();
    return { success: false, error: text || `HTTP ${res.status}` };
  } catch (err) {
    return { success: false, error: err instanceof Error ? err.message : 'Unknown error' };
  }
}
