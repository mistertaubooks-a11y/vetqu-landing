import React from 'react';
import { getLandingData } from '../lib/data';
import { Building2 } from 'lucide-react';

export default async function FacilitySection() {
  const landingData = await getLandingData();
  const facilities = landingData.facilities || [];

  // Jika belum ada fasilitas yang diinput di Sanity Studio,
  // jangan tampilkan placeholder rusak atau tanda tanya [?].
  if (facilities.length === 0) {
    return null;
  }

  return (
    <section className="py-24 bg-white" id="fasilitas">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 text-emerald-700 text-xs font-semibold mb-4 border border-emerald-100">
            <Building2 className="w-4 h-4" /> Standar Kebersihan Medis
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#384959] mb-4">Fasilitas Klinik</h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            Dilengkapi dengan peralatan medis yang bersih dan steril untuk akurasi diagnosa dan kenyamanan.
          </p>
        </div>

        <div className={`grid grid-cols-1 sm:grid-cols-2 ${facilities.length <= 3 ? 'lg:grid-cols-3' : 'lg:grid-cols-4'} gap-6`}>
          {facilities.map((fac: any) => (
            <div 
              key={fac.id} 
              className="group relative h-80 rounded-3xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-all duration-500 bg-slate-100 border border-slate-200/60"
            >
              {/* Image Background */}
              {fac.image ? (
                <div className="absolute inset-0 bg-slate-200 group-hover:scale-105 transition-transform duration-700 ease-out">
                  <img 
                    src={fac.image} 
                    alt={fac.name} 
                    className="w-full h-full object-cover" 
                  />
                  {/* Subtle dark gradient overlay so text remains readable */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-900/30 to-transparent"></div>
                </div>
              ) : (
                <div className="absolute inset-0 bg-gradient-to-br from-slate-100 to-slate-200 flex flex-col items-center justify-center p-6 text-center">
                  <Building2 className="w-12 h-12 text-slate-400 mb-3" />
                  <span className="text-sm font-medium text-slate-500">VetQu Medical Facility</span>
                </div>
              )}

              {/* Content Overlay */}
              <div className="absolute bottom-0 left-0 p-6 w-full z-10">
                <h3 className="text-white font-bold text-lg drop-shadow-sm group-hover:text-amber-300 transition-colors">
                  {fac.name}
                </h3>
                {fac.description && (
                  <p className="text-xs text-slate-200 line-clamp-2 mt-1.5 opacity-90">
                    {fac.description}
                  </p>
                )}
                <div className="w-8 h-1 bg-orange-500 mt-3 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-x-2 group-hover:translate-x-0"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

