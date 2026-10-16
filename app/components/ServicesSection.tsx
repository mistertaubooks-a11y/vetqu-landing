import React from 'react';
import { getLandingData } from '../lib/data';
import * as LucideIcons from 'lucide-react';
import { ArrowUpRight } from 'lucide-react';

export default async function ServicesSection() {
  const landingData = await getLandingData();
  return (
    <section id="layanan" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 text-emerald-800 text-xs font-semibold mb-4 border border-emerald-100">
              <span>Pelayanan Medis Terpadu</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#384959] tracking-tight">
              Layanan Medis & Perawatan Anabul
            </h2>
            <p className="text-base md:text-lg text-slate-500 mt-2 max-w-xl">
              Dilengkapi standar medis veteriner dan peralatan steril untuk kenyamanan hewan kesayangan Anda.
            </p>
          </div>

          <a 
            href="https://wa.me/6281219818004?text=Halo%20Admin%20VetQu,%20saya%20ingin%20konsultasi%20mengenai%20layanan%20klinik"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold text-emerald-700 hover:text-emerald-800 flex items-center gap-1.5 self-start md:self-auto group"
          >
            <span>Butuh info biaya layanan? Chat kami</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {landingData.services.map((service: any) => {
            const IconComponent = (LucideIcons as any)[service.iconName] || LucideIcons.Heart;
            
            return (
              <a 
                key={service.id} 
                href={`https://wa.me/6281219818004?text=Halo%20Admin%20VetQu,%20saya%20ingin%20tanya%20layanan%20${encodeURIComponent(service.title)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-8 rounded-3xl bg-[#FAF9F6] border border-slate-200/70 hover:bg-white hover:border-emerald-300 shadow-xs hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 bg-white border border-slate-200/80 text-emerald-700 rounded-2xl flex items-center justify-center shadow-xs group-hover:bg-emerald-600 group-hover:text-white group-hover:border-emerald-600 transition-all duration-300">
                      <IconComponent className="w-7 h-7" />
                    </div>
                    <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 group-hover:bg-emerald-50 group-hover:text-emerald-700 transition-colors">
                      <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-[#384959] mb-3 group-hover:text-emerald-700 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed text-sm">
                    {service.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200/60 flex items-center text-xs font-semibold text-emerald-700 group-hover:text-emerald-800">
                  <span>Konsultasi layanan ini &rarr;</span>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
