import React from 'react';
import { getLandingData } from '../lib/data';
import * as LucideIcons from 'lucide-react';

export default async function ServicesSection() {
  const landingData = await getLandingData();
  return (
    <section id="layanan" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#384959] mb-4">Layanan Kesehatan Hewan</h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">Kami menyediakan perawatan medis dan kosmetik yang lengkap untuk menunjang kualitas hidup anabul kesayangan Anda.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {landingData.services.map((service: any, index: number) => {
            // Dynamically get the icon component
            const IconComponent = (LucideIcons as any)[service.iconName] || LucideIcons.Heart;
            
            return (
              <div 
                key={service.id} 
                className="group p-8 rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:border-purple-100 transition-all duration-300 hover:-translate-y-2 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-purple-50 rounded-full mix-blend-multiply filter blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-x-10 -translate-y-10"></div>
                
                <div className="w-14 h-14 bg-orange-50 text-orange-500 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-orange-500 group-hover:text-white transition-colors duration-300">
                  <IconComponent className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-[#384959] mb-3">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
