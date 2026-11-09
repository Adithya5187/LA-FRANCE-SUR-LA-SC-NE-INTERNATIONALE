import React, { useState, useEffect } from 'react';
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
import { gsap, ScrollTrigger } from './utils/gsap';

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

  // GSAP ScrollTrigger integration for independent chapter progress and viewport tracking
  useEffect(() => {
    const ctx = gsap.context(() => {
      CHAPTERS.forEach((chap) => {
        const el = document.getElementById(chap.id);
        if (!el) return;

        ScrollTrigger.create({
          trigger: el,
          start: 'top 75%',
          end: 'bottom 25%',
          onUpdate: (self) => {
            const prog = Math.min(1, Math.max(0, self.progress));
            setChapterProgresses((prev) => ({
              ...prev,
              [chap.id]: prog,
            }));
            if (prog >= 0.92) {
              setCompletedChapters((prev) => ({
                ...prev,
                [chap.id]: true,
              }));
            }
          },
          onToggle: (self) => {
            if (self.isActive) {
              setActiveChapterId(chap.id);
            }
          },
        });
      });
    });

    // Refresh triggers after initial render
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 250);

    return () => {
      clearTimeout(timer);
      ctx.revert();
    };
  }, []);

  // Navigate to chapter by ID
  const scrollToChapter = (chapterId: string) => {
    const el = document.getElementById(chapterId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setActiveChapterId(chapterId);
      setTimeout(() => ScrollTrigger.refresh(), 500);
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

          {/* Chapter 05: Paix & Crises Mondiales */}
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

          {/* Chapter 06: Conclusion & Rayonnement */}
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
      </div>
    </div>
  );
}

export default App;

