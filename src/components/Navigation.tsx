import React from 'react';
import { Chapter } from '../data/chapters';
import { Globe, Landmark, Globe2, Shield, Handshake, Award, CheckCircle2, Flag } from 'lucide-react';

interface NavigationProps {
  chapters: Chapter[];
  activeChapterId: string;
  completedChapters: Record<string, boolean>;
  onSelectChapter: (id: string) => void;
}

const iconMap: Record<string, React.ReactNode> = {
  '01': <Globe className="w-5 h-5" />,
  '02': <Landmark className="w-5 h-5" />,
  '03': <Globe2 className="w-5 h-5" />,
  '04': <Shield className="w-5 h-5" />,
  '05': <Handshake className="w-5 h-5" />,
  '06': <Award className="w-5 h-5" />,
};

export const Navigation: React.FC<NavigationProps> = ({
  chapters,
  activeChapterId,
  completedChapters,
  onSelectChapter,
}) => {
  return (
    <>
      {/* Desktop Fixed Left Navigation Rail */}
      <aside
        aria-label="Navigation des chapitres"
        className="hidden md:flex fixed top-0 left-0 bottom-0 w-20 lg:w-24 z-40 bg-[#071426]/95 border-r border-white/10 backdrop-blur-xl flex-col items-center justify-between py-6 shadow-2xl"
      >
        {/* Top Logo / French Tricolor Badge */}
        <div className="flex flex-col items-center">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            aria-label="Retour au sommet de la présentation"
            className="group flex flex-col items-center"
          >
            <div className="w-10 h-10 rounded-xl overflow-hidden border border-white/20 shadow-lg group-hover:scale-105 transition-transform flex flex-col">
              <div className="h-1/3 bg-[#244B85]" />
              <div className="h-1/3 bg-white" />
              <div className="h-1/3 bg-[#D62839]" />
            </div>
            <span className="text-[10px] font-black text-slate-300 tracking-wider mt-1.5 uppercase font-mono group-hover:text-white transition-colors">
              France
            </span>
          </button>
        </div>

        {/* 6 Chapter Nav Buttons */}
        <nav className="flex flex-col items-center gap-3 w-full px-2">
          {chapters.map((chap, idx) => {
            const isActive = chap.id === activeChapterId;
            const isCompleted = !!completedChapters[chap.id];
            const icon = iconMap[chap.number] || <Flag className="w-5 h-5" />;

            return (
              <div key={chap.id} className="relative group w-full flex justify-center">
                <button
                  onClick={() => onSelectChapter(chap.id)}
                  aria-label={`Chapitre ${chap.number} : ${chap.title}`}
                  className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-300 relative ${
                    isActive
                      ? 'bg-[#244B85] text-white shadow-xl shadow-blue-900/50 ring-2 ring-blue-300 scale-110'
                      : isCompleted
                      ? 'bg-slate-800/80 text-emerald-400 hover:bg-slate-700 hover:text-white'
                      : 'bg-slate-900/80 text-slate-400 hover:bg-slate-800 hover:text-white'
                  }`}
                >
                  {/* Icon */}
                  {icon}

                  {/* Number pill */}
                  <span
                    className={`absolute -top-1 -right-1 w-4 h-4 rounded-full text-[9px] font-bold flex items-center justify-center font-mono ${
                      isActive
                        ? 'bg-white text-slate-950'
                        : isCompleted
                        ? 'bg-emerald-500 text-slate-950'
                        : 'bg-slate-700 text-slate-300'
                    }`}
                  >
                    {chap.number}
                  </span>

                  {/* Completed mini badge */}
                  {isCompleted && (
                    <span className="absolute -bottom-1 -right-1 w-3.5 h-3.5 rounded-full bg-emerald-500 text-slate-950 flex items-center justify-center">
                      <CheckCircle2 className="w-3 h-3 text-slate-950 stroke-[3]" />
                    </span>
                  )}
                </button>

                {/* French Tooltip that pops out to the right */}
                <div className="absolute left-full ml-3 top-1/2 -translate-y-1/2 hidden group-hover:flex items-center z-50 pointer-events-none">
                  <div className="px-3 py-2 rounded-xl bg-[#0B1B33]/95 border border-white/15 text-xs text-white whitespace-nowrap shadow-2xl backdrop-blur-md">
                    <div className="text-[10px] uppercase font-mono font-bold text-blue-400">
                      Chapitre {chap.number} • {chap.presenter}
                    </div>
                    <div className="font-semibold text-white">
                      {chap.shortTitle}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </nav>

        {/* Bottom indicator */}
        <div className="flex flex-col items-center text-[10px] text-slate-400 font-mono text-center">
          <span className="text-white font-bold">1.5 MIN</span>
          <span className="text-[9px]">/SUJET</span>
        </div>
      </aside>

      {/* Mobile Floating Bottom Navigation Bar */}
      <nav
        aria-label="Navigation mobile des chapitres"
        className="md:hidden fixed bottom-3 left-3 right-3 z-40 bg-[#071426]/95 border border-white/10 rounded-2xl backdrop-blur-xl shadow-2xl p-2 flex items-center justify-around"
      >
        {chapters.map((chap) => {
          const isActive = chap.id === activeChapterId;
          const isCompleted = !!completedChapters[chap.id];
          const icon = iconMap[chap.number] || <Flag className="w-4 h-4" />;

          return (
            <button
              key={chap.id}
              onClick={() => onSelectChapter(chap.id)}
              aria-label={`Chapitre ${chap.number}`}
              className={`p-2.5 rounded-xl flex flex-col items-center transition-all ${
                isActive
                  ? 'bg-[#244B85] text-white shadow'
                  : isCompleted
                  ? 'text-emerald-400'
                  : 'text-slate-400'
              }`}
            >
              {icon}
              <span className="text-[9px] font-mono mt-0.5 font-bold">
                {chap.number}
              </span>
            </button>
          );
        })}
      </nav>
    </>
  );
};

