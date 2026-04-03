import { useContactForm } from '../hooks/useContactForm';
import { services } from '../data/services';
import { Link } from 'react-router-dom';

const urgencyOptions = [
  { value: 'Standard',   label: 'Standard',   desc: 'Within 48 hours',  color: 'border-gray-200' },
  { value: 'Priority',   label: 'Priority',   desc: 'Within 24 hours',  color: 'border-[#3B82F6]' },
  { value: 'Urgent',     label: 'Urgent',     desc: 'Same day',         color: 'border-[#1B2E78]' },
];

const budgetOptions = [
  'Under $20',
  '$20 – $50',
  '$50 – $100',
  '$100 – $250',
  'Over $250',
  'Not sure — please advise',
];

const zimbabweLocations = [
  'Harare', 'Bulawayo', 'Mutare', 'Gweru', 'Kwekwe',
  'Kadoma', 'Masvingo', 'Chinhoyi', 'Victoria Falls',
  'Bindura', 'Marondera', 'Chegutu', 'Other',
];

interface ExtendedFormData {
  name: string;
  email: string;
  phone: string;
  country: string;
  service: string;
  location: string;
  urgency: string;
  budget: string;
  description: string;
}

export default function Quote() {
  const { form, loading, success, error, handleChange, handleSubmit } =
    useContactForm('/api/quote') as any;

  const extForm = form as ExtendedFormData;

  return (
    <>
      {/* ── PAGE HERO ── */}
      <section className="bg-[#1B2E78] py-16 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-[#3B82F6] opacity-10 translate-x-24 -translate-y-24 pointer-events-none" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#93C5FD]">
            Get started
          </span>
          <h1
            className="text-5xl sm:text-6xl font-black uppercase text-white mt-2 mb-4"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            Request a Quote
          </h1>
          <p className="text-blue-200 max-w-xl leading-relaxed">
            Fill in the form below and we'll get back to you with a confirmed price within a few hours. No hidden fees — ever.
          </p>
        </div>
      </section>

      {/* ── TRUST BAR ── */}
      <div className="bg-[#EEF2FF] border-b border-blue-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex flex-wrap gap-6 justify-center sm:justify-start">
            {[
              '✓ Free to request — no commitment',
              '✓ Response within a few hours',
              '✓ Price agreed before we start',
            ].map(item => (
              <span key={item} className="text-xs font-semibold text-[#1B2E78]">{item}</span>
            ))}
          </div>
        </div>
      </div>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

          {/* ── SIDEBAR ── */}
          <div className="lg:col-span-1 space-y-6">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-[#3B82F6]">
                What happens next
              </span>
              <h2
                className="text-2xl font-black uppercase text-[#1B2E78] mt-1 mb-5"
                style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
              >
                After you submit
              </h2>
            </div>

            {[
              { step: '01', title: 'We review your request', desc: 'Our team reads every quote request personally — usually within a few hours.' },
              { step: '02', title: 'We confirm the price', desc: 'We\'ll WhatsApp or email you with a fixed quote. No surprises.' },
              { step: '03', title: 'You approve & pay', desc: 'Once you\'re happy with the quote, we take payment and get started immediately.' },
              { step: '04', title: 'Task completed with proof', desc: 'You receive photos, receipts and a WhatsApp update when it\'s done.' },
            ].map(item => (
              <div key={item.step} className="flex gap-4">
                <div
                  className="w-9 h-9 rounded-full bg-[#1B2E78] flex items-center justify-center flex-shrink-0 text-white text-xs font-black"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                >
                  {item.step}
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#1B2E78]">{item.title}</p>
                  <p className="text-xs text-gray-500 leading-relaxed mt-0.5">{item.desc}</p>
                </div>
              </div>
            ))}

            {/* WhatsApp alternative */}
            <div className="bg-[#F0FDF4] border border-green-200 rounded-xl p-5 mt-4">
              <p className="text-xs font-semibold text-green-700 uppercase tracking-wide mb-2">
                Prefer to chat?
              </p>
              <p className="text-xs text-green-700 leading-relaxed mb-3">
                WhatsApp is the fastest way to get a quote — especially for urgent tasks.
              </p>
              <a
                href="https://api.whatsapp.com/send?phone=263711410889&text=Hello%20TrustedHandZW%2C%20I%20would%20like%20to%20request%20a%20quote."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[#25D366] text-white text-xs font-semibold px-4 py-2.5 rounded-lg hover:bg-[#1ebe5d] transition-colors w-full justify-center"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.526 5.845L.057 23.143a.75.75 0 00.9.9l5.297-1.47A11.951 11.951 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.895 0-3.668-.52-5.184-1.424l-.372-.222-3.865 1.073 1.073-3.866-.221-.371A9.96 9.96 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
                </svg>
                WhatsApp for a Quote
              </a>
            </div>
          </div>

          {/* ── FORM ── */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">

              {success ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3
                    className="text-2xl font-black uppercase text-[#1B2E78] mb-2"
                    style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                  >
                    Quote request sent!
                  </h3>
                  <p className="text-gray-500 text-sm mb-2 max-w-sm mx-auto">
                    We've received your request and will get back to you with a confirmed price within a few hours.
                  </p>
                  <p className="text-gray-400 text-xs mb-8">
                    For faster response, follow up on WhatsApp.
                  </p>
                  <div className="flex flex-wrap justify-center gap-3">
                    <a
                      href="https://api.whatsapp.com/send?phone=263711410889"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-[#25D366] text-white font-semibold px-5 py-2.5 rounded-md hover:bg-[#1ebe5d] transition-colors text-sm"
                    >
                      Follow up on WhatsApp
                    </a>
                    <Link
                      to="/services"
                      className="inline-flex items-center bg-[#EEF2FF] text-[#1B2E78] font-semibold px-5 py-2.5 rounded-md hover:bg-blue-100 transition-colors text-sm"
                    >
                      Browse Services
                    </Link>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <h2
                    className="text-xl font-black uppercase text-[#1B2E78]"
                    style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                  >
                    Your details
                  </h2>

                  {/* Name + Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">
                        Full Name <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={extForm.name || ''}
                        onChange={handleChange}
                        placeholder="John Moyo"
                        required
                        className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#1B2E78] focus:border-transparent transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">
                        Email <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={extForm.email || ''}
                        onChange={handleChange}
                        placeholder="john@email.com"
                        required
                        className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#1B2E78] focus:border-transparent transition-all"
                      />
                    </div>
                  </div>

                  {/* Phone + Country */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">
                        Phone / WhatsApp <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={extForm.phone || ''}
                        onChange={handleChange}
                        placeholder="+44 7700 000000"
                        required
                        className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#1B2E78] focus:border-transparent transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">
                        Your country <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="text"
                        name="country"
                        value={extForm.country || ''}
                        onChange={handleChange}
                        placeholder="United Kingdom"
                        required
                        className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#1B2E78] focus:border-transparent transition-all"
                      />
                    </div>
                  </div>

                  <hr className="border-gray-100" />

                  <h2
                    className="text-xl font-black uppercase text-[#1B2E78]"
                    style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                  >
                    Task details
                  </h2>

                  {/* Service + Location */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">
                        Service needed <span className="text-red-400">*</span>
                      </label>
                      <select
                        name="service"
                        value={extForm.service || ''}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#1B2E78] focus:border-transparent transition-all bg-white"
                      >
                        <option value="">Select a service...</option>
                        {services.map(s => (
                          <option key={s.id} value={s.title}>{s.title}</option>
                        ))}
                        <option value="Other / Custom">Other / Custom task</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">
                        Location in Zimbabwe <span className="text-red-400">*</span>
                      </label>
                      <select
                        name="location"
                        value={extForm.location || ''}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#1B2E78] focus:border-transparent transition-all bg-white"
                      >
                        <option value="">Select location...</option>
                        {zimbabweLocations.map(loc => (
                          <option key={loc} value={loc}>{loc}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Urgency */}
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">
                      Urgency
                    </label>
                    <div className="grid grid-cols-3 gap-3">
                      {urgencyOptions.map(opt => (
                        <label
                          key={opt.value}
                          className={`flex flex-col items-center justify-center p-3 rounded-lg border-2 cursor-pointer transition-all ${
                            extForm.urgency === opt.value
                              ? 'border-[#1B2E78] bg-[#EEF2FF]'
                              : 'border-gray-200 hover:border-gray-300 bg-white'
                          }`}
                        >
                          <input
                            type="radio"
                            name="urgency"
                            value={opt.value}
                            checked={extForm.urgency === opt.value}
                            onChange={handleChange}
                            className="sr-only"
                          />
                          <span className="text-sm font-semibold text-[#1B2E78]">{opt.label}</span>
                          <span className="text-xs text-gray-400 mt-0.5">{opt.desc}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Budget */}
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">
                      Estimated budget (USD)
                    </label>
                    <select
                      name="budget"
                      value={extForm.budget || ''}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#1B2E78] focus:border-transparent transition-all bg-white"
                    >
                      <option value="">Select a range...</option>
                      {budgetOptions.map(b => (
                        <option key={b} value={b}>{b}</option>
                      ))}
                    </select>
                  </div>

                  {/* Description */}
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">
                      Task description <span className="text-red-400">*</span>
                    </label>
                    <textarea
                      name="description"
                      value={extForm.description || ''}
                      onChange={handleChange}
                      placeholder="Please describe what you need in as much detail as possible — who, where, what, and when..."
                      required
                      rows={5}
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#1B2E78] focus:border-transparent transition-all resize-none"
                    />
                    <p className="text-xs text-gray-400 mt-1">
                      The more detail you give us, the more accurate your quote will be.
                    </p>
                  </div>

                  {/* Error */}
                  {error && (
                    <div className="bg-red-50 border border-red-200 rounded-lg px-4 py-3 text-sm text-red-600">
                      {error}
                    </div>
                  )}

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-[#1B2E78] hover:bg-[#2A3F9E] disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold py-3.5 rounded-lg transition-colors flex items-center justify-center gap-2"
                  >
                    {loading ? (
                      <>
                        <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
                        </svg>
                        Sending request...
                      </>
                    ) : (
                      'Submit Quote Request'
                    )}
                  </button>
                  <p className="text-xs text-gray-400 text-center">
                    By submitting you agree to our{' '}
                    <Link to="/privacy" className="text-[#3B82F6] hover:underline">Privacy Policy</Link>
                    {' '}and{' '}
                    <Link to="/terms" className="text-[#3B82F6] hover:underline">Terms & Conditions</Link>.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}