import React from 'react';
import { Chapter } from '../data/chapters';
import { ASSETS } from '../data/assets';
import { TIMELINES } from '../data/timelines';
import { ImageReveal } from '../components/ImageReveal';
import { TypewriterText } from '../components/TypewriterText';
import { InteractiveTimeline } from '../components/InteractiveTimeline';
import { ConclusionMatrix } from '../components/ConclusionMatrix';
import { ChapterProgress } from '../components/ChapterProgress';
import { Award, User, Clock, CheckCircle2, Sparkles, Heart } from 'lucide-react';
import confetti from 'canvas-confetti';

interface ConclusionProps {
  chapter: Chapter;
  progress: number;
  isActive: boolean;
  isCompleted: boolean;
  onOpenScriptDrawer: () => void;
}

export const Conclusion: React.FC<ConclusionProps> = ({
  chapter,
  progress,
  isActive,
  isCompleted,
  onOpenScriptDrawer,
}) => {
  const timelineData = TIMELINES['chapitre-06'];

  const triggerConfetti = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#244B85', '#FFFFFF', '#D62839'], // French tricolor confetti!
    });
  };

  return (
    <article
      id="chapitre-06"
      aria-label="Chapitre 06 : Conclusion"
      className="relative py-24"
    >
      {/* Chapter Header */}
      <header className="mb-14">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-600/20 border border-blue-500/40 text-blue-300 text-xs font-semibold tracking-wider uppercase font-mono">
            <Award className="w-3.5 h-3.5" />
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

      {/* Typewriter Quote */}
      <TypewriterText
        quote={chapter.typewriterQuote.quote}
        author={chapter.typewriterQuote.author}
        context={chapter.typewriterQuote.context}
      />

      {/* Scene 1: Synthèse des Engagements */}
      <section className="my-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-6">
          <ImageReveal
            src={ASSETS.parisDaylightPanorama.path}
            alt={ASSETS.parisDaylightPanorama.alt}
            caption={ASSETS.parisDaylightPanorama.caption}
            direction="left"
            aspectRatio="video"
          />
        </div>

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
      </section>

      {/* Interactive Global Conclusion Matrix (Part 8) */}
      <ConclusionMatrix />

      {/* Scene 2: Responsabilité & Avenir */}
      <section className="my-20 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-7 space-y-4">
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

          <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-2">
            {chapter.scenes[1].keyPoints?.map((pt, i) => (
              <div key={i} className="flex items-start gap-2 p-2.5 rounded-xl bg-white/5 border border-white/5 text-xs text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>{pt}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-5">
          <ImageReveal
            src={ASSETS.macronPortrait.path}
            alt={ASSETS.macronPortrait.alt}
            caption={ASSETS.macronPortrait.caption}
            credit={ASSETS.macronPortrait.credit}
            direction="right"
            aspectRatio="portrait"
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

      {/* Scene 3: Clôture Officielle & Remerciements */}
      <section className="my-24 p-8 sm:p-14 rounded-3xl bg-gradient-to-b from-[#10233F] via-[#0B1B33] to-[#071426] border border-white/15 text-center relative overflow-hidden shadow-2xl">
        {/* French Tricolor Banner Top Border */}
        <div className="absolute top-0 left-0 right-0 h-2 french-tricolor-gradient" />

        <div className="max-w-3xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/15 text-xs font-bold text-white uppercase tracking-widest">
            <Sparkles className="w-4 h-4 text-amber-300" />
            Fin de la Présentation
          </div>

          <h3 className="title-chapter text-3xl sm:text-5xl font-black text-white tracking-wider">
            MERCI POUR VOTRE ATTENTION !
          </h3>

          <p className="text-base sm:text-lg text-slate-300 font-light max-w-2xl mx-auto leading-relaxed">
            Les six présentateurs sont à votre entière disposition pour échanger et répondre à l'ensemble de vos questions sur la diplomatie et le rôle international de la France.
          </p>

          <div className="pt-4 flex flex-wrap justify-center gap-3">
            <button
              onClick={triggerConfetti}
              className="px-6 py-3.5 rounded-2xl bg-[#D62839] hover:bg-red-700 text-white font-semibold text-sm shadow-xl shadow-red-900/50 flex items-center gap-2 transition-all hover:scale-105 active:scale-95"
            >
              <Sparkles className="w-4 h-4" />
              <span>Applaudissements Tricolores</span>
            </button>

            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="px-6 py-3.5 rounded-2xl bg-[#244B85] hover:bg-blue-600 text-white font-semibold text-sm shadow-xl shadow-blue-900/50 flex items-center gap-2 transition-all hover:scale-105 active:scale-95"
            >
              <span>Revoir l'Exposé depuis le Début</span>
            </button>
          </div>

          {/* Presenters roster card */}
          <div className="mt-12 pt-8 border-t border-white/10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 text-left">
            {chapter.scenes[2].keyPoints?.map((kp, idx) => {
              const [role, topic] = kp.split(' : ');
              return (
                <div key={idx} className="p-3 rounded-xl bg-slate-900/60 border border-white/5">
                  <span className="text-[10px] font-bold text-blue-400 block uppercase font-mono">
                    {role}
                  </span>
                  <span className="text-xs text-white font-medium block mt-0.5 truncate">
                    {topic}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </article>
  );
};

