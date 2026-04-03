import { Link } from 'react-router-dom';

const lastUpdated = 'April 2026';

const sections = [
  {
    title: '1. About these terms',
    content: `These Terms and Conditions govern your use of TrustedHandZW's website and services. By requesting a service, submitting a form, or communicating with us via WhatsApp or email, you agree to these terms.

TrustedHandZW is a diaspora support service operating across Zimbabwe. We connect Zimbabweans abroad with reliable, transparent on-the-ground support for their families back home.

If you do not agree to these terms, please do not use our services.`,
  },
  {
    title: '2. Our services',
    content: `TrustedHandZW provides a range of on-the-ground services in Zimbabwe, including but not limited to:

- Welfare checks and hospital visits
- Grocery and medication delivery
- Bill payments and school fees payments
- Document collection and delivery
- Property checks and home maintenance coordination
- Airport pickups and transport arrangements
- Event representation and funeral coordination
- Custom tasks agreed individually

All services are subject to availability in your requested location. We will confirm availability before accepting payment.`,
  },
  {
    title: '3. Requesting a service',
    content: `To request a service, you may:

- Submit a quote request through our website
- Contact us via WhatsApp on +263 711 410 889
- Email us at info@trustedhandzw.co.zw

A service is only confirmed once we have:
(a) acknowledged your request in writing (via WhatsApp or email)
(b) agreed on the scope and price of the task
(c) received your payment in full

We reserve the right to decline any service request at our discretion.`,
  },
  {
    title: '4. Pricing and payment',
    content: `All prices are quoted in US Dollars (USD) unless otherwise agreed.

- Pricing starts from $10 depending on the nature of the task
- All prices are agreed upfront before any work begins
- Payment is required in full before we commence any task
- We accept EcoCash, bank transfer, Mukuru, WorldRemit, and direct USD/ZAR/GBP transfers
- We will never spend more than the agreed amount without your prior written approval
- Receipts are provided for all payments made on your behalf`,
  },
  {
    title: '5. Cancellations and refunds',
    content: `Cancellation policy:

- Cancellations made before we have commenced the task will receive a full refund
- Cancellations made after work has commenced may be subject to a partial charge reflecting work already done
- If we are unable to complete a task due to circumstances beyond our control, we will notify you immediately and arrange a full or partial refund as appropriate

Refunds are processed within 5–10 business days using the same payment method used for the original payment.`,
  },
  {
    title: '6. Our responsibilities',
    content: `TrustedHandZW will:

- Carry out all tasks with reasonable care, skill, and professionalism
- Communicate with you throughout the task
- Provide photo proof and receipts upon completion
- Act in the best interests of you and your family at all times
- Never disclose your personal information to unauthorised parties

TrustedHandZW will not be liable for:

- Delays caused by third parties (e.g. government offices, hospitals, suppliers)
- Force majeure events including natural disasters, civil unrest, or network outages
- Losses arising from inaccurate information provided by the client
- Indirect or consequential losses of any kind`,
  },
  {
    title: '7. Your responsibilities',
    content: `As a client, you agree to:

- Provide accurate and complete information about the task and the people involved
- Ensure that the task you are requesting is legal under Zimbabwe law
- Not use our services to facilitate illegal activities of any kind
- Make payment in full before the task commences
- Communicate any changes or cancellations promptly

We reserve the right to refuse or terminate services if we believe the client is acting in bad faith or requesting services that are unlawful.`,
  },
  {
    title: '8. Confidentiality',
    content: `We treat all information about you and your family with the utmost confidentiality. Our operators are bound by confidentiality obligations and may not disclose any information about your tasks or your family to any third party without your consent.

All photo updates, receipts, and reports sent to you are for your personal use only and should not be shared publicly without the consent of the individuals featured.`,
  },
  {
    title: '9. Intellectual property',
    content: `All content on the TrustedHandZW website — including text, design, graphics, logos, and code — is the property of TrustedHandZW and is protected by applicable intellectual property laws.

You may not reproduce, distribute, or use our content for commercial purposes without our prior written consent.`,
  },
  {
    title: '10. Governing law',
    content: `These Terms and Conditions are governed by the laws of Zimbabwe. Any disputes arising from the use of our services will be subject to the jurisdiction of the courts of Zimbabwe.

If any provision of these terms is found to be unenforceable, the remaining provisions will continue in full force and effect.`,
  },
  {
    title: '11. Changes to these terms',
    content: `We may update these Terms and Conditions from time to time. The updated version will be posted on our website with a revised "Last updated" date.

Continued use of our services after any changes constitutes your acceptance of the updated terms. We encourage you to review these terms periodically.`,
  },
  {
    title: '12. Contact us',
    content: `If you have any questions about these Terms and Conditions, please contact us:

- Email: info@trustedhandzw.co.zw
- WhatsApp: +263 711 410 889
- Website: trustedhandzw.co.zw`,
  },
];

export default function Terms() {
  return (
    <>
      {/* ── PAGE HERO ── */}
      <section className="bg-[#1B2E78] py-16 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-[#3B82F6] opacity-10 translate-x-24 -translate-y-24 pointer-events-none" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#93C5FD]">
            Legal
          </span>
          <h1
            className="text-5xl sm:text-6xl font-black uppercase text-white mt-2 mb-4"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            Terms & Conditions
          </h1>
          <p className="text-blue-200 text-sm">
            Last updated: {lastUpdated}
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">

          {/* ── STICKY TOC ── */}
          <aside className="lg:col-span-1 hidden lg:block">
            <div className="sticky top-24">
              <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-3">
                Contents
              </p>
              <nav className="space-y-1">
                {sections.map((s, i) => (
                  <a
                    key={i}
                    href={`#term-${i}`}
                    className="block text-xs text-gray-500 hover:text-[#1B2E78] py-1 transition-colors leading-snug"
                  >
                    {s.title}
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          {/* ── CONTENT ── */}
          <div className="lg:col-span-3 space-y-10">

            {/* Intro */}
            <div className="bg-[#EEF2FF] rounded-xl p-6 border border-blue-100">
              <p className="text-sm text-[#1B2E78] leading-relaxed">
                Please read these terms carefully before using TrustedHandZW's services. They explain what you can expect from us and what we expect from you. We've written them in plain language so they're easy to understand.
              </p>
            </div>

            {sections.map((section, i) => (
              <div key={i} id={`term-${i}`} className="scroll-mt-24">
                <h2
                  className="text-2xl font-black uppercase text-[#1B2E78] mb-4"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                >
                  {section.title}
                </h2>
                <div className="text-sm text-gray-600 leading-relaxed whitespace-pre-line">
                  {section.content}
                </div>
                {i < sections.length - 1 && (
                  <hr className="border-gray-100 mt-8" />
                )}
              </div>
            ))}

            {/* Footer note */}
            <div className="bg-[#F8FAFC] rounded-xl border border-gray-100 p-6 text-center">
              <p className="text-sm text-gray-500 mb-4">
                Have questions about these terms?
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <a
                  href="mailto:info@trustedhandzw.co.zw"
                  className="text-sm font-semibold text-[#1B2E78] hover:text-[#3B82F6] transition-colors"
                >
                  info@trustedhandzw.co.zw
                </a>
                <span className="text-gray-300">|</span>
                <Link
                  to="/privacy"
                  className="text-sm font-semibold text-[#3B82F6] hover:text-[#1B2E78] transition-colors"
                >
                  View Privacy Policy →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}