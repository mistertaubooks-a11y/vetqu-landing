const defaultLandingData = {
  hero: {
    badgeText: null,
    headline: "Mitra Kesehatan Terpercaya",
    highlight: "Anabul Anda",
    description: "Pelayanan veteriner yang Profesional & Modern dengan pendekatan yang Penuh Kasih Sayang. Kami siap menjaga kesehatan dan kebahagiaan hewan kesayangan Anda.",
    cta: {
      text: "Reservasi via WA",
      link: "https://wa.me/6281219818004?text=Halo%20Kak,%20saya%20ingin%20booking%20layanan%20atau%20konsultasi%20untuk%20anabul%20saya",
    },
    image: null as string | null,
  },
  howItWorks: [
    {
      id: "step-1",
      title: "Hubungi Admin",
      description: "Chat WhatsApp kami untuk menjelaskan kondisi anabul atau layanan yang diinginkan.",
      iconName: "MessageCircle",
    },
    {
      id: "step-2",
      title: "Pilih Jadwal",
      description: "Admin kami akan mencocokkan jadwal dokter dan mengatur waktu reservasi untuk Anda.",
      iconName: "CalendarCheck",
    },
    {
      id: "step-3",
      title: "Datang Tanpa Antre",
      description: "Datang ke klinik sesuai jadwal yang disepakati, tanpa perlu menunggu antrean panjang.",
      iconName: "Clock",
    }
  ],
  services: [
    {
      id: "vaksinasi",
      title: "Vaksinasi Lengkap",
      description: "Lindungi anabul dari berbagai penyakit berbahaya dengan program vaksinasi berkala yang sesuai standar medis veteriner.",
      iconName: "ShieldPlus",
    },
    {
      id: "medical-checkup",
      title: "Medical Check-Up",
      description: "Pemeriksaan kesehatan menyeluruh untuk mendeteksi masalah kesehatan pada hewan peliharaan kesayangan Anda.",
      iconName: "Stethoscope",
    },
    {
      id: "grooming",
      title: "Grooming",
      description: "Perawatan kebersihan mulai dari mandi, potong kuku, hingga pembersihan telinga menggunakan produk berkualitas.",
      iconName: "Scissors",
    },
    {
      id: "rawat-inap",
      title: "Rawat Inap & Isolasi",
      description: "Fasilitas rawat inap yang nyaman dan diawasi oleh paramedis.",
      iconName: "BedDouble",
    },
    {
      id: "operasi",
      title: "Tindakan Bedah",
      description: "Layanan bedah minor dan mayor, termasuk sterilisasi dengan peralatan steril yang memadai.",
      iconName: "Syringe",
    },
    {
      id: "lab",
      title: "Uji Laboratorium",
      description: "Pemeriksaan darah, urine, dan mikroskopik untuk diagnosis penyakit yang akurat dan cepat.",
      iconName: "Microscope",
    }
  ],
  doctors: [] as Array<{
    id: string;
    name: string;
    specialization: string;
    experience: string;
    schedule: string;
    image: string | null;
  }>,
  facilities: [] as Array<{
    id: string;
    name: string;
    description?: string;
    image: string | null;
  }>,
  testimonials: [
    {
      id: "t-1",
      name: "Andi R.",
      pet: "Owner dari Kucing 'Mochi'",
      text: "Pelayanan sangat ramah! Kucing saya yang biasanya takut dokter, di sini bisa anteng banget. Dokternya sabar menjelaskan semuanya.",
    },
    {
      id: "t-2",
      name: "Siska F.",
      pet: "Owner dari Anjing 'Rex'",
      text: "Fasilitas lengkap dan bersih. Sempat panik karena Rex tiba-tiba muntah, untung VetQu buka dan penanganannya cepat.",
    },
    {
      id: "t-3",
      name: "Reza M.",
      pet: "Owner dari Kelinci 'Snowy'",
      text: "Grooming di sini the best! Snowy jadi bersih wangi dan bulunya makin lebat. Recommended banget buat pet lovers.",
    }
  ],
  faqs: [
    {
      id: "faq-1",
      question: "Apakah VetQu melayani kasus darurat (UGD) 24 Jam?",
      answer: "Saat ini kami melayani pasien darurat selama jam operasional kami (Senin–Jumat 08.00–21.00 WIB, Sabtu–Minggu 08.00–17.00 WIB). Namun, untuk hewan yang sedang dalam perawatan inap, paramedis kami berjaga 24 jam penuh."
    },
    {
      id: "faq-2",
      question: "Apakah harus selalu membuat janji (reservasi) sebelum datang?",
      answer: "Untuk kenyamanan Anda dan menghindari antrean panjang, kami sangat menyarankan untuk reservasi H-1 via WhatsApp. Namun, kami tetap menerima walk-in (datang langsung) selama slot dokter masih tersedia."
    },
    {
      id: "faq-3",
      question: "Apakah menyediakan layanan House Call (Panggilan ke rumah)?",
      answer: "Ya, kami menyediakan layanan House Call untuk area maksimal 10 KM dari klinik, khusus untuk pemeriksaan rutin dan vaksinasi. Silakan hubungi admin kami untuk informasi biaya lebih lanjut."
    },
    {
      id: "faq-4",
      question: "Apa saja syarat untuk Pet Hotel (Penitipan)?",
      answer: "Hewan harus dalam keadaan sehat, sudah divaksin lengkap (membawa buku vaksin), bebas kutu, dan bebas jamur. Hal ini untuk menjaga kesehatan seluruh hewan peliharaan di area pet hotel kami."
    }
  ],
  promos: [] as Array<{
    id: string;
    title: string;
    description: string;
    validUntil: string;
    type: string;
    iconName: string;
  }>,
  educationTips: [
    {
      id: "tip-1",
      title: "Kapan Anabul Harus Divaksin?",
      excerpt: "Vaksinasi sangat krusial untuk mencegah virus parvo dan distemper. Kapan usia yang ideal?",
      readTime: "3 Min Read",
      link: "https://instagram.com/vetquanimalcare"
    },
    {
      id: "tip-2",
      title: "Tanda Bahaya pada Kucing",
      excerpt: "Jangan abaikan jika kucing Anda tiba-tiba tidak mau makan, muntah, atau lemas.",
      readTime: "4 Min Read",
      link: "https://instagram.com/vetquanimalcare"
    },
    {
      id: "tip-3",
      title: "Pentingnya Obat Cacing Rutin",
      excerpt: "Cacingan tidak selalu terlihat secara fisik, namun bisa menyebabkan malnutrisi kronis.",
      readTime: "2 Min Read",
      link: "https://instagram.com/vetquanimalcare"
    }
  ],
  contact: {
    whatsapp: "+62 812-1981-8004",
    email: "halo@vetqu.id",
    address: "Ruko Avenue, Jl. Raya Grand Batavia No.20 Blok BA, Sindangsari, Kec. Ps. Kemis, Kabupaten Tangerang, Banten 15560",
    mapsLink: "https://maps.app.goo.gl/uLSiBr2tnHjWJCAJ8",
    hours: "Senin-Jumat: 08:00-21:00\nSabtu-Minggu: 08:00-17:00\n(Hari Besar Islam Libur)",
    socials: {
      facebook: "https://facebook.com/vetquanimalcare",
      instagram: "https://instagram.com/vetquanimalcare",
      tiktok: "https://tiktok.com/@vetqu.animal.care"
    }
  }
};

import { client, urlFor } from './sanity.client';

export async function getLandingData() {
  try {
    // 1. Fetch seluruh data dinamis dari Sanity
    const query = `{
      "hero": *[_type == "heroSettings"][0] {
        badgeText,
        headline,
        highlight,
        description,
        image,
        ctaText,
        ctaLink
      },
      "promos": *[_type == "promo" && active == true] {
        "id": _id,
        title,
        description,
        type,
        validUntil,
        "iconName": "Sparkles"
      },
      "doctors": *[_type == "doctor"] | order(order asc) {
        "id": _id,
        name,
        specialization,
        experience,
        schedule,
        image
      },
      "facilities": *[_type == "facility"] | order(order asc) {
        "id": _id,
        name,
        description,
        image
      },
      "testimonials": *[_type == "testimonial"] {
        "id": _id,
        name,
        pet,
        text,
        rating,
        photo
      },
      "educationTips": *[_type == "educationTip"] | order(order asc) {
        "id": _id,
        title,
        excerpt,
        readTime,
        link,
        image
      },
      "faqs": *[_type == "faq"] | order(order asc) {
        "id": _id,
        question,
        answer
      }
    }`;

    const sanityData = await client.fetch(query, {}, { next: { revalidate: 30 } }).catch(() => null);

    const hero = sanityData?.hero
      ? {
        badgeText: sanityData.hero.badgeText || null,
        headline: sanityData.hero.headline || defaultLandingData.hero.headline,
        highlight: sanityData.hero.highlight || defaultLandingData.hero.highlight,
        description: sanityData.hero.description || defaultLandingData.hero.description,
        image: sanityData.hero.image ? urlFor(sanityData.hero.image).width(1200).height(800).url() : defaultLandingData.hero.image,
        cta: {
          text: sanityData.hero.ctaText || defaultLandingData.hero.cta.text,
          link: sanityData.hero.ctaLink || defaultLandingData.hero.cta.link,
        }
      }
      : defaultLandingData.hero;

    const promos = sanityData?.promos && sanityData.promos.length > 0
      ? sanityData.promos
      : [];

    const doctors = sanityData?.doctors && sanityData.doctors.length > 0
      ? sanityData.doctors.map((d: any) => ({
        ...d,
        image: d.image ? urlFor(d.image).width(600).height(600).url() : null,
      }))
      : [];

    const facilities = sanityData?.facilities && sanityData.facilities.length > 0
      ? sanityData.facilities.map((f: any) => ({
        ...f,
        image: f.image ? urlFor(f.image).width(800).height(600).url() : null,
      }))
      : [];

    const testimonials = sanityData?.testimonials && sanityData.testimonials.length > 0
      ? sanityData.testimonials.map((t: any) => ({
        ...t,
        photo: t.photo ? urlFor(t.photo).width(200).height(200).url() : null,
      }))
      : defaultLandingData.testimonials;

    const educationTips = sanityData?.educationTips && sanityData.educationTips.length > 0
      ? sanityData.educationTips.map((tip: any) => ({
        ...tip,
        image: tip.image ? urlFor(tip.image).width(600).height(400).url() : null,
      }))
      : defaultLandingData.educationTips;

    const faqs = sanityData?.faqs && sanityData.faqs.length > 0
      ? sanityData.faqs
      : defaultLandingData.faqs;

    return {
      ...defaultLandingData,
      hero,
      promos,
      doctors,
      facilities,
      testimonials,
      educationTips,
      faqs,
    };
  } catch (error) {
    console.warn("Using fallback landing data:", error);
    return defaultLandingData;
  }
}
