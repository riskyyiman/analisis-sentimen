'use client';

import { useState, useEffect } from 'react';
import { BrainCircuit, Menu, X, Github, Zap } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Fungsi untuk scroll otomatis ke form dengan offset yang pas
  const scrollToForm = () => {
    // 1. Tutup menu mobile terlebih dahulu
    setIsOpen(false);

    // 2. Cari elemen form
    const element = document.getElementById('analizerForm');

    // 3. Scroll dengan delay sedikit agar animasi tutup menu selesai (opsional tapi lebih halus)
    if (element) {
      setTimeout(() => {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Beranda', href: '#' },
    // Anda bisa menambahkan link lain di sini
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-lg shadow-sm border-b border-slate-200/50 py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* --- LOGO SECTION: KySense AI --- */}
        <div className="flex items-center gap-3 group cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          {/* Icon Container */}
          <div className="relative flex items-center justify-center w-10 h-10 bg-white border border-slate-200 rounded-xl shadow-sm group-hover:border-indigo-300 group-hover:shadow-indigo-100 transition-all duration-300">
            <div className="absolute inset-0 bg-indigo-50 rounded-xl animate-ping opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <BrainCircuit size={20} className="text-indigo-600 relative z-10 group-hover:scale-110 transition-transform" />
          </div>

          {/* Typography */}
          <div className="flex flex-col justify-center">
            <h1 className="font-bold text-xl leading-none tracking-tight text-slate-800">
              Ky<span className="text-indigo-600">Sense</span>
              <span className="text-slate-300 font-light mx-1">|</span>
              <span className="font-black bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">AI</span>
            </h1>
            <span className="text-[9px] font-bold text-slate-400 uppercase tracking-[0.2em] leading-tight mt-0.5 group-hover:text-indigo-500 transition-colors">Deep Analytics</span>
          </div>
        </div>

        {/* --- DESKTOP MENU --- */}
        <div className="hidden md:flex items-center gap-10">
          <div className="flex gap-8 text-sm font-semibold text-slate-600">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="hover:text-indigo-600 transition-colors relative group">
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-600 transition-all group-hover:w-full" />
              </a>
            ))}
          </div>

          <div className="h-6 w-px bg-slate-200 mx-2" />

          {/* Action Buttons */}
          <div className="flex items-center gap-4">
            <a href="https://github.com/riskyyiman" target="_blank" className="text-slate-400 hover:text-indigo-600 transition hover:bg-slate-50 p-2 rounded-full">
              <Github size={20} />
            </a>

            {/* Desktop CTA Button */}
            <button onClick={scrollToForm} className="bg-indigo-600 text-white px-5 py-2.5 rounded-xl text-sm font-bold hover:bg-indigo-700 shadow-lg shadow-indigo-100 transition-all active:scale-95 flex items-center gap-2">
              <Zap size={14} fill="white" />
              Mulai Analisis
            </button>
          </div>
        </div>

        {/* --- MOBILE TOGGLE --- */}
        <button className="md:hidden p-2 text-slate-600 active:bg-slate-100 rounded-lg transition" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* --- MOBILE MENU OVERLAY --- */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white/95 backdrop-blur-xl border-b border-slate-100 overflow-hidden absolute w-full left-0 top-full shadow-xl"
          >
            <div className="px-6 py-8 flex flex-col gap-6">
              {navLinks.map((link) => (
                <a key={link.name} href={link.href} className="text-lg font-bold text-slate-700 hover:text-indigo-600 flex items-center justify-between" onClick={() => setIsOpen(false)}>
                  {link.name}
                </a>
              ))}

              <hr className="border-slate-100" />

              {/* Mobile CTA Button - Berfungsi Smooth Scroll */}
              <button onClick={scrollToForm} className="w-full bg-indigo-600 text-white py-4 rounded-2xl font-bold shadow-lg shadow-indigo-200 active:scale-95 transition-transform flex items-center justify-center gap-2">
                <Zap size={18} fill="white" />
                Mulai Analisis Sekarang
              </button>

              <div className="flex justify-center mt-2">
                <a href="https://github.com/riskyyiman" target="_blank" className="text-slate-400 flex items-center gap-2 text-sm font-medium">
                  <Github size={16} /> github.com/riskyyiman
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
