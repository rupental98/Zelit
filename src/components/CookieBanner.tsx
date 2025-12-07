import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { X } from 'lucide-react';

const COOKIE_CONSENT_KEY = 'zelit-cookie-consent';

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Sprawdź, czy użytkownik już wyraził zgodę
    const consent = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!consent) {
      // Pokaż baner po krótkim opóźnieniu dla lepszego UX
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, 'accepted');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, 'declined');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 sm:p-6">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white border-2 rounded-2xl shadow-2xl p-6 sm:p-8 relative" style={{ borderColor: 'var(--green-500)' }}>
          <button
            onClick={handleDecline}
            className="absolute top-4 right-4 p-1 text-black/60 hover:text-black transition-colors"
            aria-label="Zamknij"
          >
            <X className="size-5" />
          </button>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 pr-8">
            <div className="flex-1">
              <h3 className="font-head text-lg sm:text-xl font-semibold text-black mb-2">
                Pliki Cookies
              </h3>
              <p className="font-body text-sm sm:text-base text-black/80 mb-3">
                Ta strona wykorzystuje pliki cookies, aby zapewnić najlepsze doświadczenie. Kontynuując przeglądanie, zgadzasz się na ich użycie zgodnie z naszą{' '}
                <Link to="/polityka-cookies" className="text-green-600 hover:text-green-700 font-medium underline">
                  polityką cookies
                </Link>
                .
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              <button
                onClick={handleAccept}
                className="px-6 py-3 rounded-full text-white font-medium bg-gradient-green hover:shadow-lg transition-all duration-200 whitespace-nowrap"
              >
                Akceptuję
              </button>
              <button
                onClick={handleDecline}
                className="px-6 py-3 rounded-full text-black font-medium border-2 hover:bg-gray-50 transition-all duration-200 whitespace-nowrap"
                style={{ borderColor: 'var(--border)' }}
              >
                Odrzuć
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

