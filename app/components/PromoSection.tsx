"use client";

import React, { useState } from 'react';
import * as LucideIcons from 'lucide-react';
import { Sparkles, CalendarDays, ArrowRight } from 'lucide-react';
import ClaimPromoModal from './ClaimPromoModal';

export default function PromoSection({ promos }: { promos: any[] }) {
  const [selectedPromo, setSelectedPromo] = useState<string | null>(null);

  if (!promos || promos.length === 0) return null;

  return (
    <section id="promo" className="py-20 bg-orange-50/70 relative overflow-hidden border-t border-orange-100/50">
      {/* Decorative Warm Ambient Glow */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-orange-200/40 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col mb-12 gap-3 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-orange-700 font-semibold text-xs border border-orange-200/80 self-start">
            <Sparkles className="w-3.5 h-3.5 text-orange-600" />
            <span>Program & Penawaran Khusus</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#384959]">Promo Bulan Ini</h2>
          <p className="text-slate-500 text-base md:text-lg">
            Dapatkan penawaran terbaik untuk kesehatan anabul tercinta. Kuota terbatas setiap minggunya!
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {promos.map((promo: any) => {
            const IconComponent = (LucideIcons as any)[promo.iconName] || LucideIcons.Tag;
            
            return (
              <div 
                key={promo.id} 
                className="group relative bg-white rounded-3xl p-8 border border-orange-200/80 hover:border-orange-500 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col sm:flex-row gap-6 items-start"
              >
                <div className="w-16 h-16 shrink-0 rounded-2xl bg-orange-100 text-orange-600 flex items-center justify-center relative z-10 group-hover:-translate-y-0.5 transition-transform">
                  <IconComponent className="w-8 h-8" />
                </div>
                
                <div className="relative z-10 flex-1 w-full">
                  <div className="text-xs font-semibold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-md inline-block mb-3 border border-emerald-100">
                    {promo.type}
                  </div>
                  <h3 className="text-2xl font-bold text-[#384959] mb-2 group-hover:text-orange-600 transition-colors">
                    {promo.title}
                  </h3>
                  <p className="text-slate-600 mb-6 text-sm leading-relaxed">
                    {promo.description}
                  </p>
                  
                  <div className="flex flex-wrap items-center gap-4 justify-between pt-4 border-t border-slate-100">
                    <div className="flex items-center gap-2 text-xs font-medium text-orange-700 bg-orange-50 px-3 py-1.5 rounded-lg border border-orange-200/60">
                      <CalendarDays className="w-3.5 h-3.5 text-orange-600" />
                      <span>{promo.validUntil}</span>
                    </div>
                    <button 
                      onClick={() => setSelectedPromo(promo.title)}
                      className="font-bold text-sm text-orange-600 hover:text-orange-700 flex items-center gap-1.5 group-hover:translate-x-1 transition-all cursor-pointer"
                    >
                      <span>Klaim Promo</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Modal Formulir Pendaftaran */}
      <ClaimPromoModal
        isOpen={!!selectedPromo}
        onClose={() => setSelectedPromo(null)}
        promoTitle={selectedPromo || ''}
      />
    </section>
  );
}
