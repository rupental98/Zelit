import React from 'react';
import { motion } from 'framer-motion';
import { Award, CheckCircle2, Wrench, Link2, Clock } from 'lucide-react';

export default function WhyUs() {
  const reasons = [
    {
      title: "Profesjonalizm i doświadczenie",
      description: "Jako Zakład Elektroniczny Hubert Litwinionek oferujemy kompleksowe doradztwo, projektowanie i kosztorysowanie systemów zabezpieczeń, dopasowanych do indywidualnych potrzeb i możliwości finansowych każdego Klienta. Nasze instalacje bazują na nowoczesnych, sprawdzonych technologiach wraz z wymaganymi atestami i certyfikatami — co gwarantuje solidność i bezpieczeństwo.",
      icon: Award,
    },
    {
      title: "Kompleksowa realizacja i elastyczność",
      description: "Zajmujemy się całym procesem: od doradztwa, przez projekt, aż po instalację i uruchomienie. Modernizujemy i rozbudowujemy istniejące systemy — dzięki temu dla Klienta jasne jest, że z nami zyskuje pełną opiekę, także przy przebudowie lub rozbudowie zabezpieczeń.",
      icon: CheckCircle2,
    },
    {
      title: "Obsługa gwarancyjna i pogwarancyjna",
      description: "Po zakończeniu projektu pozostajemy do dyspozycji — oferujemy okresowe przeglądy, konserwacje, jak też możliwość wprowadzania zmian funkcjonalnych w razie nowych potrzeb.",
      icon: Wrench,
    },
    {
      title: "Kompleksowość i integracja rozwiązań",
      description: "Łączymy różne systemy zabezpieczeń — monitoring, alarm, domofony, integrację z systemami zewnętrznych agencji ochrony lub monitoringiem GSM. Dzięki temu zyskujesz spójną, skuteczną ochronę dostosowaną do Twojego obiektu.",
      icon: Link2,
    },
    {
      title: "Jakość, niezawodność i terminowość",
      description: "Stawiamy na wysoką jakość wykonania i terminowość — działamy rzetelnie, zgodnie z ustalonym harmonogramem, z dbałością o detale i zgodność prac z wymogami technicznymi.",
      icon: Clock,
    },
  ];

  return (
    <section id="dlaczego-my" className="py-16 lg:py-24 bg-gradient-hero">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="font-head text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-black">
            Dlaczego my?
          </h2>
        </div>

        <div className="space-y-8 lg:space-y-10">
          {reasons.map(({ title, description, icon: Icon }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="rounded-2xl border bg-white p-6 lg:p-8 shadow-md hover:shadow-lg transition-all duration-200"
              style={{ borderColor: "var(--border)" }}
            >
              <div className="flex flex-col sm:flex-row gap-6">
                <div className="flex-shrink-0">
                  <div className="size-14 lg:size-16 rounded-xl flex items-center justify-center text-white bg-gradient-green">
                    <Icon className="size-7 lg:size-8" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="font-head text-xl lg:text-2xl font-semibold text-black mb-3">
                    {title}
                  </h3>
                  <p className="font-body text-base lg:text-lg text-black/70 leading-relaxed">
                    {description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

