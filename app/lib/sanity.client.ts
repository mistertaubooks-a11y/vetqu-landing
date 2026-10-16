import { createClient } from 'next-sanity';
import imageUrlBuilder from '@sanity/image-url';

const rawProjectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID?.trim();
export const projectId = (rawProjectId && /^[a-z0-9-]+$/.test(rawProjectId)) ? rawProjectId : '9vg8e4g6';

const rawDataset = process.env.NEXT_PUBLIC_SANITY_DATASET?.trim();
export const dataset = rawDataset || 'production';

const rawApiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION?.trim();
export const apiVersion = rawApiVersion || '2024-01-01';

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
