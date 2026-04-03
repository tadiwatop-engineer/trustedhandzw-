import { Link } from 'react-router-dom';

const lastUpdated = 'April 2026';

const sections = [
  {
    title: '1. Who we are',
    content: `TrustedHandZW is a diaspora support service operating across Zimbabwe. We help Zimbabweans living abroad care for their loved ones back home by carrying out errands, welfare checks, payments, and other tasks on their behalf.

Our contact details:
- Email: info@trustedhandzw.co.zw
- WhatsApp: +263 711 410 889
- Website: trustedhandzw.co.zw`,
  },
  {
    title: '2. What information we collect',
    content: `When you use our website or services, we may collect the following personal information:

- Full name
- Email address
- Phone number / WhatsApp number
- Country of residence (diaspora location)
- Location of your family member in Zimbabwe
- Details of tasks or services requested
- Payment-related information (we do not store card details)

We collect this information when you fill in our contact form, quote request form, or communicate with us directly via WhatsApp or email.`,
  },
  {
    title: '3. How we use your information',
    content: `We use your personal information to:

- Process and fulfil your service requests
- Communicate with you about your tasks (via WhatsApp, email, or phone)
- Send you receipts, photos, and task updates
- Respond to enquiries and provide customer support
- Improve our services based on feedback
- Comply with legal obligations under Zimbabwe's Data Protection Act (2021)

We do not use your information for automated decision-making or profiling.`,
  },
  {
    title: '4. How we share your information',
    content: `We do not sell, rent, or trade your personal information to third parties.

We may share your information with:
- Our on-the-ground operators in Zimbabwe, solely to carry out your requested task
- Service providers who help us operate our website (e.g. hosting, email delivery)
- Law enforcement or regulatory authorities if required by law

All parties who receive your data are required to handle it confidentially and only use it for the purpose it was shared.`,
  },
  {
    title: '5. Data retention',
    content: `We retain your personal information for as long as necessary to provide our services and comply with legal obligations.

- Contact and quote form submissions are retained for up to 12 months
- Task records (including receipts and photos) are retained for up to 24 months
- You may request deletion of your data at any time by contacting us at info@trustedhandzw.co.zw

After the retention period, your data is securely deleted or anonymised.`,
  },
  {
    title: '6. Data security',
    content: `We take the security of your personal data seriously. Our measures include:

- SSL/HTTPS encryption on all website communications
- Restricted access to personal data — only team members who need it can access it
- Secure email communications for sharing task updates and receipts
- Regular review of our data handling practices

While we take all reasonable steps to protect your data, no method of transmission over the internet is 100% secure. If you have concerns, please contact us directly.`,
  },
  {
    title: '7. Your rights',
    content: `Under Zimbabwe's Data Protection Act (2021), you have the following rights:

- Right to access — request a copy of the personal data we hold about you
- Right to rectification — ask us to correct inaccurate or incomplete data
- Right to erasure — request that we delete your personal data
- Right to restrict processing — ask us to limit how we use your data
- Right to object — object to our processing of your personal data
- Right to data portability — request your data in a portable format

To exercise any of these rights, contact us at info@trustedhandzw.co.zw. We will respond within 30 days.`,
  },
  {
    title: '8. Cookies',
    content: `Our website uses minimal cookies. We use only essential cookies required for the website to function correctly (e.g. session management). We do not use tracking cookies, advertising cookies, or third-party analytics without your consent.

You can control cookie settings through your browser at any time.`,
  },
  {
    title: '9. Third-party links',
    content: `Our website may contain links to third-party websites (such as WhatsApp and Facebook). We are not responsible for the privacy practices of those sites. We encourage you to read their privacy policies before providing any personal information.`,
  },
  {
    title: '10. Changes to this policy',
    content: `We may update this Privacy Policy from time to time. When we do, we will update the "Last updated" date at the top of this page. We encourage you to review this policy periodically.

Continued use of our services after any changes constitutes your acceptance of the updated policy.`,
  },
  {
    title: '11. Contact us',
    content: `If you have any questions about this Privacy Policy or how we handle your data, please contact us:

- Email: info@trustedhandzw.co.zw
- WhatsApp: +263 711 410 889
- Website: trustedhandzw.co.zw

We aim to respond to all privacy-related enquiries within 5 business days.`,
  },
];

export default function Privacy() {
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
            Privacy Policy
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
                    href={`#section-${i}`}
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
                At TrustedHandZW, your privacy matters. This policy explains what personal information we collect, how we use it, and your rights under Zimbabwe's Data Protection Act (2021). We keep things simple and transparent — the same way we run our services.
              </p>
            </div>

            {sections.map((section, i) => (
              <div key={i} id={`section-${i}`} className="scroll-mt-24">
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
                Have questions about your privacy?
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
                  to="/terms"
                  className="text-sm font-semibold text-[#3B82F6] hover:text-[#1B2E78] transition-colors"
                >
                  View Terms & Conditions →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}