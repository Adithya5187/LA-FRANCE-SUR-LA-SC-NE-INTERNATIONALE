import React, { useState } from 'react';
import { TimelineEvent } from '../data/timelines';
import { Calendar, ChevronRight, ChevronLeft, Sparkles, Award } from 'lucide-react';

interface InteractiveTimelineProps {
  title: string;
  subtitle: string;
  events: TimelineEvent[];
  themeColor?: string;
}

export const InteractiveTimeline: React.FC<InteractiveTimelineProps> = ({
  title,
  subtitle,
  events,
  themeColor = '#244B85',
}) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const activeEvent = events[selectedIndex] || events[0];

  const handlePrev = () => {
    setSelectedIndex((prev) => (prev > 0 ? prev - 1 : events.length - 1));
  };

  const handleNext = () => {
    setSelectedIndex((prev) => (prev < events.length - 1 ? prev + 1 : 0));
  };

  return (
    <div className="my-12 p-6 sm:p-8 rounded-3xl bg-[#0B1B33]/70 border border-white/10 backdrop-blur-xl shadow-2xl">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-6 border-b border-white/10 gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#244B85]/30 border border-[#244B85]/40 text-blue-300 text-xs font-semibold tracking-wider uppercase mb-2">
            <Calendar className="w-3.5 h-3.5" />
            Frise Chronologique Interactive
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-white tracking-wide">
            {title}
          </h3>
          <p className="text-sm text-slate-400 mt-1">
            {subtitle}
          </p>
        </div>

        {/* Step controls */}
        <div className="flex items-center gap-2 self-start md:self-auto">
          <button
            onClick={handlePrev}
            aria-label="Événement précédent"
            className="p-2.5 rounded-xl bg-white/5 hover:bg-white/15 border border-white/10 text-white transition-all hover:scale-105 active:scale-95"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <span className="text-xs text-slate-400 font-mono px-2">
            {selectedIndex + 1} / {events.length}
          </span>
          <button
            onClick={handleNext}
            aria-label="Événement suivant"
            className="p-2.5 rounded-xl bg-white/5 hover:bg-white/15 border border-white/10 text-white transition-all hover:scale-105 active:scale-95"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Horizontal Interactive Timeline Track */}
      <div className="relative mb-10 pt-4 pb-2 px-2">
        {/* Track Line */}
        <div className="absolute top-9 left-4 right-4 h-1 bg-slate-800 rounded-full" />
        {/* Active Progress Line */}
        <div
          className="absolute top-9 left-4 h-1 rounded-full transition-all duration-500 ease-out"
          style={{
            width: `${(selectedIndex / (events.length - 1)) * 92}%`,
            backgroundColor: themeColor,
            boxShadow: `0 0 12px ${themeColor}`
          }}
        />

        {/* Nodes */}
        <div className="relative flex justify-between items-center z-10">
          {events.map((event, idx) => {
            const isActive = idx === selectedIndex;
            const isPast = idx < selectedIndex;

            return (
              <button
                key={event.year + idx}
                onClick={() => setSelectedIndex(idx)}
                className="group flex flex-col items-center focus:outline-none transition-transform"
              >
                {/* Node Circle */}
                <div
                  className={`w-11 h-11 rounded-full flex items-center justify-center font-bold text-xs transition-all duration-300 ${
                    isActive
                      ? 'scale-125 ring-4 ring-white/20 text-white shadow-lg'
                      : isPast
                      ? 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                      : 'bg-slate-900 border border-slate-700 text-slate-400 hover:border-slate-500'
                  }`}
                  style={{
                    backgroundColor: isActive ? themeColor : undefined,
                  }}
                >
                  {event.year.length > 4 ? event.year.slice(0, 4) : event.year}
                </div>

                {/* Sub-label under node */}
                <span
                  className={`mt-2 text-[11px] font-medium transition-colors hidden sm:block max-w-[80px] text-center truncate ${
                    isActive ? 'text-white font-semibold' : 'text-slate-400 group-hover:text-slate-200'
                  }`}
                >
                  {event.tag}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Selected Event Card Detail */}
      <div className="p-6 sm:p-8 rounded-2xl bg-[#10233F]/90 border border-white/10 shadow-xl transition-all duration-500 relative overflow-hidden">
        {/* Accent Glow */}
        <div
          className="absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl opacity-20 pointer-events-none"
          style={{ backgroundColor: themeColor }}
        />

        <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-2xl sm:text-3xl font-extrabold text-white font-mono tracking-tight">
                {activeEvent.year}
              </span>
              <span className="px-3 py-0.5 rounded-full text-xs font-semibold bg-white/10 text-slate-200 border border-white/10">
                {activeEvent.tag}
              </span>
            </div>
            <h4 className="text-lg sm:text-xl font-bold text-white">
              {activeEvent.title}
            </h4>
            <p className="text-sm font-medium text-blue-300/90 mt-0.5">
              {activeEvent.subtitle}
            </p>
          </div>

          {activeEvent.impact && (
            <div className="flex items-start gap-2 p-3 rounded-xl bg-white/5 border border-white/5 max-w-sm">
              <Award className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <div className="text-xs text-slate-300">
                <span className="font-semibold text-white block mb-0.5">Portée Historique</span>
                {activeEvent.impact}
              </div>
            </div>
          )}
        </div>

        <p className="text-slate-200 text-sm sm:text-base leading-relaxed mt-4">
          {activeEvent.description}
        </p>
      </div>
    </div>
  );
};

