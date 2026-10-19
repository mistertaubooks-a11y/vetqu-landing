import React from 'react';
import { getLandingData } from '../lib/data';
import { ArrowRight, ShieldCheck, Heart } from 'lucide-react';
import HeroSlider from './HeroSlider';

export default async function HeroSection() {
  const landingData = await getLandingData();
  const heroSlides = landingData.hero.slides && landingData.hero.slides.length > 0
    ? landingData.hero.slides
    : [
        {
          image: landingData.hero.image || "/images/hero-vetqu.jpg",
          badge: "🩺 Klinik Hewan Ramah Anabul",
          caption: "Pendekatan fear-free agar hewan tetap tenang & nyaman",
        },
      ];

  return (
    <section id="beranda" className="relative pt-28 pb-20 lg:pt-36 lg:pb-28 overflow-hidden bg-[#FAF9F6]">
      {/* Subtle organic texture pattern */}
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#581c87_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Kolom Kiri: Teks & Nilai Utama */}
          <div className="lg:col-span-6 text-center lg:text-left">
            {landingData.hero.badgeText ? (
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 text-slate-800 font-semibold text-xs mb-6 border border-slate-200">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-600"></span>
                <span>{landingData.hero.badgeText}</span>
              </div>
            ) : (
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 text-slate-800 font-semibold text-xs mb-6 border border-slate-200">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
                <span>Klinik Hewan & Praktek Mandiri Tangerang</span>
              </div>
            )}

            <h1 className="text-4xl sm:text-5xl lg:text-[50px] font-black text-slate-900 mb-6 leading-[1.15] tracking-tight">
              {landingData.hero.headline} <br />
              <span className="text-purple-700 relative inline-block">
                {landingData.hero.highlight}
                <svg className="absolute -bottom-2 left-0 w-full h-3 text-amber-400 opacity-80" viewBox="0 0 100 12" preserveAspectRatio="none">
                  <path d="M0,8 Q50,0 100,8" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" />
                </svg>
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-600 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal">
              {landingData.hero.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-3.5 justify-center lg:justify-start mb-10">
              <a 
                href={landingData.hero.cta.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-7 py-4 text-base font-bold text-white bg-orange-600 hover:bg-orange-700 rounded-2xl shadow-[0_8px_20px_-4px_rgba(234,88,12,0.45)] hover:shadow-[0_12px_25px_-4px_rgba(234,88,12,0.55)] hover:-translate-y-0.5 transition-all duration-300"
              >
                {landingData.hero.cta.text}
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a 
                href="#layanan"
                className="inline-flex items-center justify-center px-7 py-4 text-base font-bold text-slate-700 bg-white border border-slate-300/80 rounded-2xl hover:border-purple-300 hover:bg-purple-50/40 hover:text-purple-900 transition-all duration-300 shadow-xs"
              >
                Lihat Layanan Kami
              </a>
            </div>

            {/* Micro Social Proof & Trust Badges */}
            <div className="pt-6 border-t border-slate-200/80 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-slate-600 font-medium">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Dokter Berizin Resmi (SIP DRH)</span>
              </div>
              <div className="flex items-center gap-2">
                <Heart className="w-4 h-4 text-rose-500" />
                <span>Pendekatan Kasih Sayang (Fear-Free)</span>
              </div>
            </div>
          </div>
          
          {/* Kolom Kanan: Slide Foto Layanan VetQu & Frame Elegan Landscape */}
          <div className="lg:col-span-6 relative">
            <HeroSlider 
              slides={heroSlides} 
              headline={landingData.hero.headline} 
            />
          </div>

        </div>
      </div>
    </section>
  );
}
