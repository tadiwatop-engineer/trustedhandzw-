import { useState } from 'react';
import { Link } from 'react-router-dom';
import { testimonials } from '../data/testimonials';

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map(star => (
        <svg
          key={star}
          className={`w-4 h-4 ${star <= rating ? 'text-amber-400' : 'text-gray-200'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function InitialsAvatar({ name, size = 'md' }: { name: string; size?: 'md' | 'lg' }) {
  const initials = name.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase();
  const sizeClass = size === 'lg' ? 'w-14 h-14 text-lg' : 'w-11 h-11 text-sm';
  return (
    <div className={`${sizeClass} rounded-full bg-[#1B2E78] flex items-center justify-center flex-shrink-0`}>
      <span
        className="font-black text-white"
        style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
      >
        {initials}
      </span>
    </div>
  );
}

const filterOptions = ['All', '5 Stars', '4 Stars'];

export default function Testimonials() {
  const [filter, setFilter] = useState('All');

  const filtered = testimonials.filter(t => {
    if (filter === '5 Stars') return t.rating === 5;
    if (filter === '4 Stars') return t.rating === 4;
    return true;
  });

  const avgRating = (
    testimonials.reduce((sum, t) => sum + t.rating, 0) / testimonials.length
  ).toFixed(1);

  const fiveStarCount = testimonials.filter(t => t.rating === 5).length;

  return (
    <>
      {/* ── PAGE HERO ── */}
      <section className="bg-[#1B2E78] py-16 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-[#3B82F6] opacity-10 translate-x-24 -translate-y-24 pointer-events-none" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#93C5FD]">
            Real clients, real results
          </span>
          <h1
            className="text-5xl sm:text-6xl font-black uppercase text-white mt-2 mb-4"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            What families say
          </h1>
          <p className="text-blue-200 max-w-xl leading-relaxed">
            Hundreds of diaspora families trust TrustedHandZW every month. Here's what some of them have to say.
          </p>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <div className="bg-[#EEF2FF] border-b border-blue-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-3 gap-4 max-w-lg">
            <div className="text-center">
              <div
                className="text-3xl font-black text-[#1B2E78]"
                style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
              >
                {avgRating}
              </div>
              <div className="flex justify-center mt-1 mb-0.5">
                <StarRating rating={5} />
              </div>
              <div className="text-xs text-gray-500">Average rating</div>
            </div>
            <div className="text-center">
              <div
                className="text-3xl font-black text-[#1B2E78]"
                style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
              >
                {testimonials.length}+
              </div>
              <div className="text-xs text-gray-500 mt-1">Reviews</div>
            </div>
            <div className="text-center">
              <div
                className="text-3xl font-black text-[#1B2E78]"
                style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
              >
                {Math.round((fiveStarCount / testimonials.length) * 100)}%
              </div>
              <div className="text-xs text-gray-500 mt-1">5-star reviews</div>
            </div>
          </div>
        </div>
      </div>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* ── FEATURED TESTIMONIAL ── */}
        <div className="bg-[#1B2E78] rounded-2xl p-8 mb-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-[#3B82F6] opacity-10 translate-x-16 -translate-y-16 pointer-events-none" />
          <div className="relative">
            <svg className="w-10 h-10 text-[#3B82F6] mb-4 opacity-60" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
            </svg>
            <p className="text-white text-lg leading-relaxed mb-6 max-w-2xl">
              {testimonials[3].message}
            </p>
            <div className="flex items-center gap-4">
              <InitialsAvatar name={testimonials[3].name} size="lg" />
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <StarRating rating={testimonials[3].rating} />
                </div>
                <p className="text-white font-semibold text-sm">{testimonials[3].name}</p>
                <p className="text-blue-300 text-xs">
                  {testimonials[3].flag} {testimonials[3].location} — {testimonials[3].service}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ── FILTER ── */}
        <div className="flex flex-wrap gap-2 mb-8">
          {filterOptions.map(opt => (
            <button
              key={opt}
              onClick={() => setFilter(opt)}
              className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-all ${
                filter === opt
                  ? 'bg-[#1B2E78] text-white'
                  : 'bg-white border border-gray-200 text-gray-600 hover:border-[#1B2E78] hover:text-[#1B2E78]'
              }`}
            >
              {opt}
              <span className={`ml-2 text-xs ${filter === opt ? 'opacity-70' : 'text-gray-400'}`}>
                {opt === 'All' ? testimonials.length
                  : opt === '5 Stars' ? testimonials.filter(t => t.rating === 5).length
                  : testimonials.filter(t => t.rating === 4).length}
              </span>
            </button>
          ))}
        </div>

        {/* ── TESTIMONIALS GRID ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map(t => (
            <div
              key={t.id}
              className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm hover:shadow-md hover:border-blue-100 transition-all flex flex-col"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <InitialsAvatar name={t.name} />
                  <div>
                    <p className="text-sm font-semibold text-[#1B2E78]">{t.name}</p>
                    <p className="text-xs text-gray-400">
                      {t.flag} {t.location}
                    </p>
                  </div>
                </div>
                <span className="text-xs text-gray-300 flex-shrink-0">{t.date}</span>
              </div>

              {/* Stars */}
              <StarRating rating={t.rating} />

              {/* Message */}
              <p className="text-sm text-gray-600 leading-relaxed mt-3 flex-1">
                "{t.message}"
              </p>

              {/* Service tag */}
              <div className="mt-4 pt-4 border-t border-gray-100">
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1B2E78] bg-[#EEF2FF] px-3 py-1 rounded-full">
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {t.service}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* ── LEAVE A REVIEW PROMPT ── */}
        <div className="mt-14 bg-[#F8FAFC] rounded-2xl border border-gray-100 p-8 text-center">
          <h2
            className="text-3xl font-black uppercase text-[#1B2E78] mb-2"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            Used our service?
          </h2>
          <p className="text-gray-500 text-sm mb-7 max-w-md mx-auto">
            We'd love to hear about your experience. Share your feedback via WhatsApp or email and we'll add it to our testimonials.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://api.whatsapp.com/send?phone=263711410889&text=Hello%20TrustedHandZW%2C%20I%20would%20like%20to%20leave%20a%20review."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-semibold px-6 py-3 rounded-md transition-all hover:scale-105 text-sm"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.526 5.845L.057 23.143a.75.75 0 00.9.9l5.297-1.47A11.951 11.951 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.895 0-3.668-.52-5.184-1.424l-.372-.222-3.865 1.073 1.073-3.866-.221-.371A9.96 9.96 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
              </svg>
              Leave a Review
            </a>
            <Link
              to="/quote"
              className="bg-[#1B2E78] hover:bg-[#2A3F9E] text-white font-semibold px-6 py-3 rounded-md transition-colors text-sm"
            >
              Request a Service
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}