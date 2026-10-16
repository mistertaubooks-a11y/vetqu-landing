import { defineField, defineType } from 'sanity';

export const doctorType = defineType({
  name: 'doctor',
  title: 'Tim Dokter',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Nama Dokter (lengkap dengan gelar)',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'specialization',
      title: 'Spesialisasi / Keahlian',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'experience',
      title: 'Lama Pengalaman (misal: 8 Tahun Pengalaman)',
      type: 'string',
    }),
    defineField({
      name: 'schedule',
      title: 'Jadwal Praktek (misal: Senin, Rabu, Jumat 09:00 - 15:00)',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Foto Dokter',
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
