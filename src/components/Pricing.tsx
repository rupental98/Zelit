import { Calculator, Wrench } from 'lucide-react';

export default function Pricing() {
  return (
    <section id="wycena" className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-head text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-black">Wycena</h2>
          <p className="mt-4 font-body text-lg text-black/70">Dwa warianty – oba prowadzą do szybkiego kontaktu i doprecyzowania szczegółów</p>
        </div>

        {/* Systemy Alarmowe */}
        <div className="mb-12">
          <h3 className="font-head text-2xl sm:text-3xl font-bold text-black mb-6 text-center">Systemy Alarmowe</h3>
          <div className="grid md:grid-cols-2 gap-6 items-stretch">
            {/* STANDARD */}
            <div className="rounded-2xl border bg-gradient-green p-8 shadow-lg hover:shadow-xl transition-all duration-200 text-white flex flex-col h-full" style={{ borderColor: "var(--border)" }}>
              <div className="flex items-center gap-4 mb-6">
                <div className="size-12 rounded-xl flex items-center justify-center text-green-600 bg-white"><Calculator className="size-6" /></div>
                <h4 className="font-head text-2xl font-semibold">STANDARD</h4>
              </div>
              <div className="flex gap-6 mb-6 flex-grow">
                <ul className="space-y-3 font-body flex-1">
                  {["4 czujniki PIR", "Klawiatura", "Sygnalizator", "Moduł GSM", "Centrala"].map(item => (
                    <li key={item} className="flex items-center gap-3">
                      <span className="size-2 rounded-full bg-white" />
                      <span className="text-white/90">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex-shrink-0 text-right">
                  <p className="font-head text-3xl font-bold mb-2">2 500,00 zł</p>
                  <p className="font-body text-white/90 text-sm mb-4">System alarmowy</p>
                  <div className="space-y-2 font-body text-white/90 text-sm">
                    <p>Montaż do 1h</p>
                    <p>3 lata gwarancji</p>
                  </div>
                </div>
              </div>
              <a href="#kontakt" className="inline-flex items-center justify-center w-full h-12 rounded-full text-green-600 font-medium bg-white hover:shadow-lg transition-all duration-200 mt-auto">
                Przejdź do kontaktu
              </a>
            </div>

            {/* PRO */}
            <div className="rounded-2xl border bg-black p-8 shadow-lg hover:shadow-xl transition-all duration-200 text-white flex flex-col h-full" style={{ borderColor: "var(--border)" }}>
              <div className="flex items-center gap-4 mb-6">
                <div className="size-12 rounded-xl flex items-center justify-center text-black bg-white"><Wrench className="size-6" /></div>
                <h4 className="font-head text-2xl font-semibold">PRO</h4>
              </div>
              <p className="font-body text-white/90 mb-6">Indywidualnie dostosowane do potrzeb klienta (dom, firma, obiekt).</p>
              <ul className="space-y-3 font-body mb-6 flex-grow">
                {["Audyt i projekt rozwiązania", "Dobór sprzętu (SSWiN/SAP/CCTV/KD)", "Integracje (smart home, GSM)", "Wycena i harmonogram"].map(item => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="size-2 rounded-full bg-white" />
                    <span className="text-white/90">{item}</span>
                  </li>
                ))}
              </ul>
              <a href="#kontakt" className="inline-flex items-center justify-center w-full h-12 rounded-full text-green-600 font-medium bg-white hover:shadow-lg transition-all duration-200 mt-auto">
                Przejdź do kontaktu
              </a>
            </div>
          </div>
        </div>

        {/* Monitoring */}
        <div>
          <h3 className="font-head text-2xl sm:text-3xl font-bold text-black mb-6 text-center">Monitoring</h3>
          <div className="grid md:grid-cols-2 gap-6 items-stretch">
            {/* STANDARD */}
            <div className="rounded-2xl border bg-gradient-green p-8 shadow-lg hover:shadow-xl transition-all duration-200 text-white flex flex-col h-full" style={{ borderColor: "var(--border)" }}>
              <div className="flex items-center gap-4 mb-6">
                <div className="size-12 rounded-xl flex items-center justify-center text-green-600 bg-white"><Calculator className="size-6" /></div>
                <h4 className="font-head text-2xl font-semibold">STANDARD</h4>
              </div>
              <div className="flex gap-6 mb-6 flex-grow">
                <ul className="space-y-3 font-body flex-1">
                  {["4x Kamera 6mpx", "Rejestrator IP", "Dysk HDD 2Tb", "Switch POE"].map(item => (
                    <li key={item} className="flex items-center gap-3">
                      <span className="size-2 rounded-full bg-white" />
                      <span className="text-white/90">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex-shrink-0 text-right">
                  <p className="font-head text-3xl font-bold mb-2">3 000,00 zł</p>
                  <p className="font-body text-white/90 text-sm mb-4">CCTV monitoring IP 6mpx</p>
                  <div className="space-y-2 font-body text-white/90 text-sm">
                    <p>Montaż do 3 godzin</p>
                    <p>3 lata gwarancji</p>
                  </div>
                </div>
              </div>
              <a href="#kontakt" className="inline-flex items-center justify-center w-full h-12 rounded-full text-green-600 font-medium bg-white hover:shadow-lg transition-all duration-200 mt-auto">
                Przejdź do kontaktu
              </a>
            </div>

            {/* PRO */}
            <div className="rounded-2xl border bg-black p-8 shadow-lg hover:shadow-xl transition-all duration-200 text-white flex flex-col h-full" style={{ borderColor: "var(--border)" }}>
              <div className="flex items-center gap-4 mb-6">
                <div className="size-12 rounded-xl flex items-center justify-center text-black bg-white"><Wrench className="size-6" /></div>
                <h4 className="font-head text-2xl font-semibold">PRO</h4>
              </div>
              <p className="font-body text-white/90 mb-6">Indywidualnie dostosowane do potrzeb klienta (dom, firma, obiekt).</p>
              <ul className="space-y-3 font-body mb-6 flex-grow">
                {["Audyt i projekt rozwiązania", "Dobór sprzętu (CCTV/KD)", "Integracje Smart home (GSM, SFIN)", "Wycena i harmonogram"].map(item => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="size-2 rounded-full bg-white" />
                    <span className="text-white/90">{item}</span>
                  </li>
                ))}
              </ul>
              <a href="#kontakt" className="inline-flex items-center justify-center w-full h-12 rounded-full text-green-600 font-medium bg-white hover:shadow-lg transition-all duration-200 mt-auto">
                Przejdź do kontaktu
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}