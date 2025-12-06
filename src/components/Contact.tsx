import { Phone, ArrowRight, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="kontakt" className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-head text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-black">Kontakt</h2>
          <p className="mt-4 font-body text-lg text-black/70">Masz pytania? Napisz, oddzwonimy.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 items-center">
          {/* Grafika po lewej */}
          <div className="flex items-center justify-center">
            <img 
              src="/logokontakt.png" 
              alt="Kontakt ZELIT" 
              className="w-full h-auto rounded-2xl object-contain"
            />
          </div>

          {/* Box z formularzem po prawej */}
          <div className="rounded-2xl border bg-gradient-green p-8 lg:p-12 shadow-lg text-white" style={{ borderColor: "var(--border)" }}>
            <div className="mb-8">
              <h3 className="font-head text-xl font-semibold text-white mb-4">Zakład Elektroniczny Hubert Litwinionek</h3>
              <div className="space-y-2 font-body text-white/90">
                <p className="flex items-center gap-2"><MapPin className="size-4 text-white" />ul. Szybowcowa 22, 70-843 Szczecin</p>
                <p className="flex items-center gap-2"><Phone className="size-4 text-white" />tel. kom. <a href="tel:+48667476858" className="text-white hover:text-white/80 font-medium underline">667-476-858</a></p>
                <p className="flex items-center gap-2"><ArrowRight className="size-4 text-white" />e-mail: <a href="mailto:biuro@zelit.pl" className="text-white hover:text-white/80 font-medium underline">biuro@zelit.pl</a></p>
              </div>
            </div>

            <form onSubmit={(e)=>e.preventDefault()} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-white mb-2">Imię i nazwisko</label>
                  <input className="w-full h-12 rounded-xl border px-4 focus:ring-2 focus:ring-white focus:border-white transition-colors bg-white text-black" style={{ borderColor: "var(--border)" }} placeholder="Jan Kowalski" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-white mb-2">E-mail</label>
                  <input type="email" className="w-full h-12 rounded-xl border px-4 focus:ring-2 focus:ring-white focus:border-white transition-colors bg-white text-black" style={{ borderColor: "var(--border)" }} placeholder="jan@firma.pl" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-white mb-2">Telefon <span className="text-white/70">(opcjonalnie – szybszy kontakt)</span></label>
                <input className="w-full h-12 rounded-xl border px-4 focus:ring-2 focus:ring-white focus:border-white transition-colors bg-white text-black" style={{ borderColor: "var(--border)" }} placeholder="+48123456789" />
              </div>
              <div>
                <label className="block text-sm font-medium text-white mb-2">Treść wiadomości</label>
                <textarea className="w-full min-h-[120px] rounded-xl border px-4 py-3 focus:ring-2 focus:ring-white focus:border-white transition-colors bg-white text-black" style={{ borderColor: "var(--border)" }} placeholder="Opisz krótko potrzeby: dom/firma, liczba pomieszczeń, terminy…" />
              </div>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <button type="submit" className="inline-flex items-center justify-center px-8 h-12 rounded-full text-green-600 font-medium bg-white hover:shadow-lg transition-all duration-200">
                  Wyślij wiadomość
                </button>
                <a href="mailto:biuro@zelit.pl" className="text-sm text-white hover:text-white/80 font-medium underline">lub napisz: biuro@zelit.pl</a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}