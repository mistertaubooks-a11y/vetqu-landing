import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { ownerName, whatsapp, petName, petType, promoTitle } = body;

    // 1. Validasi input dasar
    if (!ownerName || !whatsapp || !petName) {
      return NextResponse.json(
        { error: 'Nama pemilik, nomor WhatsApp, dan nama anabul wajib diisi.' },
        { status: 400 }
      );
    }

    // 2. Format nomor WhatsApp ke format standar Indonesia (+62)
    let cleanWA = whatsapp.replace(/\D/g, '');
    if (cleanWA.startsWith('0')) {
      cleanWA = '62' + cleanWA.substring(1);
    } else if (cleanWA.startsWith('8')) {
      cleanWA = '62' + cleanWA;
    }

    // 3. Kirim ke Google Apps Script Webhook jika sudah diset di environment variables
    const webhookUrl = process.env.GOOGLE_SHEET_WEBHOOK_URL;
    let sheetSaved = false;

    if (webhookUrl) {
      try {
        const sheetRes = await fetch(webhookUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            timestamp: new Date().toLocaleString('id-ID', { timeZone: 'Asia/Jakarta' }),
            ownerName: ownerName.trim(),
            whatsapp: cleanWA,
            petName: petName.trim(),
            petType: petType || 'Kucing',
            promoTitle: promoTitle || 'Pendaftaran Umum',
          }),
        });
        if (sheetRes.ok) {
          sheetSaved = true;
        }
      } catch (sheetError) {
        console.warn('Gagal menyimpan ke Google Sheet Webhook:', sheetError);
      }
    }

    // 4. Siapkan pesan pra-format untuk WhatsApp Admin VetQu
    const message = encodeURIComponent(
      `Halo Admin VetQu, saya ingin konfirmasi pendaftaran promo:\n\n` +
      `*Program*: ${promoTitle || 'Layanan Klinik'}\n` +
      `*Nama Owner*: ${ownerName.trim()}\n` +
      `*No. WA*: ${cleanWA}\n` +
      `*Nama Anabul*: ${petName.trim()} (${petType || 'Kucing'})\n\n` +
      `Mohon info ketersediaan jadwalnya ya. Terima kasih!`
    );

    const waLink = `https://wa.me/6281219818004?text=${message}`;

    return NextResponse.json({
      success: true,
      sheetSaved,
      waLink,
    });
  } catch (error) {
    console.error('API Leads Error:', error);
    return NextResponse.json(
      { error: 'Terjadi kesalahan sistem saat memproses data.' },
      { status: 500 }
    );
  }
}
