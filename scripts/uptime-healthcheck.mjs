// ============================================================================
// MoviesNet & AllSiteHub — Automated 30-Minute Uptime & Error Monitor
// ============================================================================

const webhookUrl = process.env.DISCORD_WEBHOOK_URL || 'https://discord.com/api/webhooks/1544575623299727431/UvGkGhVuQ6xYU8D6sfGBgf9l0mHoPilV5SZf87x7yzV-SmHpVcwodsnDpGX9Qyk-Jji2';

const ENDPOINTS_TO_CHECK = [
  { name: 'Homepage (HTML)', url: 'https://moviesnet.site' },
  { name: 'Health API', url: 'https://moviesnet.site/api/health' },
  { name: 'Directory API', url: 'https://moviesnet.site/api/websites' },
  { name: 'Search Suggestions API', url: 'https://moviesnet.site/api/suggestions?q=naruto' },
  { name: 'Search Engine API', url: 'https://moviesnet.site/api/search?q=movie' },
];

async function checkEndpoint(endpoint) {
  const start = Date.now();
  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 10000); // 10s timeout

    const res = await fetch(endpoint.url, {
      signal: controller.signal,
      headers: { 'User-Agent': 'MoviesNet-UptimeBot/1.0' },
    });
    clearTimeout(timeout);
    const latency = Date.now() - start;

    return {
      name: endpoint.name,
      url: endpoint.url,
      status: res.status,
      ok: res.ok,
      latency,
      server: res.headers.get('server') || 'Cloudflare/Vercel',
      error: res.ok ? null : `HTTP ${res.status} ${res.statusText}`,
    };
  } catch (err) {
    const latency = Date.now() - start;
    return {
      name: endpoint.name,
      url: endpoint.url,
      status: 0,
      ok: false,
      latency,
      server: 'N/A',
      error: err instanceof Error ? err.message : 'Connection failed',
    };
  }
}

async function runUptimeCheck() {
  const results = [];
  let hasFailure = false;

  for (const ep of ENDPOINTS_TO_CHECK) {
    const res = await checkEndpoint(ep);
    results.push(res);
    if (!res.ok) hasFailure = true;
  }

  const avgLatency = Math.round(results.reduce((acc, r) => acc + r.latency, 0) / results.length);

  // If there is any failure, send an URGENT DOWN ALERT to Discord immediately
  if (hasFailure) {
    const failedList = results.filter((r) => !r.ok);
    const fields = failedList.map((f) => ({
      name: `❌ ${f.name} (FAILED)`,
      value: `• **URL:** \`${f.url}\`\n• **Status Code:** \`${f.status}\`\n• **Error:** \`${f.error}\`\n• **Response Time:** \`${f.latency}ms\``,
      inline: false,
    }));

    const alertBody = {
      username: 'MoviesNet Uptime Sentinel',
      avatar_url: 'https://moviesnet.site/icon.svg',
      embeds: [
        {
          title: '🚨 CRITICAL: WEBSITE OUTAGE / ERROR DETECTED',
          description: `The 30-minute health probe detected **${failedList.length} failing endpoint(s)** on **[https://moviesnet.site](https://moviesnet.site)**.`,
          color: 0xff0033, // Red
          fields,
          footer: {
            text: 'Automated 30-Min Sentinel • Immediate Alert',
            icon_url: 'https://moviesnet.site/icon.svg',
          },
          timestamp: new Date().toISOString(),
        },
      ],
    };

    await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(alertBody),
    });

    console.log('Failure alert sent to Discord.');
    return;
  }

  // If passed via workflow dispatch or normal probe
  console.log(`All ${results.length} endpoints OK. Avg latency: ${avgLatency}ms.`);
}

runUptimeCheck();
