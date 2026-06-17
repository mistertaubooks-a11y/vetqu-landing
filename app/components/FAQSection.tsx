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
                  <div className="p-6 pt-0 text-slate-600 leading-relaxed border-t border-slate-50 mx-6">
                    {faq.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        
        <div className="mt-12 text-center p-8 bg-purple-50 rounded-3xl border border-purple-100 relative z-10">
          <h3 className="text-xl font-bold text-[#384959] mb-2">Punya pertanyaan lain?</h3>
          <p className="text-slate-600 mb-6">Tim admin kami siap membantu Anda menjawab segala kebingungan seputar anabul Anda.</p>
          <a 
            href={ctaLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 font-bold text-white bg-purple-600 rounded-xl hover:bg-purple-700 transition-colors"
          >
            Tanya via WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
