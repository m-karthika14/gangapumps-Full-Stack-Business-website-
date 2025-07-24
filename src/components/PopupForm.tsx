import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { useData } from '../context/DataContext';

const PopupForm = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    productOfInterest: ''
  });
  const { addLead } = useData();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 20000); // Show after 20 seconds

    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await addLead({
        type: 'popup',
        name: formData.name,
        phone: formData.phone,
        productOfInterest: formData.productOfInterest,
        email: '',
        message: ''
      });
      setIsVisible(false);
      alert('Thank you for your interest! We will contact you soon.');
    } catch (err) {
      console.error('❌ Error submitting lead:', err);
      alert('Something went wrong. Please try again.');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg p-8 max-w-md w-full relative">
        <button
          onClick={() => setIsVisible(false)}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          <X size={24} />
        </button>

        <h3 className="font-playfair text-2xl font-bold text-dark mb-4">
          Get Expert Advice
        </h3>
        <p className="font-inter text-gray-600 mb-6">
          Let us help you find the perfect electrical or hardware solution for your needs.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="font-inter block text-sm font-medium text-gray-700 mb-1">
              Name *
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div>
            <label className="font-inter block text-sm font-medium text-gray-700 mb-1">
              Phone Number *
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div>
            <label className="font-inter block text-sm font-medium text-gray-700 mb-1">
              Product of Interest
            </label>
            <select
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
