import React from 'react';
import { getLandingData } from '../lib/data';
import { BookOpen, Clock, ArrowUpRight } from 'lucide-react';

export default async function EducationSection() {
  const landingData = await getLandingData();
  if (!landingData.educationTips || landingData.educationTips.length === 0) return null;

  return (
    <section id="edukasi" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 text-purple-600 font-bold text-sm mb-4 border border-purple-100">
            <BookOpen className="w-4 h-4" />
            Portal Edukasi
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#384959] mb-4">Tips Sehat Anabul</h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            Tambah wawasan Anda seputar kesehatan, perawatan, dan perilaku hewan peliharaan bersama tim medis VetQu.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {landingData.educationTips.map((tip: any, index: number) => (
            <a 
              key={tip.id} 
              href={tip.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group block rounded-3xl bg-slate-50 border border-slate-100 overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="h-48 bg-slate-200 relative overflow-hidden">
                {/* Abstract Placeholder Cover Image based on index */}
                <div className={`absolute inset-0 opacity-20 ${index === 0 ? 'bg-orange-500' : index === 1 ? 'bg-purple-500' : 'bg-blue-500'}`}></div>
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/diagonal-stripes.png')] opacity-10"></div>
                
                <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-slate-900/60 to-transparent">
                  <div className="flex items-center gap-2 text-white text-xs font-semibold">
                    <Clock className="w-3 h-3" />
                    {tip.readTime}
                  </div>
                </div>
              </div>
              
              <div className="p-6 relative">
                <div className="absolute top-6 right-6 w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 group-hover:bg-orange-500 group-hover:text-white transition-colors group-hover:rotate-45">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
                <h3 className="text-xl font-bold text-[#384959] mb-3 pr-8 group-hover:text-purple-600 transition-colors">
                  {tip.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {tip.excerpt}
                </p>
              </div>
            </a>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a 
            href={landingData.contact.socials.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 font-bold text-purple-600 bg-purple-50 rounded-xl hover:bg-purple-100 border border-purple-200 transition-colors"
          >
            Baca Artikel Lainnya di Instagram Kami
          </a>
        </div>
      </div>
    </section>
  );
}
