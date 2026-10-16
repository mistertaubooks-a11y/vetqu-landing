import { defineField, defineType } from 'sanity';

export const testimonialType = defineType({
  name: 'testimonial',
  title: 'Ulasan Pelanggan',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Nama Pelanggan',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'pet',
      title: 'Keterangan Anabul (misal: Owner dari Kucing "Mochi")',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'text',
      title: 'Isi Ulasan',
      type: 'text',
      rows: 3,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'rating',
      title: 'Jumlah Bintang',
      type: 'number',
      initialValue: 5,
      validation: (rule) => rule.min(1).max(5),
    }),
    defineField({
      name: 'photo',
      title: 'Foto Pelanggan / Anabul (Opsional)',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
  ],
});
