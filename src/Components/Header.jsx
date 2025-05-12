import React, { useState, useEffect } from 'react';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
      <div className="max-w-screen-xl mx-auto px-4 py-3 flex items-center justify-center relative">
        {/* Wrapper: Logo + Nav */}
        <div className="flex items-center space-x-65">
          {/* Logo */}
          <img src="/codenerLogo.svg" alt="Codener Logo" className="h-5 w-auto" />

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-10 text-sm">
            {[
              { label: 'About', arrow: true },
              { label: 'Services', arrow: true },
              { label: 'Case Study', arrow: false },
              { label: 'Blog', arrow: false },
            ].map((item, index) => (
              <a
                key={index}
                href={`#${item.label.toLowerCase().replace(' ', '-')}`}
                className="flex items-center text-blue-900 hover:text-blue-1000 font-medium"
              >
                <span>{item.label}</span>
                
              </a>
            ))}

            {/* Contact Button */}
            <a
              href="#contact"
              className="bg-blue-900 text-white px-6 py-1.5 rounded-md text-sm hover:bg-blue-1000 transition"
            >
              Contact Us
            </a>
          </nav>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden absolute right-4 text-gray-700 focus:outline-none"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md px-4 py-4 space-y-3 text-blue-600 font-medium text-sm">
          {['About', 'Services', 'Case Study', 'Blog'].map((label, index) => (
            <a key={index} href={`#${label.toLowerCase().replace(' ', '-')}`} className="block">
              {label}
            </a>
          ))}
          <a
            href="#contact"
            className="block bg-blue-600 text-white text-center px-4 py-2 rounded-md"
          >
            Contact
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
