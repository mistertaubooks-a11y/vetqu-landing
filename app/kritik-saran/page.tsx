import React from 'react';
import Link from 'next/link';
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';
import FeedbackForm from './FeedbackForm';
import { 
  ArrowLeft, 
  MessageSquareHeart 
} from 'lucide-react';

export const metadata = {
  title: 'Kritik & Saran | VetQu Animal Care Tangerang',
  description: 'Sampaikan kritik, saran, dan pengalaman Anda bersama VetQu Animal Care. Masukan Anda sangat berharga bagi peningkatan mutu layanan klinik kami.',
};

export default function FeedbackPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAF9F6] text-slate-800">
      <Navbar />

      <main className="flex-1 pt-32 pb-24">
        <div className="max-w-3xl mx-auto px-6">
          
          {/* Tombol Navigasi Kembali */}
          <Link 
            href="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-slate-900 bg-white px-4 py-2 rounded-full border border-slate-200/80 shadow-xs mb-8 hover:-translate-x-1 transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Kembali ke Beranda</span>
          </Link>

          {/* Header Suara Pet Parent */}
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 text-orange-800 text-xs font-bold mb-4 border border-orange-200">
              <MessageSquareHeart className="w-4 h-4 text-orange-600" />
              <span>Suara Pet Parent & Klien</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#384959] tracking-tight mb-4">
              Kritik, Saran & Masukan
            </h1>

            <p className="text-base sm:text-lg text-slate-600 max-w-xl mx-auto leading-relaxed">
              Kenyamanan Anda dan kesehatan anabul adalah prioritas utama kami. Setiap masukan yang Anda berikan sangat berharga bagi peningkatan mutu layanan VetQu.
            </p>
          </div>

          {/* Form Card */}
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/90 shadow-sm relative overflow-hidden">
            <FeedbackForm />
          </div>

          {/* Info Pendukung Medis Darurat */}
          <div className="mt-12 text-center text-xs text-slate-500">
            <p>
              Ada keluhan medis darurat yang memerlukan penanganan saat ini? <br className="hidden sm:inline" />
              Silakan langsung hubungi dokter jaga via{' '}
              <a 
                href="https://wa.me/6281219818004" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-purple-700 font-bold hover:underline"
              >
                WhatsApp VetQu (0812-1981-8004)
              </a>
            </p>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
