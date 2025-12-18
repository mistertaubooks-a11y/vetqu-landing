import React from "react";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-800 font-sans relative">
      {/* ================================================================= */}
      {/* OVERLAY UNDER CONSTRUCTION (DENGAN TOMBOL AKSI)                   */}
      {/* ================================================================= */}
      <div className="fixed inset-0 z-[9999] bg-black/85 backdrop-blur-md flex flex-col items-center justify-center text-center px-4">
        <div className="bg-white p-8 rounded-3xl shadow-2xl max-w-md w-full border-t-8 border-blue-600 relative overflow-hidden">
          {/* Logo */}
          <div className="flex justify-center mb-6">
            <Image
              src="/images/vetqu-logo.png"
              alt="VetQu Logo"
              width={180}
              height={60}
              className="h-14 w-auto object-contain"
              priority
            />
          </div>

          {/* Teks Utama */}
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            Website Sedang Dibangun 🚧
          </h1>
          <p className="text-gray-600 mb-8 leading-relaxed">
            Mohon maaf, kami sedang melakukan peningkatan sistem. <br />
            Namun, <strong>VetQu tetap buka melayani Anda!</strong>
          </p>

          {/* --- BAGIAN BARU: TOMBOL AKSI DI DALAM OVERLAY --- */}
          <div className="flex flex-col gap-3 mb-8">
            {/* 1. Tombol WA (Hijau) */}
            <a
              href="https://wa.me/6281219818004?text=Halo%20Kak,%20saya%20ingin%20booking%20layanan%20atau%20konsultasi%20untuk%20anabul%20saya"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full bg-green-600 text-white font-bold py-3 px-4 rounded-xl hover:bg-green-700 transition shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-5 h-5"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Chat WhatsApp
            </a>

            {/* 2. Tombol Maps (Abu-abu/Putih) */}
            <a
              href="https://maps.app.goo.gl/Ne5QW2G83VvsCPJZ9"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full bg-gray-200 text-gray-700 font-semibold py-3 px-4 rounded-xl hover:bg-gray-200 transition border border-gray-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                />
              </svg>
              Petunjuk Arah (Maps)
            </a>
          </div>
          {/* --------------------------------------------------- */}

          <div className="text-xs text-gray-400 border-t border-gray-100 pt-4">
            &copy; {new Date().getFullYear()} VetQu Animal Care
          </div>
        </div>
      </div>
      {/* ================= BATAS OVERLAY ================= */}

      {/* ================= ISI WEBSITE (LAYER BELAKANG) ================= */}
      {/* (Tetap dirender untuk SEO & Visual, tapi tidak bisa diklik) */}

      <nav className="flex items-center justify-between px-6 py-4 bg-white shadow-sm sticky top-0 z-50 filter blur-[1px]">
        <div className="flex items-center">
          <Image
            src="/images/vetqu-logo.png"
            alt="VetQu Logo"
            width={150}
            height={50}
            className="h-12 w-auto object-contain"
          />
        </div>
        <div className="hidden md:flex gap-8 font-medium text-gray-600">
          <span>Beranda</span>
          <span>Layanan</span>
          <span>Lokasi</span>
        </div>
        <span className="bg-blue-600 text-white px-5 py-2 rounded-full font-medium shadow-sm opacity-50">
          Hubungi WA
        </span>
      </nav>

      <section className="flex flex-col items-center justify-center text-center py-20 px-4 bg-gradient-to-b from-blue-50 to-white filter blur-[1px]">
        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
          Mitra Kesehatan Terpercaya <br />
          <span className="text-blue-600">Anabul Anda</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mb-10">
          Pelayanan veteriner yang <strong>Profesional & Modern</strong> dengan
          pendekatan yang <strong>Penuh Kasih Sayang</strong>.
        </p>
      </section>

      {/* Bagian Layanan (Visual Saja) */}
      <section className="py-20 px-6 bg-white filter blur-[1px]">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 opacity-50">
            {/* Dummy Card untuk Background */}
            <div className="p-8 bg-blue-50 rounded-2xl border border-blue-100 h-48 flex items-center justify-center">
              <span className="text-gray-400 font-bold">Layanan VetQu</span>
            </div>
            <div className="p-8 bg-blue-50 rounded-2xl border border-blue-100 h-48 flex items-center justify-center">
              <span className="text-gray-400 font-bold">Fasilitas Lengkap</span>
            </div>
            <div className="p-8 bg-blue-50 rounded-2xl border border-blue-100 h-48 flex items-center justify-center">
              <span className="text-gray-400 font-bold">Dokter Hewan</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
