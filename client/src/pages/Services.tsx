import { useState } from 'react';
import { Link } from 'react-router-dom';
import { services, categories } from '../data/services';
import type { ServiceCategory } from '../data/services';

const categoryColors: Record<ServiceCategory, string> = {
  All:      'bg-[#1B2E78] text-white',
  Welfare:  'bg-[#EEF2FF] text-[#1B2E78]',
  Errands:  'bg-[#EEF2FF] text-[#1B2E78]',
  Payments: 'bg-[#EEF2FF] text-[#1B2E78]',
  Property: 'bg-[#EEF2FF] text-[#1B2E78]',
  Custom:   'bg-[#EEF2FF] text-[#1B2E78]',
};

const activePillColors: Record<ServiceCategory, string> = {
  All:      'bg-[#1B2E78] text-white',
  Welfare:  'bg-[#1B2E78] text-white',
  Errands:  'bg-[#3B82F6] text-white',
  Payments: 'bg-[#1B2E78] text-white',
  Property: 'bg-[#3B82F6] text-white',
  Custom:   'bg-[#1B2E78] text-white',
};

export default function Services() {
  const [active, setActive] = useState<ServiceCategory>('All');

  const filtered = active === 'All'
    ? services
    : services.filter(s => s.category === active);

  return (
    <>
      {/* ── PAGE HERO ── */}
      <section className="bg-[#1B2E78] py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#93C5FD]">
            What we offer
          </span>
          <h1
            className="text-5xl sm:text-6xl font-black uppercase text-white mt-2 mb-4"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            Our Services
          </h1>
          <p className="text-blue-200 max-w-xl leading-relaxed">
            From welfare checks to bill payments — 16 services designed to keep your family supported while you're abroad. Every task comes with photos, receipts, and a WhatsApp update.
          </p>
        </div>
      </section>

      {/* ── PRICING NOTE ── */}
      <div className="bg-[#EEF2FF] border-b border-blue-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-wrap items-center gap-3">
          <svg className="w-5 h-5 text-[#3B82F6] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M12 2a10 10 0 100 20A10 10 0 0012 2z" />
          </svg>
          <p className="text-sm text-[#1B2E78] font-medium">
            Pricing starts from as little as <strong>$10</strong> depending on the task. Custom quotes available for complex jobs.
          </p>
          <Link
            to="/quote"
            className="ml-auto text-sm font-semibold text-[#3B82F6] hover:text-[#1B2E78] transition-colors whitespace-nowrap"
          >
            Get a custom quote →
          </Link>
        </div>
      </div>

      {/* ── FILTER PILLS ── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        <div className="flex flex-wrap gap-2">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                active === cat
                  ? activePillColors[cat]
                  : 'bg-white border border-gray-200 text-gray-600 hover:border-[#1B2E78] hover:text-[#1B2E78]'
              }`}
            >
              {cat}
              {cat !== 'All' && (
                <span className={`ml-2 text-xs ${active === cat ? 'opacity-70' : 'text-gray-400'}`}>
                  {services.filter(s => s.category === cat).length}
                </span>
              )}
            </button>
          ))}
        </div>
      </section>

      {/* ── SERVICE GRID ── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map(service => (
            <div
              key={service.id}
              className="bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md hover:border-blue-200 transition-all flex flex-col overflow-hidden"
            >
              {/* Image */}
              <div className="h-40 overflow-hidden bg-gray-200">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                {/* Icon + category badge */}
                <div className="flex items-start justify-between mb-4">
                  <div className="w-11 h-11 rounded-lg bg-[#EEF2FF] flex items-center justify-center text-2xl">
                    {service.icon}
                  </div>
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full ${categoryColors[service.category]}`}>
                    {service.category}
                  </span>
                </div>

                <h3
                  className="text-lg font-bold uppercase text-[#1B2E78] mb-2"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: '0.03em' }}
                >
                  {service.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed flex-1">
                  {service.description}
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between mt-5 pt-4 border-t border-gray-100">
                  <span className="text-sm font-bold text-[#3B82F6]">{service.price}</span>
                  <a
                    href={`https://api.whatsapp.com/send?phone=263711410889&text=Hello%20TrustedHandZW%2C%20I%20would%20like%20to%20enquire%20about%20your%20${encodeURIComponent(service.title)}%20service.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs font-semibold text-[#25D366] hover:text-[#1ebe5d] transition-colors"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.526 5.845L.057 23.143a.75.75 0 00.9.9l5.297-1.47A11.951 11.951 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.895 0-3.668-.52-5.184-1.424l-.372-.222-3.865 1.073 1.073-3.866-.221-.371A9.96 9.96 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
                    </svg>
                    Enquire
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── BOTTOM CTA ── */}
      <section className="bg-[#1B2E78] py-14 mt-8">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2
            className="text-4xl font-black uppercase text-white mb-3"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            Don't see what you need?
          </h2>
          <p className="text-blue-200 mb-8 text-sm">
            We handle custom tasks too. Tell us what you need and we'll let you know if we can help.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://api.whatsapp.com/send?phone=263711410889&text=Hello%20TrustedHandZW%2C%20I%20have%20a%20custom%20task%20I%20would%20like%20to%20discuss."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-semibold px-6 py-3 rounded-md transition-all hover:scale-105"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.526 5.845L.057 23.143a.75.75 0 00.9.9l5.297-1.47A11.951 11.951 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.895 0-3.668-.52-5.184-1.424l-.372-.222-3.865 1.073 1.073-3.866-.221-.371A9.96 9.96 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
              </svg>
              WhatsApp Us
            </a>
            <Link
              to="/quote"
              className="bg-white/10 hover:bg-white/20 border border-white/25 text-white font-semibold px-6 py-3 rounded-md transition-colors"
            >
              Request a Custom Quote
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}