import { defineField, defineType } from 'sanity';

export const heroType = defineType({
  name: 'heroSettings',
  title: 'Pengaturan Hero (Utama)',
  type: 'document',
  fields: [
    defineField({
      name: 'badgeText',
      title: 'Pita Pengumuman / Badge (Opsional)',
      description: 'Contoh: ⭐ Klinik Hewan Terpercaya di Grand Batavia atau Libur Lebaran 10-12 April',
      type: 'string',
    }),
    defineField({
      name: 'headline',
      title: 'Judul Utama (Baris 1)',
      type: 'string',
      initialValue: 'Mitra Kesehatan Terpercaya',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'highlight',
      title: 'Teks Sorotan Warna (Baris 2)',
      type: 'string',
      initialValue: 'Anabul Anda',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Deskripsi Singkat',
      type: 'text',
      rows: 3,
      initialValue: 'Pelayanan veteriner yang Profesional & Modern dengan pendekatan yang Penuh Kasih Sayang. Kami siap menjaga kesehatan dan kebahagiaan hewan kesayangan Anda.',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Foto Utama Hero',
      description: 'Upload foto anabul atau dokter bersama pasien',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'ctaText',
      title: 'Teks Tombol Utama',
      type: 'string',
      initialValue: 'Konsultasi via WA',
    }),
    defineField({
      name: 'ctaLink',
      title: 'Tautan WhatsApp Booking',
      type: 'string',
      initialValue: 'https://wa.me/6281219818004?text=Halo%20Kak,%20saya%20ingin%20booking%20layanan%20atau%20konsultasi%20untuk%20anabul%20saya',
    }),
  ],
});
