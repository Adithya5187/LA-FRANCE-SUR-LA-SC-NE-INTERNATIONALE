import React from 'react';
import { CheckCircle2, ChevronRight } from 'lucide-react';

interface ChapterProgressProps {
  chapterNumber: string;
  chapterTitle: string;
  progress: number; // 0 to 1
  isActive: boolean;
  isCompleted: boolean;
  themeColor?: string;
}

export const ChapterProgress: React.FC<ChapterProgressProps> = ({
  chapterNumber,
  chapterTitle,
  progress,
  isActive,
  isCompleted,
  themeColor = '#244B85',
}) => {
  const percentage = Math.min(100, Math.max(0, Math.round(progress * 100)));

  return (
    <div className="w-full my-6 p-4 sm:p-5 rounded-2xl bg-[#0B1B33]/90 border border-white/10 backdrop-blur-md shadow-xl transition-all duration-300">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
        <div className="flex items-center gap-3">
          <div
            className={`w-9 h-9 rounded-xl flex items-center justify-center font-bold text-xs font-mono transition-all duration-300 ${
              isCompleted
                ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40'
                : isActive
                ? 'bg-[#244B85] text-white shadow-lg'
                : 'bg-slate-800 text-slate-400'
            }`}
          >
            {isCompleted ? <CheckCircle2 className="w-5 h-5 text-emerald-400" /> : chapterNumber}
          </div>

          <div>
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-bold uppercase tracking-widest text-slate-400">
                Progression du Chapitre {chapterNumber}
              </span>
              {isCompleted ? (
                <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                  Terminé
                </span>
              ) : isActive ? (
                <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-blue-500/20 text-blue-300 border border-blue-400/40 animate-pulse">
                  En cours de présentation
                </span>
              ) : (
                <span className="px-2 py-0.5 rounded-full text-[10px] font-medium bg-slate-800 text-slate-400">
                  À venir
                </span>
              )}
            </div>
            <h4 className="text-sm font-semibold text-white truncate max-w-md">
              {chapterTitle}
            </h4>
          </div>
        </div>

        {/* Live Percentage Counter */}
        <div className="flex items-center gap-2 self-end sm:self-auto">
          <span className="text-xl sm:text-2xl font-black font-mono text-white tracking-tight">
            {percentage}%
          </span>
          <span className="text-xs text-slate-400 font-medium">complété</span>
        </div>
      </div>

      {/* Progress Track */}
      <div className="w-full h-2 bg-slate-900 rounded-full overflow-hidden p-0.5 border border-white/5 relative">
        <div
          className="h-full rounded-full transition-all duration-300 ease-out"
          style={{
            width: `${percentage}%`,
            backgroundColor: isCompleted ? '#10B981' : themeColor,
            boxShadow: isActive ? `0 0 10px ${themeColor}` : undefined,
          }}
        />
      </div>
    </div>
  );
};

