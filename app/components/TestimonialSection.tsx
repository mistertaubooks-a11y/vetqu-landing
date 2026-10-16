import React from 'react';
import { getLandingData } from '../lib/data';
import { Star, MessageSquareQuote, ExternalLink } from 'lucide-react';

export default async function TestimonialSection() {
  const landingData = await getLandingData();
  
  return (
    <section className="py-24 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 text-amber-700 font-bold text-sm mb-4 border border-amber-200">
              <span className="flex text-amber-500">★★★★★</span>
              <span>Google Maps Verified Reviews</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#384959] tracking-tight">
              Cerita Bahagia Pet Parent
            </h2>
            <p className="text-lg text-slate-500 mt-2 max-w-xl">
              Dedikasi kami dibuktikan langsung oleh senyuman dan kepuasan pemilik hewan di VetQu.
            </p>
          </div>

          <a 
            href={landingData.contact.mapsLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-bold text-purple-700 hover:text-purple-900 bg-purple-50 hover:bg-purple-100 border border-purple-200 px-5 py-2.5 rounded-full transition-all self-start md:self-auto"
          >
            Beri Ulasan di Google Maps
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {landingData.testimonials.map((testi: any) => (
            <div 
              key={testi.id} 
              className="p-8 rounded-3xl bg-white border border-slate-200/80 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-xl hover:border-purple-200 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  {/* 5 Stars */}
                  <div className="flex text-amber-400 gap-1">
                    {[...Array(testi.rating || 5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <MessageSquareQuote className="w-7 h-7 text-purple-200" />
                </div>
                <p className="text-slate-700 text-base leading-relaxed mb-8">
                  "{testi.text}"
                </p>
              </div>

              <div className="flex items-center gap-4 pt-4 border-t border-slate-100">
                {testi.photo ? (
                  <img 
                    src={testi.photo} 
                    alt={testi.name} 
                    className="w-12 h-12 rounded-full object-cover border-2 border-purple-100" 
                  />
                ) : (
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-sm">
                    {testi.name.charAt(0)}
                  </div>
                )}
                <div>
                  <h4 className="font-bold text-slate-800 text-base">{testi.name}</h4>
                  <p className="text-xs font-medium text-slate-500">{testi.pet}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
