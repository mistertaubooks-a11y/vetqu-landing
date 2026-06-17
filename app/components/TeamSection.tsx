import React from 'react';
import { getLandingData } from '../lib/data';
import { CalendarClock } from 'lucide-react';

export default async function TeamSection() {
  const landingData = await getLandingData();
  return (
    <section id="dokter" className="py-24 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#384959] mb-4">Tim Dokter Kami</h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">Ditangani langsung oleh tenaga medis profesional yang berpengalaman dan penyayang binatang.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {landingData.doctors.map((doctor: any) => (
            <div key={doctor.id} className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="h-64 bg-slate-200 relative">
                {doctor.image ? (
                  <img src={doctor.image} alt={doctor.name} className="w-full h-full object-cover" />
                ) : (
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent flex items-end p-6 text-white font-medium">
                    [Foto {doctor.name}]
                  </div>
                )}
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-[#384959] mb-1">{doctor.name}</h3>
                <p className="text-purple-600 font-medium mb-4">{doctor.specialization}</p>
                <div className="flex flex-col gap-3">
                  <div className="inline-flex w-max items-center px-3 py-1 bg-slate-100 text-slate-600 text-sm rounded-full">
                    {doctor.experience}
                  </div>
                  <div className="flex items-start gap-2 text-sm text-slate-500 bg-purple-50/50 p-3 rounded-xl">
                    <CalendarClock className="w-5 h-5 text-orange-500 shrink-0" />
                    <span>Jadwal: <br/><span className="font-semibold text-slate-700">{doctor.schedule}</span></span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
