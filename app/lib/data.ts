const defaultLandingData = {
  hero: {
    badgeText: null,
    headline: "Mitra Kesehatan Terpercaya",
    highlight: "Anabul Anda",
    description: "Pelayanan veteriner yang Profesional & Modern dengan pendekatan yang Penuh Kasih Sayang. Kami siap menjaga kesehatan dan kebahagiaan hewan kesayangan Anda.",
    cta: {
      text: "Konsultasi via WA",
      link: "https://wa.me/6281219818004?text=Halo%20Kak,%20saya%20ingin%20booking%20layanan%20atau%20konsultasi%20untuk%20anabul%20saya",
    },
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
      description: "Pemeriksaan kesehatan menyeluruh untuk mendeteksi dini masalah kesehatan pada hewan peliharaan kesayangan Anda.",
      iconName: "Stethoscope",
    },
    {
      id: "grooming",
      title: "Grooming Premium",
      description: "Perawatan kebersihan mulai dari mandi, potong kuku, hingga pembersihan telinga menggunakan produk berkualitas.",
      iconName: "Scissors",
    },
    {
      id: "rawat-inap",
      title: "Rawat Inap & Isolasi",
      description: "Fasilitas rawat inap yang nyaman dan diawasi ketat oleh paramedis profesional selama 24 jam penuh.",
      iconName: "BedDouble",
    },
    {
      id: "operasi",
      title: "Tindakan Bedah",
      description: "Layanan bedah minor dan mayor, termasuk sterilisasi dengan peralatan steril dan modern.",
      iconName: "Syringe",
    },
    {
      id: "lab",
      title: "Uji Laboratorium",
      description: "Pemeriksaan darah, urine, dan mikroskopik untuk diagnosis penyakit yang akurat dan cepat.",
      iconName: "Microscope",
    }
  ],
  doctors: [
    {
      id: "dr-1",
      name: "drh. Sarah Wijaya",
      specialization: "Spesialis Penyakit Dalam",
      experience: "8 Tahun Pengalaman",
      schedule: "Senin, Rabu, Jumat (09:00 - 15:00)",
      image: "/images/doctor1.jpg", 
    },
    {
      id: "dr-2",
      name: "drh. Budi Santoso",
      specialization: "Spesialis Bedah Veteriner",
      experience: "12 Tahun Pengalaman",
      schedule: "Selasa, Kamis, Sabtu (10:00 - 17:00)",
      image: "/images/doctor2.jpg",
    },
    {
      id: "dr-3",
      name: "drh. Anissa Putri",
      specialization: "Dokter Hewan Umum & Eksotik",
      experience: "5 Tahun Pengalaman",
      schedule: "Senin - Sabtu (15:00 - 20:00)",
      image: "/images/doctor3.jpg",
    },
    {
      id: "dr-4",
      name: "drh. Kevin Pratama",
      specialization: "Spesialis Gigi Hewan",
      experience: "6 Tahun Pengalaman",
      schedule: "Kamis & Sabtu (10:00 - 15:00)",
      image: "/images/doctor4.jpg",
    }
  ],
  facilities: [
    {
      id: "f-1",
      name: "Ruang Periksa Steril",
      image: "/images/fasilitas-periksa.jpg"
    },
    {
      id: "f-2",
      name: "Laboratorium & USG",
      image: "/images/fasilitas-lab.jpg"
    },
    {
      id: "f-3",
      name: "Ruang Bedah Modern",
      image: "/images/fasilitas-bedah.jpg"
    },
    {
      id: "f-4",
      name: "Pet Hotel & Rawat Inap",
      image: "/images/fasilitas-inap.jpg"
    }
  ],
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
      answer: "Saat ini kami melayani pasien darurat selama jam operasional kami (08.00 - 20.00 WIB). Namun, untuk hewan yang sedang dalam perawatan inap, paramedis kami berjaga 24 jam penuh."
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
  promos: [
    {
      id: "promo-1",
      title: "Diskon Vaksin Kucing",
      description: "Diskon 20% untuk paket vaksin F3/F4. Lindungi si meong dari virus mematikan sejak dini.",
      validUntil: "Akhir Bulan Ini",
      type: "Vaksinasi",
      iconName: "Syringe"
    },
    {
      id: "promo-2",
      title: "Grooming Sehat",
      description: "Gratis potong kuku dan bersihkan telinga untuk setiap pengambilan paket Full Grooming.",
      validUntil: "Setiap Selasa & Rabu",
      type: "Grooming",
      iconName: "Sparkles"
    }
  ],
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
    email: "hello@vetqu.id",
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

function replaceLocalhostImage(url: string | undefined) {
  if (!url) return url;
  return url.replace('http://localhost:4000/uploads/', '/backend-uploads/');
}

export async function getLandingData() {
  try {
    const res = await fetch('http://localhost:4000/api/v1/public/landing-data', {
      cache: 'no-store' // Hapus cache agar data selalu real-time dengan CMS
    });
    
    if (!res.ok) {
      console.warn("Failed to fetch landing data from VetQu Next backend. Using default data.");
      return defaultLandingData;
    }
    
    const json = await res.json();
    const dynamicData = json.data;
    
    // Merge dynamic data with static layout data
    return {
      ...defaultLandingData,
      hero: dynamicData.hero 
        ? { ...dynamicData.hero, image: replaceLocalhostImage(dynamicData.hero.image) }
        : defaultLandingData.hero,
      facilities: (dynamicData.facilities && dynamicData.facilities.length > 0) 
        ? dynamicData.facilities.map((f: any) => ({...f, image: replaceLocalhostImage(f.image)}))
        : defaultLandingData.facilities,
      doctors: dynamicData.doctors 
        ? dynamicData.doctors.map((d: any) => ({...d, image: replaceLocalhostImage(d.image)}))
        : defaultLandingData.doctors,
      services: dynamicData.services || defaultLandingData.services,
      promos: dynamicData.promos || defaultLandingData.promos,
      educationTips: dynamicData.educationTips || defaultLandingData.educationTips,
      testimonials: (dynamicData.testimonials && dynamicData.testimonials.length > 0) ? dynamicData.testimonials : defaultLandingData.testimonials,
    };
  } catch (error) {
    console.warn("Error fetching landing data, falling back to default:", error);
    return defaultLandingData;
  }
}
