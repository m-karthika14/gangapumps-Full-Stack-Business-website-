import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY === 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    (window as any).accessAdmin = (user: string, pass: string) => {
      const USERNAME = 'naren';
      const PASSWORD = 'richkids1514';
      if (user === USERNAME && pass === PASSWORD) {
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
     { name: 'AboutUs', path: '/about' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div
        className={`w-full relative h-24 sm:h-28 md:h-32 lg:h-40 px-4 sm:px-6 lg:px-8 transition-all duration-300 ${
          isMobileMenuOpen ? 'bg-dark/50 backdrop-blur-sm' : ''
        }`}
      >
        <div className="flex items-center justify-between h-full relative">
          {/* Logo */}
          <div
            className="z-20 text-left cursor-pointer"
            onClick={() => navigate('/')}
          >
            <img
              src="https://i.postimg.cc/G2hn0WFh/Whats-App-Image-2025-07-16-at-14-32-07-9bff67f5-1-removebg-preview.png"
              alt="Ganga Electrical and Hardwares"
              className="h-16 sm:h-20 lg:h-28 object-contain drop-shadow-[0_0_5px_rgba(221,168,83,0.7)]"
            />
          </div>

          {/* Desktop Nav Links */}
          <div
            className="hidden md:flex items-center space-x-8 px-6 py-2 rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
              bg-white/20 backdrop-blur-xl border border-white/30 shadow-lg shadow-white/10"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`font-inter text-lg font-semibold relative transition-all duration-200 ${
                  location.pathname === link.path
                    ? 'text-white'
                    : 'text-white hover:text-white/80'
                }`}
              >
                {link.name}
                <span
                  className={`absolute bottom-0 left-0 w-full h-0.5 bg-[#FFDC60] transform transition-transform duration-200 ${
                    location.pathname === link.path
                      ? 'scale-x-100'
                      : 'scale-x-0 hover:scale-x-100'
                  }`}
                ></span>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden z-30">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white hover:text-white/80 transition-all duration-300
                         bg-white/10 backdrop-blur-sm p-2 rounded-lg border border-white/20
                         shadow-lg hover:bg-white/20 focus:outline-none"
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
              <div className="p-2 space-y-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block font-inter text-base font-semibold py-3 px-4 rounded-lg transition-all duration-200 ${
                      location.pathname === link.path
                        ? 'text-white bg-primary shadow-md'
                        : 'text-dark hover:text-primary hover:bg-cream'
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
