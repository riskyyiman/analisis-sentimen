'use client';

import { LayoutGrid, Link2, Hash, Loader2, Play } from 'lucide-react';
import { motion } from 'framer-motion';

interface AnalyzerFormProps {
  url: string;
  setUrl: (val: string) => void;
  count: number;
  setCount: (val: number) => void;
  loading: boolean;
  onAnalyze: () => void;
}

export default function AnalyzerForm({ url, setUrl, count, setCount, loading, onAnalyze }: AnalyzerFormProps) {
  return (
    <section id="analizerForm" className="bg-white rounded-3xl shadow-xl shadow-slate-200/60 p-8 md:p-12 border border-slate-100 transition-all hover:shadow-2xl hover:shadow-indigo-100/50">
      <div className="flex items-center gap-3 mb-8">
        <div className="p-2 bg-indigo-600 rounded-lg text-white">
          <LayoutGrid size={24} />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-slate-900">Panel Analisis</h2>
          <p className="text-sm text-slate-500">Konfigurasi parameter scraping Anda</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
        {/* Input URL */}
        <div className="group space-y-2">
          <label className="text-sm font-bold text-slate-700 ml-1 flex items-center gap-2">
            <Link2 size={16} className="text-indigo-500" />
            URL Play Store
          </label>
          <input
            className="w-full p-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-4 focus:ring-indigo-100 focus:border-indigo-600 outline-none transition-all group-hover:border-indigo-300"
            placeholder="https://play.google.com/store/apps/details?id=..."
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
        </div>

        {/* Input Jumlah Ulasan */}
        <div className="group space-y-2">
          <label className="text-sm font-bold text-slate-700 ml-1 flex items-center gap-2">
            <Hash size={16} className="text-indigo-500" />
            Jumlah Ulasan
          </label>
          <input
            type="number"
            className="w-full p-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-4 focus:ring-indigo-100 focus:border-indigo-600 outline-none transition-all group-hover:border-indigo-300"
            value={count}
            onChange={(e) => setCount(parseInt(e.target.value) || 0)}
          />
        </div>
      </div>

      <motion.button
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.98 }}
        onClick={onAnalyze}
        disabled={loading}
        className="w-full py-5 bg-indigo-600 text-white rounded-2xl font-bold text-lg hover:bg-indigo-700 disabled:bg-slate-300 transition-all flex items-center justify-center gap-3 shadow-lg shadow-indigo-200"
      >
        {loading ? (
          <>
            <Loader2 className="animate-spin" />
            Menganalisis Data AI...
          </>
        ) : (
          <>
            Proses Sentimen Sekarang
            <Play size={18} fill="currentColor" />
          </>
        )}
      </motion.button>
    </section>
  );
}
