import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "VetQu Animal Care | Klinik Hewan Tangerang",
  description: "Klinik hewan terpercaya di Grand Batavia, Tangerang. Menyediakan layanan vaksinasi, grooming, pet hotel, operasi, dan house call dengan dokter hewan profesional.",
  keywords: "klinik hewan tangerang, dokter hewan pasar kemis, vetqu animal care, grooming kucing, pet hotel tangerang, vaksin kucing",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
