import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import axios from 'axios';

// ---------------------- Interfaces ----------------------

export interface Product {
  _id: string;
  name: string;
  category: string;
  brand: string;
  useCase: string;
  shortDescription: string;
  description: string;
  image: string;
  features: string[];
}

export interface Review {
  _id: string;
  productId: string;
  name: string;
  rating: number;
  comment: string;
  date: string;
}

export interface Lead {
  _id: string;
  name: string;
  phone: string;
  email?: string;
  message?: string;
  productOfInterest?: string;
  type: 'popup' | 'estimate'; // ✅ fixed here
  createdAt: string;
}

interface DataContextType {
  products: Product[];
  reviews: Review[];
  leads: Lead[];
  addProduct: (product: Omit<Product, '_id'>) => Promise<void>;
  updateProduct: (id: string, product: Omit<Product, '_id'>) => Promise<void>;
  deleteProduct: (id: string) => Promise<void>;
  addReview: (review: Omit<Review, '_id' | 'date'>) => Promise<void>;
  deleteReview: (id: string) => Promise<void>;
  addLead: (lead: Omit<Lead, '_id' | 'createdAt'>) => Promise<void>; // ✅ accepts full payload including type
  deleteLead: (id: string) => Promise<void>;
  refetchAll: () => Promise<void>;
}

// ---------------------- Context Setup ----------------------

const DataContext = createContext<DataContextType | undefined>(undefined);

export const useData = () => {
  const context = useContext(DataContext);
  if (!context) throw new Error('useData must be used within a DataProvider');
  return context;
};

interface DataProviderProps {
  children: ReactNode;
}

const BASE_URL = 'http://localhost:5000/api';

// ---------------------- Provider ----------------------

export const DataProvider: React.FC<DataProviderProps> = ({ children }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [reviews, setReviews] = useState<Review[]>([]);
  const [leads, setLeads] = useState<Lead[]>([]);

  const fetchAll = async () => {
    try {
      console.log('🔄 Fetching all data from backend...');
      const [productRes, reviewRes, leadRes] = await Promise.all([
        axios.get(`${BASE_URL}/products`),
        axios.get(`${BASE_URL}/reviews`),
        axios.get(`${BASE_URL}/leads`)
      ]);

      setProducts(productRes.data);
      setReviews(reviewRes.data);
      setLeads(leadRes.data);

      console.log('✅ Data fetched:', {
        products: productRes.data.length,
        reviews: reviewRes.data.length,
        leads: leadRes.data.length
      });
    } catch (err) {
      console.error('❌ Error fetching data:', err);
    }
  };

  useEffect(() => {
    fetchAll();
  }, []);

  // ---------------------- Product Methods ----------------------

  const addProduct = async (product: Omit<Product, '_id'>) => {
    const res = await axios.post(`${BASE_URL}/products`, product);
    setProducts(prev => [...prev, res.data]);
  };

  const updateProduct = async (id: string, product: Omit<Product, '_id'>) => {
    const res = await axios.put(`${BASE_URL}/products/${id}`, product);
    setProducts(prev => prev.map(p => (p._id === id ? res.data : p)));
  };

  const deleteProduct = async (id: string) => {
    await axios.delete(`${BASE_URL}/products/${id}`);
    setProducts(prev => prev.filter(p => p._id !== id));
  };

  // ---------------------- Review Methods ----------------------

  const addReview = async (review: Omit<Review, '_id' | 'date'>) => {
    const res = await axios.post(`${BASE_URL}/reviews`, review);
    setReviews(prev => [...prev, res.data]);
  };

  const deleteReview = async (id: string) => {
    await axios.delete(`${BASE_URL}/reviews/${id}`);
    setReviews(prev => prev.filter(r => r._id !== id));
  };

  // ---------------------- Lead Methods (Backend Connected) ----------------------

  const addLead = async (lead: Omit<Lead, '_id' | 'createdAt'>) => {
    const res = await axios.post(`${BASE_URL}/leads`, lead);
    setLeads(prev => [res.data, ...prev]);
  };

  const deleteLead = async (id: string) => {
    await axios.delete(`${BASE_URL}/leads/${id}`);
    setLeads(prev => prev.filter(l => l._id !== id));
  };

  return (
    <DataContext.Provider
      value={{
        products,
        reviews,
        leads,
        addProduct,
        updateProduct,
        deleteProduct,
        addReview,
        deleteReview,
        addLead,
        deleteLead,
        refetchAll: fetchAll
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
