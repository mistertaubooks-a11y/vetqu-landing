import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { heroType } from './sanity/schemas/hero';
import { promoType } from './sanity/schemas/promo';
import { doctorType } from './sanity/schemas/doctor';
import { testimonialType } from './sanity/schemas/testimonial';
import { educationTipType } from './sanity/schemas/educationTip';
import { faqType } from './sanity/schemas/faq';
import { facilityType } from './sanity/schemas/facility';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '9vg8e4g6';
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';

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
    ],
  },
});
