import React from 'react';
import { Chapter } from '../data/chapters';
import { ASSETS } from '../data/assets';
import { TIMELINES } from '../data/timelines';
import { ImageReveal } from '../components/ImageReveal';
import { TypewriterText } from '../components/TypewriterText';
import { InteractiveTimeline } from '../components/InteractiveTimeline';
import { InfluenceVisualizer } from '../components/InfluenceVisualizer';
import { ChapterProgress } from '../components/ChapterProgress';
import { Globe, User, Clock, CheckCircle2 } from 'lucide-react';

interface IntroductionProps {
  chapter: Chapter;
  progress: number;
  isActive: boolean;
  isCompleted: boolean;
  onOpenScriptDrawer: () => void;
}

export const Introduction: React.FC<IntroductionProps> = ({
  chapter,
  progress,
  isActive,
  isCompleted,
  onOpenScriptDrawer,
}) => {
  const timelineData = TIMELINES['chapitre-01'];

  return (
    <article
      id="chapitre-01"
      aria-label="Chapitre 01 : Introduction"
      className="relative py-24 border-b border-white/10"
    >
      {/* Chapter Header */}
      <header className="mb-14">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#244B85]/30 border border-[#244B85]/50 text-blue-300 text-xs font-semibold tracking-wider uppercase font-mono">
            <Globe className="w-3.5 h-3.5" />
            Chapitre {chapter.number} / 06
          </div>

          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5 text-xs text-slate-300 px-3 py-1 rounded-full bg-white/5 border border-white/10">
              <User className="w-3.5 h-3.5 text-blue-400" />
              {chapter.presenter}
            </span>
            <span className="flex items-center gap-1.5 text-xs text-slate-300 px-3 py-1 rounded-full bg-white/5 border border-white/10">
              <Clock className="w-3.5 h-3.5 text-amber-400" />
              {chapter.duration}
            </span>
            <button
              onClick={onOpenScriptDrawer}
              className="text-xs text-blue-400 hover:text-blue-300 underline underline-offset-4 font-medium"
            >
              Afficher le script oral
            </button>
          </div>
        </div>

        <h2 className="title-chapter uppercase mb-3">
          {chapter.title}
        </h2>
        <p className="subtitle-chapter max-w-3xl font-light">
          {chapter.subtitle}
        </p>

        {/* Dynamic Independent Chapter Progress Bar */}
        <ChapterProgress
          chapterNumber={chapter.number}
          chapterTitle={chapter.shortTitle}
          progress={progress}
          isActive={isActive}
          isCompleted={isCompleted}
          themeColor={chapter.themeColor}
        />
      </header>

      {/* Typewriter Key Takeaway Quote */}
      <TypewriterText
        quote={chapter.typewriterQuote.quote}
        author={chapter.typewriterQuote.author}
        context={chapter.typewriterQuote.context}
      />

      {/* Scene 1: Identité & Statut Mondial */}
      <section className="my-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-6 space-y-4">
          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/10 border border-blue-500/20 text-blue-400 tracking-wider uppercase inline-block">
            {chapter.scenes[0].badge}
          </span>
          <h3 className="text-2xl sm:text-3xl font-bold text-white">
            {chapter.scenes[0].title}
          </h3>
          <p className="text-base text-blue-200/90 font-medium">
            {chapter.scenes[0].subtitle}
          </p>
          <div className="space-y-3 pt-2 text-slate-300 text-sm sm:text-base leading-relaxed">
            {chapter.scenes[0].content.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {chapter.scenes[0].keyPoints?.map((pt, i) => (
              <div key={i} className="flex items-start gap-2 p-2.5 rounded-xl bg-white/5 border border-white/5 text-xs text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>{pt}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-6">
          <ImageReveal
            src={ASSETS.parisSunsetEiffel.path}
            alt={ASSETS.parisSunsetEiffel.alt}
            caption={ASSETS.parisSunsetEiffel.caption}
            credit={ASSETS.parisSunsetEiffel.credit}
            direction="right"
            aspectRatio="video"
          />
        </div>
      </section>

      {/* Interactive Geopolitical Influence Visualizer (Part 8) */}
      <InfluenceVisualizer />

      {/* Scene 2: Présence Planétaire & Outre-Mer */}
      <section className="my-20 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-6 order-2 lg:order-1">
          <ImageReveal
            src={ASSETS.franceOutreMer.path}
            alt={ASSETS.franceOutreMer.alt}
            caption={ASSETS.franceOutreMer.caption}
            credit={ASSETS.franceOutreMer.credit}
            direction="left"
            aspectRatio="video"
          />
        </div>

        <div className="lg:col-span-6 space-y-4 order-1 lg:order-2">
          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 tracking-wider uppercase inline-block">
            {chapter.scenes[1].badge}
          </span>
          <h3 className="text-2xl sm:text-3xl font-bold text-white">
            {chapter.scenes[1].title}
          </h3>
          <p className="text-base text-emerald-200/90 font-medium">
            {chapter.scenes[1].subtitle}
          </p>
          <div className="space-y-3 pt-2 text-slate-300 text-sm sm:text-base leading-relaxed">
            {chapter.scenes[1].content.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          {chapter.scenes[1].statBox && (
            <div className="p-4 rounded-2xl bg-gradient-to-r from-[#244B85]/30 to-slate-900 border border-blue-400/30 flex items-center gap-4">
              <span className="text-3xl font-black font-mono text-white">
                {chapter.scenes[1].statBox.value}
              </span>
              <div>
                <span className="font-bold text-white text-xs block">
                  {chapter.scenes[1].statBox.label}
                </span>
                <span className="text-slate-400 text-xs">
                  {chapter.scenes[1].statBox.detail}
                </span>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Scene 3: Piliers d'Influence Globale */}
      <section className="my-20 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-6 space-y-4">
          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/10 border border-amber-500/20 text-amber-400 tracking-wider uppercase inline-block">
            {chapter.scenes[2].badge}
          </span>
          <h3 className="text-2xl sm:text-3xl font-bold text-white">
            {chapter.scenes[2].title}
          </h3>
          <p className="text-base text-amber-200/90 font-medium">
            {chapter.scenes[2].subtitle}
          </p>
          <div className="space-y-3 pt-2 text-slate-300 text-sm sm:text-base leading-relaxed">
            {chapter.scenes[2].content.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-2">
            {chapter.scenes[2].keyPoints?.map((pt, i) => (
              <div key={i} className="flex items-start gap-2 p-2.5 rounded-xl bg-white/5 border border-white/5 text-xs text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>{pt}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-6">
          <ImageReveal
            src={ASSETS.franceGlobe3D.path}
            alt={ASSETS.franceGlobe3D.alt}
            caption={ASSETS.franceGlobe3D.caption}
            direction="bottom"
            aspectRatio="video"
          />
        </div>
      </section>

      {/* Chapter Interactive Timeline (Part 9) */}
      <InteractiveTimeline
        title={timelineData.title}
        subtitle={timelineData.subtitle}
        events={timelineData.events}
        themeColor={chapter.themeColor}
      />
    </article>
  );
};

