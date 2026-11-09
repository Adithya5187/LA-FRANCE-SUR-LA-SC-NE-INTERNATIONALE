import React, { useState } from 'react';
import { PILLARS_CHAPTER_1, PillarData } from '../data/graphData';
import { Globe, Shield, TrendingUp, Sparkles, CheckCircle2 } from 'lucide-react';

const iconMap = {
  Globe: Globe,
  Shield: Shield,
  TrendingUp: TrendingUp,
  Sparkles: Sparkles,
};

export const InfluenceVisualizer: React.FC = () => {
  const [activePillarId, setActivePillarId] = useState<string>(PILLARS_CHAPTER_1[0].id);

  const activePillar = PILLARS_CHAPTER_1.find((p) => p.id === activePillarId) || PILLARS_CHAPTER_1[0];

  return (
    <div className="my-12 p-6 sm:p-8 rounded-3xl bg-[#0B1B33]/80 border border-white/10 backdrop-blur-xl shadow-2xl">
      <div className="mb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold tracking-wider uppercase mb-2">
          Visualisation Géopolitique
        </div>
        <h3 className="text-xl sm:text-2xl font-bold text-white tracking-wide">
          Les Quatre Piliers du Rayonnement International Français
        </h3>
        <p className="text-sm text-slate-400 mt-1">
          Explorez les fondements économiques, stratégiques, diplomatiques et culturels de la France.
        </p>
      </div>

      {/* Tabs */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
        {PILLARS_CHAPTER_1.map((pillar) => {
          const IconComponent = iconMap[pillar.iconName as keyof typeof iconMap] || Globe;
          const isActive = pillar.id === activePillarId;

          return (
            <button
              key={pillar.id}
              onClick={() => setActivePillarId(pillar.id)}
              className={`p-4 rounded-2xl border text-left transition-all duration-300 flex flex-col justify-between ${
                isActive
                  ? 'bg-[#244B85]/40 border-blue-400/50 shadow-lg shadow-blue-900/30 ring-1 ring-blue-400/40'
                  : 'bg-[#10233F]/40 border-white/5 hover:border-white/20 hover:bg-[#10233F]/80'
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <div
                  className={`p-2.5 rounded-xl ${
                    isActive ? 'bg-[#244B85] text-white' : 'bg-slate-800 text-slate-400'
                  }`}
                >
                  <IconComponent className="w-5 h-5" />
                </div>
                <span className="text-xs font-bold text-amber-300 font-mono">
                  {pillar.metric}
                </span>
              </div>
              <div>
                <h4 className="text-sm font-bold text-white">
                  {pillar.name}
                </h4>
                <p className="text-[11px] text-slate-400 mt-0.5 line-clamp-1">
                  {pillar.metricLabel}
                </p>
              </div>
            </button>
          );
        })}
      </div>

      {/* Active Pillar Detail Visual */}
      <div className="p-6 sm:p-8 rounded-2xl bg-[#10233F]/90 border border-white/10 shadow-xl">
        <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 mb-6 border-b border-white/10 gap-4">
          <div>
            <span className="text-xs font-semibold text-blue-400 uppercase tracking-widest">
              Pillier Actif
            </span>
            <h4 className="text-xl sm:text-2xl font-bold text-white mt-1">
              {activePillar.name}
            </h4>
            <p className="text-sm text-slate-300 mt-1 max-w-2xl">
              {activePillar.description}
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/80 border border-white/10 text-center md:text-right shrink-0">
            <span className="text-2xl sm:text-3xl font-extrabold text-amber-400 font-mono block">
              {activePillar.metric}
            </span>
            <span className="text-xs text-slate-400">
              {activePillar.metricLabel}
            </span>
          </div>
        </div>

        {/* Animated Bars */}
        <div className="space-y-4">
          <span className="text-xs uppercase font-semibold tracking-wider text-slate-400 block mb-2">
            Indicateurs Stratégiques Évalués
          </span>
          {activePillar.indicators.map((ind, i) => (
            <div key={i} className="group">
              <div className="flex justify-between items-center text-xs sm:text-sm font-medium mb-1.5">
                <span className="text-white flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  {ind.label}
                </span>
                <span className="text-slate-400 font-mono text-xs">
                  {ind.detail}
                </span>
              </div>
              <div className="w-full h-3 bg-slate-800/80 rounded-full overflow-hidden p-0.5 border border-white/5">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-[#244B85] via-blue-500 to-indigo-400 transition-all duration-1000 ease-out"
                  style={{ width: `${ind.score}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

