import React from 'react';
import { Chapter } from '../data/chapters';
import { ASSETS } from '../data/assets';
import { TIMELINES } from '../data/timelines';
import { ImageReveal } from '../components/ImageReveal';
import { TypewriterText } from '../components/TypewriterText';
import { InteractiveTimeline } from '../components/InteractiveTimeline';
import { InteractiveMap } from '../components/InteractiveMap';
import { ChapterProgress } from '../components/ChapterProgress';
import { Handshake, User, Clock, CheckCircle2 } from 'lucide-react';

interface WorldPeaceProps {
  chapter: Chapter;
  progress: number;
  isActive: boolean;
  isCompleted: boolean;
  onOpenScriptDrawer: () => void;
}

export const WorldPeace: React.FC<WorldPeaceProps> = ({
  chapter,
  progress,
  isActive,
  isCompleted,
  onOpenScriptDrawer,
}) => {
  const timelineData = TIMELINES['chapitre-05'];

  return (
    <article
      id="chapitre-05"
      aria-label="Chapitre 05 : Défis de la Paix Mondiale"
      className="relative py-24 border-b border-white/10"
    >
      {/* Chapter Header */}
      <header className="mb-14">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-600/20 border border-red-500/40 text-red-300 text-xs font-semibold tracking-wider uppercase font-mono">
            <Handshake className="w-3.5 h-3.5" />
            Chapitre {chapter.number} / 06
          </div>

          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5 text-xs text-slate-300 px-3 py-1 rounded-full bg-white/5 border border-white/10">
              <User className="w-3.5 h-3.5 text-red-400" />
              {chapter.presenter}
            </span>
            <span className="flex items-center gap-1.5 text-xs text-slate-300 px-3 py-1 rounded-full bg-white/5 border border-white/10">
              <Clock className="w-3.5 h-3.5 text-amber-400" />
              {chapter.duration}
            </span>
            <button
              onClick={onOpenScriptDrawer}
              className="text-xs text-red-400 hover:text-red-300 underline underline-offset-4 font-medium"
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

      {/* Typewriter Quote */}
      <TypewriterText
        quote={chapter.typewriterQuote.quote}
        author={chapter.typewriterQuote.author}
        context={chapter.typewriterQuote.context}
      />

      {/* Scene 1: Guerre en Ukraine & Soutien Français */}
      <section className="my-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-5">
          <ImageReveal
            src={ASSETS.macronZelenskyy.path}
            alt={ASSETS.macronZelenskyy.alt}
            caption={ASSETS.macronZelenskyy.caption}
            credit={ASSETS.macronZelenskyy.credit}
            direction="left"
            aspectRatio="video"
          />
        </div>

        <div className="lg:col-span-7 space-y-4">
          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-red-500/10 border border-red-500/20 text-red-400 tracking-wider uppercase inline-block">
            {chapter.scenes[0].badge}
          </span>
          <h3 className="text-2xl sm:text-3xl font-bold text-white">
            {chapter.scenes[0].title}
          </h3>
          <p className="text-base text-red-200/90 font-medium">
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
      </section>

      {/* Interactive Geopolitical World Map (Part 8) */}
      <InteractiveMap />

      {/* Scene 2 & 3: Indo-Pacifique, Inde & Palestine */}
      <section className="my-20 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-7 space-y-4">
          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/10 border border-blue-500/20 text-blue-400 tracking-wider uppercase inline-block">
            {chapter.scenes[2].badge}
          </span>
          <h3 className="text-2xl sm:text-3xl font-bold text-white">
            {chapter.scenes[2].title}
          </h3>
          <p className="text-base text-blue-200/90 font-medium">
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
                <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span>{pt}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-5">
          <ImageReveal
            src={ASSETS.natoFranceEuFlags.path}
            alt={ASSETS.natoFranceEuFlags.alt}
            caption={ASSETS.natoFranceEuFlags.caption}
            direction="right"
            aspectRatio="video"
          />
        </div>
      </section>

      {/* Scene 4: G7 France Évian 2026 */}
      <section className="my-20 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-5 order-2 lg:order-1">
          <ImageReveal
            src={ASSETS.g7Evian2026.path}
            alt={ASSETS.g7Evian2026.alt}
            caption={ASSETS.g7Evian2026.caption}
            direction="left"
            aspectRatio="video"
          />
        </div>

        <div className="lg:col-span-7 space-y-4 order-1 lg:order-2">
          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/10 border border-amber-500/20 text-amber-300 tracking-wider uppercase inline-block">
            {chapter.scenes[3].badge}
          </span>
          <h3 className="text-2xl sm:text-3xl font-bold text-white">
            {chapter.scenes[3].title}
          </h3>
          <p className="text-base text-amber-200/90 font-medium">
            {chapter.scenes[3].subtitle}
          </p>
          <div className="space-y-3 pt-2 text-slate-300 text-sm sm:text-base leading-relaxed">
            {chapter.scenes[3].content.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-2">
            {chapter.scenes[3].keyPoints?.map((pt, i) => (
              <div key={i} className="flex items-start gap-2 p-2.5 rounded-xl bg-white/5 border border-white/5 text-xs text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>{pt}</span>
              </div>
            ))}
          </div>
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

