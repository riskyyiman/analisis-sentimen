import type { Metadata, Viewport } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

// Konfigurasi Viewport (Wajib untuk responsivitas mobile)
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#4f46e5', // Warna Indigo utama
};

// Konfigurasi Metadata (SEO & Branding)
export const metadata: Metadata = {
  title: {
    default: 'KySense AI | Intelligent Sentiment Analytics',
    template: '%s | KySense AI',
  },
  description: 'Platform analisis sentimen berbasis Bi-LSTM Deep Learning. Ekstrak dan pahami ulasan Google Play Store secara real-time untuk keputusan strategis.',
  keywords: ['Sentiment Analysis', 'AI', 'Bi-LSTM', 'NLP', 'Google Play Scraper', 'Data Science Portfolio', 'Risky Iman Lael Prasetio'],
  authors: [{ name: 'Risky Iman Lael Prasetio', url: 'https://github.com/riskyyiman' }],
  creator: 'Risky Iman Lael Prasetio',

  openGraph: {
    title: 'KySense AI - Deep Learning Sentiment Analyzer',
    description: 'Bongkar rahasia kepuasan pengguna dengan AI canggih. Analisis ribuan ulasan dalam hitungan detik.',
    siteName: 'KySense AI',
    locale: 'id_ID',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-slate-50 text-slate-900 selection:bg-indigo-100 selection:text-indigo-700`}>{children}</body>
    </html>
  );
}
