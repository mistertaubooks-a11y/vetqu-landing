"use client";

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FAQSection({ faqs, ctaLink }: { faqs: any[], ctaLink: string }) {
  const [openId, setOpenId] = useState<string | null>(faqs[0]?.id || null);

  return (
    <section className="py-24 bg-slate-50 relative">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#384959] mb-4">Pertanyaan Umum</h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">Jawaban cepat untuk pertanyaan yang sering ditanyakan oleh pet parent.</p>
        </div>
        
        <div className="max-w-3xl mx-auto space-y-4 relative z-10">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;
            
            return (
              <div 
                key={faq.id} 
                className={`bg-white border rounded-2xl overflow-hidden transition-all duration-300 ${isOpen ? 'border-purple-200 shadow-md' : 'border-slate-200 shadow-sm hover:border-purple-100'}`}
              >
                <button
                  onClick={() => setOpenId(isOpen ? null : faq.id)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                >
                  <span className={`font-bold text-lg pr-8 ${isOpen ? 'text-purple-600' : 'text-[#384959]'}`}>
                    {faq.question}
                  </span>
                  <span className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors duration-300 ${isOpen ? 'bg-orange-100 text-orange-600' : 'bg-slate-100 text-slate-500'}`}>
                    <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                  </span>
                </button>
                
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <div className="p-6 pt-0 text-slate-600 leading-relaxed border-t border-slate-100 mx-6">
                    {faq.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        
        <div className="mt-14 p-8 bg-white rounded-3xl border border-slate-200/80 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left relative z-10">
          <div>
            <h3 className="text-xl font-bold text-[#384959] mb-1.5">Masih Ada Pertanyaan yang Belum Terjawab?</h3>
            <p className="text-slate-500 text-sm max-w-xl">
              Admin klinik VetQu siap membantu menjelaskan estimasi biaya, ketersediaan jadwal dokter, dan panduan persiapan sebelum membawa anabul.
            </p>
          </div>
          <a 
            href={ctaLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 font-semibold text-white bg-orange-600 hover:bg-orange-700 rounded-xl transition-all shadow-sm shrink-0 hover:scale-105"
          >
            Chat Admin via WA
          </a>
        </div>
      </div>
    </section>
  );
}
