import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, whatsapp, category, rating, message } = body;

    // Validasi input
    if (!message || message.trim().length < 5) {
      return NextResponse.json(
        { error: 'Pesan kritik atau saran wajib diisi minimal 5 karakter.' },
        { status: 400 }
      );
    }

    // Format nomor WhatsApp jika diisi
    let cleanWA = '-';
    if (whatsapp && whatsapp.trim().length > 0) {
      cleanWA = whatsapp.replace(/\D/g, '');
      if (cleanWA.startsWith('0')) {
        cleanWA = '62' + cleanWA.substring(1);
      } else if (cleanWA.startsWith('8')) {
        cleanWA = '62' + cleanWA;
      }
    }

    const senderName = name && name.trim().length > 0 ? name.trim() : 'Anonim (Pet Parent)';
    const selectedCategory = category || 'Pelayanan Umum';
    const givenRating = rating || 5;

    // Kirim data ke Google Apps Script Webhook
    const webhookUrl = process.env.FEEDBACK_GOOGLE_SHEET_WEBHOOK_URL || process.env.GOOGLE_SHEET_WEBHOOK_URL;
    let sheetSaved = false;

    if (webhookUrl) {
      try {
        const payload = {
          type: 'FEEDBACK',
          timestamp: new Date().toLocaleString('id-ID', { timeZone: 'Asia/Jakarta' }),
          name: senderName,
          whatsapp: cleanWA,
          category: selectedCategory,
          rating: `${givenRating} / 5 Bintang`,
          message: message.trim(),
        };

        const res = await fetch(webhookUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        });

        if (res.ok) {
          sheetSaved = true;
        }
      } catch (err) {
        console.warn('Gagal sinkron feedback ke Google Sheet Webhook:', err);
      }
    }

    return NextResponse.json({
      success: true,
      sheetSaved,
    });
  } catch (error) {
    console.error('API Feedback Error:', error);
    return NextResponse.json(
      { error: 'Terjadi kesalahan sistem saat menyimpan masukan Anda.' },
      { status: 500 }
    );
  }
}
