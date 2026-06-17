import React from 'react';
import Image from 'next/image';
import { getLandingData } from '../lib/data';
import MobileMenu from './MobileMenu';
import { ArrowRight } from 'lucide-react';

export default async function Navbar() {
  const landingData = await getLandingData();
  
  const navLinks = [
    { name: 'Beranda', href: '#beranda' },
    { name: 'Promo', href: '#promo' },
    { name: 'Layanan', href: '#layanan' },
    { name: 'Dokter', href: '#dokter' },
    { name: 'Edukasi', href: '#edukasi' },
    { name: 'Lokasi', href: '#lokasi' },
  ];

  return (
    <div className="fixed top-0 left-0 w-full z-50 flex justify-center pt-4 px-4 pointer-events-none">
      <nav className="w-full max-w-6xl flex items-center justify-between px-4 md:px-6 py-3 bg-white/75 backdrop-blur-2xl border border-white/60 shadow-[0_8px_30px_rgb(0,0,0,0.06)] rounded-full pointer-events-auto transition-all duration-300 relative">
        <div className="flex items-center order-2 md:order-1">
          <Image
            src="/images/vetqu-logo.png"
            alt="VetQu Logo"
            width={140}
            height={45}
            className="h-11 md:h-12 w-auto object-contain"
          />
        </div>
        
        {/* Desktop Menu - Premium Edition */}
        <div className="hidden md:flex items-center gap-1 order-none md:order-2">
          {navLinks.map((item) => (
            <a 
              key={item.name} 
              href={item.href} 
              className="relative px-5 py-2.5 rounded-full group overflow-hidden"
            >
              <span className="relative z-10 font-bold text-slate-500 group-hover:text-purple-700 transition-colors duration-300 text-[15px]">
                {item.name}
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-purple-50 to-indigo-50 border border-purple-100/50 rounded-full opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 ease-out"></span>
              {/* Animated Dot Indicator */}
              <span className="absolute bottom-1.5 left-1/2 w-1 h-1 bg-purple-500 rounded-full opacity-0 -translate-x-1/2 group-hover:opacity-100 group-hover:-translate-y-1 transition-all duration-300 ease-out"></span>
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2 order-1 md:order-3">
          {/* Desktop CTA - Premium Glow & Shine */}
          <a 
            href={landingData.hero.cta.link}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex relative group overflow-hidden bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-7 py-2.5 rounded-full text-[15px] font-extrabold shadow-[0_8px_20px_-6px_rgba(124,58,237,0.5)] hover:shadow-[0_12px_25px_-6px_rgba(124,58,237,0.6)] hover:-translate-y-0.5 transition-all duration-300"
          >
            <div className="absolute inset-0 w-1/4 h-full bg-white/20 skew-x-12 -translate-x-[250%] group-hover:animate-[shine_1.5s_ease-out]"></div>
            <span className="relative z-10 flex items-center gap-2">
              {landingData.hero.cta.text}
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </span>
          </a>
          <MobileMenu navLinks={navLinks} cta={landingData.hero.cta} />
        </div>
      </nav>
    </div>
  );
}
