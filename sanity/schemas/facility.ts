import { defineField, defineType } from 'sanity';

export const facilityType = defineType({
  name: 'facility',
  title: 'Fasilitas Klinik',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Nama Fasilitas',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Deskripsi Singkat (Opsional)',
      type: 'text',
      rows: 2,
    }),
    defineField({
      name: 'image',
      title: 'Foto Fasilitas',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'order',
      title: 'Urutan Tampil',
      type: 'number',
      initialValue: 1,
    }),
  ],
});
