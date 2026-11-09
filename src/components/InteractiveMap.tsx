import React, { useState } from 'react';
import { GEOPOLITICAL_HOTSPOTS, GeopoliticalHotspot } from '../data/graphData';
import { MapPin, Globe, CheckCircle2, Calendar, Shield, AlertCircle } from 'lucide-react';

export const InteractiveMap: React.FC = () => {
  const [selectedHotspot, setSelectedHotspot] = useState<GeopoliticalHotspot>(
    GEOPOLITICAL_HOTSPOTS[0] // Ukraine by default
  );

  return (
    <div className="my-12 p-6 sm:p-8 rounded-3xl bg-[#0B1B33]/80 border border-white/10 backdrop-blur-xl shadow-2xl">
      <div className="flex flex-col md:flex-row md:items-end justify-between pb-6 mb-6 border-b border-white/10 gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-semibold tracking-wider uppercase mb-2">
            <Globe className="w-3.5 h-3.5" />
            Carte Géopolitique Interactive
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-white tracking-wide">
            Théâtres d'Action & Défis Contemporains de la Paix
          </h3>
          <p className="text-sm text-slate-400 mt-1">
            Cliquez sur un foyer d'engagement diplomatique pour découvrir l'action concrète de la France.
          </p>
        </div>

        {/* Hotspot quick buttons */}
        <div className="flex flex-wrap gap-1.5">
          {GEOPOLITICAL_HOTSPOTS.map((spot) => (
            <button
              key={spot.id}
              onClick={() => setSelectedHotspot(spot)}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                selectedHotspot.id === spot.id
                  ? 'bg-[#D62839] text-white shadow-lg shadow-red-900/40 ring-1 ring-red-300'
                  : 'bg-slate-800/80 text-slate-300 hover:bg-slate-700 hover:text-white'
              }`}
            >
              {spot.name.split(' ')[0]}
            </button>
          ))}
        </div>
      </div>

      {/* Stylized SVG Map Container */}
      <div className="relative w-full aspect-[21/10] bg-[#071426] rounded-2xl border border-white/10 overflow-hidden mb-6 shadow-inner flex items-center justify-center">
        {/* Subtle Map Grid lines */}
        <div
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage:
              'linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />

        {/* World Map SVG Vector Continents Outline */}
        <svg
          viewBox="0 0 1000 480"
          className="w-full h-full opacity-35 transition-opacity duration-500 hover:opacity-50"
          fill="none"
          stroke="#475569"
          strokeWidth="1.2"
        >
          {/* North America */}
          <path d="M120 70 Q160 50 250 80 T300 130 T270 200 T210 210 T160 170 Z" fill="#1e293b" />
          {/* South America */}
          <path d="M260 230 Q320 250 310 330 T280 420 T240 370 T230 270 Z" fill="#1e293b" />
          {/* Europe */}
          <path d="M460 70 Q510 60 550 90 T540 160 T480 170 T440 130 T450 80 Z" fill="#243c5a" />
          {/* Africa */}
          <path d="M460 180 Q540 180 560 250 T540 370 T480 390 T440 300 T440 210 Z" fill="#1e293b" />
          {/* Asia */}
          <path d="M560 70 Q700 50 850 110 T880 230 T750 250 T620 200 T560 120 Z" fill="#1e293b" />
          {/* Australia & Oceania */}
          <path d="M780 300 Q860 300 870 360 T810 410 T750 370 Z" fill="#1e293b" />
        </svg>

        {/* Hotspot Markers */}
        {GEOPOLITICAL_HOTSPOTS.map((spot) => {
          const isSelected = spot.id === selectedHotspot.id;

          return (
            <div
              key={spot.id}
              className="absolute z-20 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
              style={{
                left: `${spot.coordinates.x}%`,
                top: `${spot.coordinates.y}%`,
              }}
              onClick={() => setSelectedHotspot(spot)}
            >
              {/* Outer Pulse ring */}
              <div
                className={`absolute -inset-2 rounded-full transition-all duration-700 ${
                  isSelected
                    ? 'bg-red-500/40 animate-ping'
                    : 'group-hover:bg-blue-400/30'
                }`}
              />

              {/* Pin */}
              <div
                className={`relative flex items-center justify-center p-2 rounded-full border shadow-xl transition-all duration-300 ${
                  isSelected
                    ? 'bg-[#D62839] border-white text-white scale-125 ring-4 ring-red-500/30'
                    : 'bg-[#10233F] border-slate-400 text-slate-200 group-hover:scale-110 group-hover:border-white'
                }`}
              >
                <MapPin className="w-4 h-4" />
              </div>

              {/* Tooltip on map */}
              <div
                className={`absolute left-1/2 -translate-x-1/2 bottom-full mb-2 px-2.5 py-1 rounded-md bg-[#071426]/95 border border-white/10 text-[11px] font-semibold text-white whitespace-nowrap pointer-events-none transition-all duration-200 shadow-xl ${
                  isSelected ? 'opacity-100 scale-100' : 'opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100'
                }`}
              >
                {spot.name}
              </div>
            </div>
          );
        })}
      </div>

      {/* Selected Hotspot Detailed Content Card */}
      <div className="p-6 sm:p-8 rounded-2xl bg-[#10233F]/90 border border-white/10 shadow-xl">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 pb-6 mb-6 border-b border-white/10">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-red-500/20 text-red-300 border border-red-500/30 flex items-center gap-1.5">
                <AlertCircle className="w-3.5 h-3.5" />
                {selectedHotspot.statusTag}
              </span>
              <span className="px-2.5 py-1 rounded-full text-xs text-slate-400 bg-slate-900 border border-white/5 font-mono">
                {selectedHotspot.keyDate}
              </span>
            </div>
            <h4 className="text-xl sm:text-2xl font-bold text-white">
              {selectedHotspot.title}
            </h4>
            <p className="text-xs font-semibold text-blue-300 tracking-wider uppercase mt-1">
              Théâtre : {selectedHotspot.name} • {selectedHotspot.category}
            </p>
          </div>

          <div className="p-3 rounded-xl bg-slate-900/80 border border-white/5 text-xs text-slate-300 max-w-xs shrink-0 flex items-start gap-2">
            <Shield className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
            <div>
              <span className="font-semibold text-white block mb-0.5">Doctrine Française</span>
              Diplomatie d'équilibre, respect du droit international et protection des souverainetés.
            </div>
          </div>
        </div>

        <p className="text-slate-200 text-sm sm:text-base leading-relaxed mb-6">
          {selectedHotspot.frenchEngagement}
        </p>

        {/* Specific Actions */}
        <div>
          <span className="text-xs uppercase font-bold tracking-wider text-slate-400 block mb-3">
            Engagements Opérationnels et Diplomatiques Majeurs
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {selectedHotspot.actions.map((act, i) => (
              <div
                key={i}
                className="p-3 rounded-xl bg-slate-900/60 border border-white/5 flex items-start gap-2.5 text-xs sm:text-sm text-slate-200"
              >
                <CheckCircle2 className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                <span>{act}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

