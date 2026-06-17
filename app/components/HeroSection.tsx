import React from 'react';
import { getLandingData } from '../lib/data';
import { ArrowRight } from 'lucide-react';

export default async function HeroSection() {
  const landingData = await getLandingData();
  return (
    <section id="beranda" className="relative pt-24 pb-20 lg:pt-32 lg:pb-32 overflow-hidden bg-gradient-to-br from-purple-100/50 via-white to-white">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-orange-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            {landingData.hero.badgeText && (
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-orange-50 text-orange-600 font-semibold text-sm mb-6 border border-orange-100">
                <span className="flex w-2 h-2 rounded-full bg-orange-500 mr-2 animate-pulse"></span>
                {landingData.hero.badgeText}
              </div>
            )}
            <h1 className="text-4xl md:text-6xl font-extrabold text-[#384959] mb-6 leading-tight tracking-tight">
              {landingData.hero.headline} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-orange-500">
                {landingData.hero.highlight}
              </span>
            </h1>
            <p className="text-lg text-slate-600 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              {landingData.hero.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a 
                href={landingData.hero.cta.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-purple-600 rounded-2xl hover:bg-purple-700 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                {landingData.hero.cta.text}
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a 
                href="#layanan"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-slate-700 bg-white border-2 border-slate-200 rounded-2xl hover:border-slate-300 hover:bg-slate-50 transition-all duration-300"
              >
                Lihat Layanan
              </a>
            </div>
          </div>
          
          <div className="relative w-full h-[400px] lg:h-[550px] rounded-3xl overflow-hidden shadow-2xl bg-slate-100">
            {landingData.hero.image ? (
              <img src={landingData.hero.image} alt={landingData.hero.headline} className="w-full h-full object-cover" />
            ) : (
              <>
                <div className="absolute inset-0 bg-gradient-to-tr from-purple-300 to-orange-200 opacity-20"></div>
                <div className="flex items-center justify-center h-full text-slate-400 font-medium">
                  [Belum ada gambar hero]
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
