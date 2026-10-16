import React from 'react';
import { getLandingData } from '../lib/data';
import { Clock, ArrowUpRight } from 'lucide-react';

export default async function EducationSection() {
  const landingData = await getLandingData();
  if (!landingData.educationTips || landingData.educationTips.length === 0) return null;

  return (
    <section id="edukasi" className="py-24 bg-[#FAF9F6] relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-xs font-bold text-purple-700 uppercase tracking-widest bg-purple-50 px-3.5 py-1.5 rounded-full border border-purple-100">
            Pusat Informasi & Edukasi
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mt-4 mb-3 tracking-tight">
            Tips Sehat & Perawatan Anabul
          </h2>
          <p className="text-base md:text-lg text-slate-500 max-w-2xl mx-auto">
            Wawasan praktis seputar nutrisi, vaksinasi, dan pencegahan penyakit bersama tim dokter hewan VetQu.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {landingData.educationTips.map((tip: any, index: number) => (
            <a 
              key={tip.id} 
              href={tip.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group block rounded-3xl bg-white border border-slate-200/80 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between"
            >
              <div>
                <div className="h-44 bg-purple-50 relative overflow-hidden flex items-center justify-center">
                  {tip.image ? (
                    <img src={tip.image} alt={tip.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-tr from-purple-100/70 to-amber-50 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-2xl bg-white shadow-xs flex items-center justify-center text-3xl">
                        {index === 0 ? '💉' : index === 1 ? '🐱' : '💊'}
                      </div>
                    </div>
                  )}
                  
                  <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-xs px-2.5 py-1 rounded-lg border border-white/60 shadow-2xs flex items-center gap-1.5 text-slate-700 text-[11px] font-semibold">
                    <Clock className="w-3 h-3 text-purple-600" />
                    {tip.readTime}
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-purple-700 transition-colors leading-snug">
                      {tip.title}
                    </h3>
                    <div className="w-7 h-7 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 group-hover:bg-purple-100 group-hover:text-purple-700 transition-colors shrink-0 mt-0.5">
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {tip.excerpt}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-0 text-xs font-bold text-purple-700 group-hover:text-purple-900 flex items-center gap-1">
                <span>Baca selengkapnya di Instagram</span>
              </div>
            </a>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a 
            href={landingData.contact.socials.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 font-bold text-purple-700 bg-white rounded-xl hover:bg-purple-50 border border-slate-200 shadow-xs transition-all hover:scale-105"
          >
            Ikuti Instagram @vetquanimalcare
          </a>
        </div>
      </div>
    </section>
  );
}
