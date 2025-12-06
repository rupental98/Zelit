import { motion } from 'framer-motion';
import { Shield, Camera, Home, Wrench } from 'lucide-react';

export default function Services() {
  const services = [
    { title: "Systemy alarmowe (SSWiN)", desc: "Czujki ruchu, centrale, powiadomienia SMS", icon: Shield },
    { title: "Monitoring CCTV", desc: "Kamery IP,kamery analogowe, AI, rejestratory", icon: Camera },
    { title: "Smart Home i kontrola dostępu", desc: " Sterowanie: ogrzewaniem, podlewanie ogrodowe, rolety, sceny, wideodomofony, domofony i kontrola czasu pracy", icon: Home },
    { title: "System sygnalizacji pożaru", desc: "Czujniki dymu i ciepła, ROP, sygnalizatory, centrale", icon: Wrench },
  ];

  return (
    <section id="uslugi" className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* NAGŁÓWEK – CZARNY */}
        <div className="text-center mb-12">
          <h2 className="font-head text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-black">
            Usługi
          </h2>
          <p className="mt-4 font-body text-lg text-black/70">
            Kompleksowe rozwiązania bezpieczeństwa dla domu i firmy
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {services.map(({ title, desc, icon: Icon }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="relative h-full"
            >
              <div
                className="rounded-2xl border bg-gradient-green p-8 shadow-lg hover:shadow-xl transition-shadow text-white flex flex-col h-full min-h-[260px]"
                style={{ borderColor: "var(--border)" }}
              >
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-green-600 flex-shrink-0">
                    <Icon className="size-5" />
                  </div>
                  <h3 className="font-head text-xl font-semibold leading-tight text-white">
                    {title}
                  </h3>
                </div>

                <p className="font-body text-white/90 leading-relaxed text-[15px]">
                  {desc}
                </p>

                <div className="mt-auto" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
