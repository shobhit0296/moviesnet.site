// ============================================================================
// MoviesNet — Vercel Usage Monitor & Threshold Alerter
// ============================================================================
import { sendWhatsAppAlert } from './whatsapp-alert';

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
  alertError?: string;
}

const VERCEL_LIMITS = {
  INVOCATIONS: 1_000_000,
  CPU_HOURS: 4,
  BANDWIDTH_GB: 100,
};

/**
 * Checks Vercel project usage and triggers WhatsApp alert if usage exceeds threshold (e.g. 95%).
 */
export async function checkVercelUsageAndAlert(thresholdPercent = 95): Promise<VercelUsageReport> {
  const token = process.env.VERCEL_TOKEN || '';
  const teamId = process.env.VERCEL_TEAM_ID || 'team_DeEdnXuKp67XBdCRPTZxsELt';

  let invocationsUsed = 0;
  let cpuHoursUsed = 0;
  let bandwidthGbUsed = 0;

  try {
    // 1. Fetch usage data from Vercel API
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
  } catch (err) {
    console.warn('Vercel usage API fetch warning:', err);
  }

  const invocationsPct = (invocationsUsed / VERCEL_LIMITS.INVOCATIONS) * 100;
  const cpuPct = (cpuHoursUsed / VERCEL_LIMITS.CPU_HOURS) * 100;
  const bandwidthPct = (bandwidthGbUsed / VERCEL_LIMITS.BANDWIDTH_GB) * 100;

  const highestPercentage = Math.max(invocationsPct, cpuPct, bandwidthPct);
  const isAboveThreshold = highestPercentage >= thresholdPercent;

  let alertSent = false;
  let alertError: string | undefined;

  if (isAboveThreshold) {
    const alertMessage = 
      `🚨 *MOVIESNET VERCEL USAGE ALERT* 🚨\n\n` +
      `Your Vercel usage has reached *${highestPercentage.toFixed(1)}%* (Threshold: ${thresholdPercent}%).\n\n` +
      `📊 *Metrics Breakdown:*\n` +
      `• *Functions:* ${invocationsUsed.toLocaleString()} / 1,000,000 (${invocationsPct.toFixed(1)}%)\n` +
      `• *CPU Time:* ${cpuHoursUsed.toFixed(2)}h / 4h (${cpuPct.toFixed(1)}%)\n` +
      `• *Bandwidth:* ${bandwidthGbUsed.toFixed(2)} GB / 100 GB (${bandwidthPct.toFixed(1)}%)\n\n` +
      `🔗 *Site:* https://moviesnet.site\n` +
      `⚙️ *Dashboard:* https://vercel.com/venomm1/moviesnet-site`;

    const alertResult = await sendWhatsAppAlert(alertMessage);
    alertSent = alertResult.success;
    alertError = alertResult.error;
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
    alertSent,
    alertError,
  };
}
