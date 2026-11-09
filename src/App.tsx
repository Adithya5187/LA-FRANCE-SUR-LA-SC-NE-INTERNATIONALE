import React, { useState, useEffect, useCallback } from 'react';
import { CHAPTERS, Chapter } from './data/chapters';
import { Hero } from './components/Hero';
import { Navigation } from './components/Navigation';
import { PresentationControls } from './components/PresentationControls';
import { SpeakerScriptDrawer } from './components/SpeakerScriptDrawer';
import { Introduction } from './chapters/Introduction';
import { EuropeanUnion } from './chapters/EuropeanUnion';
import { UnitedNations } from './chapters/UnitedNations';
import { NATO } from './chapters/NATO';
import { WorldPeace } from './chapters/WorldPeace';
import { Conclusion } from './chapters/Conclusion';
import { calculateElementProgress } from './utils/scrollProgress';

export function App() {
  const [activeChapterId, setActiveChapterId] = useState<string>('chapitre-01');
  const [chapterProgresses, setChapterProgresses] = useState<Record<string, number>>({
    'chapitre-01': 0,
    'chapitre-02': 0,
    'chapitre-03': 0,
    'chapitre-04': 0,
    'chapitre-05': 0,
    'chapitre-06': 0,
  });
  const [completedChapters, setCompletedChapters] = useState<Record<string, boolean>>({});
  const [isScriptDrawerOpen, setIsScriptDrawerOpen] = useState(false);

  // Current active chapter object
  const currentChapterIndex = CHAPTERS.findIndex((c) => c.id === activeChapterId);
  const activeChapter = CHAPTERS[currentChapterIndex >= 0 ? currentChapterIndex : 0];

  // Scroll listener to update independent progress and active chapter in real time
  const handleScroll = useCallback(() => {
    const newProgresses: Record<string, number> = {};
    const newCompleted: Record<string, boolean> = {};
    let currentActive = activeChapterId;

    CHAPTERS.forEach((chap, idx) => {
      const el = document.getElementById(chap.id);
      if (el) {
        const prog = calculateElementProgress(el);
        newProgresses[chap.id] = prog;
        if (prog >= 0.98) {
          newCompleted[chap.id] = true;
        }

        const rect = el.getBoundingClientRect();
        // If element is prominently in the middle/upper portion of the screen
        if (rect.top <= window.innerHeight * 0.45 && rect.bottom >= window.innerHeight * 0.25) {
          currentActive = chap.id;
        }
      }
    });

    setChapterProgresses((prev) => ({ ...prev, ...newProgresses }));
    setCompletedChapters((prev) => ({ ...prev, ...newCompleted }));
    if (currentActive !== activeChapterId) {
      setActiveChapterId(currentActive);
    }
  }, [activeChapterId]);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', onScroll);
  }, [handleScroll]);

  // Navigate to chapter by ID
  const scrollToChapter = (chapterId: string) => {
    const el = document.getElementById(chapterId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setActiveChapterId(chapterId);
    }
  };

  // Navigate to chapter by Index
  const navigateToIndex = (index: number) => {
    if (index >= 0 && index < CHAPTERS.length) {
      scrollToChapter(CHAPTERS[index].id);
    }
  };

  // Keyboard navigation for presentation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't trigger if user is in an input or modal
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;

      if (e.key === 'ArrowDown' || e.key === 'ArrowRight' || e.key === 'PageDown') {
        e.preventDefault();
        navigateToIndex(currentChapterIndex + 1);
      } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft' || e.key === 'PageUp') {
        e.preventDefault();
        navigateToIndex(currentChapterIndex - 1);
      } else if (e.key.toLowerCase() === 'f') {
        // Toggle fullscreen
        if (!document.fullscreenElement) {
          document.documentElement.requestFullscreen().catch(() => {});
        } else {
          document.exitFullscreen().catch(() => {});
        }
      } else if (e.key.toLowerCase() === 's' || e.key.toLowerCase() === 'n') {
        setIsScriptDrawerOpen((prev) => !prev);
      } else if (e.key === 'Home') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentChapterIndex]);

  return (
    <div className="min-h-screen bg-[#071426] text-[#F3F0E9] flex flex-col relative selection:bg-[#244B85] selection:text-white">
      {/* Fixed Left Navigation Bar */}
      <Navigation
        chapters={CHAPTERS}
        activeChapterId={activeChapterId}
        completedChapters={completedChapters}
        onSelectChapter={scrollToChapter}
      />

      {/* Floating Presentation Controls in top right */}
      <PresentationControls
        chapters={CHAPTERS}
        currentChapterIndex={currentChapterIndex >= 0 ? currentChapterIndex : 0}
        onNavigateChapter={navigateToIndex}
        onToggleScriptDrawer={() => setIsScriptDrawerOpen(true)}
      />

      {/* Slide-out Speaker Script Drawer */}
      <SpeakerScriptDrawer
        chapter={activeChapter}
        isOpen={isScriptDrawerOpen}
        onClose={() => setIsScriptDrawerOpen(false)}
      />

      {/* Main Content Area - Strictly Separated from the Left Rail */}
      <div className="w-full md:pl-20 lg:pl-24 flex-1 flex flex-col">
        {/* Full-screen Cinematic Hero */}
        <Hero onStartPresentation={() => scrollToChapter('chapitre-01')} />

        {/* Continuous Presentation Canvas */}
        <main className="w-full max-w-6xl mx-auto px-5 sm:px-8 lg:px-12 xl:px-16 pb-32">
          {/* Chapter 01: Introduction */}
          <Introduction
            chapter={CHAPTERS[0]}
            progress={chapterProgresses['chapitre-01'] || 0}
            isActive={activeChapterId === 'chapitre-01'}
            isCompleted={!!completedChapters['chapitre-01']}
            onOpenScriptDrawer={() => {
              setActiveChapterId('chapitre-01');
              setIsScriptDrawerOpen(true);
            }}
          />

          {/* Chapter 02: Union Européenne */}
          <EuropeanUnion
            chapter={CHAPTERS[1]}
            progress={chapterProgresses['chapitre-02'] || 0}
            isActive={activeChapterId === 'chapitre-02'}
            isCompleted={!!completedChapters['chapitre-02']}
            onOpenScriptDrawer={() => {
              setActiveChapterId('chapitre-02');
              setIsScriptDrawerOpen(true);
            }}
          />

          {/* Chapter 03: Nations Unies */}
          <UnitedNations
            chapter={CHAPTERS[2]}
            progress={chapterProgresses['chapitre-03'] || 0}
            isActive={activeChapterId === 'chapitre-03'}
            isCompleted={!!completedChapters['chapitre-03']}
            onOpenScriptDrawer={() => {
              setActiveChapterId('chapitre-03');
              setIsScriptDrawerOpen(true);
            }}
          />

          {/* Chapter 04: OTAN */}
          <NATO
            chapter={CHAPTERS[3]}
            progress={chapterProgresses['chapitre-04'] || 0}
            isActive={activeChapterId === 'chapitre-04'}
            isCompleted={!!completedChapters['chapitre-04']}
            onOpenScriptDrawer={() => {
              setActiveChapterId('chapitre-04');
              setIsScriptDrawerOpen(true);
            }}
          />

          {/* Chapter 05: Défis de la Paix Mondiale */}
          <WorldPeace
            chapter={CHAPTERS[4]}
            progress={chapterProgresses['chapitre-05'] || 0}
            isActive={activeChapterId === 'chapitre-05'}
            isCompleted={!!completedChapters['chapitre-05']}
            onOpenScriptDrawer={() => {
              setActiveChapterId('chapitre-05');
              setIsScriptDrawerOpen(true);
            }}
          />

          {/* Chapter 06: Conclusion & Synthèse */}
          <Conclusion
            chapter={CHAPTERS[5]}
            progress={chapterProgresses['chapitre-06'] || 0}
            isActive={activeChapterId === 'chapitre-06'}
            isCompleted={!!completedChapters['chapitre-06']}
            onOpenScriptDrawer={() => {
              setActiveChapterId('chapitre-06');
              setIsScriptDrawerOpen(true);
            }}
          />
        </main>

        {/* Global Footer */}
        <footer className="w-full border-t border-white/10 py-10 bg-[#0B1B33]/80 backdrop-blur-md text-center text-xs text-slate-400">
          <div className="max-w-4xl mx-auto px-6 space-y-2">
            <div className="flex justify-center items-center gap-2 font-mono text-[11px] uppercase tracking-wider text-slate-300">
              <span className="w-2 h-2 rounded-full bg-[#244B85]" />
              <span className="w-2 h-2 rounded-full bg-white" />
              <span className="w-2 h-2 rounded-full bg-[#D62839]" />
              <span>La France sur la Scène Internationale • Projet de Présentation Universitaire</span>
            </div>
            <p className="text-slate-400">
              6 Chapitres thématiques • Soutenance orale de 1,5 minute par intervenant • Conçu selon les principes du design documentaire cinématique
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;

