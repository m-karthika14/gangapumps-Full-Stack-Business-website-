import React, { useState } from 'react';
import { Search, ChevronDown } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useData } from '../context/DataContext';
import { Listbox } from '@headlessui/react';
import { Helmet } from 'react-helmet-async';

interface DropdownProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: string[];
}

const Dropdown: React.FC<DropdownProps> = ({ label, value, onChange, options }) => (
  <Listbox value={value} onChange={onChange}>
    <div className="relative">
      <Listbox.Button className="w-full px-4 py-2 pr-10 rounded-xl bg-white/10 backdrop-blur-md text-white border border-white/20 shadow-md font-inter text-left transition-all duration-300 ease-in-out focus:outline-none focus:shadow-lg">
        {value || `All ${label}`}
        <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-300" size={18} />
      </Listbox.Button>
      <Listbox.Options className="absolute z-50 mt-1 w-full max-h-60 overflow-y-auto rounded-xl bg-white/20 backdrop-blur-md text-dark shadow-lg ring-1 ring-black/10 focus:outline-none">
        <Listbox.Option
          key="all"
          value=""
          className={({ active }) =>
            `px-4 py-2 cursor-pointer font-inter ${active ? 'bg-primary text-white' : 'text-dark'}`
          }
        >
          All {label}
        </Listbox.Option>
        {options.map((option) => (
          <Listbox.Option
            key={option}
            value={option}
            className={({ active }) =>
              `px-4 py-2 cursor-pointer font-inter ${active ? 'bg-primary text-white' : 'text-dark'}`
            }
          >
            {option}
          </Listbox.Option>
        ))}
      </Listbox.Options>
    </div>
  </Listbox>
);

const Products: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('');
  const [brandFilter, setBrandFilter] = useState('');
  const { products } = useData();
  const navigate = useNavigate();

  const filteredProducts = products.filter(product =>
    product.name?.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (categoryFilter === '' || product.category === categoryFilter) &&
    (brandFilter === '' || product.brand === brandFilter)
  );

  const categories = [...new Set(products.map(p => p.category))];
  const brands = [...new Set(products.map(p => p.brand))];

  const groupedProducts = categories
    .filter(category => filteredProducts.some(p => p.category === category))
    .map(category => ({
      category,
      items: filteredProducts.filter(p => p.category === category),
    }));

  return (
    <div className="min-h-screen bg-dark pt-32 pb-16">
      {/* ✅ SEO Tags */}
      <Helmet>
        <title>Our Products | Ganga Electricals Bangalore</title>
        <meta
          name="description"
          content="Browse our wide range of high-quality electrical products, pumps, and hardware solutions. Filter by category or brand to find the perfect product."
        />
        <meta
          name="keywords"
          content="Electrical Products, Bangalore Hardware, Water Pumps, Submersible, Ganga Electricals"
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Ganga Electricals" />
        <link rel="canonical" href="https://gangapumps.com/products" />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-6">
          <h1 className="font-playfair text-4xl font-bold text-white mb-4">Our Products</h1>
          <p className="font-inter text-white text-lg max-w-2xl mx-auto">
            Discover our comprehensive range of electrical and hardware solutions
          </p>
        </div>

        {/* Search Bar */}
        <div className="flex justify-center mt-4 mb-12 px-4">
          <div className="w-full max-w-2xl flex rounded-2xl overflow-hidden shadow-[0_4px_20px_rgba(255,255,255,0.05)] border border-white/20 bg-white/10 backdrop-blur-xl">
            <div className="relative flex-grow">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" size={22} />
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 text-white placeholder:text-gray-300 bg-transparent focus:outline-none font-inter text-lg"
              />
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-dark rounded-lg p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-4xl mx-auto">
            <Dropdown label="Categories" value={categoryFilter} onChange={setCategoryFilter} options={categories} />
            <Dropdown label="Brands" value={brandFilter} onChange={setBrandFilter} options={brands} />
          </div>
        </div>

        {/* Grouped Products by Category */}
        {groupedProducts.map(({ category, items }) => (
          <div key={category} className="mb-12">
            <h2 className="text-xl sm:text-2xl font-playfair font-bold text-white mb-6 border-l-4 border-accent pl-3">
              {category}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {items.map(product => (
                <Link to={`/product/${product._id}`} key={product._id} className="block">
                  <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all cursor-pointer overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-60 object-contain bg-white p-4"
                    />
                    <div className="p-4">
                      <div className="text-lg font-semibold text-dark font-inter mb-1">{product.name}</div>
                      <div className="text-sm text-gray-600 font-inter">{product.brand}</div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ))}

        {/* No Results */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="font-inter text-gray-400 text-lg">
              No products found matching your criteria.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
