// ============================================================================
// MoviesNet & AllSiteHub — Multi-Tier Vercel Usage Milestone Monitor
// ============================================================================
import { sendWhatsAppAlert } from './whatsapp-alert';
import { sendDiscordAlert, createProgressBar } from './discord-alert';

export interface VercelUsageReport {
  timestamp: string;
  isAboveThreshold: boolean;
  milestoneTriggered: number | null; // 25, 50, 75, or 95
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

function getMilestoneConfig(percent: number) {
  if (percent >= 95) {
    return {
      tier: 95,
      title: '🔴 CRITICAL: Vercel Usage Reached 95%+',
      color: 0xef4444, // Bright Red
      severity: 'CRITICAL',
      action: 'Check Cloudflare Cache Shield & Bot Fight Mode immediately to prevent free tier pause.',
    };
  }
  if (percent >= 75) {
    return {
      tier: 75,
      title: '🟠 WARNING: Vercel Usage Reached 75%',
      color: 0xf97316, // Orange
      severity: 'HIGH',
      action: 'Verify Cloudflare edge caching is active to keep remaining 25% buffer healthy.',
    };
  }
  if (percent >= 50) {
    return {
      tier: 50,
      title: '🟡 NOTICE: Vercel Usage Reached 50% (Halfway)',
      color: 0xeab308, // Yellow
      severity: 'MEDIUM',
      action: 'Normal active growth. CDN edge caching is absorbing repeat traffic.',
    };
  }
  if (percent >= 25) {
    return {
      tier: 25,
      title: '🔵 INFO: Vercel Usage Reached 25%',
      color: 0x3b82f6, // Blue
      severity: 'LOW',
      action: 'First quarter usage milestone reached. Systems running smoothly.',
    };
  }
  return null;
}

/**
 * Checks Vercel project usage and triggers multi-tier milestone alerts (25%, 50%, 75%, 95%).
 */
export async function checkVercelUsageAndAlert(thresholdPercent = 25, customWebhook?: string): Promise<VercelUsageReport> {
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
  const milestone = getMilestoneConfig(highestPercentage);
  const isAboveThreshold = highestPercentage >= thresholdPercent;

  let discordSent = false;
  let whatsappSent = false;
  let alertError: string | undefined;

  if (isAboveThreshold || customWebhook) {
    const config = milestone || {
      tier: thresholdPercent,
      title: `📊 Vercel Usage Status Report (${highestPercentage.toFixed(1)}%)`,
      color: 0x10b981, // Green
      severity: 'NORMAL',
      action: 'All systems operating well below limits.',
    };

    // 1. Send Rich Discord Alert
    const discordRes = await sendDiscordAlert({
      webhookUrl: customWebhook,
      title: config.title,
      description: `Target Sites: **MoviesNet** (\`moviesnet.site\`) & **AllSiteHub** (\`allsitehub\`)\n\nCurrent Highest Usage Metric: **${highestPercentage.toFixed(2)}% / 100%**`,
      color: config.color,
      url: 'https://vercel.com/venomm1/moviesnet-site',
      fields: [
        {
          name: '⚡ Serverless Function Invocations',
          value: `${createProgressBar(invocationsPct)}\n↳ \`${invocationsUsed.toLocaleString()} / 1,000,000 limit\``,
          inline: false,
        },
        {
          name: '⏱️ Active CPU Compute Time',
          value: `${createProgressBar(cpuPct)}\n↳ \`${cpuHoursUsed.toFixed(2)}h / 4.00 Hours limit\``,
          inline: false,
        },
        {
          name: '🌐 Data Transfer (Bandwidth)',
          value: `${createProgressBar(bandwidthPct)}\n↳ \`${bandwidthGbUsed.toFixed(2)} GB / 100 GB limit\``,
          inline: false,
        },
        {
          name: '🛡️ Status & Recommendation',
          value: `**[${config.severity}]** ${config.action}`,
          inline: false,
        },
      ],
    });
    discordSent = discordRes.success;
    if (!discordRes.success) alertError = discordRes.error;

    // 2. Send WhatsApp Alert if configured
    if (highestPercentage >= 50) {
      const whatsappMsg =
        `📊 *VERCEL USAGE MILESTONE ALERT*\n\n` +
        `Current Usage: *${highestPercentage.toFixed(1)}%*\n` +
        `• Functions: ${invocationsUsed.toLocaleString()} / 1M (${invocationsPct.toFixed(1)}%)\n` +
        `• CPU: ${cpuHoursUsed.toFixed(2)}h / 4h (${cpuPct.toFixed(1)}%)\n` +
        `• Bandwidth: ${bandwidthGbUsed.toFixed(2)} GB / 100 GB\n\n` +
        `Dashboard: https://vercel.com/venomm1/moviesnet-site`;

      const waRes = await sendWhatsAppAlert(whatsappMsg);
      whatsappSent = waRes.success;
    }
  }

  return {
    timestamp: new Date().toISOString(),
    isAboveThreshold,
    milestoneTriggered: milestone?.tier || null,
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
