// ============================================================================
// MoviesNet — Vercel Usage Monitor & Threshold Alerter (Discord + WhatsApp)
// ============================================================================
import { sendWhatsAppAlert } from './whatsapp-alert';
import { sendDiscordAlert, createProgressBar } from './discord-alert';

export interface VercelUsageReport {
  timestamp: string;
  isAboveThreshold: boolean;
  highestPercentage: number;
  metrics: {
    invocations: { used: number; limit: number; percentage: number };
    cpuHours: { used: number; limit: number; percentage: number };
    bandwidthGb: { used: number; limit: number; percentage: number };
  };
  alertSent: boolean;
  alertChannels: {
    discord: boolean;
    whatsapp: boolean;
  };
  alertError?: string;
}

const VERCEL_LIMITS = {
  INVOCATIONS: 1_000_000,
  CPU_HOURS: 4,
  BANDWIDTH_GB: 100,
};

/**
 * Checks Vercel project usage and triggers Discord/WhatsApp alerts if usage exceeds threshold (e.g. 95%).
 */
export async function checkVercelUsageAndAlert(thresholdPercent = 95, customWebhook?: string): Promise<VercelUsageReport> {
  const token = process.env.VERCEL_TOKEN || '';
  const teamId = process.env.VERCEL_TEAM_ID || 'team_DeEdnXuKp67XBdCRPTZxsELt';

  let invocationsUsed = 0;
  let cpuHoursUsed = 0;
  let bandwidthGbUsed = 0;

  try {
    if (token) {
      const res = await fetch(`https://api.vercel.com/v2/usage?teamId=${teamId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (res.ok) {
        const data = await res.json();
        if (data?.metrics) {
          invocationsUsed = Number(data.metrics.serverlessFunctionInvocations?.value || 0);
          cpuHoursUsed = Number(data.metrics.serverlessFunctionExecutionTime?.value || 0) / 3600;
          bandwidthGbUsed = Number(data.metrics.bandwidth?.value || 0) / (1024 * 1024 * 1024);
        }
      }
    }
  } catch (err) {
    console.warn('Vercel usage API fetch warning:', err);
  }

  const invocationsPct = (invocationsUsed / VERCEL_LIMITS.INVOCATIONS) * 100;
  const cpuPct = (cpuHoursUsed / VERCEL_LIMITS.CPU_HOURS) * 100;
  const bandwidthPct = (bandwidthGbUsed / VERCEL_LIMITS.BANDWIDTH_GB) * 100;

  const highestPercentage = Math.max(invocationsPct, cpuPct, bandwidthPct);
  const isAboveThreshold = highestPercentage >= thresholdPercent;

  let discordSent = false;
  let whatsappSent = false;
  let alertError: string | undefined;

  if (isAboveThreshold || customWebhook) {
    // 1. Send Rich Discord Alert
    const discordRes = await sendDiscordAlert({
      webhookUrl: customWebhook,
      title: '🚨 VERCEL USAGE CRITICAL ALERT (95%+)',
      description: `Your MoviesNet Vercel usage has reached **${highestPercentage.toFixed(1)}%** of your Free Tier capacity.`,
      color: 0xff2a48, // Crimson red
      url: 'https://vercel.com/venomm1/moviesnet-site',
      fields: [
        {
          name: '⚡ Serverless Invocations',
          value: `${createProgressBar(invocationsPct)}\n↳ \`${invocationsUsed.toLocaleString()} / 1,000,000\``,
          inline: false,
        },
        {
          name: '⏱️ Active CPU Time',
          value: `${createProgressBar(cpuPct)}\n↳ \`${cpuHoursUsed.toFixed(2)}h / 4.00h\``,
          inline: false,
        },
        {
          name: '🌐 Bandwidth Transfer',
          value: `${createProgressBar(bandwidthPct)}\n↳ \`${bandwidthGbUsed.toFixed(2)} GB / 100 GB\``,
          inline: false,
        },
        {
          name: '🛡️ Action Recommended',
          value: 'Check Cloudflare Cache Shield & Bot Fight Mode are active to absorb incoming requests.',
          inline: false,
        },
      ],
    });
    discordSent = discordRes.success;
    if (!discordRes.success) alertError = discordRes.error;

    // 2. Send WhatsApp Alert if configured
    const whatsappMsg =
      `🚨 *MOVIESNET VERCEL USAGE ALERT* 🚨\n\n` +
      `Usage reached *${highestPercentage.toFixed(1)}%*.\n` +
      `• Invocations: ${invocationsUsed.toLocaleString()} / 1M (${invocationsPct.toFixed(1)}%)\n` +
      `• CPU Time: ${cpuHoursUsed.toFixed(2)}h / 4h (${cpuPct.toFixed(1)}%)\n` +
      `• Bandwidth: ${bandwidthGbUsed.toFixed(2)} GB / 100 GB\n\n` +
      `Dashboard: https://vercel.com/venomm1/moviesnet-site`;

    const waRes = await sendWhatsAppAlert(whatsappMsg);
    whatsappSent = waRes.success;
  }

  return {
    timestamp: new Date().toISOString(),
    isAboveThreshold,
    highestPercentage,
    metrics: {
      invocations: { used: invocationsUsed, limit: VERCEL_LIMITS.INVOCATIONS, percentage: invocationsPct },
      cpuHours: { used: cpuHoursUsed, limit: VERCEL_LIMITS.CPU_HOURS, percentage: cpuPct },
      bandwidthGb: { used: bandwidthGbUsed, limit: VERCEL_LIMITS.BANDWIDTH_GB, percentage: bandwidthPct },
    },
    alertSent: discordSent || whatsappSent,
    alertChannels: {
      discord: discordSent,
      whatsapp: whatsappSent,
    },
    alertError,
  };
}
