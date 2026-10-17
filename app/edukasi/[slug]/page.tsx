import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getEducationArticleBySlug, getLandingData } from '@/app/lib/data';
import { PortableText } from '@portabletext/react';
import { ArrowLeft, Clock, Calendar, UserCheck, MessageCircle, Share2, CheckCircle2 } from 'lucide-react';
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const article = await getEducationArticleBySlug(slug);

  if (!article) {
    return {
      title: 'Artikel Edukasi Tidak Ditemukan | VetQu Animal Care',
    };
  }

  return {
    title: `${article.title} | Edukasi VetQu`,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      images: article.image ? [article.image] : [],
    },
  };
}

export default async function EducationDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const [article, landingData] = await Promise.all([
    getEducationArticleBySlug(slug),
    getLandingData(),
  ]);

  if (!article) {
    notFound();
  }

  const portableTextComponents = {
    block: {
      h2: ({ children }: any) => (
        <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4 pb-2 border-b border-slate-100">
          {children}
        </h2>
      ),
      h3: ({ children }: any) => (
        <h3 className="text-xl font-bold text-slate-800 mt-8 mb-3">
          {children}
        </h3>
      ),
      normal: ({ children }: any) => (
        <p className="text-slate-700 leading-relaxed text-base sm:text-lg mb-6">
          {children}
        </p>
      ),
      blockquote: ({ children }: any) => (
        <blockquote className="border-l-4 border-emerald-500 pl-4 py-2 italic my-6 text-slate-600 bg-emerald-50/50 rounded-r-xl">
          {children}
        </blockquote>
      ),
    },
    list: {
      bullet: ({ children }: any) => (
        <ul className="list-disc list-outside pl-6 space-y-2 text-slate-700 mb-6 text-base sm:text-lg">
          {children}
        </ul>
      ),
      number: ({ children }: any) => (
        <ol className="list-decimal list-outside pl-6 space-y-2 text-slate-700 mb-6 text-base sm:text-lg">
          {children}
        </ol>
      ),
    },
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF9F6] text-slate-800">
      <Navbar />

      <main className="flex-1 pt-32 pb-24">
        <div className="max-w-4xl mx-auto px-6">
          
          {/* Tombol Kembali */}
          <Link 
            href="/#edukasi"
            className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-800 hover:text-emerald-900 bg-white px-4 py-2 rounded-full border border-slate-200/80 shadow-xs mb-8 hover:-translate-x-1 transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Kembali ke Beranda</span>
          </Link>

          {/* Header Artikel */}
          <header className="mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold mb-4 border border-emerald-100">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
              <span>Panduan & Edukasi Anabul</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 mb-6 leading-tight tracking-tight">
              {article.title}
            </h1>

            {/* Meta Info (Penulis, Waktu Baca) */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 pb-6 border-b border-slate-200/80 text-xs sm:text-sm text-slate-600">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center text-purple-700 font-bold">
                  <UserCheck className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-slate-400 text-[11px] block">Ditinjau oleh</span>
                  <span className="font-semibold text-slate-800">{article.author || "Tim Dokter Hewan VetQu"}</span>
                </div>
              </div>

              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-emerald-600" />
                <span>{article.readTime || "3 Min Read"}</span>
              </div>
            </div>
          </header>

          {/* Foto Cover */}
          {article.image && (
            <div className="w-full aspect-[16/9] rounded-3xl overflow-hidden shadow-md mb-12 bg-slate-100 border border-slate-200/60">
              <img 
                src={article.image} 
                alt={article.title} 
                className="w-full h-full object-cover"
              />
            </div>
          )}

          {/* Ringkasan Sorotan (Lead) */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl border-l-4 border-emerald-600 shadow-xs mb-10">
            <h3 className="text-xs uppercase tracking-wider font-bold text-emerald-700 mb-2">Ringkasan Medis</h3>
            <p className="text-slate-700 text-lg sm:text-xl font-medium leading-relaxed">
              {article.excerpt}
            </p>
          </div>

          {/* Konten Artikel Lengkap */}
          <article className="bg-white p-8 sm:p-12 rounded-3xl border border-slate-200/80 shadow-sm mb-16">
            {article.content && article.content.length > 0 ? (
              <div className="prose max-w-none">
                <PortableText value={article.content} components={portableTextComponents} />
              </div>
            ) : (
              <div className="space-y-6 text-slate-700 leading-relaxed text-base sm:text-lg">
                <p>
                  Kesehatan anabul merupakan prioritas utama bagi setiap pet parent. Penanganan sejak dini serta kepatuhan pada jadwal kontrol berkala menjadi kunci utama agar anabul terhindar dari penyakit menular yang berbahaya.
                </p>
                <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Langkah Penting yang Perlu Diperhatikan:</h2>
                <ul className="list-disc list-outside pl-6 space-y-3">
                  <li><strong>Amati Perubahan Pola Makan & Minum:</strong> Penurunan nafsu makan lebih dari 24 jam adalah sinyal awal anabul sedang tidak fit.</li>
                  <li><strong>Perhatikan Kondisi Feses & Urine:</strong> Diare, muntah, atau kesulitan buang air kecil memerlukan konsultasi langsung dengan dokter hewan.</li>
                  <li><strong>Jaga Jadwal Rutin:</strong> Vaksinasi, pemberian obat cacing berkala, serta perlindungan kutu melindungi dari bahaya zoonosis.</li>
                </ul>
                <p>
                  Jika Anda melihat tanda-tanda yang mencurigakan atau membutuhkan jadwal konsultasi tatap muka, jangan ragu untuk menghubungi tim dokter hewan VetQu.
                </p>
              </div>
            )}

            {/* Kotak Rekomendasi Medis */}
            <div className="mt-12 p-6 rounded-2xl bg-amber-50/70 border border-amber-200/80 flex items-start gap-4">
              <CheckCircle2 className="w-6 h-6 text-amber-600 shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold text-slate-900 text-base mb-1">Catatan Medis Veteriner</h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Artikel ini disusun sebagai panduan edukasi umum. Kondisi tiap anabul bisa berbeda tergantung usia, riwayat penyakit, dan ras. Hubungi dokter hewan untuk diagnosa yang akurat.
                </p>
              </div>
            </div>
          </article>

          {/* CTA Box Hubungi WA */}
          <div className="bg-gradient-to-br from-slate-900 to-[#384959] text-white p-8 sm:p-12 rounded-3xl shadow-xl flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-emerald-400 text-xs font-semibold mb-3">
                <span>Siap Menjaga Kesehatan Anabul Anda</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black mb-2 text-white">
                Butuh Konsultasi Langsung dengan Dokter?
              </h3>
              <p className="text-slate-300 text-sm sm:text-base max-w-xl">
                Tanyakan keluhan anabul Anda atau buat jadwal reservasi tanpa antre bersama tim dokter VetQu.
              </p>
            </div>
            <a 
              href={`https://wa.me/6281219818004?text=Halo%20Dokter%20VetQu,%20saya%20membaca%20artikel%20"${encodeURIComponent(article.title)}"%20dan%20ingin%20konsultasi/reservasi.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl bg-orange-600 hover:bg-orange-700 text-white font-bold text-base shadow-lg hover:shadow-orange-500/30 hover:scale-105 transition-all shrink-0"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Konsultasi via WhatsApp</span>
            </a>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
