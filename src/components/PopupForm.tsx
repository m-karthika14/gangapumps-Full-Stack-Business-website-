import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { useData } from '../context/DataContext';

const PopupForm = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    productOfInterest: '',
  });
  const { addLead } = useData();

  // Delay popup to reduce LCP interference
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 15000);
    return () => clearTimeout(timer);
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await addLead({
        type: 'popup',
        name: formData.name,
        phone: formData.phone,
        productOfInterest: formData.productOfInterest,
        email: '',
        message: '',
      });
      setIsVisible(false);
      alert('✅ Thank you for your interest! We will contact you soon.');
    } catch (err) {
      console.error('❌ Error submitting lead:', err);
      alert('Something went wrong. Please try again.');
    }
  };

  if (!isVisible) return null;

  return (
    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-[9999] p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="popupTitle"
    >
      <div className="bg-white rounded-lg p-8 max-w-md w-full relative shadow-lg">
        <button
          onClick={() => setIsVisible(false)}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          aria-label="Close form"
        >
          <X size={24} />
        </button>

        <h3
          id="popupTitle"
          className="font-playfair text-2xl font-bold text-dark mb-4"
        >
          Get Expert Advice
        </h3>
        <p className="font-inter text-gray-600 mb-6">
          Let us help you find the perfect electrical or hardware solution for your needs.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name */}
          <div>
            <label
              htmlFor="name"
              className="font-inter block text-sm font-medium text-gray-700 mb-1"
            >
              Name *
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              autoComplete="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          {/* Phone */}
          <div>
            <label
              htmlFor="phone"
              className="font-inter block text-sm font-medium text-gray-700 mb-1"
            >
              Phone Number *
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              required
              autoComplete="tel"
              value={formData.phone}
              onChange={handleChange}
              pattern="[0-9]{10,12}"
              title="Enter a valid phone number"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          {/* Interest */}
          <div>
            <label
              htmlFor="productOfInterest"
              className="font-inter block text-sm font-medium text-gray-700 mb-1"
            >
              Product of Interest
            </label>
            <select
              id="productOfInterest"
              name="productOfInterest"
              value={formData.productOfInterest}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="">Select a category</option>
              <option value="Pressure Boosting">Pressure Boosting</option>
              <option value="Water Transfer">Water Transfer</option>
              <option value="Pressure Tank">Pressure Tank</option>
              <option value="Circulation Pumps">Circulation Pumps</option>
              <option value="Drainer Pumps">Drainer Pumps</option>
              <option value="Lifting Stations">Lifting Stations</option>
              <option value="Control Panels">Control Panels</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-primary text-white py-2 px-4 rounded-md hover:bg-dark transition-colors font-inter font-medium"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default PopupForm;
