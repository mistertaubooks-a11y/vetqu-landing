# MASTER PLAN & SPESIFIKASI PROYEK
# PT. SMART VET INDONESIA (SVI)
**Corporate Website & Centralized Employee Portal (ESS)**

Dokumen ini adalah blueprint dan spesifikasi lengkap yang dapat Anda salin (*copy-paste*) atau bawa langsung saat membuka workspace baru untuk proyek PT. Smart Vet Indonesia.

---

## 1. Ringkasan Eksekutif & Struktur Bisnis

**PT. Smart Vet Indonesia (PT. SVI)** adalah perusahaan induk (*holding company*) di bidang veteriner dan rantai pasok hewan peliharaan yang menaungi 6 unit usaha aktif:

### Unit Usaha yang Dikelola:
1. **5 Unit Klinik Hewan (Veterinary Clinics):**
   * **Smart Vet**
   * **Syam Vet Care**
   * **Sun's Vet**
   * **Burdizzo Pet Care**
   * **VetQu Animal Care**
2. **1 Unit Distribusi & Logistik (Supply Chain):**
   * **Smart Supply** (distributor pakan, obat-obatan medis, vitamin, dan peralatan klinik veteriner)

---

## 2. Arsitektur Sistem & Strategi Domain

Sistem dibangun menggunakan pendekatan **Hybrid Dual-Zone** dengan subdomain terpisah:

* **Domain Utama (`smartvetindonesia.com`):**
  * Bertindak sebagai *front-facing* resmi perusahaan holding.
  * Menampilkan profil PT. SVI, portofolio 5 klinik + 1 distributor, karir grup, dan kontak kemitraan B2B.
* **Subdomain Portal (`portal.smartvetindonesia.com`):**
  * Portal terproteksi autentikasi untuk seluruh karyawan dari 6 unit usaha.
  * Berisi sistem mandiri karyawan (ESS: cek saldo cuti, ajukan cuti, cek sisa kontrak) dan modul administrasi HRD terpusat (approval cuti & monitoring kontrak).

---

## 3. Desain Database & Skema PostgreSQL (Supabase Mandiri)

Database berdiri mandiri pada project Supabase khusus PT. Smart Vet Indonesia.

### Skema Tabel Lengkap:

```sql
-- 1. Unit Usaha (Holding, 5 Klinik, 1 Distributor)
CREATE TABLE business_units (
    id VARCHAR(50) PRIMARY KEY, -- 'smart_vet', 'syam_vet', 'suns_vet', 'burdizzo', 'vetqu', 'smart_supply', 'holding_svi'
    name VARCHAR(150) NOT NULL,
    type VARCHAR(30) NOT NULL,  -- 'clinic' | 'distributor' | 'holding'
    address TEXT,
    phone VARCHAR(30),
    email VARCHAR(100),
    logo_url TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2. Data Master Karyawan
CREATE TABLE employees (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    nik VARCHAR(30) UNIQUE NOT NULL,
    full_name VARCHAR(150) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    phone_number VARCHAR(25),
    business_unit_id VARCHAR(50) REFERENCES business_units(id) ON DELETE RESTRICT,
    department VARCHAR(50) NOT NULL, -- 'Medis', 'Paramedis', 'Grooming', 'Gudang/Logistik', 'Kasir/Front Office', 'Manajemen'
    position VARCHAR(100) NOT NULL,  -- 'Dokter Penanggung Jawab', 'Paramedis', 'Staf Gudang', dll.
    employment_type VARCHAR(20) NOT NULL DEFAULT 'PKWT', -- 'PKWT' (Kontrak), 'PKWTT' (Tetap), 'Internship'
    join_date DATE NOT NULL,
    contract_start DATE,
    contract_end DATE,               -- Acuan monitoring masa berlaku perjanjian
    role VARCHAR(20) NOT NULL DEFAULT 'employee', -- 'employee', 'unit_lead', 'hr_admin', 'super_admin'
    is_active BOOLEAN NOT NULL DEFAULT TRUE,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 3. Saldo Cuti Tahunan (Per Periode Tahun)
CREATE TABLE leave_balances (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    employee_id UUID NOT NULL REFERENCES employees(id) ON DELETE CASCADE,
    year INT NOT NULL,
    annual_quota INT NOT NULL DEFAULT 12,
    used_quota INT NOT NULL DEFAULT 0,
    remaining_quota INT GENERATED ALWAYS AS (annual_quota - used_quota) STORED,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    UNIQUE(employee_id, year)
);

-- 4. Pengajuan & Riwayat Cuti (Leave Requests)
CREATE TABLE leave_requests (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    employee_id UUID NOT NULL REFERENCES employees(id) ON DELETE CASCADE,
    leave_type VARCHAR(30) NOT NULL, -- 'annual' (tahunan), 'sick' (sakit), 'special' (khusus: menikah/duka), 'unpaid'
    start_date DATE NOT NULL,
    end_date DATE NOT NULL,
    total_days INT NOT NULL,
    reason TEXT NOT NULL,
    attachment_url TEXT,             -- Link berkas surat dokter jika sakit (Supabase Storage)
    status VARCHAR(20) NOT NULL DEFAULT 'pending', -- 'pending', 'approved', 'rejected'
    hr_notes TEXT,                   -- Catatan HR jika menolak atau memberikan arahan
    reviewed_by UUID REFERENCES employees(id),
    reviewed_at TIMESTAMPTZ,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 5. Pengumuman Internal (Broadcast Memo)
CREATE TABLE announcements (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title VARCHAR(200) NOT NULL,
    content TEXT NOT NULL,
    target_unit VARCHAR(50) DEFAULT 'all', -- 'all' atau specific unit id
    priority VARCHAR(20) DEFAULT 'normal', -- 'normal', 'urgent'
    created_by UUID REFERENCES employees(id),
    created_at TIMESTAMPTZ DEFAULT NOW()
);
```

### Storage Bucket Supabase:
* Bucket Name: `leave-attachments` (Private, hanya bisa diakses oleh Karyawan pemilik dan HR Admin).

---

## 4. Rincian Fitur Aplikasi

### A. Bagian Publik (Company Profile)
1. **Hero Section:** Branding PT. Smart Vet Indonesia sebagai ekosistem veteriner modern & terpercaya.
2. **About & Leadership:** Visi, misi, milestone korporat, dan struktur direksi.
3. **Showcase Unit Usaha:**
   * **Klinik Veteriner:** Halaman mini/kartu interaktif 5 klinik (Smart Vet, Syam Vet Care, Sun's Vet, Burdizzo, VetQu) lengkap dengan layanan unggulan, jam operasional, alamat, dan tombol reservasi/WhatsApp.
   * **Smart Supply:** Katalog kategori produk distributor (farmasi, alat bedah hewan, pakan klinis), alur pemesanan B2B, dan kontak kerjasama suplier.
4. **Portal Karir Terpadu:** Lowongan kerja lintas unit usaha dengan formulir kirim CV terpusat.
5. **Akses Cepat Karyawan:** Tombol navigasi menuju `portal.smartvetindonesia.com`.

---

### B. Portal Karyawan (Employee Self-Service / ESS)
1. **Digital ID & Kontrak Card:**
   * Tampilan foto, NIK, Jabatan, Unit Penempatan, dan status PKWT/PKWTT.
   * **Widget Masa Kontrak:** Indikator visual sisa durasi masa kerja/kontrak.
2. **Leave Balance Widget:**
   * Menampilkan kuota tahunan, hari terpakai, dan sisa cuti aktif secara real-time.
3. **Formulir Pengajuan Cuti:**
   * Pemilihan tipe cuti, rentang tanggal (dengan kalkulator otomatis hari kerja).
   * Fitur upload surat izin dokter (wajib untuk tipe cuti sakit).
4. **Riwayat & Status Cuti:**
   * Daftar riwayat pengajuan dengan status badge (*Pending*, *Approved*, *Rejected*).

---

### C. Dashboard HRD Pusat (Centralized HR Admin)
1. **Approval Inbox:**
   * Notifikasi dan daftar pengajuan cuti masuk dari seluruh 6 unit usaha.
   * Tombol *Approve* (langsung memotong saldo cuti otomatis) atau *Reject* (dengan input alasan).
2. **Radar Peringatan Kontrak (Contract Expiry Radar):**
   * Filter pintar karyawan yang masa kontraknya segera habis:
     * 🔴 **Kritis (< 30 Hari):** Wajib evaluasi / penerbitan SPK baru.
     * 🟡 **Peringatan (30 - 60 Hari):** Mulai proses review kinerja.
     * 🟢 **Aman (> 60 Hari).**
3. **Manajemen Karyawan (CRUD):**
   * Tambah/edit data karyawan baru di klinik mana pun, atur kuota cuti tahunan, nonaktifkan karyawan yang resign.
4. **Broadcast Memo:**
   * Fitur mengirim surat edaran atau pengumuman holding yang langsung tampil di dashboard seluruh staf.

---

## 5. Rekomendasi Tech Stack

* **Framework:** Next.js 15+ (App Router) dengan TypeScript.
* **Database & Auth:** Supabase (PostgreSQL, Supabase Auth, Supabase Storage).
* **Styling & UI:** Tailwind CSS v4, Lucide React (ikon modern), Radix UI / Shadcn UI components.
* **Deploy Target:** Vercel (dengan Custom Domain & Subdomain Wildcard).

---

## 6. Roadmap Langkah Kerja untuk Workspace Baru

1. **Langkah 1:** Buat Next.js app baru di folder workspace PT. SVI.
2. **Langkah 2:** Hubungkan `.env.local` dengan project Supabase baru yang sudah dibuat.
3. **Langkah 3:** Jalankan migrasi SQL skema tabel di atas pada Supabase SQL Editor.
4. **Langkah 4:** Bangun landing page Company Profile PT. SVI terlebih dahulu.
5. **Langkah 5:** Bangun modul autentikasi dan portal karyawan terpusat.
