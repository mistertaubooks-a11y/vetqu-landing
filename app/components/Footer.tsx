import React from 'react';
import { getLandingData } from '../lib/data';
import Image from 'next/image';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default async function Footer() {
  const landingData = await getLandingData();
  return (
    <footer className="bg-[#384959] pt-20 pb-10 text-slate-300">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-1">
            <Image
              src="/images/vetqu-logo.png"
              alt="VetQu Logo"
              width={150}
              height={50}
              className="h-12 w-auto object-contain mb-6 brightness-0 invert"
            />
            <p className="text-slate-400 mb-6">
              Mitra kesehatan anabul terpercaya dengan fasilitas modern dan pelayanan sepenuh hati.
            </p>
            <div className="flex items-center gap-4">
              <a href={landingData.contact.socials.instagram} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center hover:bg-pink-600 transition-colors text-white" aria-label="Instagram">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href={landingData.contact.socials.facebook} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center hover:bg-purple-600 transition-colors text-white" aria-label="Facebook">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
              <a href={landingData.contact.socials.tiktok} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center hover:bg-black transition-colors text-white" aria-label="TikTok">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 15.66a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1.04-.11z"/>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Tautan Cepat</h4>
            <ul className="space-y-4">
              <li><a href="#beranda" className="hover:text-orange-400 transition-colors">Beranda</a></li>
              <li><a href="#promo" className="hover:text-orange-400 transition-colors">Promo & Diskon</a></li>
              <li><a href="#layanan" className="hover:text-orange-400 transition-colors">Layanan Klinik</a></li>
              <li><a href="#dokter" className="hover:text-orange-400 transition-colors">Tim Dokter</a></li>
              <li><a href="#edukasi" className="hover:text-orange-400 transition-colors">Artikel & Edukasi</a></li>
              <li><a href="#lokasi" className="hover:text-orange-400 transition-colors">Lokasi Kami</a></li>
            </ul>
          </div>
          
          <div className="lg:col-span-2" id="lokasi">
            <h4 className="text-white font-bold text-lg mb-6">Hubungi Kami</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-orange-400 shrink-0 mt-1" />
                  <span>{landingData.contact.address}</span>
                </li>
                <li className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-orange-400 shrink-0" />
                  <span className="whitespace-pre-line leading-relaxed">{landingData.contact.hours}</span>
                </li>
              </ul>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-orange-400 shrink-0" />
                  <span>{landingData.contact.whatsapp}</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-orange-400 shrink-0" />
                  <span>{landingData.contact.email}</span>
                </li>
              </ul>
            </div>
            
            <div className="mt-8 rounded-2xl overflow-hidden shadow-lg h-56 border border-slate-700 relative group">
              <iframe
                src="https://maps.google.com/maps?q=-6.1393205,106.5367238&t=&z=16&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
              ></iframe>
              <div className="absolute inset-0 pointer-events-none flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-slate-900/10 backdrop-blur-[1px]">
                <a 
                  href={landingData.contact.mapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pointer-events-auto inline-flex items-center gap-2 justify-center px-6 py-3 bg-purple-600 hover:bg-purple-500 rounded-xl transition-transform hover:scale-105 font-semibold text-white shadow-xl shadow-purple-900/30"
                >
                  <MapPin className="w-5 h-5" />
                  Buka di Aplikasi Maps
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-slate-700 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-500">
            &copy; {new Date().getFullYear()} VetQu Animal Care. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
