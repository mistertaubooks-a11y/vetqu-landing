import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { heroType } from './sanity/schemas/hero';
import { promoType } from './sanity/schemas/promo';
import { doctorType } from './sanity/schemas/doctor';
import { testimonialType } from './sanity/schemas/testimonial';
import { educationTipType } from './sanity/schemas/educationTip';
import { faqType } from './sanity/schemas/faq';
import { facilityType } from './sanity/schemas/facility';
import { careerType } from './sanity/schemas/career';

function sanitizeProjectId(input?: string): string {
  if (!input) return '9vg8e4g6';
  const cleaned = input.replace(/['"\s]/g, '').toLowerCase();
  return /^[a-z0-9-]+$/.test(cleaned) ? cleaned : '9vg8e4g6';
}

function sanitizeDataset(input?: string): string {
  if (!input) return 'production';
  const cleaned = input.replace(/['"\s]/g, '').toLowerCase();
  return /^[a-z0-9~_-]+$/.test(cleaned) ? cleaned : 'production';
}

const projectId = sanitizeProjectId(process.env.NEXT_PUBLIC_SANITY_PROJECT_ID);
const dataset = sanitizeDataset(process.env.NEXT_PUBLIC_SANITY_DATASET);

export default defineConfig({
  basePath: '/studio',
  name: 'vetqu_studio',
  title: 'VetQu CMS Studio',
  projectId,
  dataset,
  plugins: [structureTool()],
  schema: {
    types: [
      heroType,
      promoType,
      doctorType,
      facilityType,
      testimonialType,
      educationTipType,
      faqType,
      careerType,
    ],
  },
});
