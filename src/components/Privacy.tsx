import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from './Navigation';
import Footer from './Footer';

export default function Privacy() {
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
            <h1 className="font-head text-4xl sm:text-5xl font-bold text-black mb-4">Polityka Prywatności Zelit</h1>
            
            <p className="text-black/70 mb-8">Ostatnia aktualizacja: 7 grudnia 2025</p>

            <p className="text-black mb-6">
              Niniejsza Polityka Prywatności opisuje zasady i procedury dotyczące zbierania, wykorzystywania oraz ujawniania Twoich danych podczas korzystania z Serwisu, a także informuje o Twoich prawach prywatności i sposobach, w jakie prawo chroni Twoje dane.
            </p>

            <p className="text-black mb-8">
              Wykorzystujemy Twoje dane osobowe w celu świadczenia i ulepszania usług. Korzystając z Serwisu, zgadzasz się na zbieranie i wykorzystywanie informacji zgodnie z nininiejszą Polityką Prywatności.
            </p>

            <h2 className="font-head text-2xl sm:text-3xl font-bold text-black mt-8 mb-4">Interpretacje i definicje</h2>
            
            <h3 className="font-head text-xl sm:text-2xl font-semibold text-black mt-6 mb-3">Interpretacja</h3>
            <p className="text-black mb-4">
              Słowa rozpoczynające się wielką literą mają znaczenia zdefiniowane poniżej. Definicje te mają takie samo znaczenie bez względu na to, czy występują w liczbie pojedynczej, czy mnogiej.
            </p>

            <h3 className="font-head text-xl sm:text-2xl font-semibold text-black mt-6 mb-3">Definicje</h3>
            <ul className="list-disc pl-6 space-y-2 text-black mb-6">
              <li><strong>Konto</strong> – unikalne konto utworzone dla Ciebie w celu uzyskania dostępu do naszego Serwisu lub jego części.</li>
              <li><strong>Podmiot powiązany</strong> – jednostka, która kontroluje, jest kontrolowana przez lub znajduje się pod wspólną kontrolą z daną stroną (≥50% udziałów lub głosów).</li>
              <li><strong>Firma / Spółka („Zelit", „my", „nas", „nasze")</strong> – Zakład Elektroniczny Hubert Litwinionek, ul. Szybowcowa 22, 70-843 Szczecin</li>
              <li><strong>Pliki Cookies</strong> – niewielkie pliki zapisywane na Twoim urządzeniu w celu przechowywania danych o przeglądaniu.</li>
              <li><strong>Kraj</strong> – Polska.</li>
              <li><strong>Urządzenie</strong> – komputer, telefon, tablet lub inne urządzenie umożliwiające dostęp do Serwisu.</li>
              <li><strong>Dane osobowe</strong> – wszelkie informacje o zidentyfikowanej lub możliwej do zidentyfikowania osobie fizycznej.</li>
              <li><strong>Usługa / Serwis</strong> – strona internetowa www.zelit.pl</li>
              <li><strong>Dostawca usług</strong> – osoba fizyczna lub prawna przetwarzająca dane w imieniu Firmy.</li>
              <li><strong>Dane o użytkowaniu</strong> – dane zbierane automatycznie podczas korzystania z Serwisu.</li>
              <li><strong>Ty / Użytkownik</strong> – osoba korzystająca z Serwisu.</li>
            </ul>

            <h2 className="font-head text-2xl sm:text-3xl font-bold text-black mt-8 mb-4">Zbieranie i wykorzystywanie danych osobowych</h2>
            
            <h3 className="font-head text-xl sm:text-2xl font-semibold text-black mt-6 mb-3">Rodzaje zbieranych danych</h3>
            
            <h4 className="font-head text-lg sm:text-xl font-semibold text-black mt-4 mb-2">Dane osobowe</h4>
            <p className="text-black mb-3">Podczas korzystania z Serwisu możemy poprosić Cię o podanie danych identyfikacyjnych, m.in.:</p>
            <ul className="list-disc pl-6 space-y-1 text-black mb-4">
              <li>adres e-mail</li>
              <li>imię i nazwisko</li>
              <li>numer telefonu</li>
              <li>dane techniczne (adres IP, logi)</li>
            </ul>

            <h4 className="font-head text-lg sm:text-xl font-semibold text-black mt-4 mb-2">Dane o użytkowaniu</h4>
            <p className="text-black mb-3">Zbierane automatycznie, obejmują m.in.:</p>
            <ul className="list-disc pl-6 space-y-1 text-black mb-4">
              <li>adres IP, rodzaj przeglądarki, wersję przeglądarki</li>
              <li>odwiedzane strony, czas wizyty</li>
              <li>identyfikatory urządzeń</li>
              <li>dane techniczne wysyłane przez przeglądarkę lub urządzenie</li>
            </ul>

            <h4 className="font-head text-lg sm:text-xl font-semibold text-black mt-4 mb-2">Pliki Cookies i technologie śledzące</h4>
            <p className="text-black mb-4">
              Stosujemy pliki cookies sesyjne i trwałe w celu:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-black mb-4">
              <li>zapewnienia poprawnego działania Witryny</li>
              <li>zapamiętywania preferencji</li>
              <li>analizy korzystania z Serwisu</li>
            </ul>
            <p className="text-black mb-4">
              Użytkownik może odmówić zapisu cookies w ustawieniach przeglądarki, lecz może to ograniczyć działanie Serwisu.
            </p>

            <h3 className="font-head text-xl sm:text-2xl font-semibold text-black mt-6 mb-3">Wykorzystanie danych osobowych</h3>
            <p className="text-black mb-3">Firma może wykorzystywać dane w następujących celach:</p>
            <ul className="list-disc pl-6 space-y-1 text-black mb-4">
              <li>dostarczanie i utrzymanie Serwisu</li>
              <li>kontakt z Tobą poprzez e-mail, telefon, powiadomienia</li>
              <li>zarządzanie Twoim kontem (jeśli dotyczy)</li>
              <li>realizacja umów i zamówień</li>
              <li>udzielanie odpowiedzi na zapytania</li>
              <li>analiza działania Serwisu i marketing</li>
              <li>obsługa ewentualnych transferów biznesowych</li>
            </ul>
            <p className="text-black mb-3">Dane mogą być udostępniane:</p>
            <ul className="list-disc pl-6 space-y-1 text-black mb-4">
              <li>dostawcom usług IT i narzędzi (np. Formspree – formularz kontaktowy)</li>
              <li>partnerom biznesowym</li>
              <li>organom publicznym, jeśli prawo tego wymaga</li>
            </ul>

            <h4 className="font-head text-lg sm:text-xl font-semibold text-black mt-4 mb-2">Okres przechowywania danych</h4>
            <p className="text-black mb-4">
              Dane osobowe będą przechowywane tak długo, jak jest to potrzebne do:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-black mb-4">
              <li>udzielenia odpowiedzi na Twoje zapytanie</li>
              <li>realizacji umów</li>
              <li>wypełnienia obowiązków prawnych</li>
            </ul>
            <p className="text-black mb-4">
              Dane o użytkowaniu przechowywane są krócej, chyba że służą celom bezpieczeństwa lub optymalizacji.
            </p>

            <h4 className="font-head text-lg sm:text-xl font-semibold text-black mt-4 mb-2">Transfer danych</h4>
            <p className="text-black mb-4">
              Dane mogą być przetwarzane poza granicami Polski, w miejscach gdzie znajdują się nasi usługodawcy, z zachowaniem odpowiednich zabezpieczeń zgodnych z prawem UE.
            </p>

            <h4 className="font-head text-lg sm:text-xl font-semibold text-black mt-4 mb-2">Usuwanie danych osobowych</h4>
            <p className="text-black mb-4">
              Masz prawo zażądać usunięcia swoich danych. Możujesz także aktualizować lub poprawiać dane, kontaktując się z nami: <a href="mailto:biuro@zelit.pl" className="text-green-600 hover:text-green-700 underline">📧 biuro@zelit.pl</a>
            </p>

            <h4 className="font-head text-lg sm:text-xl font-semibold text-black mt-4 mb-2">Ujawnianie danych</h4>
            <p className="text-black mb-3">Możemy ujawnić dane w przypadku:</p>
            <ul className="list-disc pl-6 space-y-1 text-black mb-4">
              <li>obowiązku prawnego</li>
              <li>postępowania sądowego</li>
              <li>ochrony bezpieczeństwa publicznego</li>
              <li>ochrony praw firmy</li>
            </ul>

            <h4 className="font-head text-lg sm:text-xl font-semibold text-black mt-4 mb-2">Bezpieczeństwo danych</h4>
            <p className="text-black mb-4">
              Stosujemy środki techniczne i organizacyjne chroniące dane, jednak żaden system nie jest w 100% bezpieczny.
            </p>

            <h4 className="font-head text-lg sm:text-xl font-semibold text-black mt-4 mb-2">Dzieci</h4>
            <p className="text-black mb-4">
              Serwis nie jest przeznaczony dla dzieci poniżej 13 roku życia.
            </p>

            <h4 className="font-head text-lg sm:text-xl font-semibold text-black mt-4 mb-2">Linki zewnętrzne</h4>
            <p className="text-black mb-4">
              Nie ponosimy odpowiedzialności za treść i polityki prywatności stron zewnętrznych.
            </p>

            <h4 className="font-head text-lg sm:text-xl font-semibold text-black mt-4 mb-2">Zmiany w polityce</h4>
            <p className="text-black mb-4">
              Zastrzegamy prawo do aktualizacji polityki. Informacja o zmianie zostanie umieszczona na tej stronie.
            </p>

            <h4 className="font-head text-lg sm:text-xl font-semibold text-black mt-4 mb-2">Kontakt</h4>
            <p className="text-black mb-8">
              W sprawach dotyczących prywatności możesz się z nami skontaktować: <a href="mailto:biuro@zelit.pl" className="text-green-600 hover:text-green-700 underline">📧 biuro@zelit.pl</a>
            </p>

            <h2 className="font-head text-2xl sm:text-3xl font-bold text-black mt-8 mb-4">SEKCJA RODO – Informacja o przetwarzaniu danych osobowych</h2>

            <h3 className="font-head text-xl sm:text-2xl font-semibold text-black mt-6 mb-3">1. Administrator danych</h3>
            <p className="text-black mb-4">
              Zakład Elektroniczny Hubert Litwinionek,<br />
              ul. Szybowcowa 22, 70-843 Szczecin<br />
              E-mail: <a href="mailto:biuro@zelit.pl" className="text-green-600 hover:text-green-700 underline">biuro@zelit.pl</a>
            </p>

            <h3 className="font-head text-xl sm:text-2xl font-semibold text-black mt-6 mb-3">2. Cele przetwarzania i podstawy prawne</h3>
            <p className="text-black mb-3">Twoje dane przetwarzamy w następujących celach:</p>
            <ul className="list-disc pl-6 space-y-2 text-black mb-4">
              <li><strong>Obsługa zapytań przez formularz kontaktowy</strong><br />Podstawa prawna: art. 6 ust. 1 lit. b RODO</li>
              <li><strong>Kontakt i korespondencja</strong><br />Podstawa prawna: art. 6 ust. 1 lit. f RODO</li>
              <li><strong>Utrzymanie bezpieczeństwa i kopii zapasowych</strong><br />Podstawa prawna: art. 6 ust. 1 lit. f RODO</li>
            </ul>

            <h3 className="font-head text-xl sm:text-2xl font-semibold text-black mt-6 mb-3">3. Zakres przetwarzanych danych</h3>
            <ul className="list-disc pl-6 space-y-1 text-black mb-4">
              <li>dane identyfikacyjne (imię, nazwisko)</li>
              <li>dane kontaktowe (e-mail, telefon)</li>
              <li>treść wiadomości</li>
              <li>dane techniczne (IP, logi serwera)</li>
            </ul>

            <h3 className="font-head text-xl sm:text-2xl font-semibold text-black mt-6 mb-3">4. Odbiorcy danych</h3>
            <p className="text-black mb-3">Dane mogą być przekazywane:</p>
            <ul className="list-disc pl-6 space-y-2 text-black mb-4">
              <li>firmie Formspree, Inc. (USA) – dostawca formularza kontaktowego<br />Transfer zgodny z EU–US Data Privacy Framework lub SCC</li>
              <li>podmiotom świadczącym usługi IT i hostingowe</li>
            </ul>

            <h3 className="font-head text-xl sm:text-2xl font-semibold text-black mt-6 mb-3">5. Okres przechowywania</h3>
            <ul className="list-disc pl-6 space-y-1 text-black mb-4">
              <li>do 12 miesięcy od zakończenia korespondencji</li>
              <li>do czasu przedawnienia roszczeń – jeśli dotyczy</li>
              <li>dłużej tylko jeśli wymagają tego przepisy prawa</li>
            </ul>

            <h3 className="font-head text-xl sm:text-2xl font-semibold text-black mt-6 mb-3">6. Prawa użytkownika</h3>
            <p className="text-black mb-3">Masz prawo do:</p>
            <ul className="list-disc pl-6 space-y-1 text-black mb-4">
              <li>dostępu do danych</li>
              <li>sprostowania danych</li>
              <li>usunięcia danych</li>
              <li>ograniczenia przetwarzania</li>
              <li>przenoszenia danych</li>
              <li>sprzeciwu</li>
              <li>wniesienia skargi do Prezesa UODO</li>
            </ul>

            <h3 className="font-head text-xl sm:text-2xl font-semibold text-black mt-6 mb-3">7. Dobrowolność podania danych</h3>
            <p className="text-black mb-8">
              Podanie danych jest dobrowolne, lecz niezbędne do uzyskania odpowiedzi.
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

