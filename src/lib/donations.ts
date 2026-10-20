// src/lib/donations.ts - MoviesNet Donations Store
import fs from 'fs';
import path from 'path';

export interface Donation {
  id: string;
  name: string;
  amount: number;
  currency?: string;
  platform: string;
  message?: string;
  email?: string;
  whatsapp?: string;
  utr?: string;
  screenshot?: string;
  status?: string;
  date: string;
  isFeatured?: boolean;
  createdAt?: number;
}

export interface SiteSettings {
  donationPageEnabled: boolean;
}

const DATA_FILE = path.join(process.cwd(), 'data', 'donations.json');

const INITIAL_DONATIONS: Donation[] = [
  {
    id: 'mn_init_1',
    name: 'Cinephile Supporter',
    amount: 500,
    currency: 'INR',
    platform: 'Paytm Business UPI',
    message: 'Love MoviesNet search engine! Keeps streaming fast and ad-clean.',
    status: 'approved',
    date: 'Oct 18, 2026',
    isFeatured: true,
    createdAt: Date.now() - 86400000 * 2,
  },
  {
    id: 'mn_init_2',
    name: 'Movie Night Fan',
    amount: 250,
    currency: 'INR',
    platform: 'PhonePe',
    message: 'Thanks for indexing all movies without redirects.',
    status: 'approved',
    date: 'Oct 19, 2026',
    isFeatured: false,
    createdAt: Date.now() - 86400000,
  }
];

function readLocalDonations(): Donation[] {
  try {
    if (fs.existsSync(DATA_FILE)) {
      const raw = fs.readFileSync(DATA_FILE, 'utf8');
      const data = JSON.parse(raw);
      if (Array.isArray(data)) return data;
    }
  } catch (e) {
    console.warn('[Donations] Read local donations error:', e);
  }
  return [...INITIAL_DONATIONS];
}

function writeLocalDonations(donations: Donation[]): boolean {
  try {
    const dir = path.dirname(DATA_FILE);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(DATA_FILE, JSON.stringify(donations, null, 2), 'utf8');
    return true;
  } catch (e) {
    console.error('[Donations] Write local donations error:', e);
    return false;
  }
}

export async function getDonations(): Promise<Donation[]> {
  return readLocalDonations();
}

export async function getDonationSettings(): Promise<SiteSettings> {
  return { donationPageEnabled: true };
}

export async function saveDonation(newDonation: Donation): Promise<Donation> {
  const current = readLocalDonations();
  const updated = [newDonation, ...current];
  writeLocalDonations(updated);
  return newDonation;
}

export async function updateDonation(id: string, updates: Partial<Donation>): Promise<Donation | null> {
  const current = readLocalDonations();
  const idx = current.findIndex(d => d.id === id);
  if (idx === -1) return null;
  current[idx] = { ...current[idx], ...updates };
  writeLocalDonations(current);
  return current[idx];
}
