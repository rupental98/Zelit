import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from './Navigation';
import Footer from './Footer';

export default function Cookies() {
  return (
    <div
      className="min-h-screen bg-white text-black"
      style={{
        // @ts-ignore CSS Custom Props
        "--green-500": "#2F9959",
        // @ts-ignore
        "--green-600": "#2A8A50",
        // @ts-ignore
        "--green-100": "#E8F5E8",
        // @ts-ignore
        "--border": "#E5E7EB",
        // @ts-ignore
        "--gray-50": "#F9FAFB",
      }}
    >
      <style>{`
        :root { 
          --green-500:#2F9959; 
          --green-600:#2A8A50; 
          --green-100:#E8F5E8;
          --border:#E5E7EB; 
          --gray-50:#F9FAFB;
        }
        .font-head { font-family: 'Poppins','Inter',system-ui,-apple-system,Segoe UI,Roboto,Arial,sans-serif; }
        .font-body { font-family: 'Inter',system-ui,-apple-system,Segoe UI,Roboto,Arial,sans-serif; }
        .bg-gradient-green { background: linear-gradient(135deg, var(--green-500) 0%, var(--green-600) 100%); }
      `}</style>

      <Navigation />
      
      <main className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none font-body">
            <h1 className="font-head text-4xl sm:text-5xl font-bold text-black mb-8">Polityka Cookies</h1>

            <p className="text-black mb-6">
              Niniejsza Polityka Cookies wyjaśnia, czym są pliki cookies, w jaki sposób z nich korzystamy oraz jakie masz prawa związane z ich używaniem.
            </p>

            <h2 className="font-head text-2xl sm:text-3xl font-bold text-black mt-8 mb-4">1. Czym są pliki cookies?</h2>
            <p className="text-black mb-4">
              Cookies to niewielkie pliki tekstowe zapisywane na urządzeniu użytkownika podczas odwiedzania strony internetowej. Umożliwiają one m.in.:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-black mb-6">
              <li>prawidłowe działanie serwisu,</li>
              <li>zapamiętywanie ustawień i preferencji,</li>
              <li>analizę sposobu korzystania z witryny (jeśli takie narzędzia są używane).</li>
            </ul>

            <h2 className="font-head text-2xl sm:text-3xl font-bold text-black mt-8 mb-4">2. Jakie pliki cookies wykorzystujemy?</h2>
            <p className="text-black mb-4">
              Nasza strona może wykorzystywać następujące typy plików cookies:
            </p>

            <h3 className="font-head text-xl sm:text-2xl font-semibold text-black mt-6 mb-3">a) Cookies niezbędne (techniczne)</h3>
            <p className="text-black mb-3">Są wymagane do prawidłowego działania strony, w tym m.in. do:</p>
            <ul className="list-disc pl-6 space-y-1 text-black mb-4">
              <li>wyświetlania treści,</li>
              <li>obsługi formularzy,</li>
              <li>zapewnienia bezpieczeństwa sesji.</li>
            </ul>
            <p className="text-black mb-6">
              Bez tych plików korzystanie ze strony nie byłoby możliwe.
            </p>

            <h3 className="font-head text-xl sm:text-2xl font-semibold text-black mt-6 mb-3">b) Cookies funkcjonalne</h3>
            <p className="text-black mb-6">
              Służą do zapamiętywania Twoich wyborów i ustawień (np. preferencji językowych).<br />
              Nie służą do śledzenia użytkownika.
            </p>

            <h3 className="font-head text-xl sm:text-2xl font-semibold text-black mt-6 mb-3">c) Cookies analityczne i marketingowe (używane tylko jeśli włączysz takie narzędzia)</h3>
            <p className="text-black mb-3">Pozwalają m.in.:</p>
            <ul className="list-disc pl-6 space-y-1 text-black mb-4">
              <li>analizować ruch na stronie (Google Analytics),</li>
              <li>tworzyć statystyki odwiedzin,</li>
              <li>prowadzić działania reklamowe (Meta Pixel, Google Ads).</li>
            </ul>
            <p className="text-black mb-6">
              Te cookies są stosowane tylko za Twoją zgodą, zgodnie z dyrektywą ePrivacy.<br />
              Jeżeli aktualnie nie korzystamy z analityki ani narzędzi reklamowych, pliki tego typu nie są aktywne.
            </p>

            <h2 className="font-head text-2xl sm:text-3xl font-bold text-black mt-8 mb-4">3. Zarządzanie cookies</h2>
            <p className="text-black mb-3">Użytkownik może w każdej chwili:</p>
            <ul className="list-disc pl-6 space-y-1 text-black mb-4">
              <li>zablokować zapisywanie cookies,</li>
              <li>usunąć już zapisane cookies,</li>
              <li>zmienić ustawienia przeglądarki tak, aby informowała o ich zapisie.</li>
            </ul>
            <p className="text-black mb-3">Instrukcje dla głównych przeglądarek:</p>
            <ul className="list-disc pl-6 space-y-1 text-black mb-6">
              <li><strong>Chrome:</strong> chrome://settings/cookies</li>
              <li><strong>Firefox:</strong> about:preferences#privacy</li>
              <li><strong>Safari:</strong> Preferencje → Prywatność</li>
              <li><strong>Edge:</strong> edge://settings/content/cookies</li>
            </ul>

            <h2 className="font-head text-2xl sm:text-3xl font-bold text-black mt-8 mb-4">4. Cookies stron trzecich</h2>
            <p className="text-black mb-4">
              Niektóre usługi zewnętrzne mogą tworzyć własne pliki cookies, w szczególności:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-black mb-6">
              <li>dostawcy narzędzi analitycznych (np. Google Analytics),</li>
              <li>narzędzia do osadzania treści (np. YouTube, Google Maps).</li>
            </ul>
            <p className="text-black mb-6">
              W takim przypadku obowiązują polityki prywatności tych usług.
            </p>

            <h2 className="font-head text-2xl sm:text-3xl font-bold text-black mt-8 mb-4">5. Zmiany w polityce cookies</h2>
            <p className="text-black mb-6">
              Zastrzegamy sobie prawo do wprowadzania zmian w niniejszej Polityce Cookies.<br />
              Aktualna wersja zawsze znajduje się na tej stronie.
            </p>

            <h2 className="font-head text-2xl sm:text-3xl font-bold text-black mt-8 mb-4">6. Kontakt</h2>
            <p className="text-black mb-8">
              W razie pytań dotyczących cookies lub prywatności danych skontaktuj się z nami:<br />
              <a href="mailto:biuro@zelit.pl" className="text-green-600 hover:text-green-700 underline">📧 biuro@zelit.pl</a>
            </p>

            <div className="mt-12 pt-8 border-t" style={{ borderColor: 'var(--border)' }}>
              <Link 
                to="/" 
                className="inline-flex items-center justify-center px-6 h-12 rounded-full text-white font-medium bg-gradient-green hover:shadow-md transition-all duration-200"
              >
                ← Powrót do strony głównej
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

