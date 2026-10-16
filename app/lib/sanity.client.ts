import { createClient } from 'next-sanity';
import imageUrlBuilder from '@sanity/image-url';

function sanitizeProjectId(input?: string): string {
  if (!input) return '9vg8e4g6';
  // Hapus semua tanda petik tunggal/ganda, whitespace, dan karakter selain a-z, 0-9, dan -
  const cleaned = input.replace(/['"\s]/g, '').toLowerCase();
  return /^[a-z0-9-]+$/.test(cleaned) ? cleaned : '9vg8e4g6';
}

function sanitizeDataset(input?: string): string {
  if (!input) return 'production';
  const cleaned = input.replace(/['"\s]/g, '').toLowerCase();
  return /^[a-z0-9~_-]+$/.test(cleaned) ? cleaned : 'production';
}

export const projectId = sanitizeProjectId(process.env.NEXT_PUBLIC_SANITY_PROJECT_ID);
export const dataset = sanitizeDataset(process.env.NEXT_PUBLIC_SANITY_DATASET);
export const apiVersion = '2024-01-01';

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false, // set false agar update langsung terlihat di studio/web
});

const builder = imageUrlBuilder(client);

export function urlFor(source: any) {
  return builder.image(source);
}
