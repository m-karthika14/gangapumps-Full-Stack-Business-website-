import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { useLocation } from 'react-router-dom';

const Footer = () => {
  const location = useLocation();

  const isWhiteFooter =
    location.pathname === '/contact' ||
    location.pathname === '/products' ||
    location.pathname === '/reviews' ||
    location.pathname.startsWith('/product/');

  return (
    <footer className={`${isWhiteFooter ? 'bg-white text-dark' : 'bg-dark text-white'} py-12`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">

          <div>
            <h3 className="font-playfair text-xl font-bold mb-4">
              Ganga Electrical and Hardwares
            </h3>
            <p className={`font-inter mb-4 ${isWhiteFooter ? 'text-[#222]' : 'text-gray-300'}`}>
              Your trusted partner for all electrical and plumbing needs. 
              Quality products, reliable service, competitive prices since decades.
            </p>
          </div>

          <div>
            <h4 className="font-playfair text-lg font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <a href="/" className={`font-inter block transition-colors ${isWhiteFooter ? 'text-[#222] hover:text-primary' : 'text-gray-300 hover:text-accent'}`}>
                Home
              </a>
              <a href="/products" className={`font-inter block transition-colors ${isWhiteFooter ? 'text-[#222] hover:text-primary' : 'text-gray-300 hover:text-accent'}`}>
                Products
              </a>
              <a href="/contact" className={`font-inter block transition-colors ${isWhiteFooter ? 'text-[#222] hover:text-primary' : 'text-gray-300 hover:text-accent'}`}>
                Estimate
              </a>
              <a href="/reviews" className={`font-inter block transition-colors ${isWhiteFooter ? 'text-[#222] hover:text-primary' : 'text-gray-300 hover:text-accent'}`}>
                Reviews
              </a>
              <a href="/about" className={`font-inter block transition-colors ${isWhiteFooter ? 'text-[#222] hover:text-primary' : 'text-gray-300 hover:text-accent'}`}>
                AboutUs
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-playfair text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <Phone size={28} className="mr-3 text-accent" />
                <span className={`font-inter ${isWhiteFooter ? 'text-[#222]' : 'text-gray-300'}`}>
                  +919986082495
                </span>
              </div>
              <div className="flex items-center">
                <Mail size={28} className="mr-3 text-accent" />
                <span className={`font-inter ${isWhiteFooter ? 'text-[#222]' : 'text-gray-300'}`}>
                  sales@gangapumps.com
                </span>
              </div>
              <div className="flex items-start">
                <MapPin size={78} className="mr-3 mt-1 text-accent" />
                <span className={`font-inter ${isWhiteFooter ? 'text-[#222]' : 'text-gray-300'}`}>
                  No. 57/6, Opposite Nirashrithara Parihara Kendra, Sajjepalya, Magadi Main Road, Manahalli Road, Kottigepalya-560091,  Bangalore
                </span>
              </div>
            </div>
          </div>

        </div>

        <div className={`border-t mt-8 pt-8 text-center ${isWhiteFooter ? 'border-gray-300' : 'border-gray-700'}`}>
          <p className={`font-inter ${isWhiteFooter ? 'text-[#222]' : 'text-gray-300'}`}>
            © 2025 Ganga Electrical and Hardwares. All rights reserved.
          </p>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
