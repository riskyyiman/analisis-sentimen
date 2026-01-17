'use client';

import { useState } from 'react';
import { MessageSquare, ChevronDown, Filter, Smile, Meh, Frown, User, Quote } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ReviewList({ examples, appId }: { examples: any[]; appId: string }) {
  const [showAll, setShowAll] = useState(false);
  const [filter, setFilter] = useState('All');

  // Filter logika
  const filteredReviews = examples.filter((item) => (filter === 'All' ? true : item.sentiment === filter));

  // Batasi ulasan yang muncul di awal
  const visibleReviews = showAll ? filteredReviews : filteredReviews.slice(0, 6);

  const tabs = [
    { id: 'All', label: 'Semua', icon: MessageSquare },
    { id: 'Positive', label: 'Positif', icon: Smile, color: 'text-emerald-500' },
    { id: 'Neutral', label: 'Netral', icon: Meh, color: 'text-amber-500' },
    { id: 'Negative', label: 'Negatif', icon: Frown, color: 'text-rose-500' },
  ];

  return (
    <div className="space-y-8 mt-12">
      {/* Header & Filter Tabs */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <div className="w-2 h-8 bg-indigo-600 rounded-full" />
            <h3 className="text-2xl font-bold text-slate-800">Ulasan Pengguna</h3>
          </div>
          <p className="text-slate-500 text-sm ml-4">Analisis mendalam berdasarkan input terbaru</p>
        </div>

        {/* Modern Tabs */}
        <div className="flex p-1 bg-slate-200/50 backdrop-blur-sm rounded-2xl overflow-x-auto no-scrollbar">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => {
                setFilter(tab.id);
                setShowAll(false);
              }}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition-all whitespace-nowrap ${filter === tab.id ? 'bg-white text-indigo-600 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
            >
              <tab.icon size={16} className={filter === tab.id ? tab.color : ''} />
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Grid List with Masonry Look */}
      <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
        <AnimatePresence mode="popLayout">
          {visibleReviews.map((item, idx) => (
            <motion.div
              key={idx}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3, delay: idx * 0.05 }}
              className="break-inside-avoid bg-white border border-slate-100 p-6 rounded-3xl shadow-sm hover:shadow-xl hover:shadow-indigo-50 transition-all group relative overflow-hidden"
            >
              {/* Decorative Quote Icon */}
              <Quote className="absolute -right-2 -top-2 w-12 h-12 text-slate-50 opacity-[0.05] group-hover:opacity-10 transition-opacity" />

              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 group-hover:bg-indigo-50 group-hover:text-indigo-500 transition-colors">
                  <User size={20} />
                </div>
                <div>
                  <div
                    className={`text-[10px] font-black uppercase tracking-widest px-2 py-0.5 rounded-md mb-1 inline-block ${
                      item.sentiment === 'Positive' ? 'bg-emerald-50 text-emerald-600' : item.sentiment === 'Negative' ? 'bg-rose-50 text-rose-600' : 'bg-slate-100 text-slate-600'
                    }`}
                  >
                    {item.sentiment}
                  </div>
                  <p className="text-xs text-slate-400">Anonymous User</p>
                </div>
              </div>

              <p className="text-slate-600 leading-relaxed text-sm italic">"{item.content}"</p>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Modern Load More Button */}
      {filteredReviews.length > 6 && (
        <div className="flex justify-center mt-12">
          <button
            onClick={() => setShowAll(!showAll)}
            className="group flex items-center gap-3 px-8 py-3 bg-white border-2 border-slate-100 text-slate-600 font-bold rounded-2xl hover:border-indigo-600 hover:text-indigo-600 transition-all shadow-sm active:scale-95"
          >
            {showAll ? 'Tampilkan Lebih Sedikit' : `Lihat Semua ${filteredReviews.length} Sentimen`}
            <ChevronDown className={`transition-transform duration-300 ${showAll ? 'rotate-180' : ''}`} size={20} />
          </button>
        </div>
      )}

      {/* Empty State */}
      {filteredReviews.length === 0 && (
        <div className="text-center py-20 bg-slate-50 rounded-3xl border-2 border-dashed border-slate-200">
          <Filter className="mx-auto text-slate-300 mb-4" size={48} />
          <p className="text-slate-500 font-medium">Tidak ada ulasan dengan kategori {filter}</p>
        </div>
      )}
    </div>
  );
}
