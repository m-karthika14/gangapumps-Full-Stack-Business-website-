import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import Reviews from './pages/Reviews';
import Contact from './pages/Contact';
import Admin from './pages/Admin';
import About from './pages/About';
import Footer from './components/Footer';
import PopupForm from './components/PopupForm';
import ScrollToTop from './components/ScrollToTop';
import { AuthProvider } from './context/AuthContext';
import { DataProvider } from './context/DataContext';
// import { FaWhatsapp } from 'react-icons/fa'; // Commented since button is disabled

function App() {
  return (
    <HelmetProvider>
      <AuthProvider>
        <DataProvider>
          <Router>
            <ScrollToTop />
            <div className="min-h-screen bg-cream flex flex-col justify-between relative">
              <Navbar />

              <main className="flex-grow">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/products" element={<Products />} />
                  <Route path="/product/:id" element={<ProductDetail />} />
                  <Route path="/reviews" element={<Reviews />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/admin" element={<Admin />} />
                  <Route path="/about" element={<About />} />
                  <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
              </main>

              <Footer />
              <PopupForm />

              {/* 
              ✅ Sticky WhatsApp Chat Button — Commented Out
              <div className="fixed bottom-5 right-5 z-50 group flex items-center space-x-2">
                <span className="opacity-0 group-hover:opacity-100 transform group-hover:-translate-x-2 translate-x-2 transition-all duration-300 bg-[#25D366] text-white px-3 py-2 rounded-md shadow-md text-sm font-inter whitespace-nowrap">
                  Text on WhatsApp
                </span>
                <a
                  href={`https://wa.me/919986082495?text=${encodeURIComponent(
                    'Please send us your:\nName - \nPhone Number - \nProduct/Request - '
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#25D366] hover:bg-[#1DA851] text-white p-4 rounded-full shadow-lg hover:scale-105 transition-transform duration-300"
                  aria-label="Chat on WhatsApp"
                >
                  <FaWhatsapp size={24} />
                </a>
              </div>
              */}
            </div>
          </Router>
        </DataProvider>
      </AuthProvider>
    </HelmetProvider>
  );
}

export default App;
