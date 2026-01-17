'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import SentimentStats from '@/components/SentimentStats';
import AnalyzerForm from '@/components/AnalyzerForm';
import ReviewList from '@/components/ReviewList';
import { motion } from 'framer-motion';

export default function App() {
  const [url, setUrl] = useState('');
  const [count, setCount] = useState(50);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);

  const handleAnalyze = async () => {
    // Validasi input URL kosong
    if (!url) return alert('Masukkan URL aplikasi!');

    setLoading(true);
    setResult(null); // Reset hasil sebelumnya saat mulai analisis baru

    try {
      // 1. Ambil URL Backend dari Environment Variable
      const apiUrl = process.env.NEXT_PUBLIC_API_URL;

      // 2. Cek Safety: Pastikan variabel environment sudah ada
      if (!apiUrl) {
        console.error('❌ EROR FATAL: NEXT_PUBLIC_API_URL tidak ditemukan!');
        throw new Error('Konfigurasi server belum diatur. Cek file .env Anda.');
      }

      // 3. Debugging: Cek di Console browser kemana request dikirim
      console.log('🚀 Mengirim request ke:', `${apiUrl}/analyze`);

      const response = await fetch(`${apiUrl}/analyze`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url, count }),
      });

      const data = await response.json();

      // Jika backend mengirim respon error
      if (data.error) throw new Error(data.error);

      // Simpan hasil jika sukses
      setResult(data);

      // Scroll otomatis ke bawah setelah hasil muncul
      setTimeout(() => {
        window.scrollTo({
          top: document.body.scrollHeight,
          behavior: 'smooth',
        });
      }, 100);
    } catch (error: any) {
      console.error('Terjadi kesalahan:', error);
      alert(error.message || 'Gagal melakukan analisis. Pastikan server backend aktif.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-indigo-100 selection:text-indigo-700">
      <Navbar />

      <Hero />

      <div className="max-w-6xl mx-auto px-6 pb-24">
        <AnalyzerForm url={url} setUrl={setUrl} count={count} setCount={setCount} loading={loading} onAnalyze={handleAnalyze} />

        {result && (
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} className="mt-16">
            <hr className="mb-12 border-slate-200" />

            <SentimentStats summary={result.summary} />

            <ReviewList examples={result.examples} appId={result.app_id} />
          </motion.div>
        )}
      </div>
    </main>
  );
}
