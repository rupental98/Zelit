// src/components/Navigation.tsx
import React from 'react';

export default function Navigation() {
  return (
    <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-full max-w-5xl px-4">
      <nav
        className="flex items-center justify-between rounded-full border shadow-md bg-white/90 backdrop-blur px-4 py-2 md:px-5 md:py-2.5"
        style={{ borderColor: 'var(--border)' }}
      >
        <div className="flex items-center gap-3">
          {/* Logo */}
          <img
            src="/logozelit.png"
            alt="ZELIT"
            className="h-8 md:h-9 w-auto"
            height={36}
          />
        </div>

        {/* Powiększone linki, usunięty 'Kontakt' z centrum */}
        <div className="hidden md:flex items-center gap-7 text-[15px] lg:text-base font-body font-medium">
          <a className="hover:text-green-600 transition-colors" href="#jak-pracujemy">Jak pracujemy</a>
          <a className="hover:text-green-600 transition-colors" href="#uslugi">Usługi</a>
          <a className="hover:text-green-600 transition-colors" href="#wycena">Wycena</a>
        </div>

        <a
          href="#kontakt"
          className="hidden sm:inline-flex items-center justify-center px-5 h-10 rounded-full text-white font-body font-medium bg-gradient-green hover:shadow-md transition-all duration-200"
          aria-label="Przejdź do kontaktu"
        >
          Kontakt
        </a>
      </nav>
    </div>
  );
}
