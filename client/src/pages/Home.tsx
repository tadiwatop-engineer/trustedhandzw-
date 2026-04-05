import { Link } from 'react-router-dom';
import { featuredServices } from '../data/services';

const trustSignals = [
  {
    label: 'Photo proof with every task',
    image: 'https://images.pexels.com/photos/606933/pexels-photo-606933.jpeg?auto=compress&cs=tinysrgb&w=500'
  },
  {
    label: 'Digital receipts always sent',
    image: 'https://images.pexels.com/photos/3962286/pexels-photo-3962286.jpeg?auto=compress&cs=tinysrgb&w=500'
  },
  {
    label: 'WhatsApp live updates',
    image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=500'
  },
  {
    label: 'Nationwide across Zimbabwe',
    image: 'https://images.pexels.com/photos/3183609/pexels-photo-3183609.jpeg?auto=compress&cs=tinysrgb&w=500'
  },
];

const stats = [
  { value: '500+', label: 'Tasks completed' },
  { value: '16',   label: 'Services offered' },
  { value: '100%', label: 'Receipt guarantee' },
  { value: '24hr', label: 'Response time' },
];

export default function Home() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative bg-[#1B2E78] overflow-hidden">
        {/* Decorative circles */}
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#3B82F6] opacity-10 translate-x-32 -translate-y-32 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-[#3B82F6] opacity-10 -translate-x-16 translate-y-16 pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left column - Text */}
            <div>
              <span className="inline-block text-xs font-semibold uppercase tracking-widest text-[#93C5FD] mb-4">
                Zimbabwe's most trusted errand service
              </span>
              <h1
                className="text-5xl sm:text-6xl lg:text-6xl font-black uppercase leading-tight text-white mb-6"
                style={{ fontFamily: "'Outfit', sans-serif", fontWeight: '900' }}
              >
                Your hands<br />back home.
              </h1>
              <p className="text-blue-200 text-lg leading-relaxed mb-8 max-w-lg">
                We help Zimbabweans in the diaspora care for their loved ones back home — grocery deliveries, welfare checks, bill payments and more. Every task comes with photos, receipts and live WhatsApp updates.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://api.whatsapp.com/send?phone=263711410889&text=Hello%20TrustedHandZW%2C%20I%20would%20like%20to%20enquire%20about%20your%20services."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-semibold px-6 py-3 rounded-md transition-all hover:scale-105 active:scale-95"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.526 5.845L.057 23.143a.75.75 0 00.9.9l5.297-1.47A11.951 11.951 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.895 0-3.668-.52-5.184-1.424l-.372-.222-3.865 1.073 1.073-3.866-.221-.371A9.96 9.96 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
                  </svg>
                  Chat on WhatsApp
                </a>
                <Link
                  to="/quote"
                  className="flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/25 text-white font-semibold px-6 py-3 rounded-md transition-colors"
                >
                  Request a Quote
                </Link>
              </div>
            </div>

            {/* Right column - Image */}
            <div className="relative hidden lg:block">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/3768146/pexels-photo-3768146.jpeg?auto=compress&cs=tinysrgb&w=1000"
                  alt="Trusted hands - helping families"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-[#1B2E78]/0 via-transparent to-[#1B2E78]/20 pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <section className="bg-[#EEF2FF] border-b border-blue-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map(stat => (
              <div key={stat.label} className="text-center">
                <div
                  className="text-3xl font-black text-[#1B2E78]"
                  style={{ fontFamily: "'Outfit', sans-serif", fontWeight: '900' }}
                >
                  {stat.value}
                </div>
                <div className="text-sm text-gray-500 mt-0.5">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TRUST SIGNALS ── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-10">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#3B82F6]">Why families trust us</span>
          <h2
            className="text-4xl font-black uppercase text-[#1B2E78] mt-2"
            style={{ fontFamily: "'Outfit', sans-serif", fontWeight: '900' }}
          >
            Full transparency, every time.
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {trustSignals.map(signal => (
            <div key={signal.label} className="bg-white rounded-xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col">
              <div className="h-40 overflow-hidden bg-gray-100">
                <img
                  src={signal.image}
                  alt={signal.label}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-4 flex items-center justify-center flex-grow">
                <p className="text-sm font-semibold text-[#1B2E78] text-center">{signal.label}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── SERVICES PREVIEW ── */}
      <section className="bg-[#F8FAFC] py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-[#3B82F6]">What we do</span>
              <h2
                className="text-4xl font-black uppercase text-[#1B2E78] mt-2"
                style={{ fontFamily: "'Outfit', sans-serif", fontWeight: '900' }}
              >
                Our services
              </h2>
            </div>
            <Link
              to="/services"
              className="text-sm font-semibold text-[#3B82F6] hover:text-[#1B2E78] transition-colors whitespace-nowrap"
            >
              View all 16 services →
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {featuredServices.map(service => (
              <div
                key={service.id}
                className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm hover:shadow-md hover:border-blue-200 transition-all"
              >
                <div className="w-10 h-10 rounded-lg bg-[#EEF2FF] flex items-center justify-center text-xl mb-4">
                  {service.icon}
                </div>
                <h3
                  className="text-lg font-bold uppercase text-[#1B2E78] mb-2"
                  style={{ fontFamily: "'Outfit', sans-serif", fontWeight: '900', letterSpacing: '0.03em' }}
                >
                  {service.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-4">{service.description}</p>
                <span className="text-xs font-bold text-[#3B82F6]">{service.price}</span>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 bg-[#1B2E78] hover:bg-[#2A3F9E] text-white font-semibold px-8 py-3 rounded-md transition-colors"
            >
              See all services
            </Link>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#3B82F6]">Simple process</span>
          <h2
            className="text-4xl font-black uppercase text-[#1B2E78] mt-2"
            style={{ fontFamily: "'Outfit', sans-serif", fontWeight: '900' }}
          >
            How it works
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { step: '01', title: 'Tell us what you need', desc: 'WhatsApp us or fill in the quote form with your task details and location.' },
            { step: '02', title: 'We confirm & execute', desc: 'We confirm the price, carry out your task, and keep you updated throughout.' },
            { step: '03', title: 'You get proof', desc: 'Receive photos, receipts and a full WhatsApp summary the moment the task is done.' },
          ].map(item => (
            <div key={item.step} className="relative">
              <div
                className="text-7xl font-black text-[#EEF2FF] absolute -top-4 -left-2 leading-none select-none"
                style={{ fontFamily: "'Outfit', sans-serif", fontWeight: '900' }}
              >
                {item.step}
              </div>
              <div className="relative pt-8 pl-2">
                <h3
                  className="text-xl font-bold uppercase text-[#1B2E78] mb-2"
                  style={{ fontFamily: "'Outfit', sans-serif", fontWeight: '900' }}
                >
                  {item.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="bg-[#1B2E78] py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2
            className="text-4xl sm:text-5xl font-black uppercase text-white mb-4"
            style={{ fontFamily: "'Outfit', sans-serif", fontWeight: '900' }}
          >
            Ready to get started?
          </h2>
          <p className="text-blue-200 mb-8">
            From as little as $10 — tell us what you need and we'll handle the rest.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://api.whatsapp.com/send?phone=263711410889&text=Hello%20TrustedHandZW%2C%20I%20would%20like%20to%20enquire%20about%20your%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-semibold px-7 py-3 rounded-md transition-all hover:scale-105"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.526 5.845L.057 23.143a.75.75 0 00.9.9l5.297-1.47A11.951 11.951 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.895 0-3.668-.52-5.184-1.424l-.372-.222-3.865 1.073 1.073-3.866-.221-.371A9.96 9.96 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
              </svg>
              WhatsApp Us Now
            </a>
            <Link
              to="/quote"
              className="bg-white/10 hover:bg-white/20 border border-white/25 text-white font-semibold px-7 py-3 rounded-md transition-colors"
            >
              Request a Quote
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}