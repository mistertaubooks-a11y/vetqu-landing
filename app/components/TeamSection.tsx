import React from 'react';
import { getLandingData } from '../lib/data';
import { CalendarClock, ShieldCheck, Stethoscope, ArrowRight } from 'lucide-react';

export default async function TeamSection() {
  const landingData = await getLandingData();
  const doctors = landingData.doctors || [];

  return (
    <section id="dokter" className="py-24 bg-slate-50/80 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 text-purple-700 font-bold text-sm mb-4 border border-purple-200">
            <Stethoscope className="w-4 h-4" />
            Tenaga Medis Berizin Resmi
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#384959] mb-4">
            Dokter & Paramedis VetQu
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            Kesehatan anabul Anda ditangani langsung oleh praktisi veteriner berizin (SIPH) yang berdedikasi dan penuh kasih sayang.
          </p>
        </div>

        {/* JIKA BELUM ADA DOKTER DI CMS: TAMPILKAN BANNER DOKTER NYATA PROFESIONAL */}
        {doctors.length === 0 ? (
          <div className="max-w-4xl mx-auto bg-white rounded-3xl p-6 sm:p-8 md:p-10 border border-slate-200/90 shadow-[0_10px_35px_-10px_rgba(0,0,0,0.06)] flex flex-col md:flex-row items-center gap-8 text-center md:text-left">
            {/* Foto Dokter Asli & Ramah (Bukan icon kotak gradasi AI) */}
            <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-2xl overflow-hidden shadow-md shrink-0 border-2 border-slate-100 relative group">
              <img 
                src="/images/doctor-consultation.jpg" 
                alt="Dokter Jaga VetQu" 
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-2 left-2 right-2 bg-slate-900/80 backdrop-blur-xs text-white text-[10px] font-bold py-1 px-2 rounded-md text-center">
                Praktek Medis
              </div>
            </div>

            <div className="flex-1">
              <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full mb-3 border border-emerald-200">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                Dokter Hewan Berizin Resmi (SIPH)
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">
                Konsultasikan Kondisi Anabul dengan Dokter Jaga
              </h3>
              <p className="text-slate-600 leading-relaxed mb-6 text-sm">
                Klinik VetQu didukung oleh tim dokter hewan umum dan paramedis yang bertugas setiap hari sesuai jadwal operasional klinik (08:00 – 21:00 WIB). Ingin tahu dokter siapa yang sedang bertugas hari ini?
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <a
                  href={`https://wa.me/6281219818004?text=Halo%20Admin%20VetQu,%20saya%20ingin%20tanya%20jadwal%20dokter%20hewan%20yang%20standby%20hari%20ini`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-purple-700 hover:bg-purple-800 text-white font-bold text-sm rounded-xl shadow-xs transition-colors"
                >
                  Tanya Dokter Jaga Hari Ini
                  <ArrowRight className="w-4 h-4" />
                </a>
                <div className="text-xs text-slate-500 flex items-center gap-1.5">
                  <CalendarClock className="w-4 h-4 text-purple-600" />
                  <span>Senin – Minggu (08:00 – 21:00)</span>
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* JIKA ADA DOKTER DI CMS: GRID OTOMATIS SESUAI JUMLAH DOKTER */
          <div className={`grid gap-8 ${
            doctors.length === 1 
              ? 'max-w-md mx-auto grid-cols-1' 
              : doctors.length === 2 
                ? 'max-w-3xl mx-auto grid-cols-1 md:grid-cols-2' 
                : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
          }`}>
            {doctors.map((doctor: any) => (
              <div 
                key={doctor.id} 
                className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="h-64 bg-slate-100 relative overflow-hidden">
                    {doctor.image ? (
                      <img src={doctor.image} alt={doctor.name} className="w-full h-full object-cover" />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-tr from-purple-100 to-indigo-50 flex flex-col items-center justify-center p-6 text-center">
                        <div className="w-20 h-20 rounded-full bg-white shadow-md flex items-center justify-center text-3xl mb-2">
                          🩺
                        </div>
                        <span className="text-xs font-bold text-purple-700 bg-white/90 px-3 py-1 rounded-full border border-purple-100">
                          Dokter Hewan VetQu
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="p-6 md:p-8">
                    <h3 className="text-2xl font-bold text-slate-800 mb-1">{doctor.name}</h3>
                    <p className="text-purple-600 font-semibold mb-4 text-sm">{doctor.specialization}</p>
                    
                    <div className="flex flex-col gap-3">
                      {doctor.experience && (
                        <div className="inline-flex w-max items-center px-3 py-1 bg-slate-100 text-slate-600 text-xs font-medium rounded-full">
                          {doctor.experience}
                        </div>
                      )}
                      <div className="flex items-start gap-2.5 text-xs text-slate-600 bg-purple-50/60 p-3 rounded-xl border border-purple-100/50">
                        <CalendarClock className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                        <div>
                          <span className="text-slate-400 font-medium">Jadwal Praktek:</span>
                          <p className="font-bold text-slate-700">{doctor.schedule}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <a
                    href={`https://wa.me/6281219818004?text=Halo%20Admin,%20saya%20ingin%20reservasi%20jadwal%20dengan%20${encodeURIComponent(doctor.name)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-purple-50 hover:bg-purple-100 text-purple-700 font-bold text-sm transition-colors border border-purple-200/60"
                  >
                    Booking Jadwal Dokter Ini
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
