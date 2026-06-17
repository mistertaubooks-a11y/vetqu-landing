"use client";

import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Menu, X, Home, Sparkles, Stethoscope, Users, BookOpen, MapPin, ChevronRight } from 'lucide-react';

const getIcon = (name: string) => {
  switch(name.toLowerCase()) {
    case 'beranda': return <Home size={18} />;
    case 'promo': return <Sparkles size={18} />;
    case 'layanan': return <Stethoscope size={18} />;
    case 'dokter': return <Users size={18} />;
    case 'edukasi': return <BookOpen size={18} />;
    case 'lokasi': return <MapPin size={18} />;
    default: return <ChevronRight size={18} />;
  }
};

export default function MobileMenu({ navLinks, cta }: { 
  navLinks: {name: string, href: string}[], 
  cta: {text: string, link: string} 
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setIsOpen(false);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="md:hidden relative">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="relative z-50 p-2 text-slate-600 hover:text-purple-600 transition-colors"
        aria-label="Toggle Menu"
      >
        {isOpen ? <X size={26} /> : <Menu size={26} />}
      </button>

      {/* Fullscreen Backdrop (menggunakan Portal agar tidak terpotong Navbar) */}
      {mounted && isOpen && createPortal(
        <div 
          className="fixed inset-0 z-[40] bg-slate-900/10 backdrop-blur-[2px] transition-all duration-300"
          onClick={() => setIsOpen(false)}
        ></div>,
        document.body
      )}
      
      {/* Premium Glassmorphism Dropdown */}
      <div 
        className={`absolute top-[130%] left-0 w-[220px] bg-white/95 backdrop-blur-2xl border border-slate-100 shadow-[0_20px_50px_-12px_rgba(124,58,237,0.25)] rounded-3xl p-2 flex flex-col origin-top-left z-40 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isOpen ? 'scale-100 opacity-100 translate-y-0' : 'scale-95 opacity-0 -translate-y-4 pointer-events-none'
        }`}
      >
        <div className="px-4 pt-3 pb-2 text-xs font-bold text-purple-400 uppercase tracking-widest">
          Navigasi
        </div>
        
        <div className="flex flex-col gap-1">
          {navLinks.map((item, i) => (
            <a 
              key={item.name} 
              href={item.href} 
              onClick={() => setIsOpen(false)}
              className="group flex items-center justify-between px-4 py-3 rounded-2xl hover:bg-white hover:shadow-sm hover:shadow-purple-100 transition-all duration-200"
              style={{
                transitionDelay: isOpen ? `${i * 30}ms` : '0ms',
                transform: isOpen ? 'translateX(0)' : 'translateX(10px)',
                opacity: isOpen ? 1 : 0,
              }}
            >
              <div className="flex items-center gap-3">
                <div className="text-purple-500 group-hover:scale-110 transition-transform duration-300">
                  {getIcon(item.name)}
                </div>
                <span className="text-slate-700 font-semibold text-[15px] group-hover:text-purple-700 transition-colors">
                  {item.name}
                </span>
              </div>
              <ChevronRight size={16} className="text-slate-300 group-hover:text-purple-500 group-hover:translate-x-1 transition-all duration-300" />
            </a>
          ))}
        </div>
        
        <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-200 to-transparent my-3"></div>
        
        <div className="px-2 pb-2">
          <a 
            href={cta.link}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsOpen(false)}
            className="group relative flex items-center justify-center w-full bg-gradient-to-br from-purple-600 to-indigo-600 text-white px-4 py-3.5 rounded-2xl font-bold text-[15px] shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 hover:-translate-y-0.5 transition-all overflow-hidden"
          >
            <div className="absolute inset-0 w-1/4 h-full bg-white/20 skew-x-12 -translate-x-[250%] group-hover:animate-[shine_1.5s_ease-out]"></div>
            <span className="relative z-10">{cta.text}</span>
          </a>
        </div>
      </div>
    </div>
  );
}
