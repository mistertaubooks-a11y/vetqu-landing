import React from 'react';
import { getLandingData } from '../lib/data';
import * as LucideIcons from 'lucide-react';
import { Sparkles, CalendarDays } from 'lucide-react';

export default async function PromoSection() {
  const landingData = await getLandingData();
  if (!landingData.promos || landingData.promos.length === 0) return null;

  return (
    <section id="promo" className="py-20 bg-orange-50 relative overflow-hidden">
      {/* Decorative Blob */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50 -translate-y-1/2 translate-x-1/3"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col mb-12 gap-4 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-orange-600 font-bold text-sm border border-orange-200 self-start">
            <Sparkles className="w-4 h-4" />
            Penawaran Spesial
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#384959]">Promo Bulan Ini</h2>
          <p className="text-slate-500 text-lg">
            Dapatkan penawaran terbaik untuk layanan kesehatan hewan peliharaan Anda. Berlaku untuk periode terbatas!
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {landingData.promos.map((promo: any) => {
            const IconComponent = (LucideIcons as any)[promo.iconName] || LucideIcons.Tag;
            
            return (
              <div 
                key={promo.id} 
                className="group relative bg-white rounded-3xl p-8 border-2 border-orange-100 hover:border-orange-500 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col sm:flex-row gap-6 items-start"
              >
                {/* Diagonal Highlight */}
                <div className="absolute -right-16 -top-16 w-32 h-32 bg-gradient-to-br from-orange-400 to-orange-600 rotate-45 transform group-hover:scale-110 transition-transform duration-500"></div>
                
                <div className="w-16 h-16 shrink-0 rounded-2xl bg-orange-100 text-orange-600 flex items-center justify-center relative z-10 group-hover:-translate-y-1 transition-transform">
                  <IconComponent className="w-8 h-8" />
                </div>
                
                <div className="relative z-10 flex-1">
                  <div className="text-xs font-bold text-white bg-purple-600 px-2 py-1 rounded-md inline-block mb-3">
                    {promo.type}
                  </div>
                  <h3 className="text-2xl font-bold text-[#384959] mb-2 group-hover:text-orange-600 transition-colors">{promo.title}</h3>
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    {promo.description}
                  </p>
                  
                  <div className="flex flex-wrap items-center gap-4 justify-between pt-4 border-t border-slate-100">
                    <div className="flex items-center gap-2 text-sm font-medium text-orange-600 bg-orange-50 px-3 py-1.5 rounded-lg border border-orange-100">
                      <CalendarDays className="w-4 h-4" />
                      {promo.validUntil}
                    </div>
                    <a 
                      href={landingData.hero.cta.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold text-purple-600 hover:text-purple-800 flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                    >
                      Klaim Promo <LucideIcons.ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
