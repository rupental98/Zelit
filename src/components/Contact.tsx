import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, ArrowRight, MapPin } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [privacyAccepted, setPrivacyAccepted] = useState(false);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!privacyAccepted) {
      setStatus('error');
      setErrorMessage('Musisz zaakceptować politykę prywatności, aby wysłać wiadomość.');
      return;
    }
    
    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch('https://formspree.io/f/mvgebgrp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: formData.email,
          message: `Imię i nazwisko: ${formData.name}\nTelefon: ${formData.phone || 'Nie podano'}\n\nTreść wiadomości:\n${formData.message}`
        }),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: ''
        });
        setPrivacyAccepted(false);
      } else {
        const data = await response.json();
        setStatus('error');
        setErrorMessage(data.error || 'Wystąpił błąd podczas wysyłania wiadomości.');
      }
    } catch (error) {
      setStatus('error');
      setErrorMessage('Wystąpił błąd podczas wysyłania wiadomości. Spróbuj ponownie później.');
    }
  };

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

            {status === 'success' && (
              <div className="mb-6 p-4 rounded-xl bg-white/20 border border-white/30">
                <p className="text-white font-medium">✓ Wiadomość została wysłana pomyślnie! Skontaktujemy się z Tobą wkrótce.</p>
              </div>
            )}

            {status === 'error' && (
              <div className="mb-6 p-4 rounded-xl bg-red-500/20 border border-red-300/30">
                <p className="text-white font-medium">✗ {errorMessage || 'Wystąpił błąd podczas wysyłania wiadomości.'}</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-white mb-2">Imię i nazwisko</label>
                  <input 
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full h-12 rounded-xl border px-4 focus:ring-2 focus:ring-white focus:border-white transition-colors bg-white text-black" 
                    style={{ borderColor: "var(--border)" }} 
                    placeholder="Jan Kowalski" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-white mb-2">E-mail</label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full h-12 rounded-xl border px-4 focus:ring-2 focus:ring-white focus:border-white transition-colors bg-white text-black" 
                    style={{ borderColor: "var(--border)" }} 
                    placeholder="jan@firma.pl" 
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-white mb-2">Telefon <span className="text-white/70">(opcjonalnie – szybszy kontakt)</span></label>
                <input 
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full h-12 rounded-xl border px-4 focus:ring-2 focus:ring-white focus:border-white transition-colors bg-white text-black" 
                  style={{ borderColor: "var(--border)" }} 
                  placeholder="+48123456789" 
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-white mb-2">Treść wiadomości</label>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full min-h-[120px] rounded-xl border px-4 py-3 focus:ring-2 focus:ring-white focus:border-white transition-colors bg-white text-black" 
                  style={{ borderColor: "var(--border)" }} 
                  placeholder="Opisz krótko potrzeby: dom/firma, liczba pomieszczeń, terminy…" 
                />
              </div>
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="privacy-accept"
                  checked={privacyAccepted}
                  onChange={(e) => setPrivacyAccepted(e.target.checked)}
                  required
                  className="mt-1 h-4 w-4 rounded border-gray-300 text-green-600 focus:ring-2 focus:ring-white"
                />
                <label htmlFor="privacy-accept" className="text-sm text-white/90 font-body">
                  Akceptuję{' '}
                  <Link 
                    to="/privacy" 
                    className="text-white hover:text-white/80 font-medium underline"
                  >
                    politykę prywatności
                  </Link>
                </label>
              </div>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <button 
                  type="submit" 
                  disabled={status === 'loading'}
                  className="inline-flex items-center justify-center px-8 h-12 rounded-full text-green-600 font-medium bg-white hover:shadow-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === 'loading' ? 'Wysyłanie...' : 'Wyślij wiadomość'}
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