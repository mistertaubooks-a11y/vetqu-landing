import { defineField, defineType } from 'sanity';

export const promoType = defineType({
  name: 'promo',
  title: 'Promo & Penawaran',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Judul Promo',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Deskripsi Singkat Promo',
      type: 'text',
      rows: 3,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'type',
      title: 'Kategori / Badge (misal: Vaksinasi, Grooming)',
      type: 'string',
      initialValue: 'Vaksinasi',
    }),
    defineField({
      name: 'validUntil',
      title: 'Masa Berlaku (misal: Akhir Bulan Ini / Setiap Selasa)',
      type: 'string',
      initialValue: 'Akhir Bulan Ini',
    }),
    defineField({
      name: 'active',
      title: 'Tampilkan di Web?',
      type: 'boolean',
      initialValue: true,
    }),
  ],
});
