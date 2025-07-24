import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const Footer = () => {
  const location = useLocation();

  const isWhiteFooter =
    location.pathname === '/contact' ||
    location.pathname === '/products' ||
    location.pathname === '/reviews' ||
    location.pathname.startsWith('/product/');

  return (
    <>
      <Helmet>
        <title>Footer - Ganga Electrical & Hardwares</title>
        <meta
          name="description"
          content="Get in touch with Ganga Electrical & Hardwares for quality electrical and plumbing products. Find address, phone, and email details here."
        />
        <link
          rel="preload"
          as="image"
          href="https://i.postimg.cc/ZK5cNsnD/shop-building-front.avif"
          fetchPriority="low"
        />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Ganga Electrical and Hardwares",
              "image": "https://i.postimg.cc/ZK5cNsnD/shop-building-front.avif",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "No. 57/6, Opposite Nirashrithara Parihara Kendra, Sajjepalya, Magadi Main Road, Manahalli Road",
                "addressLocality": "Kottigepalya",
                "addressRegion": "Bangalore",
                "postalCode": "560091",
                "addressCountry": "IN"
              },
              "telephone": "+919986082495",
              "email": "sales@gangapumps.com",
              "url": "https://gangapumps.com"
            }
          `}
        </script>
      </Helmet>

      {/* Hidden image to improve LCP if image not in DOM elsewhere */}
      <img
        src="https://i.postimg.cc/ZK5cNsnD/shop-building-front.avif"
        alt="Storefront"
        width="1"
        height="1"
        loading="lazy"
        fetchPriority="low"
        style={{ display: 'none' }}
      />

      <footer
        className={`${isWhiteFooter ? 'bg-white text-dark' : 'bg-dark text-white'} py-12`}
        aria-label="Footer with contact and navigation links"
        role="contentinfo"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">

            {/* Company Info */}
            <div>
              <h3 className="font-playfair text-xl font-bold mb-4">
                Ganga Electrical and Hardwares
              </h3>
              <p className={`font-inter mb-4 ${isWhiteFooter ? 'text-[#222]' : 'text-gray-300'}`}>
                Your trusted partner for all electrical and plumbing needs.
                Quality products, reliable service, competitive prices since decades.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-playfair text-lg font-semibold mb-4">Quick Links</h4>
              <nav className="space-y-2" aria-label="Footer navigation links">
                {[
                  { href: '/', text: 'Home' },
                  { href: '/products', text: 'Products' },
                  { href: '/contact', text: 'Estimate' },
                  { href: '/reviews', text: 'Reviews' },
                  { href: '/about', text: 'AboutUs' }
                ].map(({ href, text }) => (
                  <a
                    key={text}
                    href={href}
                    className={`font-inter block transition-colors ${
                      isWhiteFooter ? 'text-[#222] hover:text-primary' : 'text-gray-300 hover:text-accent'
                    }`}
                  >
                    {text}
                  </a>
                ))}
              </nav>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-playfair text-lg font-semibold mb-4">Contact Info</h4>
              <address className="space-y-3 not-italic text-sm">
                <div className="flex items-center">
                  <Phone size={24} className="mr-3 text-accent" aria-hidden="true" />
                  <a
                    href="tel:+919986082495"
                    className={`font-inter ${isWhiteFooter ? 'text-[#222]' : 'text-gray-300'}`}
                  >
                    +919986082495
                  </a>
                </div>
                <div className="flex items-center">
                  <Mail size={24} className="mr-3 text-accent" aria-hidden="true" />
                  <a
                    href="mailto:sales@gangapumps.com"
                    className={`font-inter ${isWhiteFooter ? 'text-[#222]' : 'text-gray-300'}`}
                  >
                    sales@gangapumps.com
                  </a>
                </div>
                <div className="flex items-start break-words">
                  <MapPin size={60} className="mr-3 mt-1 text-accent" aria-hidden="true" />
                  <span className={`font-inter ${isWhiteFooter ? 'text-[#222]' : 'text-gray-300'}`}>
                    No. 57/6, Opposite Nirashrithara Parihara Kendra, Sajjepalya, Magadi Main Road, Manahalli Road, Kottigepalya-560091, Bangalore
                  </span>
                </div>
              </address>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className={`border-t mt-8 pt-8 text-center ${isWhiteFooter ? 'border-gray-300' : 'border-gray-700'}`}>
            <p className={`font-inter ${isWhiteFooter ? 'text-[#222]' : 'text-gray-300'}`}>
              © 2025 Ganga Electrical and Hardwares. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
