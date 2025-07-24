import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY === 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Temporary Admin Login - consider moving to env or backend
    (window as any).accessAdmin = (user: string, pass: string) => {
      if (user === 'naren' && pass === 'richkids1514') {
        console.log('%c✅ Access granted. Redirecting to admin...', 'color: green; font-weight: bold;');
        window.location.href = '/admin';
      } else {
        console.log('%c❌ Incorrect credentials.', 'color: red; font-weight: bold;');
      }
    };
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'Estimate', path: '/contact' },
    { name: 'Reviews', path: '/reviews' },
    { name: 'AboutUs', path: '/about' }
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
      aria-label="Main Navigation"
    >
      <div
        className={`relative w-full h-24 sm:h-28 md:h-32 lg:h-40 px-4 sm:px-6 lg:px-8 transition-all duration-300 ${
          isMobileMenuOpen ? 'bg-dark/50 backdrop-blur-sm' : ''
        }`}
      >
        <div className="flex items-center justify-between h-full relative">
          {/* Logo */}
          <Link to="/" className="z-20">
            <img
              src="https://i.postimg.cc/G2hn0WFh/Whats-App-Image-2025-07-16-at-14-32-07-9bff67f5-1-removebg-preview.png"
              alt="Ganga Electrical and Hardwares Logo"
              className="h-16 sm:h-20 lg:h-28 object-contain drop-shadow-[0_0_5px_rgba(221,168,83,0.7)]"
              loading="eager"
              fetchPriority="high"
              width={140}
              height={80}
            />
          </Link>

          {/* Desktop Links */}
          <ul
            className="hidden md:flex items-center space-x-8 px-6 py-2 rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
              bg-white/20 backdrop-blur-xl border border-white/30 shadow-lg shadow-white/10"
          >
            {navLinks.map(({ name, path }) => (
              <li key={name}>
                <Link
                  to={path}
                  className={`font-inter text-lg font-semibold relative transition-all duration-200 ${
                    location.pathname === path
                      ? 'text-white'
                      : 'text-white hover:text-white/80'
                  }`}
                >
                  {name}
                  <span
                    className={`absolute bottom-0 left-0 w-full h-0.5 bg-[#FFDC60] transform transition-transform duration-200 ${
                      location.pathname === path
                        ? 'scale-x-100'
                        : 'scale-x-0 hover:scale-x-100'
                    }`}
                  ></span>
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Toggle */}
          <div className="md:hidden z-30">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white hover:text-white/80 transition-all duration-300
                         bg-white/10 backdrop-blur-sm p-2 rounded-lg border border-white/20
                         shadow-lg hover:bg-white/20 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X size={24} className="transition-transform duration-300 rotate-90" />
              ) : (
                <Menu size={24} className="transition-transform duration-300 rotate-0" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden absolute top-full left-0 right-0 z-20 transition-all duration-500 ease-in-out ${
            isMobileMenuOpen
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 -translate-y-4 pointer-events-none'
          }`}
        >
          <div className="px-4 pb-4">
            <div className="bg-white/90 backdrop-blur-xl border border-white/30 rounded-2xl shadow-2xl overflow-hidden animate-zoom-in">
              <ul className="p-2 space-y-1">
                {navLinks.map(({ name, path }) => (
                  <li key={name}>
                    <Link
                      to={path}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`block font-inter text-base font-semibold py-3 px-4 rounded-lg transition-all duration-200 ${
                        location.pathname === path
                          ? 'text-white bg-primary shadow-md'
                          : 'text-dark hover:text-primary hover:bg-cream'
                      }`}
                    >
                      {name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* SEO Links for Googlebot */}
      <div style={{ display: 'none' }}>
        <a href="/products">Products</a>
        <a href="/contact">Contact</a>
        <a href="/about">AboutUs</a>
        <a href="/reviews">Reviews</a>
      </div>
    </nav>
  );
};

export default Navbar;
