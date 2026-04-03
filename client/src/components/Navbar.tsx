import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const navLinks = [
  { label: 'Home',     path: '/' },
  { label: 'About',    path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'FAQ',      path: '/faq' },
  { label: 'Contact',  path: '/contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
            <img src="/logo.png" alt="TrustedHandZW" className="h-9 w-auto" />
            <span
              className="text-xl font-black uppercase tracking-wide leading-none"
              style={{ fontFamily: "'Barlow Condensed', sans-serif", color: '#1B2E78' }}
            >
              TrustedHandZW
            </span>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map(link => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  pathname === link.path
                    ? 'text-[#1B2E78] bg-[#EEF2FF]'
                    : 'text-gray-600 hover:text-[#1B2E78] hover:bg-[#EEF2FF]'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/quote"
              className="ml-3 px-5 py-2 rounded-md text-sm font-semibold text-white bg-[#1B2E78] hover:bg-[#2A3F9E] transition-colors"
            >
              Get a Quote
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 rounded-md text-gray-600 hover:text-[#1B2E78] hover:bg-[#EEF2FF] transition-colors"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {open
                ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              }
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-3 space-y-1">
          {navLinks.map(link => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setOpen(false)}
              className={`block px-4 py-2.5 rounded-md text-sm font-medium transition-colors ${
                pathname === link.path
                  ? 'text-[#1B2E78] bg-[#EEF2FF]'
                  : 'text-gray-600 hover:text-[#1B2E78] hover:bg-[#EEF2FF]'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/quote"
            onClick={() => setOpen(false)}
            className="block mt-2 px-4 py-2.5 rounded-md text-sm font-semibold text-white bg-[#1B2E78] text-center"
          >
            Get a Quote
          </Link>
        </div>
      )}
    </nav>
  );
}