import { defineField, defineType } from 'sanity';

export const educationTipType = defineType({
  name: 'educationTip',
  title: 'Tips & Edukasi Anabul',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Judul Tips',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug (URL Artikel)',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'author',
      title: 'Ditinjau Oleh (Dokter/Tim)',
      type: 'string',
      initialValue: 'Tim Dokter Hewan VetQu',
    }),
    defineField({
      name: 'excerpt',
      title: 'Ringkasan Singkat',
      type: 'text',
      rows: 2,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'readTime',
      title: 'Waktu Baca (misal: 3 Min Read)',
      type: 'string',
      initialValue: '3 Min Read',
    }),
    defineField({
      name: 'image',
      title: 'Foto Sampul (Cover)',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'content',
      title: 'Isi Lengkap Artikel',
      type: 'array',
      of: [
        {
          type: 'block',
        },
        {
          type: 'image',
          options: { hotspot: true },
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Keterangan Gambar (Alt Text)',
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'order',
      title: 'Urutan Tampil',
      type: 'number',
      initialValue: 1,
    }),
  ],
});
