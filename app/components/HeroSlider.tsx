'use client';

import React, { useState, useEffect, useCallback, useRef } from 'react';
import { ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';

export interface HeroSlide {
  image: string;
  badge?: string | null;
  caption?: string | null;
}

interface HeroSliderProps {
  slides: HeroSlide[];
  headline?: string;
}

export default function HeroSlider({ slides, headline }: HeroSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);

  const totalSlides = slides && slides.length > 0 ? slides.length : 0;

  const nextSlide = useCallback(() => {
    if (totalSlides === 0) return;
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    if (totalSlides === 0) return;
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  // Autoplay interval (4.5 detik)
  useEffect(() => {
    if (totalSlides <= 1 || isPaused) return;

    const timer = setInterval(() => {
      nextSlide();
    }, 4500);

    return () => clearInterval(timer);
  }, [totalSlides, isPaused, nextSlide]);

  if (totalSlides === 0) return null;

  // Swipe gesture for touch devices
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;

    if (Math.abs(diff) > 40) {
      if (diff > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }
    touchStartX.current = null;
  };

  return (
    <div 
      className="relative w-full aspect-[4/3] sm:aspect-[16/11] rounded-3xl overflow-hidden shadow-[0_20px_50px_-15px_rgba(0,0,0,0.12)] border-4 border-white bg-slate-900 group select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      aria-label="Galeri Layanan VetQu"
    >
      {/* Slides Container */}
      <div className="relative w-full h-full">
        {slides.map((slide, index) => {
          const isActive = index === currentIndex;
          return (
            <div
              key={slide.image + index}
              className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
              }`}
            >
              <img
                src={slide.image}
                alt={slide.caption || headline || `Layanan VetQu ${index + 1}`}
                className={`w-full h-full object-cover object-center transition-transform duration-1000 ease-out ${
                  isActive ? 'scale-100' : 'scale-105'
                }`}
                loading={index === 0 ? 'eager' : 'lazy'}
              />

              {/* Gradient Scrim for Contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent pointer-events-none"></div>

              {/* Floating Slide Caption & Badge */}
              <div className="absolute bottom-6 left-6 right-6 z-20 transition-all duration-500 ease-out">
                {slide.badge && (
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-slate-900 font-bold text-xs mb-2 shadow-sm border border-white/40">
                    <Sparkles className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                    <span>{slide.badge}</span>
                  </div>
                )}
                {slide.caption && (
                  <p className="text-white text-sm sm:text-base font-medium line-clamp-2 drop-shadow-md text-slate-100">
                    {slide.caption}
                  </p>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Navigation Buttons (Prev / Next) */}
      {totalSlides > 1 && (
        <>
          <button
            type="button"
            onClick={prevSlide}
            aria-label="Slide Sebelumnya"
            className="absolute left-3 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-slate-900/40 hover:bg-slate-900/80 text-white backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-200 border border-white/20 hover:scale-105 active:scale-95 cursor-pointer"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            type="button"
            onClick={nextSlide}
            aria-label="Slide Berikutnya"
            className="absolute right-3 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-slate-900/40 hover:bg-slate-900/80 text-white backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-200 border border-white/20 hover:scale-105 active:scale-95 cursor-pointer"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </>
      )}

      {/* Progress Dots Indicator */}
      {totalSlides > 1 && (
        <div className="absolute top-4 right-4 z-30 flex items-center gap-1.5 bg-slate-950/50 backdrop-blur-md px-2.5 py-1.5 rounded-full border border-white/10">
          {slides.map((_, dotIdx) => (
            <button
              key={dotIdx}
              type="button"
              onClick={() => setCurrentIndex(dotIdx)}
              aria-label={`Lihat slide ${dotIdx + 1}`}
              className={`transition-all duration-300 rounded-full cursor-pointer ${
                dotIdx === currentIndex
                  ? 'w-6 h-2 bg-orange-500'
                  : 'w-2 h-2 bg-white/50 hover:bg-white/80'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
