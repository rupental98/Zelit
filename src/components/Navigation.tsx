// src/components/Navigation.tsx
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-full max-w-5xl px-4">
      {/* Mobile - bez kontenera, tylko logo i hamburger */}
      <div className="md:hidden flex items-center justify-between">
        <img
          src="/logozelit.png"
          alt="ZELIT"
          className="h-8 w-auto max-w-[120px] object-contain"
          height={36}
        />
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="p-1 text-black hover:text-green-600 transition-colors flex items-center justify-center"
          aria-label="Menu"
        >
          {isMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {/* Desktop - z kontenerem */}
      <nav
        className="hidden md:flex items-center justify-between rounded-full border shadow-md bg-white/90 backdrop-blur px-5 py-2.5"
        style={{ borderColor: 'var(--border)' }}
      >
        <div className="flex items-center gap-3 flex-shrink-0 min-w-0">
          {/* Logo */}
          <img
            src="/logozelit.png"
            alt="ZELIT"
            className="h-9 w-auto object-contain"
            height={36}
          />
        </div>

        {/* Powiększone linki, usunięty 'Kontakt' z centrum - desktop */}
        <div className="flex items-center gap-7 text-[15px] lg:text-base font-body font-medium flex-shrink-0">
          <a className="hover:text-green-600 transition-colors whitespace-nowrap" href="#jak-pracujemy">Jak pracujemy</a>
          <a className="hover:text-green-600 transition-colors whitespace-nowrap" href="#uslugi">Usługi</a>
          <a className="hover:text-green-600 transition-colors whitespace-nowrap" href="#wycena">Wycena</a>
        </div>

        {/* Przycisk Kontakt - desktop */}
        <a
          href="#kontakt"
          className="inline-flex items-center justify-center px-5 h-10 rounded-full text-white font-body font-medium bg-gradient-green hover:shadow-md transition-all duration-200 text-base flex-shrink-0 whitespace-nowrap"
          aria-label="Przejdź do kontaktu"
        >
          Kontakt
        </a>
      </nav>

      {/* Menu mobilne */}
      {isMenuOpen && (
        <div className="md:hidden mt-2 rounded-xl border shadow-lg bg-white/95 backdrop-blur p-2" style={{ borderColor: 'var(--border)' }}>
          <div className="flex flex-col gap-1.5">
            <a 
              href="#jak-pracujemy" 
              className="px-3 py-1.5 text-black hover:text-green-600 transition-colors font-body font-medium rounded-md hover:bg-green-50 text-sm"
              onClick={() => setIsMenuOpen(false)}
            >
              Jak pracujemy
            </a>
            <a 
              href="#uslugi" 
              className="px-3 py-1.5 text-black hover:text-green-600 transition-colors font-body font-medium rounded-md hover:bg-green-50 text-sm"
              onClick={() => setIsMenuOpen(false)}
            >
              Usługi
            </a>
            <a 
              href="#wycena" 
              className="px-3 py-1.5 text-black hover:text-green-600 transition-colors font-body font-medium rounded-md hover:bg-green-50 text-sm"
              onClick={() => setIsMenuOpen(false)}
            >
              Wycena
            </a>
            <a 
              href="#kontakt" 
              className="px-3 py-1.5 text-center text-white font-body font-medium bg-gradient-green rounded-md hover:shadow-md transition-all duration-200 text-sm"
              onClick={() => setIsMenuOpen(false)}
            >
              Kontakt
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
