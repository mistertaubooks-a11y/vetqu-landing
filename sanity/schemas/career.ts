import { defineField, defineType } from 'sanity';

export const careerType = defineType({
  name: 'career',
  title: 'Lowongan Karir',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Nama Posisi (misal: Dokter Hewan Praktisi / Paramedis Veteriner)',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug (URL)',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'type',
      title: 'Tipe Pekerjaan',
      type: 'string',
      options: {
        list: [
          { title: 'Full Time', value: 'Full Time' },
          { title: 'Part Time', value: 'Part Time' },
          { title: 'Magang / Internship', value: 'Magang' },
        ],
      },
      initialValue: 'Full Time',
    }),
    defineField({
      name: 'location',
      title: 'Lokasi Penempatan',
      type: 'string',
      initialValue: 'Grand Batavia, Tangerang',
    }),
    defineField({
      name: 'department',
      title: 'Departemen / Divisi',
      type: 'string',
      options: {
        list: [
          { title: 'Medis (Dokter Hewan)', value: 'Medis' },
          { title: 'Paramedis & Vet Nurse', value: 'Paramedis' },
          { title: 'Front Office & Administrasi Kasir', value: 'Administrasi' },
          { title: 'Grooming & Salon Anabul', value: 'Grooming' },
        ],
      },
      initialValue: 'Medis',
    }),
    defineField({
      name: 'description',
      title: 'Deskripsi Singkat Peran',
      type: 'text',
      rows: 3,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'requirements',
      title: 'Kualifikasi & Persyaratan',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'benefits',
      title: 'Benefit / Fasilitas',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'isOpen',
      title: 'Status Lowongan Masih Dibuka?',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'order',
      title: 'Urutan Tampil',
      type: 'number',
      initialValue: 1,
    }),
  ],
});
