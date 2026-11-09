import React, { useState, useEffect, useRef } from 'react';

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
  const [isVisible, setIsVisible] = useState(priority);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (priority) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [priority]);

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

  const getEntranceTransform = () => {
    if (isVisible) return 'translate-x-0 translate-y-0 opacity-100 scale-100';

    switch (direction) {
      case 'left': return '-translate-x-12 translate-y-0 opacity-0 scale-105';
      case 'right': return 'translate-x-12 translate-y-0 opacity-0 scale-105';
      case 'top': return 'translate-x-0 -translate-y-12 opacity-0 scale-105';
      case 'bottom':
      default: return 'translate-x-0 translate-y-12 opacity-0 scale-105';
    }
  };

  return (
    <div
      ref={containerRef}
      className={`group relative overflow-hidden rounded-2xl bg-[#10233F]/60 border border-white/10 shadow-2xl transition-all duration-1000 ease-out ${className}`}
    >
      <div className={`relative overflow-hidden ${getAspectClass()}`}>
        {/* Subtle Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#071426] via-transparent to-transparent opacity-60 z-10 pointer-events-none" />

        {/* Cinematic Image */}
        <img
          src={src}
          alt={alt}
          loading={priority ? 'eager' : 'lazy'}
          className={`w-full h-full object-cover transition-all duration-1000 ease-out transform ${getEntranceTransform()} group-hover:scale-105`}
        />

        {/* Hover Highlight Border */}
        <div className="absolute inset-0 border border-white/5 group-hover:border-white/20 transition-colors duration-500 rounded-2xl pointer-events-none z-20" />
      </div>

      {/* Caption Bar */}
      {(caption || credit) && (
        <div className="p-3.5 sm:p-4 bg-[#0B1B33]/90 border-t border-white/5 backdrop-blur-md flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 text-xs text-slate-300">
          {caption && <span className="font-normal italic leading-relaxed text-slate-300">{caption}</span>}
          {credit && <span className="text-slate-400 font-medium shrink-0 text-[11px]">© {credit}</span>}
        </div>
      )}
    </div>
  );
};

