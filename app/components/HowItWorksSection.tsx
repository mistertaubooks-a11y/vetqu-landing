import React from 'react';
import { getLandingData } from '../lib/data';
import * as LucideIcons from 'lucide-react';
import { ArrowRight } from 'lucide-react';

export default async function HowItWorksSection() {
  const landingData = await getLandingData();
  return (
    <section className="py-24 bg-[#FAF9F6] relative border-t border-slate-200/60">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="text-xs font-bold text-purple-700 uppercase tracking-widest bg-purple-50 px-3.5 py-1.5 rounded-full border border-purple-100">
            Alur Pelayanan
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mt-4 mb-3 tracking-tight">
            3 Langkah Mudah Tanpa Antre
          </h2>
          <p className="text-base md:text-lg text-slate-500 max-w-2xl mx-auto">
            Kami mengutamakan kenyamanan anabul agar tidak stres menunggu di ruang tunggu.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {landingData.howItWorks.map((step: any, index: number) => {
            const IconComponent = (LucideIcons as any)[step.iconName] || LucideIcons.CheckCircle;
            
            return (
              <div 
                key={step.id} 
                className="relative bg-white p-8 rounded-3xl border border-slate-200/80 shadow-xs hover:shadow-lg hover:border-purple-200 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-purple-100 text-purple-700 flex items-center justify-center font-bold">
                      <IconComponent className="w-7 h-7" />
                    </div>
                    <span className="text-3xl font-black text-slate-300 font-mono">
                      0{index + 1}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-3">{step.title}</h3>
                  <p className="text-slate-600 leading-relaxed text-sm">{step.description}</p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200/60 flex items-center text-xs font-bold text-purple-700 gap-1.5">
                  <span>Langkah {index + 1} dari 3</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
