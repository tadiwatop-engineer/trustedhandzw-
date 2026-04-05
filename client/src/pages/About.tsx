import { Link } from 'react-router-dom';
import { Icon } from '../components/Icon';

const values = [
  {
    icon: 'fa-camera',
    title: 'Photo Proof',
    desc: 'Every task is documented with photos sent directly to you via WhatsApp before we close the job.',
  },
  {
    icon: 'fa-receipt',
    title: 'Receipt Guarantee',
    desc: 'Every payment we make on your behalf comes with an official receipt — no exceptions.',
  },
  {
    icon: 'fa-message',
    title: 'Live Updates',
    desc: 'We keep you in the loop throughout. No radio silence — you hear from us at every stage.',
  },
  {
    icon: 'fa-lock',
    title: 'Fully Accountable',
    desc: 'Your money is handled with complete transparency. We only spend what we agree on upfront.',
  },
];

const team = [
  {
    initials: 'TH',
    name: 'TrustedHandZW Team',
    role: 'Operations — Nationwide Zimbabwe',
    bio: 'A dedicated team of vetted on-the-ground operators covering Harare, Bulawayo, and surrounding areas.',
  },
];

const milestones = [
  { year: '2022', event: 'Founded in Harare with a focus on diaspora welfare checks' },
  { year: '2023', event: 'Expanded to 16 services across Zimbabwe' },
  { year: '2024', event: 'Reached 500+ completed tasks with zero unresolved complaints' },
  { year: '2025', event: 'Launched online booking and WhatsApp-first service model' },
];

export default function About() {
  return (
    <>
      {/* ── PAGE HERO ── */}
      <section className="bg-[#1B2E78] py-16 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-[#3B82F6] opacity-10 translate-x-24 -translate-y-24 pointer-events-none" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#93C5FD]">
            Who we are
          </span>
          <h1
            className="text-5xl sm:text-6xl font-black uppercase text-white mt-2 mb-4"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            About Us
          </h1>
          <p className="text-blue-200 max-w-xl leading-relaxed">
            Born from a simple truth — people abroad shouldn't have to worry about the ones they left behind.
          </p>
        </div>
      </section>

      {/* ── MISSION ── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-[#3B82F6]">
              Our mission
            </span>
            <h2
              className="text-4xl font-black uppercase text-[#1B2E78] mt-2 mb-5"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              Your hands back home.
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed text-sm">
              <p>
                TrustedHandZW was built for one reason — to give Zimbabweans in the diaspora a reliable, transparent pair of hands back home. Whether you're in the UK, USA, South Africa, or anywhere else in the world, we bridge the distance between you and your family.
              </p>
              <p>
                We know how difficult it is to watch from afar while your loved ones need support. That's why we don't just complete tasks — we document everything. Photos before and after. Receipts for every payment. WhatsApp updates at every stage. You're never left wondering.
              </p>
              <p>
                From a simple grocery run to coordinating a funeral — we treat every task with the same care and urgency we'd give our own families.
              </p>
            </div>
          </div>

          {/* Promise card */}
          <div className="bg-[#EEF2FF] rounded-2xl p-8 border border-blue-100">
            <h3
              className="text-2xl font-black uppercase text-[#1B2E78] mb-6"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              Our promise to you
            </h3>
            <ul className="space-y-4">
              {[
                'We will always send photo proof of every completed task.',
                'We will always provide receipts for every payment made.',
                'We will always communicate before, during and after.',
                'We will never spend more than the agreed amount.',
                'We will always act in your family\'s best interest.',
              ].map((promise, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#1B2E78] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-sm text-gray-700 leading-relaxed">{promise}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── VALUES ── */}
      <section className="bg-[#F8FAFC] py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#3B82F6]">
              What drives us
            </span>
            <h2
              className="text-4xl font-black uppercase text-[#1B2E78] mt-2"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              Our values
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map(value => (
              <div
                key={value.title}
                className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="text-2xl text-blue-600 mb-3">
                  <Icon icon={value.icon} size="lg" />
                </div>
                <h3
                  className="text-lg font-bold uppercase text-[#1B2E78] mb-2"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                >
                  {value.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MILESTONES ── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#3B82F6]">
            Our journey
          </span>
          <h2
            className="text-4xl font-black uppercase text-[#1B2E78] mt-2"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            How we got here
          </h2>
        </div>
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-[#EEF2FF] hidden sm:block" />
          <div className="space-y-8">
            {milestones.map((m, i) => (
              <div key={i} className="flex items-start gap-6 sm:gap-10">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1B2E78] flex items-center justify-center z-10">
                  <span
                    className="text-white text-xs font-black"
                    style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                  >
                    {m.year}
                  </span>
                </div>
                <div className="bg-white rounded-xl border border-gray-100 p-5 flex-1 shadow-sm">
                  <p className="text-sm text-gray-700 leading-relaxed">{m.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TEAM ── */}
      <section className="bg-[#F8FAFC] py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#3B82F6]">
              The people behind it
            </span>
            <h2
              className="text-4xl font-black uppercase text-[#1B2E78] mt-2"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              Our team
            </h2>
          </div>
          <div className="flex justify-center">
            {team.map(member => (
              <div
                key={member.name}
                className="bg-white rounded-xl border border-gray-100 p-8 shadow-sm max-w-sm w-full text-center"
              >
                <div className="w-16 h-16 rounded-full bg-[#EEF2FF] flex items-center justify-center mx-auto mb-4">
                  <span
                    className="text-xl font-black text-[#1B2E78]"
                    style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                  >
                    {member.initials}
                  </span>
                </div>
                <h3
                  className="text-lg font-bold uppercase text-[#1B2E78] mb-1"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                >
                  {member.name}
                </h3>
                <p className="text-xs font-semibold text-[#3B82F6] mb-3">{member.role}</p>
                <p className="text-sm text-gray-500 leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-[#1B2E78] py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2
            className="text-4xl font-black uppercase text-white mb-3"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            Ready to work with us?
          </h2>
          <p className="text-blue-200 text-sm mb-8">
            Join hundreds of diaspora families who trust TrustedHandZW to care for their loved ones back home.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://api.whatsapp.com/send?phone=263711410889&text=Hello%20TrustedHandZW%2C%20I%20would%20like%20to%20enquire%20about%20your%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-semibold px-6 py-3 rounded-md transition-all hover:scale-105"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.526 5.845L.057 23.143a.75.75 0 00.9.9l5.297-1.47A11.951 11.951 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.895 0-3.668-.52-5.184-1.424l-.372-.222-3.865 1.073 1.073-3.866-.221-.371A9.96 9.96 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
              </svg>
              Chat on WhatsApp
            </a>
            <Link
              to="/services"
              className="bg-white/10 hover:bg-white/20 border border-white/25 text-white font-semibold px-6 py-3 rounded-md transition-colors"
            >
              View Our Services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}