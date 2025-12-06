import React from 'react';

export default function BrandStrip() {
  const brands = ['Paradox', 'Satel', 'Dahua', 'Roger', 'Jablotron', 'Hikvision', 'Polon-Alfa', 'Esser'];

  return (
    <section className="py-6 lg:py-8">
      {/* większy tytuł nad paskiem, biały tekst */}
      <div className="text-center mb-6 lg:mb-8">
        <span className="font-head uppercase tracking-[0.18em] text-base sm:text-lg md:text-xl lg:text-2xl text-black/95">
          Korzystamy z jakości
        </span>
      </div>

      {/* pasek przez całą szerokość ekranu */}
      <div className="w-full bg-gradient-green border-y py-4 lg:py-6" style={{ borderColor: 'var(--border)' }}>
        <div className="w-full grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 justify-items-center text-center gap-0">
          {brands.map((brand, i) => (
            <div
              key={brand}
              className={`w-full py-2 lg:py-3 ${i > 0 ? 'border-l' : ''}`}
              style={i > 0 ? { borderColor: 'rgba(255,255,255,0.3)' } : undefined}
            >
              <span className="font-head uppercase tracking-[0.22em] leading-none text-sm sm:text-base md:text-lg lg:text-xl text-white">
                {brand}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
