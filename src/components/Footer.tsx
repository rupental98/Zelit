import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <>
      {/* Zielony pasek oddzielający */}
      <div className="h-2 bg-gradient-green"></div>
      
      <footer className="py-12 bg-white text-black border-t" style={{ borderColor: 'var(--border)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* 4 kolumny na desktopie, 2 na sm */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            {/* Logo */}
            <div>
              <img
                src="/logozelit.png"
                alt="Zakład Elektroniczny Hubert Litwinionek — logo"
                className="h-32 w-auto md:h-40 lg:h-48 xl:h-56 object-contain"
              />
              <span className="sr-only">Zakład Elektroniczny Hubert Litwinionek</span>
            </div>

            {/* Kontakt */}
            <div>
              <div className="font-head font-semibold text-lg mb-4 text-black">
                Kontakt
              </div>
              <div className="font-body space-y-1">
                <p>ul. Szybowcowa 22, 70-843 Szczecin</p>
                <p>
                  tel.{' '}
                  <a
                    href="tel:+48667476858"
                    className="font-medium hover:text-green-600 underline decoration-transparent hover:decoration-inherit transition"
                  >
                    667-476-858
                  </a>
                </p>
                <p>
                  e-mail:{' '}
                  <a
                    href="mailto:biuro@zelit.pl"
                    className="font-medium hover:text-green-600 underline decoration-transparent hover:decoration-inherit transition"
                  >
                    biuro@zelit.pl
                  </a>
                </p>
              </div>
            </div>

            {/* Szybkie linki */}
            <div>
              <div className="font-head font-semibold text-lg mb-4 text-black">
                Szybkie linki
              </div>
              <ul className="font-body space-y-2">
                <li><a className="hover:text-green-600 transition-colors" href="#jak-pracujemy">Jak pracujemy</a></li>
                <li><a className="hover:text-green-600 transition-colors" href="#uslugi">Usługi</a></li>
                <li><a className="hover:text-green-600 transition-colors" href="#wycena">Wycena</a></li>
                <li><a className="hover:text-green-600 transition-colors" href="#kontakt">Kontakt</a></li>
              </ul>
            </div>

            {/* Prywatność */}
            <div>
              <div className="font-head font-semibold text-lg mb-4 text-black">
                Prywatność
              </div>
              <ul className="font-body space-y-2">
                <li><Link to="/privacy" className="hover:text-green-600 transition-colors">Polityka prywatności</Link></li>
                <li><Link to="/polityka-cookies" className="hover:text-green-600 transition-colors">Polityka cookies</Link></li>
              </ul>
            </div>
          </div>

          <div className="pt-6 border-t text-center text-sm font-body" style={{ borderColor: 'var(--border)' }}>
            © {new Date().getFullYear()} Zakład Elektroniczny Hubert Litwinionek • Wszystkie prawa zastrzeżone
          </div>
        </div>
      </footer>
    </>
  );
}