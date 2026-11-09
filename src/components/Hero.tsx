import React, { useEffect, useState } from 'react';
import { ASSETS } from '../data/assets';
import { ChevronDown, Sparkles, Globe, Compass, ArrowRight } from 'lucide-react';

interface HeroProps {
  onStartPresentation: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onStartPresentation }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="hero"
      aria-label="Section d'introduction cinématique"
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#071426] text-white"
    >
      {/* Background Paris Panoramic Image with Smooth Entrance & Gentle Zoom */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src={ASSETS.parisSunsetEiffel.path}
          alt={ASSETS.parisSunsetEiffel.alt}
          className={`w-full h-full object-cover object-center transform transition-all duration-2000 ease-out ${
            isLoaded ? 'scale-100 opacity-70' : 'scale-110 opacity-0'
          }`}
        />

        {/* Cinematic Multi-layered Dark Vignette Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#071426] via-[#071426]/70 to-[#071426]/40" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#071426]/50 to-[#071426]/90" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 py-20 text-center flex flex-col items-center">
        {/* French Republic Tricolor Accent Ribbon */}
        <div
          className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-xs font-semibold uppercase tracking-widest text-slate-200 mb-6 transition-all duration-1000 transform ${
            isLoaded ? 'translate-y-0 opacity-100' : '-translate-y-8 opacity-0'
          }`}
        >
          {/* Mini Tricolor Dots */}
          <span className="w-2.5 h-2.5 rounded-full bg-[#244B85] inline-block" />
          <span className="w-2.5 h-2.5 rounded-full bg-white inline-block" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#D62839] inline-block" />
          <span>Exposé Universitaire • 6 Thématiques Documentaires</span>
        </div>

        {/* Broadway Main Heading */}
        <h1
          className={`font-heading title-hero tracking-wider uppercase mb-6 transition-all duration-1000 delay-200 transform ${
            isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          LA FRANCE SUR LA SCÈNE INTERNATIONALE
        </h1>

        {/* Elegant Subtitle */}
        <p
          className={`subtitle-chapter max-w-3xl font-light mb-4 transition-all duration-1000 delay-300 transform ${
            isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
        >
          Diplomatie, coopération, sécurité et influence mondiale.
        </p>

        {/* Supporting Editorial Paragraph */}
        <p
          className={`text-slate-300 max-w-2xl text-sm sm:text-base leading-relaxed mb-10 font-normal transition-all duration-1000 delay-400 transform ${
            isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
          }`}
        >
          Découvrez le rôle de la France dans les relations internationales, les organisations mondiales et les grands enjeux de notre époque à travers six chapitres immersifs.
        </p>

        {/* Primary Call to Action buttons */}
        <div
          className={`flex flex-col sm:flex-row items-center gap-4 transition-all duration-1000 delay-500 transform ${
            isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          }`}
        >
          <button
            onClick={onStartPresentation}
            className="px-8 py-4 rounded-2xl bg-[#244B85] hover:bg-blue-600 border border-blue-400/40 text-white font-semibold text-base shadow-2xl shadow-blue-900/60 flex items-center gap-3 transition-all hover:scale-105 active:scale-95 group"
          >
            <span>Commencer la Présentation</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>

          <a
            href="#chapitre-01"
            className="px-6 py-4 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/15 text-slate-200 font-medium text-sm backdrop-blur-md transition-all hover:scale-102 flex items-center gap-2"
          >
            <Compass className="w-4 h-4 text-slate-300" />
            <span>Explorer le Sommaire</span>
          </a>
        </div>

        {/* Presenters Meta Bar */}
        <div
          className={`mt-14 pt-8 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center text-xs text-slate-300 w-full max-w-3xl transition-all duration-1000 delay-600 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div>
            <span className="block font-mono text-white text-lg font-bold">6</span>
            <span className="text-slate-400">Intervenants</span>
          </div>
          <div>
            <span className="block font-mono text-white text-lg font-bold">~ 1,5 min</span>
            <span className="text-slate-400">Par Sujet</span>
          </div>
          <div>
            <span className="block font-mono text-white text-lg font-bold">UE • ONU</span>
            <span className="text-slate-400">Multilatéralisme</span>
          </div>
          <div>
            <span className="block font-mono text-white text-lg font-bold">OTAN • G7</span>
            <span className="text-slate-400">Défense & Paix</span>
          </div>
        </div>
      </div>

      {/* Animated Scroll-Down Indicator */}
      <a
        href="#chapitre-01"
        aria-label="Faites défiler vers le bas pour explorer"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-slate-400 hover:text-white transition-colors group"
      >
        <span className="text-[11px] font-mono tracking-widest uppercase">
          Faites défiler pour explorer
        </span>
        <ChevronDown className="w-5 h-5 animate-bounce group-hover:text-blue-400" />
      </a>
    </section>
  );
};

