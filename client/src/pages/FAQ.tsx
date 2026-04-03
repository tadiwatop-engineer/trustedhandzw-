import { useState } from 'react';
import { Link } from 'react-router-dom';
import { faqs, faqCategories } from '../data/faqs';

function AccordionItem({
  question,
  answer,
  isOpen,
  onToggle,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-[#F8FAFC] transition-colors"
      >
        <span
          className="text-base font-semibold text-[#1B2E78] pr-4 leading-snug"
          style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
          {question}
        </span>
        <span
          className={`flex-shrink-0 w-7 h-7 rounded-full border-2 border-[#1B2E78] flex items-center justify-center transition-transform duration-300 ${
            isOpen ? 'rotate-45 bg-[#1B2E78]' : ''
          }`}
        >
          <svg
            className={`w-3.5 h-3.5 transition-colors ${isOpen ? 'text-white' : 'text-[#1B2E78]'}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m-8-8h16" />
          </svg>
        </span>
      </button>
      <div
        className={`transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden`}
      >
        <div className="px-6 pb-5 border-t border-gray-100">
          <p className="text-sm text-gray-600 leading-relaxed pt-4">{answer}</p>
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [openId, setOpenId]                 = useState<number | null>(1);
  const [search, setSearch]                 = useState('');

  const filtered = faqs.filter(faq => {
    const matchesCategory = activeCategory === 'All' || faq.category === activeCategory;
    const matchesSearch =
      search.trim() === '' ||
      faq.question.toLowerCase().includes(search.toLowerCase()) ||
      faq.answer.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      {/* ── PAGE HERO ── */}
      <section className="bg-[#1B2E78] py-16 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-[#3B82F6] opacity-10 translate-x-24 -translate-y-24 pointer-events-none" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#93C5FD]">
            Got questions?
          </span>
          <h1
            className="text-5xl sm:text-6xl font-black uppercase text-white mt-2 mb-4"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            Frequently Asked Questions
          </h1>
          <p className="text-blue-200 max-w-xl leading-relaxed">
            Everything you need to know about how TrustedHandZW works. Can't find your answer? WhatsApp us directly.
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* ── SEARCH ── */}
        <div className="relative mb-8">
          <svg
            className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            type="text"
            placeholder="Search questions..."
            value={search}
            onChange={e => {
              setSearch(e.target.value);
              setOpenId(null);
            }}
            className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#1B2E78] focus:border-transparent transition-all bg-white shadow-sm"
          />
          {search && (
            <button
              onClick={() => setSearch('')}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          )}
        </div>

        {/* ── CATEGORY FILTER ── */}
        <div className="flex flex-wrap gap-2 mb-8">
          {faqCategories.map(cat => (
            <button
              key={cat}
              onClick={() => {
                setActiveCategory(cat);
                setOpenId(null);
              }}
              className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-all ${
                activeCategory === cat
                  ? 'bg-[#1B2E78] text-white'
                  : 'bg-white border border-gray-200 text-gray-600 hover:border-[#1B2E78] hover:text-[#1B2E78]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* ── RESULTS COUNT ── */}
        {search && (
          <p className="text-sm text-gray-400 mb-5">
            {filtered.length} result{filtered.length !== 1 ? 's' : ''} for "{search}"
          </p>
        )}

        {/* ── ACCORDION ── */}
        {filtered.length > 0 ? (
          <div className="space-y-3">
            {filtered.map(faq => (
              <AccordionItem
                key={faq.id}
                question={faq.question}
                answer={faq.answer}
                isOpen={openId === faq.id}
                onToggle={() => setOpenId(openId === faq.id ? null : faq.id)}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="w-14 h-14 rounded-full bg-[#EEF2FF] flex items-center justify-center mx-auto mb-4">
              <svg className="w-7 h-7 text-[#1B2E78]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M12 2a10 10 0 100 20A10 10 0 0012 2z" />
              </svg>
            </div>
            <h3
              className="text-xl font-black uppercase text-[#1B2E78] mb-2"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              No results found
            </h3>
            <p className="text-sm text-gray-400 mb-6">
              Try a different search term or browse all categories.
            </p>
            <button
              onClick={() => { setSearch(''); setActiveCategory('All'); }}
              className="text-sm font-semibold text-[#3B82F6] hover:text-[#1B2E78] transition-colors"
            >
              Clear search
            </button>
          </div>
        )}

        {/* ── STILL HAVE QUESTIONS ── */}
        <div className="mt-14 bg-[#1B2E78] rounded-2xl p-8 text-center">
          <h2
            className="text-3xl font-black uppercase text-white mb-2"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            Still have questions?
          </h2>
          <p className="text-blue-200 text-sm mb-7">
            We're happy to help. Reach out via WhatsApp for the fastest response.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://api.whatsapp.com/send?phone=263711410889&text=Hello%20TrustedHandZW%2C%20I%20have%20a%20question."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-semibold px-6 py-3 rounded-md transition-all hover:scale-105"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.526 5.845L.057 23.143a.75.75 0 00.9.9l5.297-1.47A11.951 11.951 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.895 0-3.668-.52-5.184-1.424l-.372-.222-3.865 1.073 1.073-3.866-.221-.371A9.96 9.96 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
              </svg>
              WhatsApp Us
            </a>
            <Link
              to="/contact"
              className="bg-white/10 hover:bg-white/20 border border-white/25 text-white font-semibold px-6 py-3 rounded-md transition-colors"
            >
              Send a Message
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}