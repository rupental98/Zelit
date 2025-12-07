import React, { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import CctvIcon from './CctvIcon';
import ShieldIcon from './ShieldIcon';
import SmartHomeIcon from './SmartHomeIcon';

/** Typewriter bez przeskoków — rezerwuje szerokość najdłuższego słowa */
function Typewriter({
  words,
  typingSpeed = 70,
  deletingSpeed = 40,
  pauseTime = 1200,
}: {
  words: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseTime?: number;
}) {
  const [i, setI] = useState(0);
  const [sub, setSub] = useState('');
  const [del, setDel] = useState(false);
  const longest = useMemo(
    () => words.reduce((a, b) => (a.length >= b.length ? a : b), ''),
    [words]
  );

  useEffect(() => {
    const w = words[i % words.length];
    let t: number;
    if (!del && sub.length < w.length) {
      t = window.setTimeout(() => setSub(w.slice(0, sub.length + 1)), typingSpeed);
    } else if (!del && sub.length === w.length) {
      t = window.setTimeout(() => setDel(true), pauseTime);
    } else if (del && sub.length > 0) {
      t = window.setTimeout(() => setSub(w.slice(0, sub.length - 1)), deletingSpeed);
    } else if (del && sub.length === 0) {
      setDel(false);
      setI((x) => (x + 1) % words.length);
    }
    return () => clearTimeout(t);
  }, [sub, del, i, words, typingSpeed, deletingSpeed, pauseTime]);

  return (
    <span className="inline-grid whitespace-nowrap align-baseline">
      <span style={{ gridArea: '1 / 1 / 2 / 2' }}>
        {sub}
        <span className="ml-0.5 inline-block w-[1px] h-[1.1em] align-[-0.1em] bg-current animate-pulse" />
      </span>
      <span style={{ gridArea: '1 / 1 / 2 / 2' }} className="invisible">
        {longest}
      </span>
    </span>
  );
}

const HERO_IMG = 'https://i.imgur.com/OGmMRvY.jpg';

export default function HeroSection() {
  const typedWords = ['bezpieczeństwo', 'doświadczenie', 'niezawodność', 'spokój', 'profesjonalizm'];

  return (
    <section className="pt-24 pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="relative rounded-3xl border shadow-xl px-6 sm:px-10 py-12 lg:py-14 overflow-hidden min-h-[460px] sm:min-h-[520px] lg:min-h-[560px]"
          style={{ borderColor: 'var(--border)' }}
        >
          {/* tło + gradient (bez zmian) */}
          <img
            src={HERO_IMG}
            alt="Nowoczesny smart dom"
            className="absolute inset-0 w-full h-full object-cover md:object-center"
            style={{ objectPosition: '60% 25%' }}
            loading="eager"
            decoding="async"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white/50 via-white/20 to-white/0" />

          <div className="relative z-10 grid lg:grid-cols-2 gap-10 items-center">
            {/* lewa kolumna */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.8 }}
              className="mt-[5%] md:mt-0"
            >
              <p className="font-head text-xs uppercase tracking-[0.18em] text-black/60">
                Zabezpieczenia domów i firm
              </p>

              <h1 className="mt-3 font-head font-bold tracking-tight leading-tight">
                <span className="block text-4xl sm:text-5xl lg:text-6xl">
                  Postaw na{' '}
                  <span className="text-green-600">
                    <Typewriter words={typedWords} />
                  </span>
                </span>
                <span className="block text-2xl sm:text-3xl lg:text-4xl text-black/80 mt-2">
                  w domu i firmie
                </span>
              </h1>

              {/* SMART KARTY — jak było, tylko proporcje dopracowane */}
              <div className="mt-6 grid grid-cols-3 gap-1 sm:gap-1.5 md:gap-2 lg:gap-3">
                {/* System alarmowy */}
                <a
                  href="#uslugi"
                  className="rounded-lg sm:rounded-xl md:rounded-2xl border border-white/10 bg-[rgba(5,15,20,0.60)] hover:bg-[rgba(5,15,20,0.68)] shadow-sm hover:shadow-md transition-colors p-1.5 sm:p-2.5 md:p-3 lg:p-4 text-white min-h-[100px] sm:min-h-[120px] md:min-h-[130px] lg:min-h-[140px] flex flex-col overflow-hidden"
                >
                  <div className="flex items-start gap-1 sm:gap-1.5 md:gap-2 lg:gap-3 flex-shrink-0">
                    <span className="text-[#2F9959] shrink-0 mt-0.5">
                      <ShieldIcon size={16} className="sm:w-[18px] sm:h-[18px] md:w-[22px] md:h-[22px] lg:w-[26px] lg:h-[26px]" />
                    </span>
                    <h3 className="font-head font-semibold text-[10px] sm:text-[12px] md:text-[14px] lg:text-[18px] xl:text-[19px] leading-[1.15] sm:leading-[1.2] break-words overflow-hidden">
                      System alarmowy
                    </h3>
                  </div>
                  <p className="mt-1 sm:mt-1.5 md:mt-2 text-[9px] sm:text-[10px] md:text-[11px] lg:text-[14px] leading-[1.25] sm:leading-[1.3] md:leading-[1.35] text-white/85 font-body pl-[18px] sm:pl-[20px] md:pl-[26px] lg:pl-[29px] overflow-hidden">
                    Ochrona <span className="text-[#2F9959]">+</span> powiadomienia
                  </p>
                </a>

                {/* Monitoring CCTV */}
                <a
                  href="#uslugi"
                  className="rounded-lg sm:rounded-xl md:rounded-2xl border border-white/10 bg-[rgba(5,15,20,0.60)] hover:bg-[rgba(5,15,20,0.68)] shadow-sm hover:shadow-md transition-colors p-1.5 sm:p-2.5 md:p-3 lg:p-4 text-white min-h-[100px] sm:min-h-[120px] md:min-h-[130px] lg:min-h-[140px] flex flex-col overflow-hidden"
                >
                  <div className="flex items-start gap-1 sm:gap-1.5 md:gap-2 lg:gap-3 flex-shrink-0">
                    <span className="text-[#2F9959] shrink-0 mt-0.5">
                      <CctvIcon className="w-[16px] h-[16px] sm:w-[18px] sm:h-[18px] md:w-[22px] md:h-[22px] lg:w-[26px] lg:h-[26px]" />
                    </span>
                    <h3 className="font-head font-semibold text-[10px] sm:text-[12px] md:text-[14px] lg:text-[18px] xl:text-[19px] leading-[1.15] sm:leading-[1.2] break-words overflow-hidden">
                      Monitoring CCTV
                    </h3>
                  </div>
                  <p className="mt-1 sm:mt-1.5 md:mt-2 text-[9px] sm:text-[10px] md:text-[11px] lg:text-[14px] leading-[1.25] sm:leading-[1.3] md:leading-[1.35] text-white/85 font-body pl-[18px] sm:pl-[20px] md:pl-[26px] lg:pl-[29px] overflow-hidden">
                    Analiza wideo, AI <span className="sm:inline block">zdalny podgląd</span>
                  </p>
                </a>

                {/* Smart home */}
                <a
                  href="#uslugi"
                  className="rounded-lg sm:rounded-xl md:rounded-2xl border border-white/10 bg-[rgba(5,15,20,0.60)] hover:bg-[rgba(5,15,20,0.68)] shadow-sm hover:shadow-md transition-colors p-1.5 sm:p-2.5 md:p-3 lg:p-4 text-white min-h-[100px] sm:min-h-[120px] md:min-h-[130px] lg:min-h-[140px] flex flex-col overflow-hidden"
                >
                  <div className="flex items-start gap-1 sm:gap-1.5 md:gap-2 lg:gap-3 flex-shrink-0">
                    <span className="text-[#2F9959] shrink-0 mt-0.5">
                      <SmartHomeIcon size={16} className="sm:w-[18px] sm:h-[18px] md:w-[22px] md:h-[22px] lg:w-[26px] lg:h-[26px]" />
                    </span>
                    <h3 className="font-head font-semibold text-[10px] sm:text-[12px] md:text-[14px] lg:text-[18px] xl:text-[19px] leading-[1.15] sm:leading-[1.2] break-words overflow-hidden">
                      Smart home
                    </h3>
                  </div>
                  <p className="mt-1 sm:mt-1.5 md:mt-2 text-[9px] sm:text-[10px] md:text-[11px] lg:text-[14px] leading-[1.25] sm:leading-[1.3] md:leading-[1.35] text-white/85 font-body pl-[18px] sm:pl-[20px] md:pl-[26px] lg:pl-[29px] overflow-hidden">
                    Sceny, rolety <span className="sm:inline block">aplikacja</span>
                  </p>
                </a>
              </div>

              <div className="mt-6">
                <a
                  href="#kontakt"
                  className="inline-flex items-center justify-center px-7 h-12 rounded-full text-white font-medium bg-gradient-green hover:shadow-lg transition-all duration-200 hover:scale-[1.02]"
                >
                  Bezpłatna wycena
                </a>
              </div>
            </motion.div>

            {/* prawa kolumna pusta (jak było) */}
            <div className="hidden lg:block" />
          </div>
        </div>
      </div>
    </section>
  );
}
