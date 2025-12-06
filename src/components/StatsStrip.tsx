import React from 'react';
import { Award, ThumbsUp, CheckCircle2, Users } from 'lucide-react';

export default function StatsStrip() {
  // Automatyczne liczenie lat doświadczenia od roku rozpoczęcia działalności
  // Rok rozpoczęcia: 1988 (dostosuj jeśli inny)
  const startYear = 1988;
  const currentYear = new Date().getFullYear();
  const yearsOfExperience = currentYear - startYear;

  const items = [
    { icon: Award,        label: `+${yearsOfExperience} lat doświadczenia` },
    { icon: ThumbsUp,     label: '50+ opinii pozytywnych' },
    { icon: Users,        label: '90% zleceń z polecenia' },
    { icon: CheckCircle2, label: '+10000 zrealizowanych instalacji' },
  ];

  return (
    <section className="bg-gradient-green border-y py-2.5" style={{ borderColor: 'var(--border)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 justify-items-center text-center">
          {items.map(({ icon: Icon, label }, i) => (
            <div
              key={label}
              className={`w-full py-1 ${i > 0 ? 'border-l' : ''}`}
              style={i > 0 ? { borderColor: 'rgba(255,255,255,0.3)' } : undefined}
            >
              <Icon className="mx-auto size-6 text-white" />
              <div className="mt-1 font-head leading-none text-[13px] sm:text-sm md:text-base text-white">
                {label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
