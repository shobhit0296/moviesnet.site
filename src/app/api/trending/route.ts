// ============================================================================
// AllSiteHub Search — Trending API Route
// ============================================================================
import { NextResponse } from 'next/server';
import { getTrendingSearches } from '@/lib/db';

export async function GET() {
  try {
    const today = getTrendingSearches('today');
    const week = getTrendingSearches('week');
    const month = getTrendingSearches('month');

    return NextResponse.json({
      today,
      week,
      month,
    }, {
      headers: {
        'Cache-Control': 'public, max-age=1800, s-maxage=3600, stale-while-revalidate=86400',
      },
    });
  } catch (error) {
    return NextResponse.json({ today: [], week: [], month: [] }, { status: 500 });
  }
}
