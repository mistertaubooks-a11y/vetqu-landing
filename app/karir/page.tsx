import React from 'react';
import Link from 'next/link';
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';
import CareerList from './CareerList';
import { getCareers } from '@/app/lib/data';
import { 
  ArrowLeft, 
  Heart, 
  Sparkles, 
  ShieldCheck, 
  Stethoscope, 
  Award,
  Users
} from 'lucide-react';

export const metadata = {
  title: 'Karir & Lowongan Kerja | VetQu Animal Care Tangerang',
  description: 'Bergabunglah bersama keluarga besar VetQu Animal Care. Buka peluang karir untuk Dokter Hewan Praktisi, Paramedis Veteriner, Administrasi Kasir, dan Pet Groomer di Tangerang.',
};

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default async function CareerPage() {
  const careers = await getCareers();
  const contactEmail = 'karir@vetqu.id';

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF9F6] text-slate-800">
      <Navbar />

      <main className="flex-1 pt-32 pb-24">
        <div className="max-w-5xl mx-auto px-6">
          
          {/* Tombol Navigasi Kembali */}
          <Link 
            href="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-slate-900 bg-white px-4 py-2 rounded-full border border-slate-200/80 shadow-xs mb-8 hover:-translate-x-1 transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Kembali ke Beranda</span>
          </Link>

          {/* Hero Section yang Humanis & Autentik */}
          <div className="mb-14 text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-50 text-purple-800 text-xs font-bold mb-4 border border-purple-200">
              <Users className="w-4 h-4 text-purple-600" />
              <span>Keluarga Besar VetQu Animal Care</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#384959] tracking-tight mb-5 leading-tight">
              Tumbuh Bersama Merawat <br className="hidden sm:inline" />
              <span className="text-purple-700">Kesehatan Anabul Indonesia</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Di VetQu Animal Care, kami percaya pelayanan terbaik bagi anabul bermula dari tim klinik yang sehat, saling menghargai, dan memiliki ruang untuk terus berkembang.
            </p>
          </div>

          {/* Nilai Budaya Kerja Nyata (Bukan Generic AI Buzzwords) */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-16">
            <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-2xs">
              <div className="w-10 h-10 rounded-xl bg-purple-100 flex items-center justify-center text-purple-700 mb-4">
                <Heart className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-base mb-1.5">Budaya Fear-Free</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Kami mengutamakan pendekatan minim stres dan kelembutan penanganan anabul. Pasien tenang, dokter dan paramedis bekerja dengan aman dan nyaman.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-2xs">
              <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center text-blue-700 mb-4">
                <Stethoscope className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-base mb-1.5">Fasilitas Memadai</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Klinik didukung sarana dan peralatan medis yang memadai untuk menunjang ketepatan diagnosa serta kenyamanan tindakan.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-2xs">
              <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center text-amber-700 mb-4">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-base mb-1.5">Lingkungan Suportif</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Komunikasi terbuka antara dokter hewan, paramedis, staf front office, dan groomer tanpa budaya senioritas toxic. Saling belajar dan mendukung.
              </p>
            </div>
          </div>

          {/* Interactive Career List with Filters and Direct Email Flow */}
          <CareerList careers={careers} contactEmail={contactEmail} />

        </div>
      </main>

      <Footer />
    </div>
  );
}
