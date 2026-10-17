"use client";

import React, { useState } from 'react';
import { 
  Briefcase, 
  MapPin, 
  CheckCircle2, 
  Gift, 
  Mail, 
  Copy, 
  Check, 
  Sparkles, 
  Stethoscope, 
  Scissors, 
  CreditCard,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

interface CareerJob {
  id: string;
  title: string;
  slug?: string;
  type: string;
  location: string;
  department?: string;
  description: string;
  requirements?: string[];
  benefits?: string[];
  isOpen: boolean;
}

interface CareerListProps {
  careers: CareerJob[];
  contactEmail: string;
}

export default function CareerList({ careers, contactEmail }: CareerListProps) {
  const [selectedDept, setSelectedDept] = useState<string>('Semua');
  const [copied, setCopied] = useState<boolean>(false);
  const [expandedJobId, setExpandedJobId] = useState<string | null>(careers[0]?.id || null);

  const departments = ['Semua', 'Medis', 'Paramedis', 'Administrasi', 'Grooming'];

  const filteredCareers = selectedDept === 'Semua' 
    ? careers 
    : careers.filter((c) => c.department === selectedDept);

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(contactEmail);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const getDepartmentIcon = (dept?: string) => {
    switch (dept) {
      case 'Medis':
        return <Stethoscope className="w-4 h-4 text-purple-600" />;
      case 'Paramedis':
        return <Stethoscope className="w-4 h-4 text-blue-600" />;
      case 'Administrasi':
        return <CreditCard className="w-4 h-4 text-emerald-600" />;
      case 'Grooming':
        return <Scissors className="w-4 h-4 text-amber-600" />;
      default:
        return <Briefcase className="w-4 h-4 text-slate-600" />;
    }
  };

  const getMailtoUrl = (jobTitle: string) => {
    const subject = encodeURIComponent(`Lamaran Pekerjaan: ${jobTitle} - [Nama Lengkap]`);
    const body = encodeURIComponent(
      `Halo Tim Rekrutmen VetQu Animal Care,\n\n` +
      `Saya tertarik untuk melamar posisi ${jobTitle} di VetQu Animal Care Tangerang.\n\n` +
      `Berikut data singkat saya:\n` +
      `- Nama Lengkap: \n` +
      `- Nomor HP/WhatsApp: \n` +
      `- Domisili: \n` +
      `- Pendidikan Terakhir: \n` +
      `- Pengalaman Terkait: \n` +
      `- Estimasi Kesiapan Mulai Kerja: \n\n` +
      `Terlampir CV terbaru serta berkas pendukung saya untuk bahan pertimbangan.\n\n` +
      `Terima kasih atas perhatian dan kesempatannya.\n\n` +
      `Salam hangat,\n` +
      `[Nama Lengkap]`
    );
    return `mailto:${contactEmail}?subject=${subject}&body=${body}`;
  };

  return (
    <div className="space-y-8">
      {/* Jika Sama Sekali Tidak Ada Lowongan Terbuka */}
      {careers.length === 0 ? (
        <div className="bg-white rounded-3xl p-10 sm:p-14 text-center border border-slate-200/90 shadow-2xs">
          <div className="w-16 h-16 rounded-2xl bg-purple-50 text-purple-700 flex items-center justify-center mx-auto mb-5">
            <Briefcase className="w-8 h-8" />
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3">
            Saat Ini Belum Ada Lowongan yang Dibuka
          </h3>
          <p className="text-slate-600 text-sm max-w-lg mx-auto leading-relaxed mb-8">
            Namun kami selalu terbuka bagi tenaga profesional veteriner, paramedis, staf kasir, dan groomer berbakat. Anda dapat mengirimkan <strong>CV Inisiatif (Open Application)</strong> untuk kami simpan di database talenta VetQu sewaktu-waktu ada posisi baru.
          </p>
          <a
            href={`mailto:${contactEmail}?subject=Lamaran%20Inisiatif%20(Open%20Application)%20-%20VetQu%20Animal%20Care`}
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl bg-orange-600 hover:bg-orange-700 text-white text-sm font-bold shadow-xs transition-all hover:scale-105"
          >
            <Mail className="w-4 h-4" />
            <span>Kirim Inisiatif CV ke {contactEmail}</span>
          </a>
        </div>
      ) : (
        <>
          {/* Filter Kategori / Departemen */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-2 border-b border-slate-200">
            <div className="flex flex-wrap items-center gap-2">
              {departments.map((dept) => {
                const isActive = selectedDept === dept;
                const count = dept === 'Semua' 
                  ? careers.length 
                  : careers.filter((c) => c.department === dept).length;

                return (
                  <button
                    key={dept}
                    onClick={() => setSelectedDept(dept)}
                    className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                      isActive
                        ? 'bg-[#384959] text-white shadow-xs'
                        : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                    }`}
                  >
                    <span>{dept === 'Semua' ? 'Semua Divisi' : dept}</span>
                    <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                      isActive ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-500'
                    }`}>
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>

            <div className="text-xs text-slate-500 font-medium">
              Menampilkan <strong className="text-slate-800">{filteredCareers.length}</strong> posisi
            </div>
          </div>

          {/* List Kartu Lowongan */}
          {filteredCareers.length === 0 ? (
            <div className="bg-white rounded-3xl p-12 text-center border border-slate-200/90 shadow-2xs">
              <p className="text-slate-700 font-semibold mb-1">Belum ada posisi terbuka di divisi ini saat ini.</p>
              <p className="text-xs text-slate-500 max-w-md mx-auto mb-6">
                Anda tetap dapat mengirimkan inisiatif CV ke tim kami untuk kami simpan di database talenta VetQu.
              </p>
              <a
                href={`mailto:${contactEmail}?subject=Lamaran%20Inisiatif%20-%20VetQu%20Animal%20Care`}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-purple-700 hover:bg-purple-800 text-white text-xs font-bold transition-all"
              >
                <Mail className="w-4 h-4" />
                <span>Kirim Inisiatif CV via Email</span>
              </a>
            </div>
          ) : (
        <div className="space-y-6">
          {filteredCareers.map((job) => {
            const isExpanded = expandedJobId === job.id;

            return (
              <article 
                key={job.id}
                className="bg-white rounded-3xl border border-slate-200/90 shadow-2xs hover:border-slate-300 transition-all overflow-hidden"
              >
                {/* Header Card */}
                <div className="p-6 sm:p-8">
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-4">
                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-2.5">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold">
                          {getDepartmentIcon(job.department)}
                          <span>{job.department || 'Operasional'}</span>
                        </span>
                        <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-semibold border border-emerald-200/60">
                          {job.type}
                        </span>
                        <span className="inline-flex items-center gap-1 text-xs text-slate-500 font-medium px-2 py-0.5">
                          <MapPin className="w-3.5 h-3.5 text-slate-400" />
                          <span>{job.location}</span>
                        </span>
                      </div>

                      <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                        {job.title}
                      </h3>
                    </div>

                    {/* Tombol Toggle Detail */}
                    <div className="shrink-0 pt-2 lg:pt-0">
                      <button
                        type="button"
                        onClick={() => setExpandedJobId(isExpanded ? null : job.id)}
                        className="p-3 rounded-2xl border border-slate-200 hover:bg-slate-50 text-slate-600 hover:text-slate-900 transition-colors cursor-pointer"
                        title={isExpanded ? 'Tutup Detail' : 'Lihat Detail Lengkap'}
                        aria-label="Lihat detail kualifikasi"
                      >
                        {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                      </button>
                    </div>
                  </div>

                  {/* Deskripsi Singkat */}
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {job.description}
                  </p>
                </div>

                {/* Detail Kualifikasi & Benefit (Accordion/Expandable) */}
                {isExpanded && (
                  <div className="px-6 pb-8 pt-2 sm:px-8 border-t border-slate-100 bg-slate-50/50">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
                      {/* Kualifikasi */}
                      {job.requirements && job.requirements.length > 0 && (
                        <div>
                          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3 flex items-center gap-1.5">
                            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                            <span>Kualifikasi yang Dicari:</span>
                          </h4>
                          <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                            {job.requirements.map((req, idx) => (
                              <li key={idx} className="flex items-start gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2 shrink-0"></span>
                                <span className="leading-relaxed">{req}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Benefit */}
                      {job.benefits && job.benefits.length > 0 && (
                        <div>
                          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3 flex items-center gap-1.5">
                            <Gift className="w-4 h-4 text-purple-600" />
                            <span>Fasilitas & Benefit:</span>
                          </h4>
                          <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                            {job.benefits.map((ben, idx) => (
                              <li key={idx} className="flex items-start gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2 shrink-0"></span>
                                <span className="leading-relaxed">{ben}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>

                    {/* Quick Apply Bar di dalam card */}
                    <div className="mt-8 pt-6 border-t border-slate-200/70 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div className="text-xs text-slate-500">
                        Tertarik bergabung di posisi ini? Kirimkan berkas lamaran Anda langsung ke alamat email resmi kami.
                      </div>

                      <a
                        href={getMailtoUrl(job.title)}
                        className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-bold text-xs shadow-xs transition-all shrink-0"
                      >
                        <Mail className="w-3.5 h-3.5" />
                        <span>Kirim CV ke {contactEmail}</span>
                      </a>
                    </div>
                  </div>
                )}
              </article>
            );
          })}
        </div>
      )}
      </>
    )}

      {/* Panduan Pengiriman Lamaran Email (Sangat Jelas & Humanis) */}
      <section className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/90 shadow-2xs mt-12">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-purple-700 bg-purple-50 px-3 py-1 rounded-full mb-3 border border-purple-100">
            <Mail className="w-3.5 h-3.5" />
            <span>Saluran Resmi Rekrutmen</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">
            Cara Mengirimkan Lamaran ke VetQu
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
            Untuk menjaga proses seleksi yang tertib dan terdokumentasi rapi, kami <strong>hanya menerima pengiriman lamaran melalui email resmi</strong> (tidak melalui WhatsApp atau DM media sosial).
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 pt-2">
          <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100">
            <span className="w-7 h-7 rounded-full bg-slate-900 text-white text-xs font-bold flex items-center justify-center mb-3">
              1
            </span>
            <h4 className="text-sm font-bold text-slate-800 mb-1.5">Siapkan Dokumen</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Curriculum Vitae (CV) terbaru, scan Ijazah/STRV aktif (untuk dokter), dan portofolio karya (untuk groomer jika ada).
            </p>
          </div>

          <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100">
            <span className="w-7 h-7 rounded-full bg-slate-900 text-white text-xs font-bold flex items-center justify-center mb-3">
              2
            </span>
            <h4 className="text-sm font-bold text-slate-800 mb-1.5">Tulis Subjek Email</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Gunakan format subjek: <br />
              <code className="bg-white px-1.5 py-0.5 rounded text-purple-700 font-semibold border border-slate-200 text-[11px]">
                [Posisi Dilamar] - Nama Lengkap
              </code>
            </p>
          </div>

          <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100">
            <span className="w-7 h-7 rounded-full bg-slate-900 text-white text-xs font-bold flex items-center justify-center mb-3">
              3
            </span>
            <h4 className="text-sm font-bold text-slate-800 mb-1.5">Kirim ke Email Resmi</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Kirimkan lampiran berkas ke alamat: <br />
              <strong className="text-slate-900 text-[13px]">{contactEmail}</strong>
            </p>
          </div>
        </div>

        {/* Copy Email Box */}
        <div className="mt-8 p-4 rounded-2xl bg-purple-50/70 border border-purple-100 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-center sm:text-left">
            <div className="w-10 h-10 rounded-xl bg-purple-600 text-white flex items-center justify-center shrink-0">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-purple-700">Alamat Email Rekrutmen:</span>
              <p className="text-base sm:text-lg font-black text-slate-900">{contactEmail}</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleCopyEmail}
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-white hover:bg-slate-100 text-slate-800 font-bold text-xs border border-purple-200 transition-all cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-600" />
                  <span className="text-emerald-700">Tersalin!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-purple-700" />
                  <span>Salin Alamat Email</span>
                </>
              )}
            </button>

            <a
              href={`mailto:${contactEmail}?subject=Lamaran%20Kerja%20VetQu%20Animal%20Care`}
              className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-purple-700 hover:bg-purple-800 text-white font-bold text-xs shadow-xs transition-all cursor-pointer"
            >
              <span>Buka Email Sekarang</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
