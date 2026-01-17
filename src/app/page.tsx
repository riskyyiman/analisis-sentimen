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
    if (!url) return alert('Masukkan URL aplikasi!');
    setLoading(true);

    try {
      const response = await fetch('http://localhost:5000/analyze', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url, count }),
      });

      const data = await response.json();
      if (data.error) throw new Error(data.error);

      setResult(data);

      setTimeout(() => {
        window.scrollTo({
          top: document.body.scrollHeight,
          behavior: 'smooth',
        });
      }, 100);
    } catch (error: any) {
      alert(error.message || 'Gagal melakukan analisis');
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
