import React, { useEffect, useRef } from 'react';
import { gsap, ScrollTrigger } from '../utils/gsap';

interface ImageRevealProps {
  src: string;
  alt: string;
  caption?: string;
  credit?: string;
  direction?: 'left' | 'right' | 'top' | 'bottom';
  className?: string;
  aspectRatio?: 'video' | 'square' | 'portrait' | 'wide' | 'auto';
  priority?: boolean;
}

export const ImageReveal: React.FC<ImageRevealProps> = ({
  src,
  alt,
  caption,
  credit,
  direction = 'bottom',
  className = '',
  aspectRatio = 'video',
  priority = false,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const curtainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    const img = imageRef.current;
    const curtain = curtainRef.current;

    if (!el || !img) return;

    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (priority || prefersReducedMotion) {
      gsap.set(img, { opacity: 1, scale: 1, x: 0, y: 0 });
      if (curtain) gsap.set(curtain, { display: 'none' });
      return;
    }

    const xOffset = direction === 'left' ? -40 : direction === 'right' ? 40 : 0;
    const yOffset = direction === 'top' ? -40 : direction === 'bottom' ? 40 : 0;

    // Initial cinematic state: slight zoom (1.08) and directional offset
    gsap.set(img, {
      scale: 1.08,
      opacity: 0,
      x: xOffset,
      y: yOffset,
    });

    // Curtain mask initial state
    if (curtain) {
      gsap.set(curtain, {
        opacity: 0.95,
        scaleX: 1,
        scaleY: 1,
        transformOrigin:
          direction === 'right'
            ? 'right center'
            : direction === 'left'
            ? 'left center'
            : direction === 'top'
            ? 'center top'
            : 'center bottom',
      });
    }

    // GSAP ScrollTrigger for entrance reveal
    const trigger = ScrollTrigger.create({
      trigger: el,
      start: 'top 85%',
      once: true,
      onEnter: () => {
        const tl = gsap.timeline();

        if (curtain) {
          tl.to(curtain, {
            scaleX: direction === 'left' || direction === 'right' ? 0 : 1,
            scaleY: direction === 'top' || direction === 'bottom' ? 0 : 1,
            duration: 0.7,
            ease: 'power2.inOut',
          });
        }

        tl.to(
          img,
          {
            scale: 1,
            opacity: 1,
            x: 0,
            y: 0,
            duration: 1.1,
            ease: 'power3.out',
          },
          curtain ? '-=0.4' : 0
        );
      },
    });

    // Subtle Parallax Effect on Scroll
    const parallaxTrigger = ScrollTrigger.create({
      trigger: el,
      start: 'top bottom',
      end: 'bottom top',
      scrub: 1.2,
      onUpdate: (self) => {
        if (img) {
          const shift = (self.progress - 0.5) * 12;
          gsap.set(img, { yPercent: shift });
        }
      },
    });

    return () => {
      trigger.kill();
      parallaxTrigger.kill();
    };
  }, [direction, priority]);

  const getAspectClass = () => {
    switch (aspectRatio) {
      case 'square': return 'aspect-square';
      case 'portrait': return 'aspect-[3/4]';
      case 'wide': return 'aspect-[21/9]';
      case 'auto': return '';
      case 'video':
      default: return 'aspect-video';
    }
  };

  return (
    <div
      ref={containerRef}
      className={`group relative overflow-hidden rounded-2xl bg-[#10233F]/60 border border-white/10 shadow-2xl transition-all duration-500 ease-out ${className}`}
    >
      <div className={`relative overflow-hidden ${getAspectClass()}`}>
        {/* Subtle Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#071426] via-transparent to-transparent opacity-60 z-10 pointer-events-none" />

        {/* Curtain mask for cinematic reveal */}
        <div
          ref={curtainRef}
          className="absolute inset-0 bg-[#0B1B33] z-20 pointer-events-none"
        />

        {/* Cinematic Image */}
        <img
          ref={imageRef}
          src={src}
          alt={alt}
          loading={priority ? 'eager' : 'lazy'}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
        />

        {/* Hover Highlight Border */}
        <div className="absolute inset-0 border border-white/5 group-hover:border-white/20 transition-colors duration-500 rounded-2xl pointer-events-none z-30" />
      </div>

      {/* Caption Bar */}
      {(caption || credit) && (
        <div className="p-3.5 sm:p-4 bg-[#0B1B33]/90 border-t border-white/5 backdrop-blur-md flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 text-xs text-slate-300 relative z-30">
          {caption && <span className="font-normal italic leading-relaxed text-slate-300">{caption}</span>}
          {credit && <span className="text-slate-400 font-medium shrink-0 text-[11px]">© {credit}</span>}
        </div>
      )}
    </div>
  );
};
