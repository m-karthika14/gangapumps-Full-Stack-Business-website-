import React, { useState } from 'react';
import { useAuth } from '../context/useAuth';
import { useData } from '../context/DataContext';
import { Edit, Trash2, Star } from 'lucide-react';

interface ProductFormType {
  name: string;
  category: string;
  brand: string;
  useCase: string;
  shortDescription: string;
  description: string;
  image: string;
  features: string[];
}

const Admin = () => {
  const { isAuthenticated, login, logout } = useAuth();
  const {
    products,
    reviews,
    leads,
    addProduct,
    updateProduct,
    deleteProduct,
    deleteReview,
    deleteLead,
  } = useData();

  const [loginForm, setLoginForm] = useState({ username: '', password: '' });
  const [activeTab, setActiveTab] = useState<'products' | 'reviews' | 'leads'>('products');
  const [editingProductId, setEditingProductId] = useState<string | null>(null);

  const [productForm, setProductForm] = useState<ProductFormType>({
    name: '',
    category: '',
    brand: '',
    useCase: '',
    shortDescription: '',
    description: '',
    image: '',
    features: [''],
  });

  const resetForm = () => {
    setProductForm({
      name: '',
      category: '',
      brand: '',
      useCase: '',
      shortDescription: '',
      description: '',
      image: '',
      features: [''],
    });
    setEditingProductId(null);
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (login(loginForm.username, loginForm.password)) {
      setLoginForm({ username: '', password: '' });
    } else {
      alert('Invalid credentials');
    }
  };

  const handleProductSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const features = productForm.features.filter((f) => f.trim() !== '');
    const payload = {
      ...productForm,
      features: features.length ? features : ['Feature not specified'],
      description: productForm.description || 'No description provided',
    };

    try {
      if (editingProductId) {
        await updateProduct(editingProductId, payload);
      } else {
        await addProduct(payload);
      }
      resetForm();
    } catch (err) {
      console.error('❌ Error saving product:', err);
    }
  };

  const handleEditProduct = (product: any) => {
    setEditingProductId(product._id);
    setProductForm({
      name: product.name,
      category: product.category,
      brand: product.brand,
      useCase: product.useCase,
      shortDescription: product.shortDescription,
      description: product.description,
      image: product.image,
      features: product.features?.length ? product.features : [''],
    });
  };

  const addFeatureField = () => {
    setProductForm({ ...productForm, features: [...productForm.features, ''] });
  };

  const updateFeature = (index: number, value: string) => {
    const updated = [...productForm.features];
    updated[index] = value;
    setProductForm({ ...productForm, features: updated });
  };

  const removeFeature = (index: number) => {
    const updated = productForm.features.filter((_, i) => i !== index);
    setProductForm({ ...productForm, features: updated });
  };

  // 💡 This ensures the logout button always logs out, clears session/local if needed.
  const handleLogout = () => {
    // Remove any persistent login if you use it
    window.localStorage.removeItem('isAuthenticated');
    window.sessionStorage.removeItem('isAuthenticated');
    logout();
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
          <h2 className="text-xl font-bold mb-4">Admin Login</h2>
          <form onSubmit={handleLogin} className="space-y-4">
            <input
              type="text"
              placeholder="Username"
              value={loginForm.username}
              onChange={(e) => setLoginForm({ ...loginForm, username: e.target.value })}
              className="w-full border p-2 rounded"
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={loginForm.password}
              onChange={(e) => setLoginForm({ ...loginForm, password: e.target.value })}
              className="w-full border p-2 rounded"
              required
            />
            <button type="submit" className="w-full bg-primary text-white p-2 rounded">
              Login
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-cream pt-24 pb-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Admin Dashboard</h1>
          <button onClick={handleLogout} className="bg-red-500 text-white px-4 py-2 rounded">
            Logout
          </button>
        </div>

        {/* TABS */}
        <div className="flex space-x-4 border-b mb-6">
          {['products', 'reviews', 'leads'].map((tab) => (
            <button
              key={tab}
              onClick={() => {
                setActiveTab(tab as any);
                resetForm();
              }}
              className={`pb-2 border-b-2 ${
                activeTab === tab ? 'border-primary text-primary' : 'border-transparent text-gray-600'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* PRODUCTS TAB */}
        {activeTab === 'products' && (
          <div className="space-y-8">
            <div className="bg-white p-6 rounded shadow">
              <h2 className="text-xl font-semibold mb-4">
                {editingProductId ? 'Edit Product' : 'Add Product'}
              </h2>
              <form onSubmit={handleProductSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  {['name', 'category', 'brand', 'useCase', 'shortDescription', 'image'].map((field) => (
                    <input
                      key={field}
                      type="text"
                      placeholder={field}
                      value={(productForm as any)[field]}
                      onChange={(e) =>
                        setProductForm({ ...productForm, [field]: e.target.value })
                      }
                      className="w-full border p-2 rounded"
                      required
                    />
                  ))}
                </div>
                <textarea
                  placeholder="Description"
                  value={productForm.description}
                  onChange={(e) => setProductForm({ ...productForm, description: e.target.value })}
                  className="w-full border p-2 rounded"
                  rows={4}
                />

                <div>
                  <label className="block mb-2 font-medium">Features</label>
                  {productForm.features.map((feature, index) => (
                    <div key={index} className="flex gap-2 mb-2">
                      <input
                        type="text"
                        value={feature}
                        onChange={(e) => updateFeature(index, e.target.value)}
                        className="flex-1 border p-2 rounded"
                        required
                      />
                      {productForm.features.length > 1 && (
                        <button
                          type="button"
                          onClick={() => removeFeature(index)}
                          className="bg-red-500 text-white px-2 rounded"
                        >
                          ✕
                        </button>
                      )}
                    </div>
                  ))}
                  <button
                    type="button"
                    onClick={addFeatureField}
                    className="text-sm text-blue-600 mt-1"
                  >
                    + Add Feature
                  </button>
                </div>

                <div className="flex gap-4">
                  <button type="submit" className="bg-primary text-white px-6 py-2 rounded">
                    {editingProductId ? 'Update' : 'Add'} Product
                  </button>
                  {editingProductId && (
                    <button
                      type="button"
                      onClick={resetForm}
                      className="bg-gray-400 text-white px-6 py-2 rounded"
                    >
                      Cancel
                    </button>
                  )}
                </div>
              </form>
            </div>

            {/* PRODUCT LIST */}
            <div className="bg-white p-6 rounded shadow">
              <h2 className="text-xl font-semibold mb-4">Products ({products.length})</h2>
              <div className="space-y-4">
                {products.map((product) => (
                  <div
                    key={product._id}
                    className="flex justify-between items-center border p-4 rounded"
                  >
                    <div>
                      <p className="font-semibold">{product.name}</p>
                      <p className="text-sm text-gray-600">
                        {product.category} • {product.brand}
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <button
                        onClick={() => handleEditProduct(product)}
                        className="bg-blue-500 text-white px-3 py-1 rounded"
                      >
                        <Edit size={16} />
                      </button>
                      <button
                        onClick={() => deleteProduct(product._id)}
                        className="bg-red-500 text-white px-3 py-1 rounded"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* REVIEWS TAB */}
        {activeTab === 'reviews' && (
          <div className="bg-white p-6 rounded shadow">
            <h2 className="text-xl font-semibold mb-4">Customer Reviews ({reviews.length})</h2>
            <div className="space-y-4">
              {reviews.map((review) => (
                <div
                  key={review._id}
                  className="border p-4 rounded shadow-sm bg-gray-50 flex justify-between items-start"
                >
                  <div>
                    <p className="font-semibold text-lg text-primary">{review.name}</p>
                    <p className="text-sm text-gray-600 mb-1">
                      Rating:{' '}
                      {Array(review.rating)
                        .fill(0)
                        .map((_, i) => (
                          <Star
                            key={i}
                            className="inline text-yellow-500"
                            size={16}
                            fill="currentColor"
                          />
                        ))}
                    </p>
                    <p className="text-gray-700">{review.comment}</p>
                    <p className="text-xs text-gray-500 mt-1">Date: {review.date}</p>
                  </div>

                  <button
                    onClick={() => deleteReview(review._id)}
                    className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* LEADS TAB */}
        {activeTab === 'leads' && (
          <div className="bg-white p-6 rounded shadow">
            <h2 className="text-xl font-semibold mb-4">Customer Leads ({leads.length})</h2>
            <div className="space-y-4">
              {leads.map((lead) => (
                <div
                  key={lead._id}
                  className="border p-4 rounded shadow-sm bg-gray-50 flex justify-between items-start"
                >
                  <div>
                    <p className="font-semibold text-lg text-primary">{lead.name}</p>
                    <p className="text-sm text-gray-600">Phone: {lead.phone}</p>
                    {lead.email && <p className="text-sm text-gray-600">Email: {lead.email}</p>}
                    {lead.productOfInterest && (
                      <p className="text-sm text-gray-600">Interest: {lead.productOfInterest}</p>
                    )}
                    <p className="text-xs text-gray-500 mt-1">
                      Source: {lead.type === 'popup' ? 'Popup Form' : 'Estimate Page'} •{' '}
                      {lead.createdAt
                        ? new Date(lead.createdAt).toLocaleString()
                        : 'Time Unknown'}
                    </p>
                  </div>

                  <button
                    onClick={() => deleteLead(lead._id)}
                    className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Admin;

