import React from 'react';
import { getLandingData } from '../lib/data';
import * as LucideIcons from 'lucide-react';

export default async function HowItWorksSection() {
  const landingData = await getLandingData();
  return (
    <section className="py-24 bg-purple-600 relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Cara Mendaftar Mudah</h2>
          <p className="text-lg text-purple-100 max-w-2xl mx-auto">Tiga langkah praktis untuk mendapatkan pelayanan terbaik bagi hewan peliharaan Anda tanpa perlu antre panjang.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connector Line for Desktop */}
          <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-orange-400/50 border-t-2 border-dashed border-orange-300"></div>
          
          {landingData.howItWorks.map((step: any, index: number) => {
            const IconComponent = (LucideIcons as any)[step.iconName] || LucideIcons.CheckCircle;
            
            return (
              <div key={step.id} className="relative flex flex-col items-center text-center">
                <div className="w-24 h-24 rounded-full bg-white flex items-center justify-center shadow-xl mb-6 relative z-10 border-4 border-orange-500 text-orange-500">
                  <IconComponent className="w-10 h-10" />
                  <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-orange-500 text-white font-bold flex items-center justify-center border-2 border-white">
                    {index + 1}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                <p className="text-purple-100 leading-relaxed max-w-xs">{step.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
