import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

function NumBadge({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="
        inline-grid place-items-center
        w-10 h-10 rounded-full bg-white text-[#2F9959]
        font-head font-semibold text-[15px] leading-none
        shrink-0
      "
      style={{ fontFeatureSettings: '"tnum" 1', lineHeight: 1 }}
    >
      {children}
    </span>
  );
}

export default function HowWeWork() {
  const steps = [
    { n: 1, t: 'Konsultacja i wizja lokalna', d: 'Zbieramy wymagania, budżet i termin. Doradzamy optymalne kierunki. Oględziny obiektu, pomiary oraz weryfikacja okablowania i zasilania.' },
    { n: 2, t: 'Projekt + kosztorys', d: 'Schemat, lista urządzeń i jasna wycena — bez ukrytych kosztów.' },
    { n: 3, t: 'Montaż i odbiór', d: 'Instalacja, konfiguracja, szkolenie użytkowników i protokoły odbioru.' },
    { n: 4, t: 'Serwis', d: 'Gwarancyjny i pogwarancyjny, stałe konserwacje systemów' },
  ];

  return (
    <section id="jak-pracujemy" className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* NAGŁÓWEK – CZARNY */}
        <div className="text-center mb-12">
          <h2 className="font-head text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-black">
            Jak pracujemy?
          </h2>
          <p className="mt-4 font-body text-lg text-black/70 max-w-3xl mx-auto">
            Przejmujemy pełną odpowiedzialność: od wizji lokalnej po serwis 24/7. Transparentnie, terminowo, na sprzęcie z atestami.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {steps.map((step, i) => (
            <motion.div
              key={step.n}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="relative h-full"
            >
              <div
                className="rounded-2xl border bg-gradient-green p-8 shadow-lg hover:shadow-xl transition-shadow text-white flex flex-col h-full min-h-[260px]"
                style={{ borderColor: 'var(--border)' }}
              >
                <div className="flex items-center gap-4 mb-3">
                  <NumBadge>{step.n}</NumBadge>

                  <h3 className="font-head text-xl font-semibold leading-tight text-white">
                    {step.t}
                  </h3>
                </div>

                <p className="font-body text-white/90 leading-relaxed text-[15px]">
                  {step.d}
                </p>

                <div className="mt-auto" />
              </div>

              {/* STRZAŁKI */}
              {i % 2 !== 1 && i < steps.length - 1 && (
                <div className="pointer-events-none hidden sm:block lg:hidden absolute top-1/2 left-full -translate-y-1/2 w-6 text-black">
                  <ChevronRight className="mx-auto size-5 drop-shadow" />
                </div>
              )}

              {i % 4 !== 3 && i < steps.length - 1 && (
                <div className="pointer-events-none hidden lg:block absolute top-1/2 left-full -translate-y-1/2 w-6 text-black">
                  <ChevronRight className="mx-auto size-5 drop-shadow" />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
