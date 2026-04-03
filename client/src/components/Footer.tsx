import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-[#1B2E78] text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="md:col-span-2">
            <div
              className="text-2xl font-black uppercase tracking-wide mb-3"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              TrustedHandZW
            </div>
            <p className="text-blue-200 text-sm leading-relaxed max-w-xs">
              Your trusted hands back home. We help Zimbabweans in the diaspora care for their loved ones — with receipts, photos, and real-time WhatsApp updates.
            </p>
            <div className="flex gap-3 mt-5">
              <a
                href="https://www.facebook.com/share/1DBDsdtFb8/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3
              className="text-sm font-bold uppercase tracking-widest text-blue-300 mb-4"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              Quick Links
            </h3>
            <ul className="space-y-2">
              {[
                { label: 'Home', path: '/' },
                { label: 'About Us', path: '/about' },
                { label: 'Services', path: '/services' },
                { label: 'Testimonials', path: '/testimonials' },
                { label: 'FAQ', path: '/faq' },
              ].map(l => (
                <li key={l.path}>
                  <Link to={l.path} className="text-blue-200 hover:text-white text-sm transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3
              className="text-sm font-bold uppercase tracking-widest text-blue-300 mb-4"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              Contact
            </h3>
            <ul className="space-y-2 text-sm text-blue-200">
              <li>
                <a href="tel:+263711410889" className="hover:text-white transition-colors">
                  +263 711 410 889
                </a>
              </li>
              <li>
                <a href="tel:+263771410889" className="hover:text-white transition-colors">
                  +263 771 410 889
                </a>
              </li>
              <li>
                <a href="mailto:info@trustedhandzw.co.zw" className="hover:text-white transition-colors">
                  info@trustedhandzw.co.zw
                </a>
              </li>
              <li className="pt-1">Nationwide — Zimbabwe</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-blue-300">
          <p>© {new Date().getFullYear()} TrustedHandZW. All rights reserved.</p>
          <div className="flex gap-5">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms &amp; Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}