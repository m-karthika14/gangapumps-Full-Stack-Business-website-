// components/StickyWhatsAppButton.jsx
import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const StickyWhatsAppButton = () => {
  const phoneNumber = '919986082495'; // ✅ Make sure it's correct and without '+'
  const prefilledMessage = encodeURIComponent(
    `Please fill in your details:\nName - \nPhone Number - \nProduct/Request - `
  );

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${prefilledMessage}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 sm:bottom-5 sm:right-5 z-50 bg-[#25D366] hover:bg-[#1DA851] text-white p-3 sm:p-4 rounded-full shadow-lg hover:scale-105 transition-transform duration-300"
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp size={20} className="sm:size-6" />
    </a>
  );
};

export default StickyWhatsAppButton;
