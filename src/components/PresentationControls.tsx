import React, { useState, useEffect } from 'react';
import { Maximize, Minimize, ArrowUp, ChevronLeft, ChevronRight, Mic, HelpCircle, Eye, EyeOff } from 'lucide-react';
import { Chapter } from '../data/chapters';

interface PresentationControlsProps {
  chapters: Chapter[];
  currentChapterIndex: number;
  onNavigateChapter: (index: number) => void;
  onToggleScriptDrawer: () => void;
}

export const PresentationControls: React.FC<PresentationControlsProps> = ({
  chapters,
  currentChapterIndex,
  onNavigateChapter,
  onToggleScriptDrawer,
}) => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showKeyboardHelp, setShowKeyboardHelp] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  const toggleFullscreen = async () => {
    try {
      if (!document.fullscreenElement) {
        await document.documentElement.requestFullscreen();
      } else {
        await document.exitFullscreen();
      }
    } catch (err) {
      console.warn("Fullscreen toggle non supporté ou bloqué :", err);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handlePrev = () => {
    if (currentChapterIndex > 0) {
      onNavigateChapter(currentChapterIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentChapterIndex < chapters.length - 1) {
      onNavigateChapter(currentChapterIndex + 1);
    }
  };

  return (
    <>
      {/* Floating Presentation HUD in Top Right */}
      <div className="fixed top-4 right-4 z-40 flex items-center gap-2">
        {/* Toggle Minimize/Maximize HUD */}
        <button
          onClick={() => setIsMinimized(!isMinimized)}
          aria-label={isMinimized ? "Afficher les contrôles" : "Réduire les contrôles"}
          className="p-2.5 rounded-xl bg-[#071426]/80 hover:bg-[#10233F] text-slate-300 hover:text-white border border-white/10 backdrop-blur-md shadow-xl transition-all"
        >
          {isMinimized ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
        </button>

        {!isMinimized && (
          <div className="flex items-center gap-2 p-1.5 rounded-2xl bg-[#071426]/90 border border-white/10 backdrop-blur-xl shadow-2xl animate-in fade-in duration-200">
            {/* Previous Chapter */}
            <button
              onClick={handlePrev}
              disabled={currentChapterIndex <= 0}
              aria-label="Chapitre précédent"
              className="p-2 rounded-xl bg-white/5 hover:bg-white/15 disabled:opacity-30 disabled:hover:bg-transparent text-white transition-all"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            {/* Current Chapter Indicator */}
            <div className="px-2.5 py-1 text-center font-mono">
              <span className="text-[10px] text-slate-400 block uppercase leading-none">
                Chapitre
              </span>
              <span className="text-xs font-bold text-white leading-tight">
                {chapters[currentChapterIndex]?.number || '01'} / {chapters.length}
              </span>
            </div>

            {/* Next Chapter */}
            <button
              onClick={handleNext}
              disabled={currentChapterIndex >= chapters.length - 1}
              aria-label="Chapitre suivant"
              className="p-2 rounded-xl bg-white/5 hover:bg-white/15 disabled:opacity-30 disabled:hover:bg-transparent text-white transition-all"
            >
              <ChevronRight className="w-4 h-4" />
            </button>

            <div className="w-[1px] h-6 bg-white/10 mx-1" />

            {/* Speaker Script Drawer Toggle */}
            <button
              onClick={onToggleScriptDrawer}
              aria-label="Ouvrir le script de présentation"
              className="px-2.5 py-1.5 rounded-xl bg-[#244B85]/60 hover:bg-[#244B85] text-white text-xs font-medium border border-blue-400/30 transition-all flex items-center gap-1.5"
            >
              <Mic className="w-3.5 h-3.5 text-blue-300" />
              <span className="hidden sm:inline">Script Oral</span>
            </button>

            {/* Fullscreen Button */}
            <button
              onClick={toggleFullscreen}
              aria-label={isFullscreen ? "Quitter le plein écran" : "Mode plein écran"}
              className="p-2 rounded-xl bg-white/5 hover:bg-white/15 text-slate-300 hover:text-white transition-all"
            >
              {isFullscreen ? <Minimize className="w-4 h-4" /> : <Maximize className="w-4 h-4" />}
            </button>

            {/* Scroll to Top */}
            <button
              onClick={scrollToTop}
              aria-label="Retour au sommet"
              className="p-2 rounded-xl bg-white/5 hover:bg-white/15 text-slate-300 hover:text-white transition-all"
            >
              <ArrowUp className="w-4 h-4" />
            </button>

            {/* Keyboard Shortcuts Help */}
            <button
              onClick={() => setShowKeyboardHelp(!showKeyboardHelp)}
              aria-label="Raccourcis clavier"
              className="p-2 rounded-xl bg-white/5 hover:bg-white/15 text-slate-300 hover:text-white transition-all"
            >
              <HelpCircle className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>

      {/* Keyboard Shortcuts Modal */}
      {showKeyboardHelp && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
          <div className="max-w-md w-full p-6 rounded-3xl bg-[#0B1B33] border border-white/15 shadow-2xl text-left">
            <h4 className="text-lg font-bold text-white mb-2">
              Contrôles & Raccourcis Clavier
            </h4>
            <p className="text-xs text-slate-300 mb-4">
              Optimisé pour la vidéoprojection universitaire et les télécommandes de présentation :
            </p>
            <div className="space-y-2 text-xs">
              <div className="flex justify-between p-2 rounded-lg bg-slate-900 border border-white/5">
                <span className="text-slate-300">Chapitre suivant</span>
                <kbd className="px-2 py-0.5 rounded bg-slate-800 text-white font-mono font-bold">Flèche Droite / Bas</kbd>
              </div>
              <div className="flex justify-between p-2 rounded-lg bg-slate-900 border border-white/5">
                <span className="text-slate-300">Chapitre précédent</span>
                <kbd className="px-2 py-0.5 rounded bg-slate-800 text-white font-mono font-bold">Flèche Gauche / Haut</kbd>
              </div>
              <div className="flex justify-between p-2 rounded-lg bg-slate-900 border border-white/5">
                <span className="text-slate-300">Plein écran vidéoprojecteur</span>
                <kbd className="px-2 py-0.5 rounded bg-slate-800 text-white font-mono font-bold">Touche F</kbd>
              </div>
              <div className="flex justify-between p-2 rounded-lg bg-slate-900 border border-white/5">
                <span className="text-slate-300">Ouvrir le script oral de l'orateur</span>
                <kbd className="px-2 py-0.5 rounded bg-slate-800 text-white font-mono font-bold">Touche S / N</kbd>
              </div>
              <div className="flex justify-between p-2 rounded-lg bg-slate-900 border border-white/5">
                <span className="text-slate-300">Haut de page</span>
                <kbd className="px-2 py-0.5 rounded bg-slate-800 text-white font-mono font-bold">Touche Début / Home</kbd>
              </div>
            </div>
            <button
              onClick={() => setShowKeyboardHelp(false)}
              className="mt-6 w-full py-2.5 rounded-xl bg-[#244B85] hover:bg-blue-600 text-white text-xs font-semibold transition-all"
            >
              Compris, fermer
            </button>
          </div>
        </div>
      )}
    </>
  );
};

