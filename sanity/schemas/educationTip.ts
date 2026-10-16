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
      name: 'link',
      title: 'Link Artikel / Link Postingan Instagram',
      type: 'url',
      initialValue: 'https://instagram.com/vetquanimalcare',
      validation: (rule) => rule.required(),
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
      name: 'order',
      title: 'Urutan Tampil',
      type: 'number',
      initialValue: 1,
    }),
  ],
});
