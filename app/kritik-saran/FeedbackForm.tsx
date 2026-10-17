"use client";

import React, { useState } from 'react';
import { 
  Star, 
  Send, 
  CheckCircle2, 
  Loader2 
} from 'lucide-react';

const CATEGORIES = [
  'Pelayanan Dokter & Paramedis',
  'Fasilitas & Kebersihan Klinik',
  'Pelayanan Grooming',
  'Penitipan / Rawat Inap',
  'Kecepatan & Alur Antrean',
  'Biaya & Pembayaran',
  'Lainnya / Masukan Umum',
];

const RATING_LABELS: Record<number, string> = {
  1: '⭐ Perlu Banyak Evaluasi (1 / 5)',
  2: '⭐⭐ Kurang Memuaskan (2 / 5)',
  3: '⭐⭐⭐ Cukup / Standar (3 / 5)',
  4: '⭐⭐⭐⭐ Puas & Baik (4 / 5)',
  5: '⭐⭐⭐⭐⭐ Sangat Memuaskan (5 / 5)',
};

export default function FeedbackForm() {
  const [rating, setRating] = useState<number>(5);
  const [hoverRating, setHoverRating] = useState<number>(0);
  const [name, setName] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [category, setCategory] = useState(CATEGORIES[0]);
  const [message, setMessage] = useState('');
  
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const currentDisplayRating = hoverRating || rating;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) {
      setErrorMsg('Mohon tuliskan pesan kritik, saran, atau pengalaman Anda.');
      return;
    }

    setLoading(true);
    setErrorMsg('');

    try {
      const res = await fetch('/api/feedback', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: name.trim(),
          whatsapp: whatsapp.trim(),
          category,
          rating,
          message: message.trim(),
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Gagal mengirim kritik dan saran.');
      }

      setSubmitted(true);
    } catch (err: any) {
      setErrorMsg(err.message || 'Terjadi gangguan koneksi. Silakan coba lagi.');
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="text-center py-8">
        <div className="w-20 h-20 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-6 shadow-sm">
          <CheckCircle2 className="w-10 h-10" />
        </div>

        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#384959] mb-3">
          Terima Kasih Banyak!
        </h2>

        <p className="text-slate-600 text-base max-w-lg mx-auto mb-8 leading-relaxed">
          Masukan dan saran Anda telah tersimpan dengan aman dan akan langsung ditinjau oleh tim manajemen VetQu untuk terus meningkatkan kualitas pelayanan bagi Anda dan anabul tersayang.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            type="button"
            onClick={() => {
              setSubmitted(false);
              setMessage('');
              setName('');
              setWhatsapp('');
              setRating(5);
            }}
            className="w-full sm:w-auto px-7 py-3.5 rounded-2xl bg-orange-600 hover:bg-orange-700 text-white font-bold text-sm shadow-md transition-all hover:scale-105 cursor-pointer"
          >
            Kirim Masukan Lain
          </button>

          <a
            href="/"
            className="w-full sm:w-auto px-7 py-3.5 rounded-2xl border border-slate-300 text-slate-700 hover:bg-slate-50 font-bold text-sm transition-colors text-center"
          >
            Kembali ke Beranda
          </a>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Rating Bintang Interaktif */}
      <div className="bg-slate-50/90 p-6 rounded-2xl border border-slate-200/70 text-center">
        <label className="block text-sm font-bold text-slate-800 mb-2">
          Bagaimana tingkat kepuasan Anda terhadap layanan VetQu?
        </label>
        <p className="text-xs text-slate-500 mb-3">Klik bintang untuk memilih nilai rating</p>

        <div className="inline-flex items-center justify-center gap-2 sm:gap-4 py-2">
          {[1, 2, 3, 4, 5].map((star) => {
            const isFilled = star <= currentDisplayRating;
            const isSelected = rating === star;
            return (
              <button
                key={star}
                type="button"
                onClick={() => setRating(star)}
                onMouseEnter={() => setHoverRating(star)}
                onMouseLeave={() => setHoverRating(0)}
                className={`p-2 sm:p-3 rounded-2xl transition-all cursor-pointer flex flex-col items-center gap-1.5 focus:outline-hidden focus:ring-2 focus:ring-amber-400 ${
                  isSelected ? 'bg-amber-100/80 scale-105' : 'hover:bg-amber-50 active:scale-95'
                }`}
                aria-label={`Beri nilai ${star} bintang`}
              >
                <Star 
                  className={`w-9 h-9 sm:w-11 sm:h-11 transition-all ${
                    isFilled
                      ? 'text-amber-400 fill-amber-400 drop-shadow-sm scale-110'
                      : 'text-slate-300 fill-slate-100'
                  }`}
                />
                <span className={`text-xs font-bold ${
                  isSelected ? 'text-amber-800 font-extrabold' : 'text-slate-400'
                }`}>
                  {star}
                </span>
              </button>
            );
          })}
        </div>

        <div className="mt-3">
          <span className="text-sm font-bold text-slate-700 bg-white py-1.5 px-4 rounded-full inline-block border border-slate-200 shadow-2xs">
            {RATING_LABELS[rating] || `${rating} / 5 Bintang`}
          </span>
        </div>
      </div>

      {/* Kategori Masukan */}
      <div>
        <label htmlFor="category" className="block text-sm font-bold text-slate-800 mb-1.5">
          Kategori Masukan <span className="text-rose-500">*</span>
        </label>
        <select
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white text-slate-800 focus:outline-hidden focus:ring-2 focus:ring-purple-600 focus:border-transparent text-sm transition-shadow"
        >
          {CATEGORIES.map((cat) => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
      </div>

      {/* Pesan Kritik / Saran */}
      <div>
        <label htmlFor="message" className="block text-sm font-bold text-slate-800 mb-1.5">
          Isi Kritik, Saran & Pengalaman Anda <span className="text-rose-500">*</span>
        </label>
        <textarea
          id="message"
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Ceritakan pengalaman Anda, apa yang sudah baik atau hal apa yang perlu kami tingkatkan..."
          required
          className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white text-slate-800 focus:outline-hidden focus:ring-2 focus:ring-purple-600 focus:border-transparent text-sm leading-relaxed transition-shadow"
        ></textarea>
      </div>

      {/* Data Pengirim (Simetris & Rapi) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-1">
        <div className="flex flex-col">
          <label htmlFor="name" className="text-sm font-bold text-slate-800 mb-1">
            Nama Anda
          </label>
          <span className="text-xs text-slate-400 mb-2 h-4">Boleh dikosongkan jika anonim</span>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Contoh: Kak Sarah / Anonim"
            className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white text-slate-800 focus:outline-hidden focus:ring-2 focus:ring-purple-600 focus:border-transparent text-sm"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="whatsapp" className="text-sm font-bold text-slate-800 mb-1">
            No. WhatsApp
          </label>
          <span className="text-xs text-slate-400 mb-2 h-4">Opsional bila ingin kami tindaklanjuti</span>
          <input
            type="tel"
            id="whatsapp"
            value={whatsapp}
            onChange={(e) => setWhatsapp(e.target.value)}
            placeholder="0812xxxxxxxx"
            className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white text-slate-800 focus:outline-hidden focus:ring-2 focus:ring-purple-600 focus:border-transparent text-sm"
          />
        </div>
      </div>

      {/* Error Box */}
      {errorMsg && (
        <div className="p-3.5 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs font-semibold">
          {errorMsg}
        </div>
      )}

      {/* Tombol Kirim */}
      <button
        type="submit"
        disabled={loading}
        className="w-full py-4 rounded-2xl bg-orange-600 hover:bg-orange-700 active:scale-[0.99] text-white font-bold text-base shadow-md hover:shadow-orange-500/30 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
      >
        {loading ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            <span>Sedang Mengirim Masukan...</span>
          </>
        ) : (
          <>
            <Send className="w-4 h-4" />
            <span>Kirim Kritik & Saran</span>
          </>
        )}
      </button>
    </form>
  );
}
