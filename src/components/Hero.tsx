'use client';

import { motion, Variants } from 'framer-motion'; // Mengimpor tipe Variants untuk memperbaiki error TypeScript
import { Activity, Quote, Cpu, DownloadCloud, BrainCircuit, LineChart, ArrowDown } from 'lucide-react';

export default function Hero() {
  // Mendefinisikan tipe Variants secara eksplisit untuk menghilangkan error pada framer-motion
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  const features = [
    {
      icon: DownloadCloud,
      title: 'Google Play Scraping',
      desc: 'Ekstraksi ribuan ulasan pengguna secara real-time langsung dari sumbernya tanpa batasan API manual.',
    },
    {
      icon: BrainCircuit,
      title: 'Bi-LSTM Processing',
      desc: 'Model Deep Learning yang dilatih khusus untuk memahami konteks bahasa gaul, singkatan, dan emosi kompleks.',
    },
    {
      icon: LineChart,
      title: 'Strategic Visualization',
      desc: 'Ubah tumpukan teks menjadi grafik data yang dapat ditindaklanjuti untuk keputusan bisnis yang lebih cerdas.',
    },
  ];

  // Logika scroll internal untuk menyederhanakan komunikasi antar komponen
  const handleScroll = () => {
    const element = document.getElementById('analizerForm');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-32 pb-20">
      {/* 1. BACKGROUND DYNAMIC */}
      <div className="absolute inset-0 -z-20 bg-slate-50">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-indigo-500 opacity-20 blur-[100px]" />
        <div className="absolute right-0 bottom-0 -z-10 h-[400px] w-[400px] rounded-full bg-violet-500 opacity-10 blur-[120px]" />
      </div>

      {/* 2. FLOATING REVIEW CARDS */}
      <FloatingCard text="Aplikasi sering crash setelah update..." sentiment="Negative" delay={0} x="-30%" y="-150px" rotate="-6deg" />
      <FloatingCard text="Fitur barunya sangat membantu pekerjaan!" sentiment="Positive" delay={2} x="35%" y="120px" rotate="6deg" />
      <FloatingCard text="UI bagus, tapi tolong perbaiki loginnya." sentiment="Neutral" delay={4} x="-35%" y="100px" rotate="-3deg" />

      <div className="max-w-6xl mx-auto px-6 text-center z-10">
        {/* 3. BADGE: System Status */}
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="inline-flex relative group mb-8">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-violet-500 to-indigo-500 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
          <div className="relative flex items-center gap-3 px-4 py-2 bg-white rounded-lg border border-slate-100 shadow-sm">
            <Cpu size={16} className="text-indigo-600 animate-pulse" />
            <div className="flex flex-col text-left leading-none">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Model Architecture</span>
              <span className="text-xs font-black text-slate-800 font-mono">
                Bi-LSTM <span className="text-indigo-600">PRO</span>
              </span>
            </div>
          </div>
        </motion.div>

        {/* 4. MASSIVE TYPOGRAPHY */}
        <motion.h1 initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, ease: 'circOut' }} className="text-7xl md:text-8xl font-black text-slate-900 tracking-tighter mb-8 leading-[0.9]">
          BEYOND <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-violet-600 to-indigo-600 animate-gradient bg-[length:200%_auto]">STAR RATINGS</span>
        </motion.h1>

        {/* 5. NARRATIVE SUBTEXT */}
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4, duration: 0.8 }} className="text-xl md:text-2xl text-slate-500 max-w-2xl mx-auto font-medium leading-relaxed mb-16">
          Jangan hanya menghitung bintang. Mulai <span className="text-slate-900 font-bold decoration-indigo-300 underline underline-offset-4 decoration-4">pahami emosi</span> di balik setiap kata pengguna Anda.
        </motion.p>

        {/* 6. CAPABILITIES GRID */}
        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 0.8 }} className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, idx) => (
            <div key={idx} className="group p-8 bg-white/60 backdrop-blur-md border border-slate-200 rounded-3xl hover:border-indigo-300 hover:shadow-xl hover:shadow-indigo-100/50 transition-all duration-300 text-left">
              <div className="w-14 h-14 bg-white rounded-2xl border border-slate-100 shadow-sm flex items-center justify-center text-indigo-600 mb-6 group-hover:scale-110 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300">
                <feature.icon size={28} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
              <p className="text-slate-500 leading-relaxed text-sm">{feature.desc}</p>
            </div>
          ))}
        </motion.div>

        {/* 7. WORKFLOW SECTION */}
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2, duration: 1 }} className="mt-32 pt-10 border-t border-slate-200/60 relative text-left">
          <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-slate-50 px-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-slate-200 bg-white text-[10px] font-black uppercase tracking-widest text-slate-400">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse" />
              Workflow Pipeline
            </div>
          </div>

          <div className="relative grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="hidden md:block absolute top-8 left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-slate-200 via-indigo-300 to-slate-200 -z-10 opacity-60"></div>

            {/* Step 01 */}
            <div className="group relative p-6 bg-white rounded-2xl border border-slate-100 shadow-xl shadow-slate-200/40 hover:-translate-y-1 hover:shadow-indigo-100/50 hover:border-indigo-100 transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <div className="w-16 h-16 bg-slate-50 rounded-xl flex items-center justify-center border border-slate-100 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-link-2">
                    <path d="M9 17H7A5 5 0 0 1 7 7h2" />
                    <path d="M15 7h2a5 5 0 1 1 0 10h-2" />
                    <line x1="8" x2="16" y1="12" y2="12" />
                  </svg>
                </div>
                <span className="text-4xl font-black text-slate-100 group-hover:text-slate-200 transition-colors">01</span>
              </div>
              <h4 className="text-lg font-bold text-slate-800 mb-3 group-hover:text-indigo-700 transition-colors">Target Source</h4>
              <p className="text-slate-500 text-sm leading-relaxed italic">
                Salin tautan dari <span className="bg-indigo-50 text-indigo-700 px-1 py-0.5 rounded font-bold text-xs border border-indigo-100 font-sans not-italic">Google Play Store</span>.
              </p>
            </div>

            {/* Step 02 */}
            <div className="group relative p-6 bg-white rounded-2xl border border-slate-100 shadow-xl shadow-slate-200/40 hover:-translate-y-1 hover:shadow-indigo-100/50 hover:border-indigo-100 transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <div className="w-16 h-16 bg-slate-50 rounded-xl flex items-center justify-center border border-slate-100 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-sliders-horizontal"
                  >
                    <line x1="21" x2="14" y1="4" y2="4" />
                    <line x1="10" x2="3" y1="4" y2="4" />
                    <line x1="21" x2="12" y1="12" y2="12" />
                    <line x1="8" x2="3" y1="12" y2="12" />
                    <line x1="21" x2="16" y1="20" y2="20" />
                    <line x1="12" x2="3" y1="20" y2="20" />
                    <line x1="14" x2="14" y1="2" y2="6" />
                    <line x1="8" x2="8" y1="10" y2="14" />
                    <line x1="16" x2="16" y1="18" y2="22" />
                  </svg>
                </div>
                <span className="text-4xl font-black text-slate-100 group-hover:text-slate-200 transition-colors">02</span>
              </div>
              <h4 className="text-lg font-bold text-slate-800 mb-3 group-hover:text-indigo-700 transition-colors">Set Parameters</h4>
              <p className="text-slate-500 text-sm leading-relaxed italic">
                Tentukan jumlah sampel untuk <span className="font-bold text-slate-700 decoration-indigo-300 underline underline-offset-2 decoration-2 font-sans not-italic">Auto-Balancing</span>.
              </p>
            </div>

            {/* Step 03 */}
            <div className="group relative p-6 bg-white rounded-2xl border border-indigo-100/50 shadow-xl shadow-slate-200/40 hover:-translate-y-1 hover:shadow-indigo-200/50 hover:border-indigo-500 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/50 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-500 pointer-events-none" />
              <div className="flex items-center justify-between mb-4 relative z-10">
                <div className="w-16 h-16 bg-indigo-50 rounded-xl flex items-center justify-center border border-indigo-100 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300 text-indigo-600">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="none" className="lucide lucide-zap">
                    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                  </svg>
                </div>
                <span className="text-4xl font-black text-slate-200 group-hover:text-indigo-100 transition-colors">03</span>
              </div>
              <h4 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-indigo-700 transition-colors relative z-10">AI Execution</h4>
              <p className="text-slate-500 text-sm leading-relaxed relative z-10 italic">
                Proses model Bi-LSTM untuk melihat <span className="bg-slate-900 text-white px-1.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider font-sans not-italic">Emotion Pattern</span>.
              </p>
            </div>
          </div>
        </motion.div>

        {/* 8. SCROLL INDICATOR */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2, duration: 1 }} className="mt-16 flex justify-center opacity-50 hover:opacity-100 transition-opacity cursor-pointer" onClick={handleScroll}>
          <div className="flex flex-col items-center gap-2 animate-bounce">
            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 font-sans">Scroll to Analyze</span>
            <ArrowDown size={20} className="text-slate-400" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function FloatingCard({ text, sentiment, delay, x, y, rotate }: any) {
  const colors: any = {
    Positive: 'bg-emerald-50 border-emerald-100 text-emerald-700',
    Negative: 'bg-rose-50 border-rose-100 text-rose-700',
    Neutral: 'bg-amber-50 border-amber-100 text-amber-700',
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 0, y: 0 }}
      animate={{ opacity: [0, 1, 1, 0], x: x, y: y }}
      transition={{ duration: 8, delay: delay, repeat: Infinity, repeatDelay: 2 }}
      className={`absolute hidden md:flex items-start gap-3 p-4 rounded-2xl border shadow-lg backdrop-blur-sm w-72 z-0 ${colors[sentiment]}`}
      style={{ top: '50%', left: '50%', rotate: rotate }}
    >
      <div className="p-2 bg-white rounded-full shadow-sm">
        <Quote size={12} className="text-slate-400" />
      </div>
      <div>
        <p className="text-xs font-medium italic mb-2">"{text}"</p>
        <div className="flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider bg-white/50 px-2 py-0.5 rounded-md w-fit font-sans not-italic">
          <Activity size={10} />
          {sentiment} Detected
        </div>
      </div>
    </motion.div>
  );
}
