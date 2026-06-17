import React from 'react';
import { getLandingData } from '../lib/data';
import { Quote } from 'lucide-react';

export default async function TestimonialSection() {
  const landingData = await getLandingData();
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#384959] mb-4">Apa Kata Mereka?</h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">Kepercayaan Anda adalah prioritas kami. Lihat pengalaman para pet parent bersama VetQu.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {landingData.testimonials.map((testi: any) => (
            <div key={testi.id} className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:bg-purple-50 transition-colors duration-300">
              <Quote className="w-10 h-10 text-orange-300 mb-6" />
              <p className="text-slate-700 italic mb-8 leading-relaxed">"{testi.text}"</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-700 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  {testi.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-[#384959]">{testi.name}</h4>
                  <p className="text-sm text-slate-500">{testi.pet}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
