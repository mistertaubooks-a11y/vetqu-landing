import React from 'react';
import { getLandingData } from '../lib/data';

export default async function FacilitySection() {
  const landingData = await getLandingData();
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#384959] mb-4">Fasilitas Klinik</h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">Dilengkapi dengan peralatan medis modern yang bersih dan steril untuk menjamin akurasi diagnosa dan kenyamanan.</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {landingData.facilities.map((fac: any) => (
            <div key={fac.id} className="group relative h-72 rounded-3xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-all duration-500">
              {/* Image Background */}
              <div className="absolute inset-0 bg-slate-300 group-hover:scale-110 transition-transform duration-700">
                 {fac.image ? (
                   <img src={fac.image} alt={fac.name} className="w-full h-full object-cover" />
                 ) : (
                   <div className="w-full h-full bg-slate-200 flex items-center justify-center text-slate-400 text-sm">
                     [Tanpa Gambar]
                   </div>
                 )}
              </div>
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent"></div>
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 p-6 w-full translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-white font-bold text-lg">{fac.name}</h3>
                <div className="w-8 h-1 bg-orange-500 mt-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
