'use client';

import { Smile, Meh, Frown } from 'lucide-react';

export default function SentimentStats({ summary }: { summary: any }) {
  const cards = [
    { label: 'Positif', val: summary.Positive || 0, color: 'bg-emerald-50 text-emerald-700 border-emerald-100', icon: Smile },
    { label: 'Netral', val: summary.Neutral || 0, color: 'bg-amber-50 text-amber-700 border-amber-100', icon: Meh },
    { label: 'Negatif', val: summary.Negative || 0, color: 'bg-rose-50 text-rose-700 border-rose-100', icon: Frown },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
      {cards.map((card, i) => (
        <div key={i} className={`p-6 rounded-2xl border ${card.color} flex items-center justify-between shadow-sm`}>
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider opacity-70">{card.label}</p>
            <h3 className="text-3xl font-bold mt-1">{card.val}</h3>
          </div>
          <card.icon size={40} className="opacity-40" />
        </div>
      ))}
    </div>
  );
}
