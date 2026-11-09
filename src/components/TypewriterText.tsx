import React, { useState, useEffect, useRef } from 'react';
import { Quote } from 'lucide-react';

interface TypewriterTextProps {
  quote: string;
  author?: string;
  context?: string;
  speed?: number;
}

export const TypewriterText: React.FC<TypewriterTextProps> = ({
  quote,
  author,
  context,
  speed = 22,
}) => {
  const [displayedText, setDisplayedText] = useState('');
  const [hasStarted, setHasStarted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.3 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= quote.length) {
        setDisplayedText(quote.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [hasStarted, quote, speed]);

  return (
    <div
      ref={containerRef}
      className="my-10 mx-auto max-w-4xl p-6 sm:p-8 rounded-2xl bg-[#0B1B33]/80 border border-emerald-500/30 backdrop-blur-md shadow-2xl relative overflow-hidden"
    >
      {/* Decorative background glow */}
      <div className="absolute -top-16 -right-16 w-48 h-48 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-16 -left-16 w-48 h-48 bg-[#244B85]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="flex items-start gap-4">
        <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 shrink-0">
          <Quote className="w-5 h-5" />
        </div>
        <div className="flex-1">
          <div className="text-xs uppercase tracking-widest text-emerald-400/80 font-semibold mb-2">
            Message Clé & Déclaration
          </div>
          <p className="text-lg sm:text-xl font-medium text-emerald-300 leading-relaxed min-h-[4rem]">
            {displayedText}
            {displayedText.length < quote.length && (
              <span className="cursor-blink" />
            )}
          </p>

          {(author || context) && (
            <div className="mt-4 pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-2 text-sm text-slate-400">
              {author && (
                <span className="font-semibold text-slate-200">
                  {author}
                </span>
              )}
              {context && (
                <span className="text-xs text-slate-400 italic">
                  {context}
                </span>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

