"use client";

import React, { useState } from 'react';
import { HeartHandshake, Clock, CalendarDays, ArrowRight, ShieldCheck, Ticket } from 'lucide-react';
import ClaimPromoModal from './ClaimPromoModal';

export default function PromoSection({ promos }: { promos: any[] }) {
  const [selectedPromo, setSelectedPromo] = useState<string | null>(null);

  if (!promos || promos.length === 0) return null;

  const isSingle = promos.length === 1;

  return (
    <section id="promo" className="py-20 bg-[#FBF7F0] relative overflow-hidden border-t border-amber-200/50">
      {/* Background Subtle Pattern */}
      <div className="absolute inset-0 opacity-[0.025] bg-[radial-gradient(#d97706_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100/80 text-amber-900 font-semibold text-xs border border-amber-200 mb-3">
            <HeartHandshake className="w-4 h-4 text-amber-700" />
            <span>Program & Kepedulian VetQu</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#384959] tracking-tight mb-3">
            Program Khusus & Promo
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Dedikasi kami untuk kesehatan anabul dan kepedulian bersama komunitas pecinta hewan.
          </p>
        </div>
        
        {/* Grid Container (Center jika cuma 1 promo) */}
        <div className={`grid gap-6 ${isSingle ? 'max-w-2xl mx-auto grid-cols-1' : 'grid-cols-1 md:grid-cols-2'}`}>
          {promos.map((promo: any) => {
            return (
              <div 
                key={promo.id} 
                className="group relative bg-white rounded-3xl border border-amber-200/80 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between"
              >
                {/* Header Card dengan Aksen Kupon & Ribbon */}
                <div className="p-7 sm:p-8 relative">
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <span className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-800 bg-emerald-50 px-3 py-1.5 rounded-full border border-emerald-200">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                      <span>{promo.type || "Program Spesial"}</span>
                    </span>

                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-800 bg-amber-50/80 px-2.5 py-1 rounded-md border border-amber-200/60">
                      <CalendarDays className="w-3.5 h-3.5 text-amber-600" />
                      <span>{promo.validUntil || "Setiap Pekan"}</span>
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-[26px] font-bold text-slate-900 mb-3 group-hover:text-amber-800 transition-colors leading-snug">
                    {promo.title}
                  </h3>

                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                    {promo.description}
                  </p>
                </div>

                {/* Garis Potongan Kupon (Ticket Perforation) */}
                <div className="relative flex items-center px-4">
                  <div className="w-5 h-5 rounded-full bg-[#FBF7F0] border-r border-amber-200/80 -ml-6.5 shrink-0"></div>
                  <div className="flex-1 border-t-2 border-dashed border-amber-200/80 mx-2"></div>
                  <div className="w-5 h-5 rounded-full bg-[#FBF7F0] border-l border-amber-200/80 -mr-6.5 shrink-0"></div>
                </div>

                {/* Footer Tiket & Tombol Aksi */}
                <div className="p-6 sm:p-7 bg-amber-50/40 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-2 text-xs font-medium text-slate-500">
                    <Clock className="w-4 h-4 text-amber-600" />
                    <span>Kuota terbatas • Konfirmasi H-1</span>
                  </div>

                  <button 
                    onClick={() => setSelectedPromo(promo.title)}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-2xl bg-orange-600 hover:bg-orange-700 text-white font-bold text-sm shadow-md hover:shadow-orange-500/25 hover:-translate-y-0.5 transition-all cursor-pointer"
                  >
                    <span>Daftar / Klaim Program</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
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
