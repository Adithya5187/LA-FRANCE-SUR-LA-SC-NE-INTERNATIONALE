import React from 'react';
import { Chapter } from '../data/chapters';
import { Mic, X, Clock, User, BookOpen } from 'lucide-react';

interface SpeakerScriptDrawerProps {
  chapter: Chapter;
  isOpen: boolean;
  onClose: () => void;
}

export const SpeakerScriptDrawer: React.FC<SpeakerScriptDrawerProps> = ({
  chapter,
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/60 backdrop-blur-sm transition-opacity duration-300">
      <div
        className="w-full max-w-lg h-full bg-[#0B1B33] border-l border-white/10 shadow-2xl p-6 sm:p-8 flex flex-col justify-between overflow-y-auto animate-in slide-in-from-right duration-300"
      >
        <div>
          {/* Header */}
          <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-blue-500/20 text-blue-300 border border-blue-500/30">
                <Mic className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[11px] font-bold text-blue-400 uppercase tracking-widest block">
                  Script de l'Exposé Oral
                </span>
                <h3 className="text-lg font-bold text-white">
                  {chapter.presenter} ({chapter.number}/06)
                </h3>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-white/5 hover:bg-white/15 text-slate-300 hover:text-white transition-colors"
              aria-label="Fermer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Meta Info */}
          <div className="grid grid-cols-2 gap-3 mb-6">
            <div className="p-3 rounded-xl bg-slate-900/80 border border-white/5 flex items-center gap-2.5">
              <Clock className="w-4 h-4 text-amber-400 shrink-0" />
              <div className="text-xs">
                <span className="text-slate-400 block text-[10px]">Temps de Parole</span>
                <span className="font-bold text-white">{chapter.duration}</span>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-slate-900/80 border border-white/5 flex items-center gap-2.5">
              <User className="w-4 h-4 text-emerald-400 shrink-0" />
              <div className="text-xs">
                <span className="text-slate-400 block text-[10px]">Orateur Attitré</span>
                <span className="font-bold text-white">{chapter.presenter}</span>
              </div>
            </div>
          </div>

          <div className="mb-4">
            <h4 className="text-base font-bold text-white mb-1">
              {chapter.speakerScript.title}
            </h4>
            <p className="text-xs text-slate-400 italic">
              Texte intégral du discours de soutenance universitaire (traduit en français académique)
            </p>
          </div>

          {/* Script Paragraphs */}
          <div className="space-y-4">
            {chapter.speakerScript.paragraphs.map((p, idx) => (
              <p
                key={idx}
                className="text-sm text-slate-200 leading-relaxed p-3.5 rounded-xl bg-[#10233F]/70 border border-white/5 font-normal"
              >
                {p}
              </p>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
          <span className="flex items-center gap-1.5">
            <BookOpen className="w-3.5 h-3.5 text-blue-400" />
            Document source : speaker scripts PDF
          </span>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-[#244B85] text-white font-medium hover:bg-blue-600 transition-colors"
          >
            Fermer les notes
          </button>
        </div>
      </div>
    </div>
  );
};

