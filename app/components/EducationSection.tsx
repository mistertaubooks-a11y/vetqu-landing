import React from 'react';
import { getLandingData } from '../lib/data';
import { Clock, ArrowUpRight, MessageCircle } from 'lucide-react';

export default async function EducationSection() {
  const landingData = await getLandingData();
  if (!landingData.educationTips || landingData.educationTips.length === 0) return null;

  return (
    <section id="edukasi" className="py-24 bg-[#FAF9F6] relative border-t border-slate-200/60">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 text-emerald-800 text-xs font-semibold mb-4 border border-emerald-100">
            <span>Pusat Edukasi & Informasi</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#384959] mb-4">
            Tips Sehat & Panduan Perawatan Anabul
          </h2>
          <p className="text-base md:text-lg text-slate-500 max-w-2xl mx-auto">
            Disusun dan ditinjau oleh dokter hewan VetQu untuk membantu Anda merawat anabul tetap sehat dan ceria.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {landingData.educationTips.map((tip: any, index: number) => {
            const articleUrl = tip.slug ? `/edukasi/${tip.slug}` : (tip.link?.startsWith('http') ? tip.link : `/edukasi/tip-${index + 1}`);
            const isInternal = articleUrl.startsWith('/');

            return (
              <a 
                key={tip.id} 
                href={articleUrl}
                target={isInternal ? "_self" : "_blank"}
                rel={isInternal ? "" : "noopener noreferrer"}
                className="group block rounded-3xl bg-white border border-slate-200/80 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between"
              >
              <div>
                <div className="h-48 bg-slate-100 relative overflow-hidden flex items-center justify-center">
                  {tip.image ? (
                    <img 
                      src={tip.image} 
                      alt={tip.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-tr from-slate-100 to-amber-50/50 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center text-3xl">
                        {index === 0 ? '💉' : index === 1 ? '🩺' : '💊'}
                      </div>
                    </div>
                  )}
                  
                  <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-sm px-2.5 py-1 rounded-lg border border-slate-100 shadow-xs flex items-center gap-1.5 text-slate-700 text-[11px] font-medium">
                    <Clock className="w-3 h-3 text-emerald-600" />
                    {tip.readTime || '3 Min Read'}
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <h3 className="text-lg font-bold text-[#384959] group-hover:text-emerald-700 transition-colors leading-snug">
                      {tip.title}
                    </h3>
                    <div className="w-7 h-7 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 group-hover:bg-emerald-100 group-hover:text-emerald-700 transition-colors shrink-0 mt-0.5">
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed line-clamp-3">
                    {tip.excerpt}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-0 text-xs font-semibold text-emerald-700 group-hover:text-emerald-800 flex items-center gap-1.5">
                <span>Baca panduan selengkapnya</span>
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </a>
            );
          })}
        </div>
        
        {/* Banner Jembatan Otoritas & Konsultasi */}
        <div className="mt-14 p-8 rounded-3xl bg-white border border-slate-200/80 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <h4 className="text-lg font-bold text-[#384959] mb-1">
              Gejala Anabul Tidak Membaik atau Butuh Penanganan Langsung?
            </h4>
            <p className="text-sm text-slate-500">
              Jangan tunggu gejala semakin parah. Hubungi dokter hewan VetQu via WhatsApp untuk konsultasi cepat atau reservasi jadwal.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
            <a 
              href={landingData.contact.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-xl border border-slate-200 text-slate-700 hover:text-slate-900 hover:bg-slate-50 text-sm font-semibold transition-colors flex items-center gap-2"
            >
              <svg className="w-4 h-4 text-pink-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              <span>Follow IG @vetquanimalcare</span>
            </a>
            <a 
              href="https://wa.me/6281219818004?text=Halo%20Dokter%20VetQu,%20saya%20mau%20konsultasi%20mengenai%20kesehatan%20hewan%20saya..."
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-xl bg-orange-600 hover:bg-orange-700 text-white text-sm font-semibold shadow-sm transition-all hover:scale-105 flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Tanya Dokter via WA</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
